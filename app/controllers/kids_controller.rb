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

  def new
  end

  def create
    user = current_user.id
    kid = Kid.create(name: params[:data][:name], dob: params[:data][:dob], mom_name: params[:data][:mom_name], dad_name: params[:data][:dad_name], birthplace: params[:data][:birthplace], length: params[:data][:length], weight: params[:data][:weight], user_id: user)
    render json: kid
  end


end
