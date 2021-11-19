class ProductsController < ApplicationController
  before_action :view_product, only: %i[ show edit ]
  def index
    @products = Product.all
      @props = {
        data: {
          products: @products
        },
        component: {
          name: 'products_list',
        }
      }
  end

  def new
    @props = {
      data: {
        product: @product
      },
      component: {
        name: 'products_form',
      }
    }
  end

  private

  def product_params
    params.require(:product).permit(:name, :price, :details)
  end
  
  def view_product
    @product = Product.find(params[:id])
  end
end