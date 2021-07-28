class CreateEntries < ActiveRecord::Migration[6.1]
  def change
    create_table :entries do |t|
      t.text :date 
      t.text :title
      t.text :content
      
      t.timestamps
    end
  end
end
