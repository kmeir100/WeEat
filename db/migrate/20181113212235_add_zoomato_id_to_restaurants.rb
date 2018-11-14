class AddZoomatoIdToRestaurants < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :zoomato_id, :integer, unique: true
  end
end
