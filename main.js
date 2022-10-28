let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;



requestAnimationFrame(draw);
function draw() {

let x = 200;
let y = 150;
let w = 150;
let h = 300;
let numRungs = 3;

let xW = w + x;
let yH = h + y;
let hRung = h / (numRungs + 1);
let spacer = y + hRung;

    ctx.clearRect(0, 0, cnv.width, cnv.height)
    ctx.lineWidth = 5;
    ctx.strokeStyle = "rgb(255, 0, 0)";
    ctx.beginPath();
    ctx.moveTo(x, y); // Start at (x1, y1)
    ctx.lineTo(x, yH); // Go to (x2, y2)
    ctx.stroke(); // Draw line

    ctx.lineWidth = 5;
    ctx.strokeStyle = "rgb(255, 0, 0)";
    ctx.beginPath();
    ctx.moveTo(xW, y); // Start at (x1, y1)
    ctx.lineTo(xW, yH); // Go to (x2, y2)
    ctx.stroke(); // Draw line

    for (i = 0; i < numRungs; i++) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "rgb(255, 0, 0)";
        ctx.beginPath();
        ctx.moveTo(x, spacer); // Start at (x1, y1)
        ctx.lineTo(xW, spacer); // Go to (x2, y2)
        ctx.stroke(); // Draw line
        x++;
    }

    requestAnimationFrame(draw);
}