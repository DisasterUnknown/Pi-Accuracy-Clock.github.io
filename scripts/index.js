const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const ballRadius = 8;

const PI_2 = 22 / 7;
const PI_1 = 3.14;
const PI_3 = 3.14159;
const PI_4 = Math.PI; // True Math.PI

const balls = [
    { color: "orange", pi: PI_2, angle: 0, orbitRadius: 250, sumDiff: 0 },
    { color: "lime", pi: PI_4, angle: 0, orbitRadius: 220, sumDiff: 0 },
    { color: "blue", pi: PI_3, angle: 0, orbitRadius: 190, sumDiff: 0 },
    { color: "red", pi: PI_1, angle: 0, orbitRadius: 160, sumDiff: 0 },
];

let radarAngle = 0.05;
const startTime = Date.now(); // Save the animation start time

function drawBall(x, y, color) {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawRadarLine() {
    const lineLength = 280;
    const adjustedLength = lineLength - ballRadius;

    const x = centerX + adjustedLength * Math.cos(radarAngle);
    const y = centerY + adjustedLength * Math.sin(radarAngle);

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 1.5;
    ctx.stroke();
}

function drawOverlay() {
    const padding = 10;
    const boxSize = 12;
    const lineHeight = 20;
    const startX = canvas.width - 200;
    let startY = padding + 10;

    ctx.font = "18px monospace";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";

    const limeBall = balls.find(b => b.pi === PI_4);

    balls.forEach(ball => {
        const angleDiff = ball.angle - limeBall.angle;
        const piMultiples = angleDiff / Math.PI;
        const signedPiMultiples = (piMultiples >= 0 ? "+" : "") + piMultiples.toFixed(10);

        ctx.fillStyle = ball.color;
        ctx.fillRect(startX, startY - boxSize / 2, boxSize, boxSize);

        ctx.fillStyle = "white";
        ctx.fillText(signedPiMultiples + " π", startX + boxSize + 5, startY);

        startY += lineHeight;
    });
}


function drawOverlay1() {
    const paddingY = 15;
    const paddingX = 25;
    const text = "1 round = 2π";

    ctx.font = "18px monospace";
    ctx.textAlign = "right";
    ctx.textBaseline = "bottom";
    ctx.fillStyle = "white";
    ctx.fillText(text, canvas.width - paddingX, canvas.height - paddingY);
}

function drawOverlay2() {
    const padding = 15;
    const now = Date.now();
    const elapsed = now - startTime;

    const seconds = Math.floor(elapsed / 1000) % 60;
    const minutes = Math.floor(elapsed / (1000 * 60)) % 60;
    const hours = Math.floor(elapsed / (1000 * 60 * 60)) % 24;
    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));

    const formattedTime =
        `${String(days).padStart(2, '0')}d ` +
        `${String(hours).padStart(2, '0')}h ` +
        `${String(minutes).padStart(2, '0')}m ` +
        `${String(seconds).padStart(2, '0')}s`;

    ctx.font = "18px monospace";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillStyle = "white";
    ctx.fillText(`Time: ${formattedTime}`, padding, padding);
}

function animate() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawBall(centerX, centerY, "white");
    drawRadarLine();
    radarAngle += 0.02;

    balls.forEach(ball => {
        ball.angle += 0.02 * (ball.pi / PI_4);
        const x = centerX + ball.orbitRadius * Math.cos(ball.angle);
        const y = centerY + ball.orbitRadius * Math.sin(ball.angle);
        drawBall(x, y, ball.color);
        ball.sumDiff += 1;
    });

    drawOverlay();
    drawOverlay1();
    drawOverlay2();

    requestAnimationFrame(animate);
}

animate();