# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


students1 = DBC::Cohort.find(26).students
students2 = DBC::Cohort.find(28).students
students3 = DBC::Cohort.find(30).students
students4 = DBC::Cohort.find(32).students

stdnts= [students1, students2, students3, students4]
stdnts.each do |array|
    array.each do |student|
      Student.create!(
        uid: student.id,
        about: student.profile[:about],
        bio: student.bio,
        cohort_id: student.cohort_id,
        cohort_name: DBC::Cohort.find(student.cohort_id).name,
        email: student.email,
        facebook: student.profile[:facebook],
        github: student.profile[:github],
        linked_in: student.profile[:linked_in],
        name: student.name,
        quora: student.profile[:quora],
        twitter: student.profile[:twitter])
    end
end
#
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# Examples:
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
# This file should contain all the record creation needed to seed the database with its default values.