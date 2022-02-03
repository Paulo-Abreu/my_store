class StockItem < ApplicationRecord
  belongs_to :product
  has_many :stock_movements, through: :product
end
