class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  
  def products_all(prod)
    prod = Product.all
    products = prod.map { |r| ActiveModel::SerializableResource.new(r) }      
    products
  end
end
