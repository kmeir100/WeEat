FactoryBot.define do
  factory :restaurant do

    name { 'blabla' }
    cuisine { 'asian' }
    tenbis { true }
    address { 'king george 12, Tel aviv' }
    delivery_time { 40 }

    factory :restaurant_with_reviews do
      transient do
        dummy_ratings { [] }
      end

      after(:create) do |restaurant, evaluator|
        evaluator.dummy_ratings.each { |r| create(:review, restaurant: restaurant, rate: r) }
      end
    end

  end
end
