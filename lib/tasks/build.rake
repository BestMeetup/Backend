namespace :build do
  desc "TODO"
  task deploy: :environment do
    branch = `git rev-parse --verify master`
    if !branch.include? "fatal"
      %x(bundle exec cap production deploy)
    else
      puts "!!NO PUBLISH, OTHER BRANCH!!"
    end
  end

end
