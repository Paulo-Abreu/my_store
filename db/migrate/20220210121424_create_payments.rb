class CreatePayments < ActiveRecord::Migration[6.1]
  def change
    create_table :payments do |t|
      t.references :user, null: false, foreign_key: true
      t.references :stock_item, null: false, foreign_key: true

      t.timestamps
    end
  end
end
