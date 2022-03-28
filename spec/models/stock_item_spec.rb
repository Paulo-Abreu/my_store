# frozen_string_literal: true

require 'rails_helper'

RSpec.describe StockItem, type: :model do
  it { should belong_to(:product) }
  it { is_expected.to validate_presence_of :quantity }
  it { should validate_numericality_of(:quantity).is_greater_than_or_equal_to(0) }
end
