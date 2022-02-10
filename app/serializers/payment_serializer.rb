# frozen_string_literal: true

# Serializer a Payment, and return the 'attributes' below.
class PaymentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :stock_item_id, :product_id, :item, :price, :quantity

  def item
    object.product
  end
end
