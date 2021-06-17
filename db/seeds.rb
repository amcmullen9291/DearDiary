# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Entry.create!(:title => "Hello...", :content => "Welcome to DearDiary", :date => "Thursday June 17th 2021, 2:24:49 am")
Entry.create!(:title => "Well, Hello", :content => "My name is Jacques cousteau I was born on July 21 1899. My favourite authors are Kipling, O. Henry and Steuart Edward White. My favourite flower is Lady Slipper and Tiger Lily. My favourite sports are Trout fishing, Hiking, shooting, football and boxing. My favourite studies are English, Zoology and Chemistry. I intend to travel and write.", :date => "Wednesday August 11th 2021, 12:54:49 pm")
Entry.create!(:title => "I got a new puppy dog", :content => "I got a new puppy I will name him Browser. He is cute.", :date => "Tuesday February 9th 2021, 2:24:49 am");
