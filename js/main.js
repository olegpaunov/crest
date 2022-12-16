    const field = document.getElementById('rows');
    let ChangeOne = 0 ;
    const player = document.querySelector('.player__row');
    const firstPlayer = document.getElementById('first');
    const secondPlayer = document.getElementById('second');
    const scoreFirst = player.querySelector('.player__score');
    const scoreSecond = player.querySelector('.player__score1');
    const restartGame = document.querySelector('.button');  
    let gameStatus=false;
    let scoreF=0;
    let scoreS=0;
    let busy =true;
    

//create field

for(let i=0;i<9;i++){
    const wrapper = document.createElement('div');
    wrapper.classList.add('element');
    field.append(wrapper);
}

count();

//chose move
player.addEventListener('click', function(s){
    const targets = s.target;
           if(gameStatus==false){
        if(targets==firstPlayer){
            players(0);
        }else if(targets==secondPlayer){
             players(1);
        }
    }
    gameStatus=true;
});


//change player move

function players(i){
        if(i==0){
            firstPlayer.classList.add('active');
            secondPlayer.classList.remove('active');
            ChangeOne = i;
            i++
        }else if(i==1){
            firstPlayer.classList.remove('active');
            secondPlayer.classList.add('active');
            ChangeOne = i;
            i--;    
        }
    }

//massive of elements

    const elements = [...field.querySelectorAll('.element')]; 
    
    const arr=[
            [elements[0],elements[1],elements[2]],
            [elements[3],elements[4],elements[5]],
            [elements[6],elements[7],elements[8]],
            [elements[0],elements[3],elements[6]],
            [elements[1],elements[4],elements[7]],
            [elements[2],elements[5],elements[8]],
            [elements[0],elements[4],elements[8]],
            [elements[2],elements[4],elements[6]]
    ];  

//field elements

field.addEventListener('click', function(element){
    const target = element.target;
  
    if(!target.classList.contains('busy')){
        
         target.classList.add('busy');
        
        if(ChangeOne==0){
                target.innerHTML = `<img src="img/crest.png" class="pictures busy" alt="">`;
                    firstPlayer.classList.remove('active');
                    secondPlayer.classList.add('active');
                    ChangeOne++;  
            }else if(ChangeOne==1){
                target.innerHTML = `<img src="img/zero.jpg" class="pictures busy" alt="">`;
                 firstPlayer.classList.add('active');
                secondPlayer.classList.remove('active');
                ChangeOne--; 
            }
        win();
    }
});

//win

function win(a){
    let winCrosses=0;
    let winNoughts=0;
    if(arr[0][0].innerHTML==`<img src="img/zero.jpg" class="pictures busy" alt="">` && arr[0][1].innerHTML==`<img src="img/zero.jpg" class="pictures busy" alt="">` && arr[0][2].innerHTML==`<img src="img/zero.jpg" class="pictures busy" alt="">`){
        winNoughts++;
        secondPlayer.classList.add('win');
        restart(a);
    }if(arr[1][0].innerHTML==`<img src="img/zero.jpg" class="pictures busy" alt="">` && arr[1][1].innerHTML==`<img src="img/zero.jpg" class="pictures busy" alt="">` && arr[1][2].innerHTML==`<img src="img/zero.jpg" class="pictures busy" alt="">`){
        winNoughts++
        secondPlayer.classList.add('win');
        restart(a);
    }if(arr[2][0].innerHTML==`<img src="img/zero.jpg" class="pictures busy" alt="">` && arr[2][1].innerHTML==`<img src="img/zero.jpg" class="pictures busy" alt="">` && arr[2][2].innerHTML==`<img src="img/zero.jpg" class="pictures busy" alt="">`){
        winNoughts++
        secondPlayer.classList.add('win');
        restart(a);
    }if(arr[3][0].innerHTML==`<img src="img/zero.jpg" class="pictures busy" alt="">` && arr[3][1].innerHTML==`<img src="img/zero.jpg" class="pictures busy" alt="">` && arr[3][2].innerHTML==`<img src="img/zero.jpg" class="pictures busy" alt="">`){
        winNoughts++
        secondPlayer.classList.add('win');
       restart(a);
    }if(arr[4][0].innerHTML==`<img src="img/zero.jpg" class="pictures busy" alt="">` && arr[4][1].innerHTML==`<img src="img/zero.jpg" class="pictures busy" alt="">` && arr[4][2].innerHTML==`<img src="img/zero.jpg" class="pictures busy" alt="">`){
        winNoughts++
        secondPlayer.classList.add('win');
        restart(a);
    }if(arr[5][0].innerHTML==`<img src="img/zero.jpg" class="pictures busy" alt="">` && arr[5][1].innerHTML==`<img src="img/zero.jpg" class="pictures busy" alt="">` && arr[5][2].innerHTML==`<img src="img/zero.jpg" class="pictures busy" alt="">`){
        winNoughts++
        secondPlayer.classList.add('win');
       restart(a);
    }if(arr[6][0].innerHTML==`<img src="img/zero.jpg" class="pictures busy" alt="">` && arr[6][1].innerHTML==`<img src="img/zero.jpg" class="pictures busy" alt="">` && arr[6][2].innerHTML==`<img src="img/zero.jpg" class="pictures busy" alt="">`){
        winNoughts++
        secondPlayer.classList.add('win');
        restart(a);
    }if(arr[7][0].innerHTML==`<img src="img/zero.jpg" class="pictures busy" alt="">` && arr[7][1].innerHTML==`<img src="img/zero.jpg" class="pictures busy" alt="">` && arr[7][2].innerHTML==`<img src="img/zero.jpg" class="pictures busy" alt="">`){    
        winNoughts++
        secondPlayer.classList.add('win');
        restart(a);
    }
    //CROSESS
    if(arr[0][0].innerHTML==`<img src="img/crest.png" class="pictures busy" alt="">` && arr[0][1].innerHTML ==`<img src="img/crest.png" class="pictures busy" alt="">` && arr[8][2].innerHTML==`<img src="img/crest.png" class="pictures busy" alt="">`){
        winCrosses++;
        firstPlayer.classList.add('win');
        restart(a);
    }if(arr[1][0].innerHTML==`<img src="img/crest.png" class="pictures busy" alt="">` && arr[1][1].innerHTML ==`<img src="img/crest.png" class="pictures busy" alt="">` && arr[1][2].innerHTML==`<img src="img/crest.png" class="pictures busy" alt="">`){
        winCrosses++;
        firstPlayer.classList.add('win');
        restart(a);
    }if(arr[2][0].innerHTML==`<img src="img/crest.png" class="pictures busy" alt="">` && arr[2][1].innerHTML ==`<img src="img/crest.png" class="pictures busy" alt="">` && arr[2][2].innerHTML==`<img src="img/crest.png" class="pictures busy" alt="">`){
        winCrosses++;
        firstPlayer.classList.add('win');
        restart(a);
    }if(arr[3][0].innerHTML==`<img src="img/crest.png" class="pictures busy" alt="">` && arr[3][1].innerHTML ==`<img src="img/crest.png" class="pictures busy" alt="">` && arr[3][2].innerHTML==`<img src="img/crest.png" class="pictures busy" alt="">`){
        winCrosses++;
        firstPlayer.classList.add('win');
        restart(a);
    }if(arr[4][0].innerHTML==`<img src="img/crest.png" class="pictures busy" alt="">` && arr[4][1].innerHTML ==`<img src="img/crest.png" class="pictures busy" alt="">` && arr[4][2].innerHTML==`<img src="img/crest.png" class="pictures busy" alt="">`){
        winCrosses++;
        firstPlayer.classList.add('win');
        restart(a);
    }if(arr[5][0].innerHTML==`<img src="img/crest.png" class="pictures busy" alt="">` && arr[5][1].innerHTML ==`<img src="img/crest.png" class="pictures busy" alt="">` && arr[5][2].innerHTML==`<img src="img/crest.png" class="pictures busy" alt="">`){
        winCrosses++;
        firstPlayer.classList.add('win');
        restart(a);
    }if(arr[6][0].innerHTML==`<img src="img/crest.png" class="pictures busy" alt="">` && arr[6][1].innerHTML ==`<img src="img/crest.png" class="pictures busy" alt="">` && arr[6][2].innerHTML==`<img src="img/crest.png" class="pictures busy" alt="">`){
        winCrosses++;
        firstPlayer.classList.add('win');
        restart(a);
    }if(arr[7][0].innerHTML==`<img src="img/crest.png" class="pictures busy" alt="">` && arr[7][1].innerHTML ==`<img src="img/crest.png" class="pictures busy" alt="">` && arr[7][2].innerHTML==`<img src="img/crest.png" class="pictures busy" alt="">`){
        winCrosses++;
        firstPlayer.classList.add('win');
        restart(a);
    }
}

//restart game

function restart(b){
    if(firstPlayer.classList.contains('win')){
        resetElements(b);
        count();
    }else if(secondPlayer.classList.contains('win')){
        resetElements(b);
        count();
    }
}

//resetElements function

function resetElements(){
        firstPlayer.classList.remove('active');
        secondPlayer.classList.remove('active');
        ChangeOne=0;
        for(let i=0;i<elements.length;i++){
            elements[i].innerHTML=``;
            elements[i].classList.remove('busy');
        }
        gameStatus=false;

}

//score

function count(){ 
    scoreFirst.innerHTML=`${scoreF}`;
    scoreSecond.innerHTML=`${scoreS}`;
    if(firstPlayer.classList.contains('win')){
        scoreFirst.innerHTML=`${++scoreF}`;
        firstPlayer.classList.remove('win');
    }if(secondPlayer.classList.contains('win')){
        scoreSecond.innerHTML=`${++scoreS}`;
       secondPlayer.classList.remove('win');
    }
    
}

//restart game

restartGame.addEventListener('click',function(e){
        resetElements();
});






