class Restaurant < ApplicationRecord
  has_many :reviews
  validates_presence_of :name, :cuisine, :tenbis, :address, :delivery_time

  def total_rate
    total_rate = 0
    count = 0

    total_rate = reviews.sum(&:rate)

    total_rate /= reviews.size.to_f
    total_rate.round(2)
  end

  def set_rating!
    update!(rating: total_rate)
  end

end
