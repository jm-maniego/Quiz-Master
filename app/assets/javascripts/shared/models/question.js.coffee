class QuizMaster.Models.Question extends Backbone.Model
  answer: (answer) ->
    @save({answer: answer}, {url: "/questions/#{@get('id')}/answer", method: "POST"})