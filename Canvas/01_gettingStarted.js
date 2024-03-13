/* Code for Getting Started with Canvas */

var canvas = document.getElementById("canvas");
context = canvas.getContext("2d");

/* set the font styling */
context.font = "48pt Ariel";
context.fillStyle = "cornflowerblue";
context.strokeStyle = "blue";

/* write X in the top left corner */
context.fillText("X", 0, 42);
context.strokeText("X", 0, 42);

/* write Y in the centre */
context.fillText("Y", 252, 152);
context.strokeText("Y", 252, 152);

/* write something within the canvas */
context.fillText("Z", 562, 300);
context.strokeText("Z", 562, 300);
