json.partial! "quiz", quiz: @quiz
json.questions @quiz.questions, :id, :text, :correct_answer, :created_at