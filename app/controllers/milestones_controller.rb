class MilestonesController < ApplicationController

  def create
    milestone = Milestone.create(name: params[:data][:name], description: params[:data][:description])
    render json: milestone
  end

end
