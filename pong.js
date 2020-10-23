var canvas = document.getElementById("pong");
var ctx = canvas.getContext("2d");
var upPressed = false;
var downPressed = false;

var points_player1 = 0;
var points_player2 = 0;

var ball_x = 500;
var ball_y = 250;
var dx = 0;
var dy = 0;
var dx$ = 5;
var dy$ = 5;

var player1_x = 100;
var player1_y = 205;

var player2_x = 880;
var player2_y = 205;
var player2_y_optimal;

var AiSpeed = 7;

var color = "white"
var colorChangeTimes = 0;

var goal = false;
var takt = 0;

        function startgame() {
            goal = false;
            color = "white";
            player2_y = 205;
            setTimeout(move, 500);
        }

        function Continue(){
            ball_x = 500;
            ball_y = 250;
            goal = false;
            color = "white";
            player2_y = 205;
            dx = 5;
            dy = 5;
        }

        function move() {
            dx = dx$;
            dy = dy$;
        }

        function stop() {
            dx$ = dx;
            dy$ = dy;

            dx = 0;
            dy = 0;
        }

function player1() {
    ctx.beginPath();
    ctx.rect(player1_x, player1_y, 20, 90);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}

function player2() {
    ctx.beginPath();
    ctx.rect(player2_x, player2_y, 20, 90);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}

function ball() {
    ctx.beginPath();
    ctx.arc(ball_x, ball_y, 8, 0, Math.PI*2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
}

function drawPoints_player1() {
    ctx.font = "128px Arial";
    ctx.fillStyle = "white"
    ctx.fillText(points_player1, 160, 120)
}

function drawPoints_player2() {
    ctx.font = "128px Arial";
    ctx.fillStyle = "white"
    ctx.fillText(points_player2, 760, 120)
}

        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);

        function keyDownHandler(e) {
            if(e.key == "Up" || e.key == "ArrowUp") {
                upPressed = true;
            }
            else if(e.key == "Down" || e.key == "ArrowDown") {
                downPressed = true;
            }
        }

        function keyUpHandler(e) {
            if(e.key == "Up" || e.key == "ArrowUp") {
                upPressed = false;
            }
            else if(e.key == "Left" || e.key == "ArrowDown") {
                downPressed = false;
            }
        }


function collisionDetection() {

    if(ball_x > 995){
        goal = true;
        dx = 0;
        dy = 0;
        points_player1 ++;
        ball_x = 880;
        setTimeout(Continue, 1000);
    }
    if(ball_x > 880 && ball_x < 890){
        if(ball_y > player2_y + 29 && ball_y < player2_y + 61){
            dx = -dx;
        }
        if(ball_y > player2_y && ball_y < player2_y + 30){
            dx = -dx;
            if(dy > -9) {
                dy -= 2;
            }
        }
        if(ball_y > player2_y + 60 && ball_y < player2_y + 90){
            dx = -dx;
            if(dy < 9) {
                dy += 2;
            }
        }
    }


    if(ball_x < 5){
        goal = true;
        dx = 0;
        dy = 0;
        points_player2 ++;
        ball_x = 120;
        setTimeout(Continue, 1000);
    }
    if(ball_x < 120 && ball_x > 90){
        if(ball_y > player1_y + 29 && ball_y < player1_y + 61){
            dx = -dx;
        }
        if(ball_y > player1_y -10 && ball_y < player1_y + 30){
            dx = -dx;
            if(dy > -9) {
                dy -= 2;
            }
        }
        if(ball_y > player1_y + 60 && ball_y < player1_y + 100){
            dx = -dx;
            if(dy < 9) {
                dy += 2;
            }
        }
    }

    
    if(ball_y > 500 || ball_y < 0){
        dy = -dy;
    }
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    player1();
    player2();
    ball();
    collisionDetection();
    drawPoints_player1();
    drawPoints_player2();

    if(downPressed && player1_y < 410) {
        player1_y += 10;
      }
      else if(upPressed && player1_y > 0) {
        player1_y -= 10;
      }

    player2_y_optimal = ball_y -50;

    if(ball_x > 400 && dx > 0) {
        if(player2_y < 410) {
            if(player2_y < player2_y_optimal) {
                player2_y += AiSpeed;
            }
        }
        if(player2_y > 0) {
            if(player2_y > player2_y_optimal) {
                player2_y -= AiSpeed;
            }
        }
    }

    takt ++;
    
    if(goal == true && takt > 5){
        if(color == "white"){
            color = "black";
            takt = 0;
        }
        else{
            color = "white";
        }
    }

    ball_x += dx;
    ball_y += dy;
}

var interval = setInterval(update, 20);