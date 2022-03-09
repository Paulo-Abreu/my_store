# frozen_string_literal: true

#Add quantity to payment model.
class AddQuantityToPayment < ActiveRecord::Migration[6.1]
  def change
    add_column :payments, :quantity, :integer
  end
end
