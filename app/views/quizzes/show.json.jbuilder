json.partial! "quizzes/quiz", quiz: @quiz
json.questions @quiz.questions, :id, :text, :created_at, :updated_at