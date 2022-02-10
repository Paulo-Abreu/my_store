# frozen_string_literal: true

class Payment < ApplicationRecord
  belongs_to :product
  belongs_to :user
  belongs_to :stock_item
end
