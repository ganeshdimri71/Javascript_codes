const canvas = document.getElementById("canvasOne");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

window.addEventListener("load", function () {
    console.log("Hello");
    // ctx.clearRect(0, 0, window.innerHeight, window.innerWidth);
    drawCircle();
});

function drawCircle() {
    var radius = 20;
    var xPos = 700;
    var yPos = 300;
    ctx.fillStyle = "blue";
    for (var i = 0; i < 30; i++) {
        ctx.beginPath();
        ctx.arc(xPos, yPos, radius, 0, Math.PI * 2);
        ctx.fill();
        xPos += 70;
        if ((i + 1) % 5 === 0) {
            yPos += 70;
            var xPos = 700;
        }
    }
}

canvas.addEventListener(
    "mousemove",
    function (e) {
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const result = circle.clickCircle(x, y);
        console.log("result: ", result);
        if (
            (e.clientX >= myRect.x) &
            (e.clientX <= myRect.x + myRect.w) &
            (e.clientY >= myRect.y) &
            (e.clientY <= myRect.y + myRect.h)
        ) {
            myRect.color = "green";
        } else {
            myRect.color = "red";
        }
        updateCanvas();
    },
    false
);
