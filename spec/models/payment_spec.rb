require 'rails_helper'

RSpec.describe Payment, type: :model do
  it { should belong_to(:product) }
  it { should belong_to(:user) }
  it { should belong_to(:stock_item) }
end
