# frozen_string_literal: true

# Application controller, here we've a method, to map the products.
class ApplicationController < ActionController::Base
  before_action :authenticate_user!

  def all_products
    Product.all.map { |r| ActiveModel::SerializableResource.new(r) }
  end
end
