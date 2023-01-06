//variables 
    const field = document.getElementById('field');

    let ChangeOne = 0 ;

    const players = document.querySelector('.js__players');

    const firstPlayer = document.getElementById('first');

    const secondPlayer = document.getElementById('second');

    const scoreFirst = players.querySelector('.js__scoreFirst');

    const scoreSecond = players.querySelector('.js__scoreSecond');

    const restartGame = document.querySelector('.js__restartGame');  

    const winCrest = document.querySelector('.js__Crest');

    const winNought = document.querySelector('.js__Nought');

    let gameStatus = false;

    let scoreF = 0;

    let scoreS = 0;

    let busy = true;

    const crest = [];

    const zero = [];

    const arr = [
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
    
    score();
    
}

//change player move
 
function player(i){
    
        if(i==0){
            
            firstPlayer.classList.add('active');
            
            secondPlayer.classList.remove('active');
            
            ChangeOne = i;
            
            i++
            
        } else if(i==1){
        
            firstPlayer.classList.remove('active');
        
            secondPlayer.classList.add('active');
        
            ChangeOne = i;
        
            i--;   
        
        }
    }

// checkWin
            
function checkWin(crest,zero){
    
    for(let i=0; i<arr.length; i++){
        
            let crestScore=0;
        
            let zeroScore=0;
        
        for(let j=0; j<arr[i].length; j++){
            
                for(let k=0; k<crest.length; k++){
                    
                    if(crest[k]==arr[i][j]){    
                        
                            crestScore++;
                        
                        if(crestScore>2){
                        
                            winner(crest);
                        
                            resetElements();
                        }
                        
                    }
                    
            }
            
                for(let z=0; z<zero.length; z++){
                        
                      if(zero[z]==arr[i][j]){
                          
                          zeroScore++;
                          
                          if(zeroScore>2){
                              
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
        
        winCrest.classList.add('winner');
        
        winCrest.classList.add('won');
        
        resetElements();
        
    }
    
    if(Winner==zero){
        
        winNought.classList.add('winner');
        
        winNought.classList.add('won');
        
        resetElements();
        
    }
    
}

//resetElements function

function resetElements(){
    
        gameStatus = false;
        
        ChangeOne = 0;
    
        crest.splice(0,5);
        
        zero.splice(0,5);
    
        score();
    
        firstPlayer.classList.remove('active');
    
        secondPlayer.classList.remove('active');
    
        for(let i=0;i<elements.length;i++){
            
            elements[i].innerHTML=``;
            
        }
    
}

//score

function score(){ 
    
    scoreFirst.innerHTML=`${scoreF}`;
    
    scoreSecond.innerHTML=`${scoreS}`;
    
    if(winCrest.classList.contains('won')){
        
        scoreFirst.innerHTML=`${++scoreF}`;
        
        winCrest.classList.remove('won');
        
    }
    
    if(winNought.classList.contains('won')){
        
        scoreSecond.innerHTML=`${++scoreS}`;
        
        winNought.classList.remove('won');
        
    }
    
}

//field elements

field.addEventListener('click', function({target}){
    
        if(target.innerHTML==''){
            
            if(ChangeOne==0){
                
                winCrest.classList.remove('winner');
                
                winNought.classList.remove('winner');
                
               crest.push(target.dataset.id);
                
                target.innerHTML='X';
                
                firstPlayer.classList.remove('active');
                
                secondPlayer.classList.add('active');
                
                ChangeOne++;
                
            }else if(ChangeOne==1){
                
                winCrest.classList.remove('winner');
                
                winNought.classList.remove('winner');
                
                zero.push(target.dataset.id);
                
                target.innerHTML='O';
                
                firstPlayer.classList.add('active');
                
                secondPlayer.classList.remove('active');
                
                ChangeOne--;
                
            }    
            
        }
    
    checkWin(crest,zero);
    
    });

//chose move

players.addEventListener('click', function({target}){
    
        winCrest.classList.remove('winner');
    
        winNought.classList.remove('winner');
    
    if(gameStatus==false){
               
        if(target==firstPlayer){
            
            player(0);
            
        }else if(target==secondPlayer){
            
             player(1);
            
        }
               
    }
    
    gameStatus=true;
    
});

//restart game

restartGame.addEventListener('click',function(e){
    
        resetElements();
    
        winCrest.classList.remove('winner');
    
        winNought.classList.remove('winner');
    
});






