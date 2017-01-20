Rails.application.routes.draw do
  root 'quizzes#index'

  namespace :teacher do
    resources :quizzes
    resources :questions
  end

  resources :quizzes do
    member do
      get :check_answers
    end
  end
  resources :questions do
    member do
      post :answer
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
