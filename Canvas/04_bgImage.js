/* Code for simple Canvas shapes examples */

/* define constants */

/* Locate the first canvas, canvasA */
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const img = document.getElementById("bgImage");

ctx.drawImage(img, 10, 10);
ctx.scale(0.9, 0.9);
ctx.drawImage(img, 100, 100);
ctx.scale(0.9, 0.9);
ctx.drawImage(img, 200, 200);

ctx.scale(0.9, 0.9);
ctx.drawImage(img, 300, 300);
ctx.scale(0.9, 0.9);
ctx.drawImage(img, 400, 400);

/* end of code */
