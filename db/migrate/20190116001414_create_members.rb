class CreateMembers < ActiveRecord::Migration[5.2]
  def change
    create_table :members do |t|
      t.string :name
      t.integer :age
      t.string :img_url
      t.string :motto

      t.timestamps
    end
  end
end
