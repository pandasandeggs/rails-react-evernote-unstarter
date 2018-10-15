class ApplicationController < ActionController::API
  before_action :check_auth

  def encode_token(payload)
    # payload => { beef: 'steak' }
    JWT.encode(payload, 'app_wide_secret')
    # jwt string: "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.Ihz3pPQ4stfX7A9KTHsRB0FxFo_U8pZjRTMrAh53YYQ"
  end

  def auth_header
    # { 'Authorization': 'Bearer <token>' }
    request.headers['Authorization']
  end

  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]
      # headers: { 'Authorization': 'Bearer <token>' }
      begin
        JWT.decode(token, 'app_wide_secret', true, algorithm: 'HS256')[0]
        # JWT.decode => [{ "beef"=>"steak" }, { "alg"=>"HS256" }]
      rescue JWT::DecodeError
        nil
      end
    end
  end

  def current_user
    if decoded_token
      username = decoded_token['user_id']
      User.find_by(id: user_id)
    end
  end

  def logged_in?
    !!current_user
  end

  def check_auth
    render json: {
      message: 'Please log in',
      }, status: 401 if !logged_in?
  end

end
