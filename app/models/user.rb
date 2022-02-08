# frozen_string_literal: true

class User < ApplicationRecord
  has_many :products
  enum user_type: [:customer, :salesman] 
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
