require 'uglifier'

task :default => [:clean, :build, :serve]

desc 'Builds the public folder'
task :build do
  mkdir 'public'
  mkdir 'public/client'
  mkdir 'public/client-built'

  copy_file 'client/sample.html', 'public/sample.html'
  copy_file 'client/script.js', 'public/client/script.js'

  uglified, source_map = Uglifier.compile_with_map(File.read('client/script.js'),
    :compress => { :drop_debugger => false }, :source_filename => '../client/script.js', :source_map_url => 'script.js.map')

  File.write('public/client-built/script.min.js', uglified)
  File.write('public/client-built/script.js.map', source_map)
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
