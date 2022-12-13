    const field = document.getElementById('rows');
    let ChangeOne = 0 ;
    const player = document.querySelector('.player__row');
    const firstPlayer = document.getElementById('first');
    const secondPlayer = document.getElementById('second');
    const scoreFirst = player.querySelector('.player__score');
    const scoreSecond = player.querySelector('.player__score1');
    let scoreF=0;
    let scoreS=0;
    const restartGame = document.querySelector('.button');

for(let i=0;i<9;i++){
    const wrapper = document.createElement('div');
    wrapper.classList.add('element');
    field.append(wrapper);
}

count();

player.addEventListener('click', function(s){
    const targets = s.target;
    if(targets===firstPlayer){
        players(0);
    }else if(targets==secondPlayer){
        players(1);
    }
   
});

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

field.addEventListener('click', function(element){
    const target =element.target;
    if(ChangeOne==0){
        firstPlayer.classList.remove('active');
        secondPlayer.classList.add('active');
        target.innerHTML = `<img src="img/crest.png" class="pictures" alt="">`; 
        ChangeOne++;
    }
    else if(ChangeOne==1){
        firstPlayer.classList.add('active');
        secondPlayer.classList.remove('active');
        target.innerHTML = `<img src="img/zero.jpg" class="pictures" alt="">`;
        ChangeOne--;
    }
    win(target);
    
});

//elements

const elements = [...field.querySelectorAll('.element')];   

//win

function win(){
    let winCrosses=0;
    let winNoughts=0;
    
    if(elements[0].innerHTML==`<img src="img/zero.jpg" class="pictures" alt="">` && elements[1].innerHTML ==`<img src="img/zero.jpg" class="pictures" alt="">` && elements[2].innerHTML==`<img src="img/zero.jpg" class="pictures" alt="">`){
        winNoughts++
        secondPlayer.classList.add('win');
        restart(winNoughts);
    }if(elements[3].innerHTML==`<img src="img/zero.jpg" class="pictures" alt="">` && elements[4].innerHTML ==`<img src="img/zero.jpg" class="pictures" alt="">` && elements[5].innerHTML==`<img src="img/zero.jpg" class="pictures" alt="">`){
        winNoughts++
        secondPlayer.classList.add('win');
        restart(winNoughts);
    }if(elements[6].innerHTML==`<img src="img/zero.jpg" class="pictures" alt="">` && elements[7].innerHTML ==`<img src="img/zero.jpg" class="pictures" alt="">` && elements[8].innerHTML==`<img src="img/zero.jpg" class="pictures" alt="">`){
        winNoughts++
        secondPlayer.classList.add('win');
        restart(winNoughts);
    }if(elements[0].innerHTML==`<img src="img/zero.jpg" class="pictures" alt="">` && elements[4].innerHTML ==`<img src="img/zero.jpg" class="pictures" alt="">` && elements[8].innerHTML==`<img src="img/zero.jpg" class="pictures" alt="">`){
        winNoughts++
        secondPlayer.classList.add('win');
        restart(winNoughts);
    }if(elements[2].innerHTML==`<img src="img/zero.jpg" class="pictures" alt="">` && elements[4].innerHTML ==`<img src="img/zero.jpg" class="pictures" alt="">` && elements[6].innerHTML==`<img src="img/zero.jpg" class="pictures" alt="">`){
        winNoughts++
        secondPlayer.classList.add('win');
        restart(winNoughts);
    }if(elements[0].innerHTML==`<img src="img/zero.jpg" class="pictures" alt="">` && elements[3].innerHTML ==`<img src="img/zero.jpg" class="pictures" alt="">` && elements[6].innerHTML==`<img src="img/zero.jpg" class="pictures" alt="">`){
        winNoughts++
        secondPlayer.classList.add('win');
        restart(winNoughts);
    }if(elements[1].innerHTML==`<img src="img/zero.jpg" class="pictures" alt="">` && elements[4].innerHTML ==`<img src="img/zero.jpg" class="pictures" alt="">` && elements[7].innerHTML==`<img src="img/zero.jpg" class="pictures" alt="">`){
        winNoughts++
        secondPlayer.classList.add('win');
        restart(winNoughts);
    }if(elements[2].innerHTML==`<img src="img/zero.jpg" class="pictures" alt="">` && elements[5].innerHTML ==`<img src="img/zero.jpg" class="pictures" alt="">` && elements[8].innerHTML==`<img src="img/zero.jpg" class="pictures" alt="">`){
        winNoughts++
        secondPlayer.classList.add('win');
        restart(winNoughts);
    }
    //CROSESS
    if(elements[0].innerHTML==`<img src="img/crest.png" class="pictures" alt="">` && elements[1].innerHTML ==`<img src="img/crest.png" class="pictures" alt="">` && elements[2].innerHTML==`<img src="img/crest.png" class="pictures" alt="">`){
        winCrosses++;
        firstPlayer.classList.add('win');
        restart(winCrosses);
    }if(elements[3].innerHTML==`<img src="img/crest.png" class="pictures" alt="">` && elements[4].innerHTML ==`<img src="img/crest.png" class="pictures" alt="">` && elements[5].innerHTML==`<img src="img/crest.png" class="pictures" alt="">`){
        winCrosses++;
        firstPlayer.classList.add('win');
        restart(winCrosses);
    }if(elements[6].innerHTML==`<img src="img/crest.png" class="pictures" alt="">` && elements[7].innerHTML ==`<img src="img/crest.png" class="pictures" alt="">` && elements[8].innerHTML==`<img src="img/crest.png" class="pictures" alt="">`){
        winCrosses++;
        firstPlayer.classList.add('win');
        restart(winCrosses);
    }if(elements[0].innerHTML==`<img src="img/crest.png" class="pictures" alt="">` && elements[4].innerHTML ==`<img src="img/crest.png" class="pictures" alt="">` && elements[8].innerHTML==`<img src="img/crest.png" class="pictures" alt="">`){
        winCrosses++;
        firstPlayer.classList.add('win');
        restart(winCrosses);
    }if(elements[2].innerHTML==`<img src="img/crest.png" class="pictures" alt="">` && elements[4].innerHTML ==`<img src="img/crest.png" class="pictures" alt="">` && elements[6].innerHTML==`<img src="img/crest.png" class="pictures" alt="">`){
        winCrosses++;
        firstPlayer.classList.add('win');
        restart(winCrosses);
    }if(elements[0].innerHTML==`<img src="img/crest.png" class="pictures" alt="">` && elements[3].innerHTML ==`<img src="img/crest.png" class="pictures" alt="">` && elements[6].innerHTML==`<img src="img/crest.png" class="pictures" alt="">`){
        winCrosses++;
        firstPlayer.classList.add('win');
        restart(winCrosses);
    }if(elements[1].innerHTML==`<img src="img/crest.png" class="pictures" alt="">` && elements[4].innerHTML ==`<img src="img/crest.png" class="pictures" alt="">` && elements[7].innerHTML==`<img src="img/crest.png" class="pictures" alt="">`){
        winCrosses++;
        firstPlayer.classList.add('win');
        restart(winCrosses);
    }if(elements[2].innerHTML==`<img src="img/crest.png" class="pictures" alt="">` && elements[5].innerHTML ==`<img src="img/crest.png" class="pictures" alt="">` && elements[8].innerHTML==`<img src="img/crest.png" class="pictures" alt="">`){
        winCrosses++;
        firstPlayer.classList.add('win');
        restart(winCrosses);
    }
}

//restart game

function restart(){
    if(firstPlayer.classList.contains('win')){
        firstPlayer.classList.remove('active');
        secondPlayer.classList.remove('active');
        ChangeOne=0;
        elements[0].innerHTML=``;
        elements[1].innerHTML=``;
        elements[2].innerHTML=``;
        elements[3].innerHTML=``;
        elements[4].innerHTML=``;
        elements[5].innerHTML=``;
        elements[6].innerHTML=``;
        elements[7].innerHTML=``;
        elements[8].innerHTML=``;
        count();
    }else if(secondPlayer.classList.contains('win')){
        firstPlayer.classList.remove('active');
        secondPlayer.classList.remove('active');
        ChangeOne=0;
        elements[0].innerHTML=``;
        elements[1].innerHTML=``;
        elements[2].innerHTML=``;
        elements[3].innerHTML=``;
        elements[4].innerHTML=``;
        elements[5].innerHTML=``;
        elements[6].innerHTML=``;
        elements[7].innerHTML=``;
        elements[8].innerHTML=``;
        count();
    }
}

//score

function count(){ 
    scoreFirst.innerHTML=`${scoreF}`;
    scoreSecond.innerHTML=`${scoreS}`;
    if(firstPlayer.classList.contains('win')){
        scoreFirst.innerHTML=`${++scoreF}`;
        firstPlayer.classList.remove('win');
        console.log(scoreF);
        
    }if(secondPlayer.classList.contains('win')){
        scoreSecond.innerHTML=`${++scoreS}`;
       secondPlayer.classList.remove('win');
    }
    
}

//restart game

restartGame.addEventListener('click',function(e){
    firstPlayer.classList.contains('win')
        firstPlayer.classList.remove('active');
        secondPlayer.classList.remove('active');
        ChangeOne=0;
        elements[0].innerHTML=``;
        elements[1].innerHTML=``;
        elements[2].innerHTML=``;
        elements[3].innerHTML=``;
        elements[4].innerHTML=``;
        elements[5].innerHTML=``;
        elements[6].innerHTML=``;
        elements[7].innerHTML=``;
        elements[8].innerHTML=``;
        scoreF=0;
        scoreS=0;
});






