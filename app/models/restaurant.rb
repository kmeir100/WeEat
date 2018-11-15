class Restaurant < ApplicationRecord

  require 'net/http'
  require 'json'


  has_many :reviews
  validates_presence_of :name, :cuisine, :address, :delivery_time
  validates :delivery_time, numericality: { greater_than: 0, less_than_or_equal_to: 180 }
  validates_inclusion_of :tenbis, in: [true, false]

  def total_rate
    total_rate = reviews.empty? ? 0 : reviews.average(:rate)
    total_rate.round(2)
  end

  def set_rating!
    update!(rating: total_rate)
  end


  def self.retrieve_restaurants_from_zoomato

    uri = URI.parse('https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city')
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE # You should use VERIFY_PEER in production
    request = Net::HTTP::Get.new(uri.request_uri)
    request['user-key'] = '26e442c3bc4472de67b4c5e33beb28be'

    begin
      res = http.request(request)
      hash = JSON.parse(res.body)

      hash['restaurants'].each do |child|

        zoomato_id = child['restaurant']['id']
        name = child['restaurant']['name']
        cuisine = child['restaurant']['cuisines']
        rating = child['restaurant']['user_rating']['aggregate_rating'].to_d
        tenbis = false
        address = child['restaurant']['location']['address']
        delivery_time = 30
        lat = child['restaurant']['location']['latitude']
        long = child['restaurant']['location']['longitude']

        Restaurant.where(zoomato_id: child['restaurant']['id']).
          first_or_create(zoomato_id: zoomato_id,
                          name: name,
                          cuisine: cuisine,
                          rating: rating,
                          tenbis: tenbis,
                          address: address,
                          delivery_time: delivery_time,
                          lat: lat,
                          long: long)
          .update(zoomato_id: zoomato_id,
                  name: name,
                  cuisine: cuisine,
                  rating: rating,
                  tenbis: tenbis,
                  address: address,
                  delivery_time: delivery_time,
                  lat: lat,
                  long: long)
      end

    rescue StandardError, JSON::ParserError => e
      console.log(e)
    end
  end

end
