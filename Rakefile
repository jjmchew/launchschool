desc 'update git repository (launchschool repo)'
task :git_launchschool do
  sh 'cd ~/launchschool'
  sh 'git add .'
  sh 'git commit -m "updates"'
  sh 'git push'
end

desc 'git update launchschool and lsNotes repos'
task :git => [:git_launchschool]
