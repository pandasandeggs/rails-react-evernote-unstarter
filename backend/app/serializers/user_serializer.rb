class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :about
  has_many :notes
end
