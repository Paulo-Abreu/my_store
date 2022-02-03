class StockItemSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :quantity, :item, :product_id, :id

  def item
    object.product
  end
end