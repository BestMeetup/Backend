Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'v1/auth'
  
  devise_for :admins
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
