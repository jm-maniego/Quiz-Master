class QuizMaster.Routers.Quizzes extends Backbone.Router
  routes:
    '': 'index'

  index: ->
    quizzes_collection = new QuizMaster.Collections.Quizzes()
    quiz_view = new QuizMaster.Views.QuizzesIndex(collection: quizzes_collection)
    quizzes_collection.fetch(
      success: ->
        $('#main').html(quiz_view.render().el)
        )
