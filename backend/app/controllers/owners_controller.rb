class OwnersController < ApplicationController
    before_action :set_owner, only: [:show, :edit, :update, :destroy]

    def create
        @owner = Owner.new(owner_params)
        @owner.save
        redirect_to owner_path(@owner)
      end

    def show
        render json: OwnerSerializer.new(@owner)
    end

    def index
        owners = Owner.all
        render json: OwnerSerializer.new(owners)
    end

    def update
        @owner.update(owner_params)
    end
     
    def destroy
        @owner.destroy
    end

    private
    # Use callbacks to share common setup or constraints between actions.
        def set_owner
        @owner = Owner.find(params[:id])
        end
    
        # Never trust parameters from the scary internet, only allow the white list through.
        def owner_params
        params.require(:owner).permit(:name, :email)
        end
end
