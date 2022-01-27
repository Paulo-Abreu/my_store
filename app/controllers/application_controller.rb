class ApplicationController < ActionController::Base
  before_action :authenticate_user!
  
  def user_info
    {
      user: current_user
    }
  end
end
