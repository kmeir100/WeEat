class RestaurantsController < ApplicationController

  protect_from_forgery with: :null_session

  def new
    @restaurant = Restaurant.new
  end

  #get all restaurant by calling GET /restaurant
  def index
    restaurants = Restaurant.all
    render json: {
        status: 200,
        restaurants: restaurants
    }.to_json
  end

  #add new restaurant by calling POST /restaurant
  def create
    restaurant = Restaurant.new(restaurant_params)
    begin
      restaurant.save!
      render json: {
          status: 200,
          message: 'The restaurant added successfully :)'
      }.to_json
    rescue => e
      render json: {
          status: 500,
          message: 'Failed to add the restaurant. Try again :('
      }.to_json
    end
  end

  private

  def restaurant_params
    params.require(:restaurant_params).permit(:name, :cuisine, :tenbis, :address, :delivery_time)
  end


end
