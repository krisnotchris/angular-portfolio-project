class KidSerializer < ActiveModel::Serializer
  attributes :id, :name, :dob, :milestones, :mom_name, :dad_name, :birthplace, :length, :weight
  has_many :milestones
end
