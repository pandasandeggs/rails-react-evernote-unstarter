class Api::V1::UsersController < ApplicationController
  skip_before_action :check_auth, only: [:create]

  def profile
    render json: {
      user: UserSerializer.new(current_user)
    }, status: 202
  end

  def create
    @user = User.create(user_params)
    if @user.valid?
      render json: {
        user: UserSerializer.new(@user),
        jwt: encode_token({ user_id: @user.id })
        },
        status: 201
    else
      render json: { error: 'failed to create user' }, status: 406
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :about)
  end

end
