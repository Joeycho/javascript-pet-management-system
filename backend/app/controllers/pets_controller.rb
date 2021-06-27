class PetsController < ApplicationController
    before_action :set_pet, only: [:show, :edit, :update, :destroy]

    def create
        @pet = Pet.new(pet_params)
        @pet.save
        redirect_to pet_path(@pet)
      end

    
    def show
        render json: PetSerializer.new(@pet)
    end

    def index
        pets = Pet.all
        render json: PetSerializer.new(pets)
    end

    def update
        @pet.update(pet_params)
    end
     
    def destroy
        @pet.destroy
    end

    private
    # Use callbacks to share common setup or constraints between actions.
        def set_pet
        @pet = Pet.find(params[:id])
        end
    
        # Never trust parameters from the scary internet, only allow the white list through.
        def pet_params
        params.require(:pet).permit(:name, :breed, :desc, :owner_id, :clinic_id)
        end
end
