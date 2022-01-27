class   StockController < ApplicationController
  before_action :view_product, only: %i[ show edit ]
  
  def index
    @products = Product.all
    @props = {
      data: {
        products: @products,
        user:user_info,
      },
      component: {
        name: 'stock',
      }
    }
  end
end