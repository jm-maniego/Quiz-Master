class AddQuizIdToQuestions < ActiveRecord::Migration[5.0]
  def change
    add_column :questions, :quiz_id, :integer
  end
end
