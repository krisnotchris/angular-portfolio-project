class MilestonesController < ApplicationController
  before_action :authenticate_user!
  def create
    milestone = Milestone.create(name: params[:data][:name], description: params[:data][:description], kid_id: params[:data][:kid_id])
    render json: milestone
  end

  def update
    milestone = Milestone.find(params[:id])
    milestone.update(name: params[:name], description: params[:description])
    render json: milestone
  end

end
