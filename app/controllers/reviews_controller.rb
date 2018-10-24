class ReviewsController < ApplicationController

  protect_from_forgery with: :null_session

  # get all reviews for a restaurant by calling GET /restaurant/rest_id/review
  def index
    reviews = Review.where(restaurant_id: params[:restaurant_id])
    render status: 200, json: {
        reviews: reviews
    }.to_json
  end

  # add a review to specific restaurant by calling POST /restaurant/rest_id/review
  def create

    begin
      restaurant = Restaurant.find(params[:restaurant_id])
      review = restaurant.reviews.new(review_params)

      ActiveRecord::Base.transaction do
        review.save!
        restaurant.set_rating!
      end

      render status: 200, json: {
          message: 'The review was added successfully :)',
      }.to_json
    rescue StandardError => e
      render status: 500, json: {
          message: 'Failed to add a review. Please try again :('
      }.to_json
    end
  end

  private

  def review_params
    params.require(:name)
    params.require(:description)
    params.require(:rate)
    params.permit(:name, :description, :rate)
  end
end
