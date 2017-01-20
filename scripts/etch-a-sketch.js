/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function() {
    
    /* Calls the makeGrid function which will create an Etch-A-Sketch of the user's desired dimensions.*/
    makeGrid();
    
    /* Calls newColor function which will change the Etch-A-Sketch pixels to the color variable if the cursor is hovered over them. */
    newColor();
   
   
    /* If the user clicks the "New Grid" button the makeGrid function is called and an initial random pen is used.*/
    $("#newGrid").click(function(){
        makeGrid();
        newColor();
    });
    
    /* If the user clicks the "Black Pen" button the Etch-A-Sketch pixels change to black if the cursor is hovered over them. */
    $("#blackPen").click(function(){
         $("#boundary div").hover(function(){
            $(this).css('background-color', 'black');
        });
    });
   
    /* If the user clicks the "New Pen" button the Etch-A-Sketch pixels each change to the  same new random color if the cursor is hovered over them. */
    $("#newPen").click(function(){
         /*color = '#'+Math.random().toString(16).slice(-3);
         $("#boundary div").hover(function(){
            $(this).css('background-color', color);
        });*/
        newColor();
    });
    
    /* If the user clicks the "Rainbow Pen" button the Etch-A-Sketch pixels each change to a different random color if the cursor is hovered over them. */
    $("#rainbowPen").click(function(){
        $("#boundary div").hover(function(){
            $(this).css('background-color', '#'+Math.random().toString(16).slice(-3));
        });
    });

});

var newColor = function() {
         var color = '#'+Math.random().toString(16).slice(-3);
         $("#boundary div").hover(function(){
            $(this).css('background-color', color);
        });
}

var makeGrid = function() {
    
    /* Prompts the user for their desired number of rows/columns and sets equalt to the variable gridSize. */
    var gridSize = prompt("What size would you like the rows and columns of  your grid? (please select a value no more than 80)");
    
     /* Checks to ensure that the input is a number. */
    if(isNaN(gridSize))
        {
            var gridSize = prompt("Sorry, that is not a number. Please select a number no more than 80.");
            makeGrid();
        }
    
    /* Checks to ensure that the input number is no more than 80. */
    else if(gridSize > 80)
        {
            var gridSize = prompt("Sorry, that number is too large for this grid. Please select a number no more than 80.");
            makeGrid();
        }
    
    /* Occurs when a valid input is entered. */
    else{
    $("#boundary div").remove();
    
    /* Creates the correct number of Etch-A-Sketch rows and columns. */ 
    for ( var i = 0; i < gridSize; i++){
        for(var j = 0; j < gridSize; j++){
            $(boundary).append("<div></div")
        }
    }
    
    /* Ensures that the Etch-A-Sketch pixels are the correct size. */
    $("#boundary div").height(Math.floor((500/gridSize)*10)/10);
    $("#boundary div").width(Math.floor((500/gridSize)*10)/10);
    }
};

