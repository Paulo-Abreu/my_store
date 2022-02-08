# frozen_string_literal: true

# Serializer a product, and return the 'attributes' below.
class ProductSerializer < ActiveModel::Serializer
  attributes :id, :details, :price, :name, :likes_count

  def likes_count
    object.likes.count
  end
end
