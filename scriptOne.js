const canvas = document.getElementById("canvasOne");

const context = canvas.getContext("2d");
const circleArray = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

class Circle {
    constructor(xpointOne, ypointOne, radiusOne, colorOne, idOfCircleOne) {
        var xpoint = xpointOne;
        var ypoint = ypointOne;
        var radius = radiusOne;
        var color = colorOne;
        var circleId = idOfCircle;
        this.constructorFunction = function () {
            console.log("Hi I am constructor function");
        };
        this.constructorFunction();
    }

    draw(context) {
        context.beginPath();
        context.arc(xpoint, ypoint, radius, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }
    changeColor = function (newColor) {
        color = newColor;
        this.draw(context);
    };
    clickCircle(xmouse, ymouse) {
        // console.log("currentCircleID: ", currentCircleID);
        // console.log("this.circleId : ", this.circleId);
        const distance = Math.sqrt(
            (xmouse - this.xpoint) * (xmouse - this.xpoint) +
                (ymouse - this.ypoint) * (ymouse - this.ypoint)
        );
        if (distance < this.radius) {
            this.changeColor("#56f");
            return true;
        } else {
            this.changeColor("#f56");
            return false;
        }
    }

    static staticClickCircle(xmouse, ymouse) {
        console.log("this", this.xpoint);
        const distance = Math.sqrt(
            (xmouse - this.xpoint) * (xmouse - this.xpoint) +
                (ymouse - this.ypoint) * (ymouse - this.ypoint)
        );
        if (distance < this.radius) {
            this.changeColor("#56f");
            return true;
        } else {
            this.changeColor("#f56");
            return false;
        }
    }
}

for (var i = 0; i < 30; i++) {
    var radius = 20;
    var xPos = 120;
    var yPos = 100;
    var id = 1;
    for (var i = 0; i < 300; i++) {
        circleArray.push(new Circle(xPos, yPos, radius, "#f56", id));
        circleArray[i].draw(context);
        xPos += 70;
        if ((i + 1) % 25 === 0) {
            yPos += 70;
            var xPos = 120;
        }
        id = id + 1;
    }
}

canvas.addEventListener("mousemove", (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.top;
    const y = e.clientY - rect.left;
    Circle.staticClickCircle(x, y);
    for (let i = 0; i < circleArray.length; i++) {
        const distance = Math.sqrt(
            (x - circleArray[i].xpoint) * (x - circleArray[i].xpoint) +
                (y - circleArray[i].ypoint) * (y - circleArray[i].ypoint)
        );
        if (distance < circleArray[i].radius) {
            circleArray[i]?.clickCircle(x, y, i, circleArray[i].circleId);
            // console.log("circleArray[i].: ", circleArray[i]);
        } else {
            circleArray[i]?.changeColorOfCircle();
        }
    }
});

console.log("canvas: ", canvas);
