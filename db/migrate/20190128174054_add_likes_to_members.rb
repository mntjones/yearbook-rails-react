class AddLikesToMembers < ActiveRecord::Migration[5.2]
  def change

  	add_column :members, :likes, :integer, :default => 0
  end
end
