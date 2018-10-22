class Restaurant < ApplicationRecord
  has_many :reviews


  def total_rate
    total_rate = 0
    count = 0

    reviews.all.each do |r|
      total_rate += r.rate
      count += 1
    end

    total_rate /= count.to_f
    total_rate
  end

  def set_rating
    update(rating: total_rate)
  end

end
