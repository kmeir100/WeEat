class AddFieldsColumnToReview < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :name, :string
    add_column :reviews, :description, :string
    add_column :reviews, :rate, :integer
  end
end
