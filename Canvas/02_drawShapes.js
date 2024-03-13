/* Code for simple Canvas shapes examples */

/* define constants */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d"); /* define ctx as shorthand to 'context' */
const LINEWIDTH = 1;

const BLACK = "#000000";
const RED = "#880000";
const GREEN = "#008800";
const BLUE = "#000088";

/* line caps i.e, endings' shapes  */
const ROUND = "round";
const BUTT = "butt";
const SQUARE = "square";
const CAP = SQUARE;

/* --- Define Functions ---- */

function resetDefaults() {
  /* set values to defaults */
  ctx.lineWidth = LINEWIDTH;
  ctx.strokeStyle = BLACK;
  ctx.lineCap = CAP;
}

function drawLine(color, xPosFrom, yPosFrom, xPosTo, yPosTo, width, cap) {
  /* draw a line, from start point to end point  */
  ctx.beginPath();
  ctx.moveTo(xPosFrom, yPosFrom);
  ctx.lineTo(xPosTo, yPosTo);
  ctx.lineWidth = width;
  ctx.lineCap = cap;
  ctx.strokeStyle = color;
  ctx.stroke();

  /* reset defaults  */
  resetDefaults();
}

function drawCircle(color, xPos, yPos, radius, width) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.arc(xPos, yPos, radius, 0, 2 * Math.PI); /* x, y, r, start, end */
  ctx.lineWidth = width;
  ctx.stroke();

  /* reset defaults  */
  resetDefaults();
}
function drawArc(color, xPos, yPos, radius, angle, width) {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.arc(xPos, yPos, radius, 0, angle * Math.PI); /* x, y, r, start, end */
  ctx.lineWidth = width;
  ctx.stroke();

  /* reset defaults  */
  resetDefaults();
}

function drawRectangle(color, xPos, yPos, width, height) {
  ctx.fillStyle = color;
  ctx.fillRect(xPos, yPos, width, height);
}

function drawShape(color, width) {
  /* begin a path, moving to several places before drawing the actual line */
  ctx.beginPath();

  ctx.strokeStyle = color;
  ctx.lineWidth = width;

  ctx.moveTo(70, 70);
  ctx.lineTo(200, 80);
  ctx.lineTo(175, 200);
  ctx.lineTo(80, 200);
  ctx.lineTo(70, 70);
  ctx.stroke();
}

/* --- Main Processing  ---- */

/* draw some lines (color, xPosFrom, yPosFrom, xPosTo, yPosTo, width, cap) */
drawLine(RED, 100, 10, 100, 100, 8, BUTT);
drawLine(GREEN, 10, 120, 100, 120, 8, SQUARE);
drawLine(BLUE, 10, 140, 200, 200, 8, ROUND);

/* draw some circles (color, xPos, yPos, radius, width)*/
drawCircle(RED, 400, 225, 50, 5);
drawCircle(GREEN, 400, 225, 60, 5);
drawCircle(BLUE, 400, 225, 65, 5);

drawCircle(RED, 400, 100, 50, 2);
drawCircle(GREEN, 450, 100, 50, 2);
drawCircle(BLUE, 500, 100, 50, 2);

/* draw some arcs (color, xPos, yPos, radius, angle, width)*/
drawArc(RED, 50, 200, 20, 0, 2);
drawArc(GREEN, 50, 200, 30, 0.5, 2);
drawArc(BLUE, 50, 200, 40, 1, 2);
drawArc(GREEN, 50, 200, 50, 1.5, 2);
drawArc(RED, 50, 200, 50, 2, 2);

/* draw some rectangles (color, xPos, yPos, width, height) */
drawRectangle(RED, 0, 0, 50, 50);
drawRectangle(GREEN, 300, 150, 20, 20);
drawRectangle(BLUE, 550, 250, 60, 30);

/* draw any shape  */
drawShape(GREEN, 3);
