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
    name = params[:name]
    dob = params[:dob]
    mom_name = params[:mom_name]
    dad_name = params[:dad_name]
    birthplace = params[:birthplace]
    length = params[:length]
    weight = params[:weight]
    kid = Kid.create(name: name, dob: dob, mom_name: mom_name, dad_name: dad_name, birthplace: birthplace, length: length, weight: weight)
    render json: kid
  end
end
