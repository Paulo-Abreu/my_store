# frozen_string_literal: true

# Controller to manage the pages about sales.
class SalesController < ApplicationController
  before_action :view_product, only: %i[checkout]

  def checkout
    @props = {
      data: {
        product: @product,
        user: current_user
      },
      component: {
        name: 'checkout_page'
      }
    }
  end

  private

  def view_product
    @product = Product.find(params[:id])
  end
end
