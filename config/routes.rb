Rails.application.routes.draw do
  resources :photos
  resources :posts
  devise_for :users
  root to: 'pages#home'
  post '/photos/', to: 'photos#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
