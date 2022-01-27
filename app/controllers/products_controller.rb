class ProductsController < ApplicationController
  before_action :view_product, only: %i[ show edit ]
  
  def index
    @products = Product.all
    @products = @products.map { |r| ActiveModel::SerializableResource.new(r) }      
    @props = {
      data: {
        products: @products,
        user:user_info,
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

  def show
    @product = map_to_json(@product)
    @props = {
      data: {
        product: @product,
        user:user_info,
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