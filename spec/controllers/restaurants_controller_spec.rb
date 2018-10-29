require 'rails_helper'

describe RestaurantsController do

  describe '#create' do

    let(:params) do
      {
        name: 'fu sushi',
        cuisine: 'asian',
        tenbis: true,
        address: 'Yermiahu st, Tel aviv',
        delivery_time: 20
      }
    end

    context 'when payload is valid' do
      it 'should return 200 OK' do
        post :create, params: params
        expect(response.status).to eq(:ok)
      end
    end

    context 'when payload is invalid' do
      it 'should return 500 Internal server error' do
        params.each do |key, _value|
          invalid_params = params.except(key)
          post :create, params: invalid_params
          expect(response.status).to eq(:internal_server_error)
        end
      end
    end

  end

end
