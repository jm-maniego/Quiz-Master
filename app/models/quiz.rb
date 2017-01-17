class Quiz < ApplicationRecord
  has_many :questions, inverse_of: :quiz, dependent: :destroy
end
