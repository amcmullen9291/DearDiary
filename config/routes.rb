Rails.application.routes.draw do

  root 'entries#index'

  get 'entries/new'
  get 'entries/create'
  get 'entries/edit'
  get 'entries/update'
  get 'entries/destroy'
  get 'entries/index'
  get 'users/new'
  get 'users/create'
  get 'users/edit'
  get 'users/update'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
