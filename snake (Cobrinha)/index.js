window.onload = function(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");

    /*Variaveis |
                V    */

    snake = [];
    positionX = 10;
    positionY = 10;
    foodX = 15;
    foodY = 15;
    velX = 0;
    velY = 0;
    grid = 20;
    tam = 20;

    setInterval(jogo, 100);

    /**Contoles pra controla a cobrinha |
                                        V    */

    document.addEventListener("keydown",function(e){
        switch(e.keyCode){
            //Seta para a direita = 39
            case 39:
                velX = 1;
                velY = 0;
                break;
            //Seta para a esquerda = 37
            case 37:
                velX = -1;
                velY = 0;
                break;
            //Seta para cima
            case 38:
                velY = -1;
                velX = 0;
                break;
            //Seta para baixo
            case 40:
                velY = 1;
                velX = 0;
                break;
        }
    })
} 

function jogo(){
    ctx.fillStyle = "#2980B9"
    
    ctx.fillRect(0,0, canvas.width, canvas.height);

    //Deslocamento da cascavél

    positionX += velX;
    positionY += velY;

    /*Espelhamento de tela (Vai fazer um loop onde a cobra nunca vai sair da tela) ||
                                                                                   V */

    if(positionX < 0){
        positionX = grid;
    }
    if(positionX > grid){
        positionX = 0;
    }
    if(positionY < 0){
        positionY = grid;
    }
    if(positionY > grid){
        positionY = 0;
    }

    /*Configuração da cobra ||
                            V   */

        ctx.fillStyle = "#00f102";
        for(let i=0;i < snake.length;i++){
            ctx.fillRect(snake[i].x*grid, snake[i].y*grid, grid-1, grid-1);
            if(snake[i].x == positionX && snake[i].y == positionY){
                tam = 3;
        }
    }

    snake.push({x: positionX, y: positionY})

    //Apagando o rabo da Jararaca

    while(snake.length > tam){
        snake.shift(); //(shift) tira o primeiro valor do Array.
    }

    //Comida 

    ctx.fillStyle = "#F1C40F";
    ctx.fillRect(foodX*grid, foodY*grid, grid-1, grid-1);

    /*Jararaca comendo a comida |
                                V   */

    if(positionX == foodX && positionY == foodY){
        tam++;
        foodX = Math.floor(Math.random()*grid);
        foodY = Math.floor(Math.random()*grid);
    }
} 

// By: Annext.
