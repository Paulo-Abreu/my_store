# frozen_string_literal: true

# Controller to the home page.
class HomeController < ApplicationController
  def index
    @props = {
      component: {
        name: 'home'
      },
      data: {
        user: current_user
      }
    }
  end
end
