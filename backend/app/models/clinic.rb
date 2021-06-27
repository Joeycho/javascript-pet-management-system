class Clinic < ApplicationRecord
    has_many :pets
    has_many :owners, through: :pets
end
