class AddUpvotesToMilestones < ActiveRecord::Migration[5.0]
  def change
    add_column :milestones, :upvotes, :integer, default: 0
  end
end
