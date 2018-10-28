class RemoveRestNameColumnFromReview < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :rest_name, :string
  end
end
