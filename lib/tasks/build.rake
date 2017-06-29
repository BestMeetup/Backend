namespace :build do
  desc "TODO"
  task deploy: :environment do
    branch = `git rev-parse --abbrev-ref HEAD`
    if branch.squish == "master"
      %x(bundle exec cap production deploy)
    else
      puts "!!NO PUBLISH, OTHER BRANCH!!"
    end
  end

end
