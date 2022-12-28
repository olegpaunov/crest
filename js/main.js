    const field = document.getElementById('rows');
    let ChangeOne = 0 ;
    const js__player = document.querySelector('.player__row');
    const js__firstPlayer = document.getElementById('first');
    const js__secondPlayer = document.getElementById('second');
    const js__scoreFirst = js__player.querySelector('.player__score');
    const js__scoreSecond = js__player.querySelector('.player__score1');
    const js__restartGame = document.querySelector('.button');  
    const js__winCrest = document.querySelector('.win__Crest');
    const js__winNought = document.querySelector('.win__Nought');
    let gameStatus=false;
    let scoreF=0;
    let scoreS=0;
    let busy =true;
    let crest=[];
    let zero=[];
    const arr=[
            [0,1,2],
        
            [3,4,5],
        
            [6,7,8],
        
            [0,4,8],
        
            [2,4,6],
        
            [0,3,6],
        
            [1,4,7],
        
            [2,5,8]
    ]; 
//this function help variable elements
    createField();
    const elements = [...field.querySelectorAll('.element')]; 

//create field
function createField(){
    for(let i=0;i<9;i++){
    const wrapper = document.createElement('div');
    wrapper.setAttribute('data-id', i);
    wrapper.classList.add('element');
    field.append(wrapper);
    }
    count();
}

//change player move
 
function players(i){
        if(i==0){
            js__firstPlayer.classList.add('active');
            js__secondPlayer.classList.remove('active');
            ChangeOne = i;
            i++
        }else if(i==1){
            js__firstPlayer.classList.remove('active');
            js__secondPlayer.classList.add('active');
            ChangeOne = i;
            i--;    
        }
    }



// checkWin
            
function checkWin(crest,zero){
    for(let i=0; i<arr.length; i++){
            let crestCount=0;
            let zeroCount=0;
        for(let j=0; j<arr[i].length; j++){
                for(let k=0; k<crest.length; k++){
                    if(crest[k]==arr[i][j]){
                        crestCount++;
                    if(crestCount>2){
                        winner(crest);
                        resetElements();
                    }
                }
            }
                    for(let z=0; z<zero.length; z++){
                      if(zero[z]==arr[i][j]){
                          zeroCount++;
                          if(zeroCount>2){
                                  winner(zero);
                           resetElements();
                         }
                  }
              }
        }
    }
}

//winner

function winner(Winner){
    if(Winner==crest){
        js__winCrest.classList.add('winner');
        js__winCrest.classList.add('won');
        resetElements();
    }if(Winner==zero){
        js__winNought.classList.add('winner');
        js__winNought.classList.add('won');
        resetElements();
    }
}

//resetElements function

function resetElements(){
        crest=[];
        zero=[];
        ChangeOne=0;
        gameStatus=false;
        count();
        js__firstPlayer.classList.remove('active');
        js__secondPlayer.classList.remove('active');
        for(let i=0;i<elements.length;i++){
            elements[i].innerHTML=``;
        }
}

//score

function count(){ 
    js__scoreFirst.innerHTML=`${scoreF}`;
    js__scoreSecond.innerHTML=`${scoreS}`;
    if(js__winCrest.classList.contains('won')){
        js__scoreFirst.innerHTML=`${++scoreF}`;
        js__winCrest.classList.remove('won');
    }if(js__winNought.classList.contains('won')){
        js__scoreSecond.innerHTML=`${++scoreS}`;
       js__winNought.classList.remove('won');
    }
}


//field elements

field.addEventListener('click', function(e){
    const target = e.target;
        if(target.innerHTML==''){
            if(ChangeOne==0){
                js__winCrest.classList.remove('winner');
                js__winNought.classList.remove('winner');
               crest.push(target.dataset.id);
                target.innerHTML='X';
                js__firstPlayer.classList.remove('active');
                js__secondPlayer.classList.add('active');
                ChangeOne++;
            }else if(ChangeOne==1){
                js__winCrest.classList.remove('winner');
                js__winNought.classList.remove('winner');
                zero.push(target.dataset.id);
                target.innerHTML='O';
                js__firstPlayer.classList.add('active');
                js__secondPlayer.classList.remove('active');
                ChangeOne--;
            }    
        }
    checkWin(crest,zero);
    });

//chose move

js__player.addEventListener('click', function(s){
    const targets = s.target;
        js__winCrest.classList.remove('winner');
        js__winNought.classList.remove('winner');
           if(gameStatus==false){
        if(targets==js__firstPlayer){
            players(0);
        }else if(targets==js__secondPlayer){
             players(1);
        }
    }
    gameStatus=true;
});

//restart game

js__restartGame.addEventListener('click',function(e){
        resetElements();
        js__winCrest.classList.remove('winner');
        js__winNought.classList.remove('winner');
});
