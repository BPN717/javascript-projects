document.onreadystatechange = () => {
    if (document.readyState == 'complete') {
        drawSmiley();
    }
}

var drawSmiley = () => {
    let canvas = document.getElementById('canvas');
    let ctx = canvas.getContext('2d');
    let startX = 140;
    let startY = 75;
    let radius = 60;
    let colorOfEmoji = "yellow" ;
    ctx.beginPath();
    ctx.arc(startX, startY, radius, 0, Math.PI*2,true);
    ctx.fillStyle = colorOfEmoji;
    ctx.fill();
    let mouthHappyRadius = radius - 25;
    ctx.moveTo(startX + mouthHappyRadius, startY);
    ctx.arc(startX, startY, mouthHappyRadius, 0, Math.PI, false);
    
    let leftEyesX = startX -10;
    let leftEyesY = startY -10;
    let eyeRadius = 5;
    ctx.moveTo(leftEyesX, leftEyesY);
    ctx.arc(leftEyesX - eyeRadius, leftEyesY, eyeRadius, 0, Math.PI*2, true);

    let rightEyesX = startX +20;
    let rightEyesY = startY -10;
    
    ctx.moveTo(rightEyesX, rightEyesY);
    ctx.arc(rightEyesX - eyeRadius, rightEyesY, eyeRadius, 0, Math.PI*2, true);

    ctx.stroke();
}