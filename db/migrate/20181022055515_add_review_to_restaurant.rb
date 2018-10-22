class AddReviewToRestaurant < ActiveRecord::Migration[5.2]
  def change
    add_reference :reviews, :restaurant, index: true, foreign_key: true
  end
end
