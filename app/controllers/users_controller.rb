# frozen_string_literal: true

# Controller to manage the pages about the stock, to edit and list.
class UsersController < ApplicationController
  before_action :view_user, only: %i[show]
  def index
    @props = {
      data: {
        users: User.all,
        user: current_user
      },
      component: {
        name: 'users'
      }
    }
  end

  def show
    @props = {
      data: {
        products: Product.where(user_id: params[:id]),
        user: current_user
      },
      component: {
        name: 'user_show'
      }
    }
  end

  private
  def view_user
    @user = (params[:id]) 
  end  
end 
