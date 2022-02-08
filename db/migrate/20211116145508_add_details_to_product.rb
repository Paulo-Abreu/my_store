# frozen_string_literal: true

# Add details to product model.
class AddDetailsToProduct < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :details, :string
  end
end
