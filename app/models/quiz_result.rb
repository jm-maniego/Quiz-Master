class QuizResult
  def initialize(quiz)
    @quiz = quiz
  end

  def as_json(options={})
    questions = @quiz.questions
    {
      id: @quiz.id,
      questions: @quiz.questions.map do |question|
        {
          id: question.id,
          text: question.text,
          correct: question.check_answer
        }
      end
    }
  end
end