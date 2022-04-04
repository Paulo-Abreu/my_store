# frozen_string_literal: true

class StockItem < ApplicationRecord
  belongs_to :product
  validates :quantity, presence: true
  validates :quantity, numericality: { greater_than_or_equal_to: 0}
end
