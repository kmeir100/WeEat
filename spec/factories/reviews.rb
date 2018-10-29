require 'faker'

FactoryBot.define do
  factory :review do

    name { Faker::Name.name }
    description { Faker::Name.name }
    rate { 5 }

    after(:create) do |review|
      review.restaurant.reload
    end

  end

end
