json.extract! question, :id, :text, :correct_answer, :created_at, :updated_at
json.url question_url(question, format: :json)