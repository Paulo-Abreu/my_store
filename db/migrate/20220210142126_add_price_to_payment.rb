class AddPriceToPayment < ActiveRecord::Migration[6.1]
  def change
    add_column :payments, :price, :integer
  end
end
