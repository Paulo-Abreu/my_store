# frozen_string_literal: true

# Stock Items table.
class CreateStockItems < ActiveRecord::Migration[6.1]
  def change
    create_table :stock_items do |t|
      t.references :product, null: false, foreign_key: true
      t.integer :quantity, default: 0

      t.timestamps
    end
  end
end
