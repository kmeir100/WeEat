class RestaurantsController < ApplicationController

  protect_from_forgery with: :null_session

  def new
    @restaurant = Restaurant.new
  end

  def index
    restaurants = Restaurant.all
    render json: {
      status: 200,
      restaurants: restaurants
    }.to_json
  end

  def create
    restaurant = Restaurant.new(restaurant_params)
    begin
      restaurant.save!
      render json: {
        status: 200,
        message: 'The restaurant was added successfully :)'
      }.to_json
    rescue StandardError => e
      render json: {
        status: 500,
        message: 'Failed to add a restaurant. Try again :('
      }.to_json
    end
  end

  private

  def restaurant_params
    params.require(:restaurant_params).permit(:name, :cuisine, :tenbis, :address, :delivery_time)
  end


end
