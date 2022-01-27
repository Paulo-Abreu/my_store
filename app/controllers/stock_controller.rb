class StockController < ApplicationController
  before_action :view_product, only: %i[ show edit ]
  
  def index
    @products = Product.all
    @props = {
      data: {
        products: map_to_json(@products),
        user:current_user,
      },
      component: {
        name: 'stock',
      }
    }
  end

  private
  def map_to_json(product)
    {
      id: product.id, name: product.name, quantity: product.quantity
    }
  end
end