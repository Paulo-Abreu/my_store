# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Product, type: :model do
  it { should have_many(:likes) }
  it { should belong_to(:user) }
end
