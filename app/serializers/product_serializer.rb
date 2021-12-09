class ProductSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :details, :price, :name, :likes_count

  def likes_count
    object.likes.count
  end
end