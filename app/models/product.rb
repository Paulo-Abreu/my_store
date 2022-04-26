# frozen_string_literal: true

class Product < ApplicationRecord
  belongs_to :user
  has_many :likes
  has_many :payments
end
