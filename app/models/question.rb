class Question < ApplicationRecord
  belongs_to :quiz, inverse_of: :questions
end
