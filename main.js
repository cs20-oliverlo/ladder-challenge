let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

requestAnimationFrame(animate);
function animate() {
    // Inputs
    let x = +document.getElementById("x-value").value;
    let y = +document.getElementById("y-value").value;
    let w = +document.getElementById("w-value").value;
    let h = +document.getElementById("h-value").value;
    let numRungs = +document.getElementById("number-rungs").value;

    // Number Processing
    let xW = w + x;
    let yH = h + y;

    // Rung Processing
    let hRung = h / (numRungs + 1);
    let spacer = y + hRung;

    // Draw Background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, cnv.width, cnv.height);

    // Side Lines
    ctx.lineWidth = 5;
    ctx.strokeStyle = "rgb(255, 0, 0)";
    ctx.beginPath();
    ctx.moveTo(x, y); // Start at (x1, y1)
    ctx.lineTo(x, yH); // Go to (x2, y2)
    ctx.stroke(); // Draw line
    ctx.moveTo(xW, y);
    ctx.lineTo(xW, yH);
    ctx.stroke();

    // Draw Rungs
    for (i = 0; i < numRungs; i++) {
        ctx.lineWidth = 5;
        ctx.strokeStyle = "rgb(255, 0, 0)";
        ctx.moveTo(x, spacer);
        ctx.lineTo(xW, spacer);
        ctx.stroke();
        spacer += hRung;
    }
    requestAnimationFrame(animate);
}