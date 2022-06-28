const canvas = document.getElementById("canvasOne");

const context = canvas.getContext("2d");
const circleArray = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const Circle = (xpointOne, ypointOne, radiusOne, colorOne) => {
    var xpoint = xpointOne;
    var ypoint = ypointOne;
    var radius = radiusOne;
    var color = colorOne;
    const draw = (context) => {
        context.beginPath();
        context.arc(xpointOne, ypointOne, radiusOne, 0, Math.PI * 2, false);
        context.fillStyle = color;
        context.fill();
        context.closePath();
    };

    const changeColor = (newColor) => {
        color = newColor;
        draw(context);
    };

    const clickCircle = (xmouse, ymouse) => {
        const distance = Math.sqrt(
            (xmouse - xpoint) * (xmouse - xpoint) +
                (ymouse - ypoint) * (ymouse - ypoint)
        );
        if (distance < radius) {
            // console.log("I am Here");
            changeColor("#56f");
            return true;
        } else {
            changeColor("#f56");
            return false;
        }
    };
    return {
        draw,
        clickCircle,
    };
};

for (var i = 0; i < 5; i++) {
    var radius = 20;
    var xPos = 120;
    var yPos = 100;
    var id = 1;
    for (var i = 0; i < 5; i++) {
        circleArray.push(Circle(xPos, yPos, radius, "#f56", id));
        circleArray[i].draw(context);
        xPos += 70;
        // console.log("circleArray: ", circleArray);
    }
}

canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.top;
    const y = e.clientY - rect.left;

    // circleArray[1].clickCircle(x, y);
    if (context.isPointInPath(x, y)) {
        console.log(context.getContextAttributes());
        console.log("true");
        // context.stroke();
    }
    if (context.isContextLost(x, y)) {
        console.log("false");
    }
});
