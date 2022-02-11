# frozen_string_literal: true

# Controller to manage the pages about sales.
class PaymentsController < ApplicationController
  before_action :view_sale, only: %i[show]

  def checkout
    @props = {
      data: {
        stock: StockItem.all.map { |r| ActiveModel::SerializableResource.new(r) },
        user: current_user
      },
      component: {
        name: 'checkout_page'
      }
    }
  end

  def index
    @payment = Payment.where(user_id: current_user)
    @props = {
      data: {
        stock: @payment.map { |r| ActiveModel::SerializableResource.new(r) },
        user: current_user
      },
      component: {
        name: 'payment_page'
      }
    }
  end


  def show
    @props = {
      data: {
        stock: ActiveModel::SerializableResource.new(@pay),
        user: current_user
      },
      component: {
        name: 'view_sale'
      }
    }
  end
  
  private

  def view_sale
    @pay = Payment.find(params[:id])
  end
end
