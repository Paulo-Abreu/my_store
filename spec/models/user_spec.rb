# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  it do
  should define_enum_for(:user_type)
    .with_values([:customer, :salesman])
  end
  it { should have_many(:products) }
    it { should have_many(:payments) }

end
