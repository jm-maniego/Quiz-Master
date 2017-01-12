class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
      t.text :text
      t.string :correct_answer

      t.timestamps
    end
  end
end
