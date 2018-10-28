class AddFieldsColumnToRestaurant < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :name, :string
    add_column :restaurants, :cuisine, :string
    add_column :restaurants, :rating, :integer
    add_column :restaurants, :tenbis, :boolean
    add_column :restaurants, :address, :string
    add_column :restaurants, :delivery_time, :integer
  end
end
