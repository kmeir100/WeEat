class Review < ApplicationRecord
  belongs_to :restaurant
  validates_presence_of :name, :rate

  validates_inclusion_of :rate, :in => 1..5

  after_save :set_rating

  private

  def set_rating
    restaurant.set_rating!
  end

end
