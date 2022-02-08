# frozen_string_literal: true

class Like < ApplicationRecord
  belongs_to :product
  belongs_to :user
end
