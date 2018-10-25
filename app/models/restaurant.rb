class Restaurant < ApplicationRecord
  has_many :reviews
  validates_presence_of :name, :cuisine, :tenbis, :address, :delivery_time

  validates_numericality_of :delivery_time
  validates_inclusion_of :tenbis, in: [true, false]

  def total_rate
    return 0 if reviews.empty?
    total_rate = reviews.sum(&:rate) / reviews.size.to_f
    total_rate.round(2)
  end

  def set_rating!
    update!(rating: total_rate)
  end

end
