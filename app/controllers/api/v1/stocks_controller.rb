# frozen_string_literal: true

module Api
  module V1
    # Controller to manage the stock, add and remove items.
    class StocksController < Api::BaseController
      before_action :find_stock_item, only: %i[update remove]

      def update
        new_quantity = @stock_item.quantity + stock_item_params[:quantity].to_i
        if @stock_item.update(quantity: new_quantity)
          render json: @stock_item, status: 200
        else
          render json: @stock_item.errors.messages, status: 422
        end
      end

      def remove
        new_quantity = @stock_item.quantity - stock_item_params[:quantity].to_i
        if @stock_item.update(quantity: new_quantity)
          render json: @stock_item, status: 200
        else
          render json: @stock_item.errors.messages, status: 422
        end
      end

      private

      def find_stock_item
        @stock_item = StockItem.find(params[:id])
      end

      def stock_item_params
        params.require(:stock_item).permit(:quantity)
      end
    end
  end
end
