# frozen_string_literal: true

# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_31_134954) do

  # These are extensions that must be enabled in order to support this database
  enable_extension 'plpgsql'

  create_table 'controllers', force: :cascade do |t|
    t.string 'email', default: '', null: false
    t.string 'encrypted_password', default: '', null: false
    t.string 'reset_password_token'
    t.datetime 'reset_password_sent_at'
    t.datetime 'remember_created_at'
    t.string 'users'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['email'], name: 'index_controllers_on_email', unique: true
    t.index ['reset_password_token'], name: 'index_controllers_on_reset_password_token', unique: true
  end

  create_table 'likes', force: :cascade do |t|
    t.bigint 'product_id', null: false
    t.bigint 'user_id', null: false
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['product_id'], name: 'index_likes_on_product_id'
    t.index ['user_id'], name: 'index_likes_on_user_id'
  end

  create_table 'products', force: :cascade do |t|
    t.integer 'user_id'
    t.integer 'price'
    t.string 'name'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.string 'details'
    t.integer 'quantity'
  end

  create_table 'sells', force: :cascade do |t|
    t.integer 'salesman_id'
    t.integer 'customer_id'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
  end

  create_table 'stock_items', force: :cascade do |t|
    t.bigint 'product_id', null: false
    t.integer 'quantity', default: 0
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['product_id'], name: 'index_stock_items_on_product_id'
  end

  create_table 'stock_movements', force: :cascade do |t|
    t.bigint 'product_id', null: false
    t.integer 'quantity'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.index ['product_id'], name: 'index_stock_movements_on_product_id'
  end

  create_table 'users', force: :cascade do |t|
    t.string 'email', default: '', null: false
    t.string 'encrypted_password', default: '', null: false
    t.string 'reset_password_token'
    t.datetime 'reset_password_sent_at'
    t.datetime 'remember_created_at'
    t.datetime 'created_at', precision: 6, null: false
    t.datetime 'updated_at', precision: 6, null: false
    t.integer 'user_type'
    t.index ['email'], name: 'index_users_on_email', unique: true
    t.index ['reset_password_token'], name: 'index_users_on_reset_password_token', unique: true
  end

  add_foreign_key 'likes', 'products'
  add_foreign_key 'likes', 'users'
  add_foreign_key 'stock_items', 'products'
  add_foreign_key 'stock_movements', 'products'
end
