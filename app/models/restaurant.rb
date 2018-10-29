class Restaurant < ApplicationRecord
  has_many :reviews
  validates_presence_of :name, :cuisine, :tenbis, :address, :delivery_time
  validates :delivery_time, numericality: { greater_than: 0, less_than_or_equal_to: 180 }
  validates_inclusion_of :tenbis, in: [true, false]
  # validate :tenbis, inclusion: { in: [true, false] }

  def total_rate
    total_rate = reviews.empty? ? 0 : reviews.average(:rate)
    total_rate.round(2)
  end

  def set_rating!
    update!(rating: total_rate)
  end

end
