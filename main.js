let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

requestAnimationFrame(draw);
function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    let x = +document.getElementById("x-value").value;
    let y = +document.getElementById("y-value").value;
    let w = +document.getElementById("w-value").value;
    let h = +document.getElementById("h-value").value;

    let xW = w + x;
    let yH = h + y;

    let numRungs = +document.getElementById("number-rungs").value;
    let hRung = h / (numRungs + 1);
    let spacer = y + hRung;
    
    ctx.lineWidth = 5;
    ctx.strokeStyle = "rgb(255, 0, 0)";
    ctx.moveTo(x, y); // Start at (x1, y1)
    ctx.lineTo(x, yH); // Go to (x2, y2)
    ctx.stroke(); // Draw line

    ctx.lineWidth = 5;
    ctx.strokeStyle = "rgb(255, 0, 0)";
    ctx.moveTo(xW, y); // Start at (x1, y1)
    ctx.lineTo(xW, yH); // Go to (x2, y2)
    ctx.stroke(); // Draw line

    for (i = 0; i < numRungs; i++) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "rgb(255, 0, 0)";
        ctx.moveTo(x, spacer); // Start at (x1, y1)
        ctx.lineTo(xW, spacer); // Go to (x2, y2)
        ctx.stroke(); // Draw line
        spacer += hRung;
    }

    requestAnimationFrame(draw);
}