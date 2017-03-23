$(function(){

  var counter = 0;
  $(".message").hide();

  $("#eel").click(function(event) {
  $("#eel").hide(); // on click hide image in the main container
    event.preventDefault();
    $( this ).hide();
    $( "#item1" ).show("slow"); // show item in image bank
    counter = counter + 1;
    console.log(counter) 

  });
  
  $("#octopus").click(function(event) {
  $("#octopus").hide();
    event.preventDefault();
    $( this ).hide();
    $( "#item3" ).show("slow");
    counter = counter + 1;
    console.log(counter) 


  });

  $("#leafyseadragon").click(function(event) {
  $("#leafyseadragon").hide();
    event.preventDefault();
    $( this ).hide();
    $( "#item2" ).show("slow");
    counter = counter + 1;
    console.log(counter) 


  });

  var choices = [ 'eel', 'octopus', 'leafyseadragon'];
  
  function checkAnswer(){

    // check if score = 3
    // show message
  }


});




