namespace :build do
  desc "TODO"
  task deploy: :environment do
    puts "#{ENV['PRIVATE_KEY']}"
    puts "#{ENV['PASS_KEY']}"
    
    private_key = ENV['PRIVATE_KEY']
    out_file = File.new("temp_key", "w")
    out_file.puts(private_key)
    out_file.close
    %x(chmod 600 temp_key)
    %x(printenv PASS_KEY | ssh-add -p temp_key)
  end

end
