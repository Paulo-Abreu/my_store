# frozen_string_literal: true

module Api
  module V1
    # Controller to manage the stock, add and remove items.
    class StocksController < Api::BaseController
      before_action :find_stock_item, only: %i[update remove payment]
      
      def index
        render json: StockItem.all
      end

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

      def payment
        payment = Payment.new(user: current_user, stock_item_id: stock_item_params[:id], product_id: stock_item_params[:product_id], 
          price: stock_item_params[:price], quantity: stock_item_params[:quantity])
        if payment.save
          new_quantity = @stock_item.quantity - stock_item_params[:quantity].to_i
          @stock_item.update(quantity: new_quantity)
          render json: @stock_item, status: 200
          render json: { message: 'PAGAMENTO EFETUADO' }, status: 200
        else
          render json: { message: 'NAO FOI POSSIVEL EFETUAR O PAGAMENTO' }, status: 422
        end
      end

      private

      def find_stock_item
        @stock_item = StockItem.find(params[:id])
      end

      def stock_item_params
        params.require(:stock_item).permit(:quantity, :id, :product_id, :price)
      end
    end
  end
end
