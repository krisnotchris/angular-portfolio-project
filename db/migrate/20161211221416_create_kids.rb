class CreateKids < ActiveRecord::Migration[5.0]
  def change
    create_table :kids do |t|
      t.integer :user_id
      t.string :name
      t.string :dob
      t.string :mom_name
      t.string :dad_name
      t.string :birthplace
      t.string :length
      t.string :weight
      t.timestamps
    end
  end
end
