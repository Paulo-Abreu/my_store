class ProductsController < ApplicationController
  before_action :view_product, only: %i[ show edit ]
  
  def index
    @props = {
      data: {
        products: all_products,
        user: current_user,
      },
      component: {
        name: 'products_list',
      }
    }
  end

  def new
    @props = {
      data: {
        product: @product,
        user: current_user,
      },
      component: {
        name: 'products_form',
      }
    }
  end

  def show
    @props = {
      data: {
        product: map_to_json(@product),
        user: current_user,
      },
      component: {
        name: 'show_product',
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

  def map_to_json(product)
    {
      id: product.id, name: product.name, details: product.details, date: product.created_at.strftime("%d/%m/%y %H:%M"), price: product.price
    }
  end
end