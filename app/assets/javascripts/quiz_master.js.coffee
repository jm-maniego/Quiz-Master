window.QuizMaster =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}
  initialize: ->
    new QuizMaster.Routers.Quizzes()
    Backbone.history.start(pushState: true)

$(document).ready ->
  QuizMaster.initialize()
