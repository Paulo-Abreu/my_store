class CreateSells < ActiveRecord::Migration[6.1]
  def change
    create_table :sells do |t|
      t.integer :salesman_id
      t.integer :customer_id

      t.timestamps
    end
  end
end
