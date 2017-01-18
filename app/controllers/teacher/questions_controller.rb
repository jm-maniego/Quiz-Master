class Teacher::QuestionsController < ApplicationController
  respond_to :json

  before_action :set_quiz, only: [:create]
  before_action :set_question, only: [:destroy, :update]

  def create
    @question = @quiz.questions.new(question_params)
    @question.save
    respond_with(@question)
  end

  def destroy
    @question.destroy
    respond_with(@question)
  end

  def update
    @question.update(question_params)
    respond_with(@question)
  end

  private
    def set_quiz
      @quiz = Quiz.find(params[:quiz_id])
    end

    def set_question
      @question = Question.find(params[:id])
    end

    def question_params
      params.require(:question).permit(:text, :correct_answer)
    end
end
