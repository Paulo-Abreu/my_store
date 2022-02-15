# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'home#index'
  resources :products
  resources :payments
  resources :users
  get '/products/:id/buy', to: 'payments#checkout'
  get '/stocks', to: 'stocks#index'
  get '/stocks/add/:id', to: 'stocks#edit'
  get '/stocks/remove/:id', to: 'stocks#remove'

  namespace :api do
    namespace :v1 do
      resources :products
      resources :likes
      resources :stocks
      patch '/stocks/:id/remove', to: 'stocks#remove'
      post '/stocks/:id/payment', to: 'stocks#payment'
    end
  end
end
