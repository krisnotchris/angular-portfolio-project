class MilestonesController < ApplicationController
  def create
    kid = current_user.id
    milestone = Milestone.create(name: params[:data][:name], description: params[:data][:description], kid_id: kid)
    render json: kid
  end
end
