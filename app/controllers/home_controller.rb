class HomeController < ApplicationController
  def index
    @props = {
      component: {
        name: 'home'
      },
      data:{
        user:user_info,
      }
    }
  end
end