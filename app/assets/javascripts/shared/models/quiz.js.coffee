class QuizMaster.Models.Quiz extends Backbone.Model
  urlRoot: "/quizzes"
  check_answers: ->
    @fetch({url: "/quizzes/#{@get('id')}/check_answers"})