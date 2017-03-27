$(function(){

  // var counter = 0;
  // $(".message").hide();


  $("#eel").click(function(event) {
  $("#eel").hide(); // on click hide image in the main container
    event.preventDefault();
    $( this ).hide();
    $( "#item1" ).show("slow"); // show item in image bank
    // counter = counter + 1;
    // console.log(counter) 

  });
  
  $("#octopus").click(function(event) {
  $("#octopus").hide();
    event.preventDefault();
    $( this ).hide();
    $( "#item3" ).show("slow");
    // counter = counter + 1;
    // console.log(counter) 


  });

  $("#leafyseadragon").click(function(event) {
  $("#leafyseadragon").hide();
    event.preventDefault();
    $( this ).hide();
    $( "#item2" ).show("slow");
    // counter = counter + 1;
    // console.log(counter) 


  });

  $("#owl").click(function(event) {
  $("#owl").hide();
    event.preventDefault();
    $( this ).hide();
    $("#item6").show("slow");
    // counter = counter + 1;
    // console.log(counter) 
  });

  $("#rabbit").click(function(event) {
  $("#rabbit").hide();
    event.preventDefault();
    $( this ).hide();
    $("#item5").show("slow");
    // counter = counter + 1;
    // console.log(counter) 
  });

  $("#arctic-fox").click(function(event) {
  $("#arctic-fox").hide();
    event.preventDefault();
    $( this ).hide();
    $("#item4").show("slow");
    // counter = counter + 1;
    // console.log(counter) 
  });

  $("#bird").click(function(event) {
  $("#bird").hide();
    event.preventDefault();
    $( this ).hide();
    $("#item7").show("slow");
    // counter = counter + 1;
    // console.log(counter) 
  });

  $("#stickbug").click(function(event) {
  $("#stickbug").hide();
    event.preventDefault();
    $( this ).hide();
    $("#item8").show("slow");
    // counter = counter + 1;
    // console.log(counter) 
  });

  $("#leafbug").click(function(event) {
  $("#leafbug").hide();
    event.preventDefault();
    $( this ).hide();
    $("#item9").show("slow");
    // counter = counter + 1;
    // console.log(counter) 
  });


});




