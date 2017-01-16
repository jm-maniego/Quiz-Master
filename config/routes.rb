Rails.application.routes.draw do
  root 'quizzes#index'

  namespace :teacher do
    resources :quizzes
    resources :questions
  end

  resources :quizzes
  resources :questions
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
