class ReviewsController < ApplicationController

  protect_from_forgery with: :null_session

  # get all reviews for a restaurant by calling GET /restaurant/rest_id/review
  def index
    @reviews = Review.where(restaurant_id: params[:restaurant_id])
    render json: {
        status: 200,
        reviews: @reviews
    }.to_json
  end

  # add a review to specific restaurant by calling POST /restaurant/rest_id/review
  def create

    restaurant = Restaurant.find(params[:restaurant_id])
    review = restaurant.reviews.new(review_params)

    if review.save! *********
      render json: {
          status: 200,
          restaurant: params[:restaurant_id],
          review: review
      }.to_json
    end

    restaurant.set_rating
  end


  private

  def review_params
    params.require(:review_params).permit(:name, :description, :rate)
  end

end
