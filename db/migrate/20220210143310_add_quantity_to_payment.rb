class AddQuantityToPayment < ActiveRecord::Migration[6.1]
  def change
    add_column :payments, :quantity, :integer
  end
end
