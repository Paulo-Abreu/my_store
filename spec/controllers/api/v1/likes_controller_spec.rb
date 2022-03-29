# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Api::V1::LikesController, type: :controller do
  describe 'POST /likes' do
    let(:user) { create(:user) }
    let!(:product) { create(:product, user: user) }

    context 'when success' do
      it 'create a new like' do
        sign_in user
        post :create, params: { user: user, product_id: product.id }
        expect(response).to have_http_status(201)
      end
    end

    context 'when error' do
      let(:like) { create(:like, product_id: product.id, user: user) }
      it 'already liked' do
        sign_in user
        post :create, params: { product_id: like.product.id }
        expect(response).to have_http_status(422)
      end
    end
  end
end
