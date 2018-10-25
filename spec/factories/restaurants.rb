FactoryBot.define do
  factory :restaurant do

    name { 'blabla' }
    cuisine { 'asian' }
    tenbis { true }
    address { 'king george 12, Tel aviv' }
    delivery_time { 40 }
  end
end