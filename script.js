window.onload = function(){
    for (var i = 0; i <9; i++){
        document.getElementById('game').innerHTML+='<div class="block"></div>';
    }
    
    var step = 0;
    
    document.getElementById('game').onclick = function(event){
        console.log(event);
        if (event.target.className == "block"){
            if (step % 2 == 0){
                event.target.innerHTML = '✕';
            } else {
                event.target.innerHTML = '⭕'; 
            }
            step++;
            checkWinner();
        }
    }
    var allBlocks = document.getElementsByClassName('block');
    function checkWinner(){
//X checking
        if (allBlocks[0].innerHTML == '✕' && allBlocks[1].innerHTML == '✕' && allBlocks[2].innerHTML == '✕'){
            allBlocks[0].style.color = "red";
            allBlocks[1].style.color = "red";
            allBlocks[2].style.color = "red";
            alert("X won!");
        } else if (allBlocks[3].innerHTML == '✕' && allBlocks[4].innerHTML == '✕' && allBlocks[5].innerHTML == '✕') {
            allBlocks[3].style.color = "red";
            allBlocks[4].style.color = "red";
            allBlocks[5].style.color = "red";
            alert("X won!");
        } else if (allBlocks[6].innerHTML == '✕' && allBlocks[7].innerHTML == '✕' && allBlocks[8].innerHTML == '✕') {
            allBlocks[6].style.color = "red";
            allBlocks[7].style.color = "red";
            allBlocks[8].style.color = "red";
            alert("X won!");
        } else if (allBlocks[0].innerHTML == '✕' && allBlocks[3].innerHTML == '✕' && allBlocks[6].innerHTML == '✕') {
            allBlocks[0].style.color = "red";
            allBlocks[3].style.color = "red";
            allBlocks[6].style.color = "red";
            alert("X won!");
        } else if (allBlocks[1].innerHTML == '✕' && allBlocks[4].innerHTML == '✕' && allBlocks[7].innerHTML == '✕') {
            allBlocks[1].style.color = "red";
            allBlocks[4].style.color = "red";
            allBlocks[7].style.color = "red";
            alert("X won!");
        } else if (allBlocks[2].innerHTML == '✕' && allBlocks[5].innerHTML == '✕' && allBlocks[8].innerHTML == '✕') {
            allBlocks[2].style.color = "red";
            allBlocks[5].style.color = "red";
            allBlocks[8].style.color = "red";
            alert("X won!");
        } else if (allBlocks[0].innerHTML == '✕' && allBlocks[4].innerHTML == '✕' && allBlocks[8].innerHTML == '✕') {
            allBlocks[0].style.color = "red";
            allBlocks[4].style.color = "red";
            allBlocks[8].style.color = "red";
            alert("X won!");
        } else if (allBlocks[2].innerHTML == '✕' && allBlocks[4].innerHTML == '✕' && allBlocks[6].innerHTML == '✕') {
            allBlocks[2].style.color = "red";
            allBlocks[4].style.color = "red";
            allBlocks[6].style.color = "red";
            alert("X won!");
        }
//O checking
        else if (allBlocks[0].innerHTML == '⭕' && allBlocks[1].innerHTML == '⭕' && allBlocks[2].innerHTML == '⭕'){
            allBlocks[0].style.color = "red";
            allBlocks[1].style.color = "red";
            allBlocks[2].style.color = "red";
            alert("O won!");
        } else if (allBlocks[3].innerHTML == '⭕' && allBlocks[4].innerHTML == '⭕' && allBlocks[5].innerHTML == '⭕') {
            allBlocks[3].style.color = "red";
            allBlocks[4].style.color = "red";
            allBlocks[5].style.color = "red";
            alert("O won!");
        } else if (allBlocks[6].innerHTML == '⭕' && allBlocks[7].innerHTML == '⭕' && allBlocks[8].innerHTML == '⭕') {
            allBlocks[6].style.color = "red";
            allBlocks[7].style.color = "red";
            allBlocks[8].style.color = "red";
            alert("O won!");
        } else if (allBlocks[0].innerHTML == '⭕' && allBlocks[3].innerHTML == '⭕' && allBlocks[6].innerHTML == '⭕') {
            allBlocks[0].style.color = "red";
            allBlocks[3].style.color = "red";
            allBlocks[6].style.color = "red";
            alert("O won!");
        } else if (allBlocks[1].innerHTML == '⭕' && allBlocks[4].innerHTML == '⭕' && allBlocks[7].innerHTML == '⭕') {
            allBlocks[1].style.color = "red";
            allBlocks[4].style.color = "red";
            allBlocks[7].style.color = "red";
            alert("O won!");
        } else if (allBlocks[2].innerHTML == '⭕' && allBlocks[5].innerHTML == '⭕' && allBlocks[8].innerHTML == '⭕') {
            allBlocks[2].style.color = "red";
            allBlocks[5].style.color = "red";
            allBlocks[8].style.color = "red";            
            alert("O won!");
        } else if (allBlocks[0].innerHTML == '⭕' && allBlocks[4].innerHTML == '⭕' && allBlocks[8].innerHTML == '⭕') {
            allBlocks[0].style.color = "red";
            allBlocks[4].style.color = "red";
            allBlocks[8].style.color = "red";
            alert("O won!");
        } else if (allBlocks[2].innerHTML == '⭕' && allBlocks[4].innerHTML == '⭕' && allBlocks[6].innerHTML == '⭕') {
            allBlocks[2].style.color = "red";
            allBlocks[4].style.color = "red";
            allBlocks[6].style.color = "red";
            alert("O won!");
        }
// Draw
        else if (step == 9) {
            allBlocks[0].style.color = "#dad9d9";
            allBlocks[1].style.color = "#dad9d9";
            allBlocks[2].style.color = "#dad9d9";
            allBlocks[3].style.color = "#dad9d9";
            allBlocks[4].style.color = "#dad9d9";
            allBlocks[5].style.color = "#dad9d9";
            allBlocks[6].style.color = "#dad9d9";
            allBlocks[7].style.color = "#dad9d9";
            allBlocks[8].style.color = "#dad9d9";
            alert("Draw!");
        }
    }
    document.getElementById('restart').onclick = function(){
            allBlocks[0].innerHTML = "";
            allBlocks[1].innerHTML = "";
            allBlocks[2].innerHTML = "";
            allBlocks[3].innerHTML = "";
            allBlocks[4].innerHTML = "";
            allBlocks[5].innerHTML = "";
            allBlocks[6].innerHTML = "";
            allBlocks[7].innerHTML = "";
            allBlocks[8].innerHTML = "";
            allBlocks[0].style.color = "black";
            allBlocks[1].style.color = "black";
            allBlocks[2].style.color = "black";
            allBlocks[3].style.color = "black";
            allBlocks[4].style.color = "black";
            allBlocks[5].style.color = "black";
            allBlocks[6].style.color = "black";
            allBlocks[7].style.color = "black";
            allBlocks[8].style.color = "black";
        step = 0;
    }
}


