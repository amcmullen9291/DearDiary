class UsersController < ApplicationController
  before_action :set_user, only: [:edit, :update ]
  def new
    user = User.new
  end

  def create
    user = User.new(user_params)
    user.save
    render json: UsersSerializer.new(user)
  end

  def edit
    @user = User.find_by(params([:id])
    render json: UsersSerializer.new(@user)

  end

  def update
    @user.update(user_params)
    render json: UsersSerializer.new(@user)
  end

  private 
  def set_user 
    @user = User.find_by(params[:id])
  end

  def user_params
    permit(:entry).permit(:title, :date, :content)
  end

end
