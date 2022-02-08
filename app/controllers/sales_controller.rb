# frozen_string_literal: true

# Controller to manage the pages about sales.
class SalesController < ApplicationController
  def checkout
    @props = {
      data: {
      stock: StockItem.all.map { |r| ActiveModel::SerializableResource.new(r) },
        user: current_user
      },
      component: {
        name: 'checkout_page'
      }
    }
  end
end
