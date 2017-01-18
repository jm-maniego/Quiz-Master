class Question < ApplicationRecord
  belongs_to :quiz, inverse_of: :questions

  validates :text, :correct_answer, presence: true
end
