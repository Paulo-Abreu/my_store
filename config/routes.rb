Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to:'home#index'
  resources :products

  get '/products/:id/buy', to: 'sales#checkout'
  get '/stocks', to: 'stocks#index'

  namespace :api do
    namespace :v1 do
      resources :products
      resources :likes
    end
  end
end
