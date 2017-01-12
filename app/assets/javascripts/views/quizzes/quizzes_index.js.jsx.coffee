class QuizMaster.Views.QuizzesIndex extends QuizMaster.Views.BaseView
  component: ->
    quizzes = @collection
    `<QuizScreen collection={quizzes}/>`