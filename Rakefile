require 'uglifier'

task :default => [:clean, :build, :serve]

desc 'Builds the public folder'
task :build do
  cp_r 'client', 'public'

  uglified, source_map = Uglifier.new.compile_with_map(File.read('client/script.js'))

  File.write('public/script.min.js', uglified)
  File.write('public/script.js.map', source_map)
end

desc 'Cleans the public folder'
task :clean do
  rm_rf 'public'
end

desc 'Serves the public folder'
task :serve do
  Dir.chdir('./public') do
    puts "Serving #{`pwd`}"
    system 'kill_processes_listening_on 8888'
    system 'python -m SimpleHTTPServer 8888'
  end
end
