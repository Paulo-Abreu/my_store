# frozen_string_literal: true

module Api
  module V1
    # Controller to create a product, stock item, and also render the new product.
    class ProductsController < Api::BaseController
      def create
        product = Product.new(product_params)
        product.user = current_user
        if product.save
          StockItem.create(product: product)
          render json: product, status: 201
        else
          render json: product.errors.messages, status: 422
        end
      end

      private

      def product_params
        params.require(:product).permit(:name, :details, :price)
      end
    end
  end
end
