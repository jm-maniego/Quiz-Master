class QuizMaster.Views.QuizzesIndex extends QuizMaster.Views.BaseView
  component: ->
    quizzes = @collection
    `<QuizzesScreen collection={quizzes}/>`