# frozen_string_literal: true

# Add quantity to product model.
class AddQuantityToProduct < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :quantity, :integer
  end
end
