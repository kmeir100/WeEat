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


  def self.get_restaurants_from_zomato

    uri = URI.parse('https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city')
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE # You should use VERIFY_PEER in production
    request = Net::HTTP::Get.new(uri.request_uri)
    request['user-key'] = '26e442c3bc4472de67b4c5e33beb28be'

    res = http.request(request)

    hash = JSON.parse(res.body)

    hash['restaurants'].each do |child|
      # puts child['restaurant']['id']
      # puts child['restaurant']['name']
      # puts child['restaurant']['location']['address']
      # puts child['restaurant']['location']['latitude']
      # puts child['restaurant']['location']['longitude']
      # puts 'cuisine= ' + child['restaurant']['cuisines']
      # rating = child['restaurant']['user_rating']['aggregate_rating']
      # ratingNumber = rating.to_d
      # puts '----'

      Restaurant.where(zoomato_id: child['restaurant']['id']).
          first_or_create(:zoomato_id=> child['restaurant']['id'],
                        :name=> child['restaurant']['name'],
                        :cuisine=> child['restaurant']['cuisines'],
                        :rating=> child['restaurant']['user_rating']['aggregate_rating'].to_d,
                        :tenbis=> false,
                        :address=> child['restaurant']['location']['address'],
                        :delivery_time=> 30,
                        ).
          update(:zoomato_id=> child['restaurant']['id'],
                        :name=> child['restaurant']['name'],
                        :cuisine=> child['restaurant']['cuisines'],
                        :rating=> child['restaurant']['user_rating']['aggregate_rating'].to_d,
                        :tenbis=> false,
                        :address=> child['restaurant']['location']['address'],
                        :delivery_time=> 30,)
    end

    #puts res.body

  end

end
