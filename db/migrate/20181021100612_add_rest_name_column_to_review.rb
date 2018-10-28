class AddRestNameColumnToReview < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :rest_name, :string
  end
end
