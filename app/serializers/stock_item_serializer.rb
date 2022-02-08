# frozen_string_literal: true

# Serialize a Stock Item and return the 'attributes' below.
class StockItemSerializer < ActiveModel::Serializer
  attributes :quantity, :item, :product_id, :id

  def item
    object.product
  end
end
