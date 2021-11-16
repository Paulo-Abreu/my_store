class HomeController < ApplicationController
  def index
    @props = {
      component: {
        name: 'home'
      }
    }
  end
end