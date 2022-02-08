# frozen_string_literal: true

# Controller to manage the pages about the stock, to edit and list.
class StocksController < ApplicationController
  def index
    @props = {
      data: {
        stock: StockItem.all.map { |r| ActiveModel::SerializableResource.new(r) },
        user: current_user
      },
      component: {
        name: 'stock'
      }
    }
  end

  def edit
    @props = {
      data: {
        stock: StockItem.find(params[:id]),
        user: current_user
      },
      component: {
        name: 'stock_edit'
      }
    }
  end

  def remove
    @props = {
      data: {
        stock: StockItem.find(params[:id]),
        user: current_user
      },
      component: {
        name: 'stock_remove'
      }
    }
  end
end
