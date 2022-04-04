# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  it do
  should define_enum_for(:user_type)
    .with_values([%i[customer], %i[salesman]])
  end
  it { should have_many(:products) }
end
