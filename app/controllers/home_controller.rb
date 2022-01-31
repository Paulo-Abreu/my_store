class HomeController < ApplicationController
  def index
    @props = {
      component: {
        name: 'home'
      },
      data:{
        user: current_user,
      }
    }
  end
end