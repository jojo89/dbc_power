class SessionsController < ApplicationController
  def create
    p "ss"
    user = User.from_omniauth(env["omniauth.auth"])
    session[:user_id] = user.id
    redirect_to root_url
  end

  def destroy
  	session.clear
  	redirect_to root_path
  end

end
