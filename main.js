
let button = document.querySelector("#btn");

button.addEventListener("click", buttonclicked,);

function buttonclicked(){
let bg_sound = document.getElementById("bgsound");
bg_sound.play();
}
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext('2d');
let maze = [
[1,1,1,0,0,0,1,0,0,3],
[0,1,0,0,1,0,1,0,1,1],
[0,1,1,0,1,0,1,0,1,0],
[0,1,1,1,1,0,1,0,1,0],
[1,0,0,0,0,0,0,0,0,0],
[1,1,1,1,1,1,0,1,1,0],
[1,0,0,0,0,0,0,0,1,0],
[0,0,1,0,0,1,0,0,1,0],
[1,1,1,1,1,1,0,1,0,0],
[-1,0,0,4,0,1,0,1,0,1]
];
let x = 0;
let y = 0;

let alien = new Image();
alien.src = "images/alien.png"

let space = new Image();
space.src = "images/space.jpg"

let weed = new Image();
weed.src = "images/weed.png"

let portal = new Image();
portal.src = "images/portal.png"

let player = -1;
let tileSize = 50;
let playing = false;


function grid() {

    for (y = 0; y < maze.length; y++) {

        for (x = 0; x < maze[y].length; x++) {

            if (maze[y][x] == -1) {
                player = { y, x }; // koordinater for player
                console.log(player.y + "  " + player.x);
                
                ctx.drawImage(alien, x * tileSize, y * tileSize, tileSize, tileSize);
              
            }
            else if(maze[y][x] == 0){
                ctx.fillStyle = "black";
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
            }
            else if(maze[y][x] == 1){
             
                ctx.drawImage(space, x * tileSize, y * tileSize, tileSize, tileSize);
            }  
             else if(maze[y][x] == 3){
                ctx.drawImage(weed, x * tileSize, y * tileSize, tileSize, tileSize)

             
                
            
            } 
             else if(maze[y][x] == 4){
                ctx.drawImage(portal, x * tileSize, y * tileSize, tileSize, tileSize)
                

        }   
    }

}


 }

 window.addEventListener("load", grid,);



window.addEventListener('keydown', keyCode, true,)
    function keyCode(){ 
    switch (event.keyCode) {
         case 39: //Right
         

            if  
            
              (maze[player.y][player.x + 1] == 0) {
                playing = true
                maze[player.y][player.x + 1] = -1; //players nye position
                maze[player.y][player.x] = 0; // player gamle position
               let sound = new Audio('sounds/move_sound.mp3')
             sound.play();

            }
            else if  (maze[player.y][player.x + 1] == 4) {
                maze[player.y - 5][player.x] = -1; 
                maze[player.y][player.x] = 0;
                let portalsound = new Audio('sounds/portal_sound.mp3')
             portalsound.play();
            } 
        
            else if  (maze[player.y][player.x + 1] == 5) {
            maze[player.y][player.x + 5] = -1; 
            maze[player.y][player.x] = 0;
            
        }   
        else if  (maze[player.y][player.x + 1] == 3)
         {
            let winsound = new Audio('sounds/win_sound.mp3')
             winsound.play(alert("you won"));
            
            

        } 
                grid();
         break

         case 40: //Down
         

            if (maze[player.y + 1][player.x] == 0) {
                playing = true
                maze[player.y + 1][player.x] = -1; //players nye position
                maze[player.y][player.x] = 0; // player gamle position
                let sound = new Audio('sounds/move_sound.mp3')
                sound.play();
   
            }
                grid();
         break;

         case 37: //Left
         
            if (maze[player.y][player.x - 1] == 0) {
                playing = true
                maze[player.y][player.x - 1] = -1; //players nye position
                maze[player.y][player.x] = 0; // player gamle position
                let sound = new Audio('sounds/move_sound.mp3')
                sound.play();
   
            }
                grid();

         break;

            case 38: //Up
                if (maze[player.y - 1][player.x] == 0) {
                    playing = true
                    maze[player.y - 1][player.x] = -1; //players nye position
                    maze[player.y][player.x] = 0; // player gamle position
                    let sound = new Audio('sounds/move_sound.mp3')
                    sound.play();
                  
            
                }
                    grid();
    
    
                break;

    
    
            default:
                break;
        }
    }
    grid();
 
    

    function sound(){
        let game_over = new Audio("sounds/game_over.mp3")
        game_over.play();
    }
  
    //Timeren der nedtæller;
    function startTimer(duration, display) {
        let start = Date.now(),
            diff,
            minutes,
            seconds;

        function timer() {
            if(playing) {
                diff = duration - (((Date.now() - start) / 1000) | 0);
                minutes = (diff / 60) | 0;
                seconds = (diff % 60) | 0;
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                display.textContent = "Game ends in " + minutes + ":" + seconds;

                if (diff <= 0) {
                    sound();
                    alert('GAME OVER');
                    start = Date.now() + 1000;
                    playing = false;
                
                }
            }
        };
        //Nedtælling 
        timer();
        setInterval(timer,1000)
        
    }

    window.onload = function () {
        twominutes = 15;
        z = document.querySelector("#timerel");
        startTimer(twominutes,z)
    
    }
     
       

    // window.addEventListener('keydown',event.keyCode,true);

// 1. Vertikal akse//
// 2. Horisontal akse//
// 3. Weight //
// 4. Height //

/*
    console.log("x er = " + x +" og y = " + y);        }
    Det inderste loop kaster 3 tal afsted

let arrayCanvas = [0,0,0,-1,2,0,0,0,0,1]

 for(let i = 0; i<arrayCanvas.length;i++){

    if(arrayCanvas[i] == -1){
        ctx.fillStyle = "red";
    ctx.fillRect(i * 50, 0, 50, 50); 
    }else if(arrayCanvas[i] == 1){
        ctx.fillStyle = "teal";
    ctx.fillRect(i * 50, 0, 50, 50); 
    } 
    */