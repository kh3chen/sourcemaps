task :default => [:clean, :build, :serve]

desc 'Builds the public folder'
task :build do
  cp_r 'client', 'public'
end

desc 'Cleans the public folder'
task :clean do
  rm_rf 'public'
end

desc 'Serves the public folder'
task :serve do
  Dir.chdir('./public') do
    system 'pwd'
    system 'python -m SimpleHTTPServer 8888'
  end
end
