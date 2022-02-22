require 'rails_helper'

RSpec.describe Api::V1::ProductsController, type: :controller do
  describe 'GET /products' do
    let(:user){create(:user)}
    let!(:product){create(:product, user: user)}
    it 'returns all products' do

      get :index

      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body).size).to eq(1)
    end
  end
  
  describe 'POST /products' do
    let!(:product){create(:product, user: user)}
    let(:user){create(:user)}
    context 'when success' do
      it 'create a new product' do
  
        sign_in user
        post :create, params: { product: {name: product.name, details: product.details, price: product.price}}
        
        expect(response).to have_http_status(:created)
      end
    end

    context 'when error' do
      it 'create a new product' do
          post :create, params: { product: {name: product.name, details: product.details, price: product.price}}
        
        expect(response).to have_http_status(422)
      end
      
    end
  end
end