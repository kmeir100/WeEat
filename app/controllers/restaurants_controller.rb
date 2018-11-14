
class RestaurantsController < ApplicationController

  def new
    @restaurant = Restaurant.new
  end

  def index
    Restaurant.get_restaurants_from_zomato

    restaurants = Restaurant.all
    render status: 200, json: {
      restaurants: restaurants
    }.to_json
  end

  def create
    begin
      restaurant = Restaurant.new(restaurant_params)
      restaurant.save!
      render status: 200, json: {
        message: 'The restaurant was added successfully :)'
      }.to_json
    rescue StandardError => e
      render status: 500, json: {
        message: 'Failed to add a restaurant. Please try again :('
      }.to_json
    end
  end

  private

  def restaurant_params
    params.require(%i[name cuisine tenbis address delivery_time])
    params.permit(:name, :cuisine, :tenbis, :address, :delivery_time)
  end
end
