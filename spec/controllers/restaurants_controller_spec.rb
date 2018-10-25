require 'rails_helper'

describe RestaurantsController do

  describe '.create' do

    let(:params) do
      {
          name: "fu sushi",
          cuisine: "asian",
          tenbis: true,
          address: "yermiahu",
          delivery_time: 20
      }
    end

    context 'when payload is valid' do
      it 'should return success' do
        post :create, params: params
        expect(response.status).to eq(200)
      end
    end

    context 'when payload is invalid' do
      it 'should return failure' do
        params.each do |key, _value|
          invalid_params = params.except(key)
          post :create, params: invalid_params
          expect(response.status).to eq(500)
        end
      end
    end

  end

end
