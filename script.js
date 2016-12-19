/**
 * A game where you play as a snake looking for food and avoiding your tail. 
 * This game is for a tutorial on basic JS.
 *
 * @summary   Game made for a tutorial.
 * @author    Michael Ranstrand
 */

// Declare and assign variables 
var canvas, 
    ctx, 
    znejkX = [3],
    znejkY = [5],
    znejkVX = 1,
    znejkVY = 0,
    znejkLength = 2,
    foodX = Math.floor(Math.random() * 20),
    foodY = Math.floor(Math.random() * 20);

/**
 * @summary Starts when body is loaded. 
 */
function start() {
    
    // Assign canvas to variables.
    canvas = document.getElementById("c");
    ctx = canvas.getContext("2d");

    // Start update every 300 milliseconds.
    window.setInterval(update, 300);

}

/**
 * @summary The loop of the game 
 */
function update() {

    updatePositions();
    repaint();

}

/**
 * @summary SUpdates the possitions of both the znejk and the food 
 */
function updatePositions() {

    // Add a new head
    znejkX.unshift(znejkX[0] + znejkVX);
    znejkY.unshift(znejkY[0] + znejkVY);
    
    // As long as its too long
    while(znejkX.length > znejkLength){
        // Remove last part
        znejkX.pop();
        znejkY.pop();
    }
    
    // Check if head is eating the food
    if(znejkX[0] == foodX && znejkY[0] == foodY){
        
        // Make it longer
        znejkLength++;
        
        // Move food
        foodX = Math.floor(Math.random() * 20);
        foodY = Math.floor(Math.random() * 20);
    }
    
    // Loop through the parts of the znejk.
    for(var i = 1; i < znejkX.length; i++){
        // Check if the znejk head is eating this part of the znejk. 
        if(znejkX[0] == znejkX[i] && znejkY[0] == znejkY[i]){
           znejkLength = 2; 
        }
    }
}

/**
 * @summary Paints both the znejk and the food. 
 */
function repaint() {
    // Erase the entire canvas.
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Choose color
    ctx.fillStyle = "white";
    
    // Loop through the parts of the znejk.
    for(var i = 0; i < znejkX.length; i++){
        // Paint the part
        ctx.fillRect(5 + 25 * znejkX[i],  + 5 + 25 * znejkY[i], 20, 20);
    }
    
    // Choose color
    ctx.fillStyle = "red";
    
    // Paint food
    ctx.fillRect(5 + 25 * foodX, 5 + 25 * foodY, 20, 20)
    

}

/**
 * @summary Handles when a key is pressed.
 * @param object e Event.
 */
function keyDown(event){
    // If left key is pressed
    if(event.keyCode == 37){
        znejkVX = -1;
        znejkVY = 0;
    }
    // If up key is pressed
    if(event.keyCode == 38){
        znejkVX = 0;
        znejkVY = -1;
    }
    // If right key is pressed
    if(event.keyCode == 39){
        znejkVX = 1;
        znejkVY = 0;
    }
    // If down key is pressed
    if(event.keyCode == 40){
        znejkVX = 0;
        znejkVY = 1;
    }
    
}