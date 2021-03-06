require 'pry'

class Api::MembersController < ApplicationController 

  before_action :find_member, only: [:show, :update, :destroy]

  def index 
    @members = Member.all
    render json: @members, status: 200
  end

  def create 
    member = Member.new(member_params)
    if member.save 
      render json: member, status:201
    else 
      render json: { message: member.errors }, status: 400
    end 
  end

  def show 
    render json: @member
  end

  def update 
    if @member.update(member_params)
      render json: @member
    else 
      render json: { message: @member.errors }, status: 400
    end
  end

  def destroy 
    if @member.destroy
      render status: 204
    else 
      render json: { message: "Unable to remove this member" }, status: 400
    end 
  end

  private 

    def find_member
      @member = Member.find_by(id: params[:id])
    end

    def member_params
      params.require(:member).permit(:name, :age, :img_url, :motto, :likes)
    end

end