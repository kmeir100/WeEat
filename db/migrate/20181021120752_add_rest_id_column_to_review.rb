class AddRestIdColumnToReview < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :rest_id, :integer
  end
end
