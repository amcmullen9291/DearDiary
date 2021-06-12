class CreateEntries < ActiveRecord::Migration[6.1]
  def change
    create_table :entries do |t|
      t.string :date 
      t.string :title
      t.string :content
      
      t.timestamps
    end
  end
end
