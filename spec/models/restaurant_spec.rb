require 'rails_helper'

describe Restaurant do

  subject {described_class.new}

  describe '#total_rate' do

    context 'when adding reviews to restaurant ' do

      let!(:restaurant_with_reviews) { FactoryBot.create(:restaurant_with_reviews, dummy_ratings: (1..5).to_a) }

      it 'Should return average rating' do
        expect(restaurant_with_reviews.rating).to eql(3.0)
      end
    end

    context 'when set rating raises an error' do

      let!(:restaurant) {FactoryBot.create(:restaurant)}

      before do
        allow(restaurant).to receive(:set_rating!).and_raise('error')
      end

      it 'should not save review to db' do
        begin
          FactoryBot.create(:review, restaurant: restaurant)
        rescue StandardError => e
          expect(Review.all.size).to eq(0)
        end
      end
    end

    it 'should test delivery time (1-180)' do
      rest = FactoryBot.build(:restaurant, delivery_time: 'aa')
      expect(rest).to_not be_valid

      rest.delivery_time = 0
      expect(rest).to_not be_valid

      rest.delivery_time = 1
      expect(rest).to be_valid

      rest.delivery_time = 180
      expect(rest).to be_valid

      rest.delivery_time = 181
      expect(rest).to_not be_valid
    end

  end
end
