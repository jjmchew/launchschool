desc 'update git repository (launchschool repo)'
task :git_launchschool do
  sh 'cd ~/launchschool'
  sh 'git add .'
  sh 'git commit -m "updates"'
  sh 'git push'
end

desc 'update git repo (lsNotes)'
task :git_notes do
  sh 'cd ~/lsNotes'
  sh 'git add .'
  sh 'git commit -m "updates"'
  sh 'git push'
  sh 'cd ~/launchschool'
end

desc 'git update launchschool and lsNotes repos'
task :git => [:git_launchschool, :git_notes]
