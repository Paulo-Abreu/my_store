# frozen_string_literal: true

module Api
  module V1
    # Controller to create a like, and atributte to a product.
    class LikesController < Api::BaseController
      before_action :find_like, only: %i[create]

      def create
        like = Like.new(user: current_user, product_id: @product.id)
        if already_liked?
          render json: { message: 'NÃO É POSSIVEL DAR MAIS DE UM LIKE' }, status: 422
        else
          like = @product.likes.create(user: current_user)
        end
      end

      private

      def already_liked?
        Like.where(user: current_user, product_id: params[:product_id]).exists?
      end

      def find_product
        @product = Product.find(params[:product_id])
      end
    end
  end
end
