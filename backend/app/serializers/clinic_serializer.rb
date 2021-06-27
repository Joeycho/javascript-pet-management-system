class ClinicSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :addr
end
