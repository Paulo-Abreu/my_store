class SalesController < ApplicationController
  before_action :view_product, only: %i[ index ]
  def index
    @props = {
      data: {
        products: @product
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