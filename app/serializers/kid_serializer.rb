class KidSerializer < ActiveModel::Serializer
  attributes :id, :name, :dob, :milestones
end
