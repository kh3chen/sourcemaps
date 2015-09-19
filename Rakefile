require 'uglifier'

task :default => [:clean, :build, :serve]

desc 'Builds the public folder'
task :build do
  mkdir_p 'public'
  cp 'client/sample.html', 'public/sample.html'

  uglified, source_map = Uglifier.new.compile_with_map(File.read('client/javascript.js'))

  File.write('public/javascript.min.js', uglified)
  File.write('public/javascript.js.map', source_map)
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
