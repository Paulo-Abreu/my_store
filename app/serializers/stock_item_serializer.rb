class StockItemSerializer < ActiveModel::Serializer
  attributes :quantity, :item, :product_id, :id

  def item
    object.product
  end
end