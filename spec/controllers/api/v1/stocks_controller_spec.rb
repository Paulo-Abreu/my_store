# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::StocksController, type: :controller do
  describe 'GET /stocks' do
    let(:user) { create(:user) }
    let(:product) { create(:product, user: user) }
    let!(:stock_item) { create(:stock_item, product: product) }

    it 'returns all stocks' do
      get :index
      expect(response).to have_http_status(:success)
      expect(JSON.parse(response.body).size).to eq(1)
    end
  end

  describe 'PATCH /stocks' do
    let(:user) { create(:user) }
    let(:product) { create(:product, user: user) }
    let!(:stock_item) { create(:stock_item, product: product) }

    context 'when success' do
      it 'update a stock_item' do
        patch :update, params: { id: stock_item.id, stock_item: { quantity: stock_item.quantity } }
        stock.reload
        expect(stock_item.quantity).to eq(stock_item.quantity)
        expect(response).to have_http_status(200)
      end
    end

    context 'when error' do
      it 'update a stock_item' do
        patch :update, params: { id: stock_item.id, stock_item: { quantity: stock_item.quantity - 50 } }
        expect(response).to have_http_status(422)
      end
    end
  end
end
