class KidSerializer < ActiveModel::Serializer
  attributes :id, :name, :dob, :milestones
  has_many :milestones
end
