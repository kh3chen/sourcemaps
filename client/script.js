function hello() {
  var greeting = "Hello from javascript";
  var confirmation = "Did you see anything in the debugger?";

  alert(greeting);
  debugger;
  alert(confirmation);

  throw "Another opportunity to see sourcemaps in action";
}
