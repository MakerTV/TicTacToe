var player1 = "X";
var player2 = "O";
var playTime = player1;
var gameOver = false;

function insert(name){

    var e = document.getElementById(name);
    if(e.getAttribute('value') == '' && !gameOver){
       e.setAttribute('value', playTime);
       if(playTime == player1){
        playTime = player2;
    }
    else{
        playTime = player1;
    }
    }
    win();

}
function win(){
    var a1 = document.getElementById('a1');
    var a2 = document.getElementById('a2');
    var a3 = document.getElementById('a3');
    
    var b1 = document.getElementById('b1');
    var b2 = document.getElementById('b2');
    var b3 = document.getElementById('b3');

    var c1 = document.getElementById('c1');
    var c2 = document.getElementById('c2');
    var c3 = document.getElementById('c3');
    if(!gameOver){
        if (a1.getAttribute('value') != '' && 
        (a1.getAttribute('value') == player1 && a2.getAttribute('value') == player1 && a1.getAttribute('value') == player1 && a3.getAttribute('value') == player1) || 
        (a1.getAttribute('value') == player1 && b1.getAttribute('value') == player1 && a1.getAttribute('value') == player1 && c1.getAttribute('value') == player1) ||
        (a1.getAttribute('value') == player1 && b2.getAttribute('value') == player1 && a1.getAttribute('value') == player1 && c3.getAttribute('value') == player1))
            {
                alert(a1.getAttribute('value')+' wins!');
                gameOver = true;
            }
        else if (b2.getAttribute('value') != '' && 
                (b2.getAttribute('value') == player1 && a2.getAttribute('value') == player1 && b2.getAttribute('value') == player1 && c2.getAttribute('value') == player1) ||
                (b2.getAttribute('value') == player1 && b1.getAttribute('value') == player1 && b2.getAttribute('value') == player1 && b3.getAttribute('value') == player1) ||
                (b2.getAttribute('value') == player1 && a3.getAttribute('value') == player1 && b2.getAttribute('value') == player1 && c1.getAttribute('value') == player1))
                {
                    alert(b2.getAttribute('value')+' wins!');
                    gameOver = true;
                }
        else if (c3.getAttribute('value') != '' &&
                (c3.getAttribute('value') == player1 && a3.getAttribute('value') == player1 && c3.getAttribute('value') == player1 && b3.getAttribute('value') == player1) ||
                (c3.getAttribute('value') == player1 && c1.getAttribute('value') == player1 && c3.getAttribute('value') == player1 && c2.getAttribute('value') == player1))
                {
                    alert(c3.getAttribute('value')+' wins!');
                    gameOver = true;
                }        
        if(a1.getAttribute('value') != '' &&
        (a1.getAttribute('value') == player2 && a2.getAttribute('value') == player2 && a1.getAttribute('value') == player2 && a3.getAttribute('value') == player2) ||
        (a1.getAttribute('value') == player2 && b2.getAttribute('value') == player2 && a1.getAttribute('value') == player2 && c3.getAttribute('value') == player2) ||
        (a1.getAttribute('value') == player2 && b1.getAttribute('value') == player2 && a1.getAttribute('value') == player2 && c1.getAttribute('value') == player2))
        {
            alert(a1.getAttribute('value')+' wins!');
            gameOver = true;
        }
        else if(b2.getAttribute('value') != '' && 
            (b2.getAttribute('value') == player2 && a2.getAttribute('value') == player2 && b2.getAttribute('value') == player2 && c2.getAttribute('value') == player2) ||
            (b2.getAttribute('value') == player2 && a3.getAttribute('value') == player2 && b2.getAttribute('value') == player2 && c1.getAttribute('value') == player2) ||
            (b2.getAttribute('value') == player2 && b1.getAttribute('value') == player2 && b2.getAttribute('value') == player2 && b3.getAttribute('value') == player2))
            {
                    alert(b2.getAttribute('value')+' wins!');
                    gameOver = true;
            }
        else if(c3.getAttribute('value') != '' &
            (c3.getAttribute('value') == player2 && c1.getAttribute('value') == player2 && c3.getAttribute('value') == player2 && c2.getAttribute('value') == player2) ||
            (c3.getAttribute('value') == player2 && b3.getAttribute('value') == player2 && c3.getAttribute('value') == player2 && a3.getAttribute('value') == player2))
            {
                    alert(c3.getAttribute('value')+' wins!');
                    gameOver = true;
            }
        }
}
function restart(){
    if(gameOver){window.location.reload();}
    else{alert('Ainda não da ;-;')}
    
}