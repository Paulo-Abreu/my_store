# frozen_string_literal: true

# Add user_type to user model.
class AddUserTypeToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :user_type, :integer, default: 0
  end
end
