require 'rails_helper'

describe Restaurant do

  subject { described_class.new }

  describe '#total_rate' do

    context 'when adding reviews to restaurant ' do

      let!(:restaurant) {FactoryBot.create(:restaurant)}

      it 'should calculate the rating correctly' do
        (1..5).to_a.each do |i|
          FactoryBot.create(:review, rate: i, restaurant: restaurant)
        end
        expect(restaurant.rating).to eq(3.0)
      end
    end

    context 'when set rating raises an error' do

      let!(:restaurant) { FactoryBot.create(:restaurant) }

      before do
        allow(restaurant).to receive(:set_rating!).and_raise('error')
      end
      it 'should not save review to db' do
        begin
          review = FactoryBot.create(:review, restaurant: restaurant)
        rescue StandardError => e
          expect(Review.all.size).to eq(0)
        end
      end
    end

    context 'when the delivery_time is not valid' do
      it 'should not be a valid restaurant' do
        rest = Restaurant.new
        rest.name = 'aaa'
        rest.tenbis = true
        rest.address = 'aaaa'
        rest.cuisine = 'aaa'
        rest.delivery_time = 'aa'
        expect(rest).to_not be_valid
      end
    end

  end
end
