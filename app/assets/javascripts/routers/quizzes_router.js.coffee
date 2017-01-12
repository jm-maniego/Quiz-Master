class QuizMaster.Routers.Quizzes extends Backbone.Router
  routes:
    '': 'index'
    'quizzes/:id': 'show'

  index: ->
    quizzes_collection = new QuizMaster.Collections.Quizzes()
    view = new QuizMaster.Views.QuizzesIndex(collection: quizzes_collection)
    quizzes_collection.fetch(
      success: ->
        $('#main').html(view.render().el)
        )

  show: (id) ->
    quiz = new QuizMaster.Models.Quiz(id: id)
    view = new QuizMaster.Views.QuizShow(model: quiz)
    quiz.fetch(
      success: ->
        $('#main').html(view.render().el)
        )
