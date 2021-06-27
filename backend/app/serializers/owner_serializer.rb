class OwnerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email
end
