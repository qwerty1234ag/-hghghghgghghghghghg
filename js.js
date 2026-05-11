function startGame(){
    score = 0;
    count = 0;
    updateScore();
    gameLoop();
}

var count = 0;
var personVis = false;
var score = 0;
var scoreText;

var scoreText = document.createElement("h1");
scoreText.textContent = "Баллы: 0";
document.body.getElementById("gamezone").before(scoreText);

function updateScore(){
    scoreText.textContent = "Баллы: " + score;
}

function gameLoop(){
    personVis = !personVis;

    if(personVis == true){
        var classToset = "character visible"   
    }
    else{
        var classToset = "character hiden"
    }

    var gamezone = document.getElementById("gamezone");
    for (i = 0; i<8; i++) {
        gamezone.children[i].className = classToset;
        gamezone.children[i].innerHTML ="";
        gamezone.children[i].onclick = function(){score -= 2;}
    }

    var randomNum = Math.floor(Math.random()*8)+1;
    gamezone.children[randomNum-1].innerHTML ="";
    gamezone.children[randomNum-1].className = classToset + " tangiro"
    gamezone.children[randomNum-1].onclick = function(){score +=1;}

    count += 1; 
    
    if (count < 12){
        setTimeout(gameLoop, personVis ? 1000 : 3000);
    }
    else{
        alert("Игра окончена")
        alert("Твой счёт" + score)
    }
}