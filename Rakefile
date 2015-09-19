desc 'Builds the public folder'
task 'build' do
  cp_r 'client', 'public'
end

desc 'Serves the public folder'
task 'serve' do
  Dir.chdir('./public') do
    system 'python -m SimpleHTTPServer 8888'
  end
end
