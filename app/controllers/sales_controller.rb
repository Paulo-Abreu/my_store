class SalesController < ApplicationController
  before_action :view_product, only: %i[ checkout ]

  def checkout
    @props = {
      data: {
        products: @product,
        user:user_info,
      },
      component: {
        name: 'checkout_page',
      }
    }
  end

  private

  def view_product
    @product = Product.find(params[:id])
  end

end