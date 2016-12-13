require 'pry'
class KidsController < ApplicationController
  def index
    kids = Kid.where(user_id: current_user.id)
    render json: kids
  end

  def show
    kid = Kid.find(params[:id])
    render json: kid
  end
end
