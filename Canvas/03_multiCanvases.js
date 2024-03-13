/* Code for simple Canvas shapes examples */

/* define constants */

/* Locate the first canvas, canvasA */
const canvasA = document.getElementById("canvasA");
const ctxA = canvasA.getContext("2d"); /* define ctxA */

/* Locate the second canvas, canvasB */
const canvasB = document.getElementById("canvasB");
const ctxB = canvasB.getContext("2d"); /* define ctxB */

const LINEWIDTH = 1;

const BLACK = "#000000";
const RED = "#880000";
const GREEN = "#008800";
const BLUE = "#000088";

/* --- Define Functions ---- */

function drawCircleA(color, xPos, yPos, radius, width) {
  ctxA.beginPath();
  ctxA.strokeStyle = color;
  ctxA.arc(xPos, yPos, radius, 0, 2 * Math.PI);
  ctxA.lineWidth = width;
  ctxA.stroke();
}

function drawCircleB(color, xPos, yPos, radius, width) {
  ctxB.beginPath();
  ctxB.strokeStyle = color;
  ctxB.arc(xPos, yPos, radius, 0, 2 * Math.PI);
  ctxB.lineWidth = width;
  ctxB.stroke();
}

/* --- Main Processing  ---- */

/* draw on canvas A */
drawCircleA(RED, 400, 225, 50, 5);
drawCircleA(GREEN, 400, 225, 60, 5);
drawCircleA(BLUE, 400, 225, 65, 5);

/* draw on canvas B */
drawCircleB(RED, 400, 100, 50, 2);
drawCircleB(GREEN, 450, 100, 50, 2);
drawCircleB(BLUE, 500, 100, 50, 2);

/* end of code */
