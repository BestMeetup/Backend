class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  protect_from_forgery with: :null_session
  
  before_filter :cors_preflight_check
  after_filter :cors_set_access_control_headers

  def cors_set_access_control_headers
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, DELETE, OPTIONS'
    headers['Access-Control-Expose-Headers'] = 'access-token, expiry, token-type, uid, client'
    headers['Access-Control-Max-Age'] = '1728000'
  end

  def cors_preflight_check
    if request.method == 'OPTIONS'
      headers['Access-Control-Allow-Origin'] = '*'
      headers['Access-Control-Allow-Methods'] = 'POST, GET, PUT, DELETE, OPTIONS'
      headers['Access-Control-Max-Age'] = '1728000'

      render :text => '', :content_type => 'text/plain'
    end
  end
end
