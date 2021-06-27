class ClinicsController < ApplicationController
    before_action :set_clinic, only: [:show, :edit, :update, :destroy]

    def show
        render json: ClinicSerializer.new(@clinic)
    end

    def index
        clinics = Clinic.all
        render json: ClinicSerializer.new(clinics)
    end

    def create
        @clinic = Clinic.new(clinic_params)
        @clinic.save
        redirect_to clinic_path(@clinic)
      end
    def destroy
        @clinic.destroy
    end

    private
    # Use callbacks to share common setup or constraints between actions.
        def set_clinic
        @clinic = Clinic.find(params[:id])
        end
    
        # Never trust parameters from the scary internet, only allow the white list through.
        def clinic_params
        params.require(:clinic).permit(:name, :addr)
        end
end
