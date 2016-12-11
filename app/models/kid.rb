class Kid < ApplicationRecord
  has_many :milestones
  belongs_to :user 
end
