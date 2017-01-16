class QuizMaster.Views.QuizShow extends QuizMaster.Views.BaseView
  component: ->
    quiz = @model
    `<QuizScreen model={quiz} />`