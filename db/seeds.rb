# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Quiz.create!([{name: "Quiz1"}, {name: "Quiz2"}, {name: "Quiz3"}])
quiz1 = Quiz.first
Question.create!([
  {text: "Oneplus 1", correct_answer: "2"},
  {text: "Oneplus 2", correct_answer: "3"},
  {text: "Oneplus 3", correct_answer: "4"}
  ]) do |question|
  question.quiz = quiz1
end