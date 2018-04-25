// client-side js
// run by the browser each time your view template is loaded

(function(){
  
  var query = $("#search-query")
  
  query.on("keyup", (e) => {
  
    console.log(query.val())
  
  })
  
})()