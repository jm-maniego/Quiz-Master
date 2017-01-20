class Question < ApplicationRecord
  belongs_to :quiz, inverse_of: :questions
  # should be has_many but, current implementation does not have users
  has_one :answer, inverse_of: :question, dependent: :destroy

  validates :text, :correct_answer, presence: true

  accepts_nested_attributes_for :answer

  def check_answer
    answer = self.answer.text.downcase
    correct_answer = self.correct_answer.downcase
    [answer, answer.to_i.to_words].include?(correct_answer) ||
      [correct_answer, correct_answer.to_i.to_words].include?(answer)
  end
end