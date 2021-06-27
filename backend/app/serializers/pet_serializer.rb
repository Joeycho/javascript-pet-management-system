class PetSerializer
  include FastJsonapi::ObjectSerializer
  attributes :clinic,:owner,:name,:breed,:desc
end
