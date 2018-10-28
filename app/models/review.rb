class Review < ApplicationRecord
  belongs_to :restaurant
  validates_presence_of :name, :rate

end
