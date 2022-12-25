    const field = document.getElementById('rows');
    let ChangeOne = 0 ;
    const player = document.querySelector('.player__row');
    const firstPlayer = document.getElementById('first');
   //все классы которые ты ищешь в js должны иметь добавочное js-
// к примеру был класс second, стал js-second и так для всех, нужно разделять js и css и в js не использовать классы их css
    const secondPlayer = document.getElementById('second');
    const scoreFirst = player.querySelector('.player__score');
    const scoreSecond = player.querySelector('.player__score1');
    const restartGame = document.querySelector('.button'); 
// слишком короткое название, вобще не понятно что там, такое ок если оно задекларованно и об этом все знают
    const dwC = document.querySelector('.win__Crest');
    const dwN = document.querySelector('.win__Nought');
    let gameStatus=false;
    let scoreF=0;
    let scoreS=0;
//busy не использется нужно удалить
    let busy =true;

//create field
// нужно вынести в метод 
for(let i=0;i<9;i++){
    const wrapper = document.createElement('div');
    wrapper.setAttribute('data-id', i);
    wrapper.classList.add('element');
    field.append(wrapper);
}
// count это когда идёт счёт чего то, тут ничего не считаешь
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
// выровнять нужно
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
// все обявления желательно делать вверху, после этого должны идти методы а потом уже вызовы функций

/*
for examples

const arr = [];
const element = document.querySelector('elemtn');

function test() {
    arr.push(1)
    return: arr;
}

test();

element.addEventListener('click', () => {
    //do anything
})


ну и в таком порядке дальше формровать код.

*/
    const elements = [...field.querySelectorAll('.element')]; 
    let crest=[];
    let zero=[];
    const arr=[
            [0,1,2],
        
            [3,4,5],
        
            [6,7,8],
        
            [0,4,8],
        
            [1,4,6],
        
            [0,3,6],
        
            [1,4,7],
        
            [2,5,8]
    ]; 
    

//field elements

field.addEventListener('click', function(e){
    const target = e.target;
    // не правильное использование ковычек, `` https://mate-academy.github.io/style-guides/javascript.html#6-strings 
        if(target.innerHTML==``){
            if(ChangeOne==0){
               crest.push(target.dataset.id);
                target.innerHTML=`X`;
                firstPlayer.classList.remove('active');
                secondPlayer.classList.add('active');
                ChangeOne++;
                
            }else if(ChangeOne==1){
                zero.push(target.dataset.id);
                target.innerHTML='O';
                firstPlayer.classList.add('active');
                secondPlayer.classList.remove('active');
                ChangeOne--;
            }    
        }
    checkWin(crest,zero);
    });

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
                        dW(crest);
                        resetElements();
                    }
                }
            }
                    for(let z=0; z<zero.length; z++){
                      if(zero[z]==arr[i][j]){
                          zeroCount++;
                          if(zeroCount>2){
                                  dW(zero);
                           resetElements();
                         }
                  }
              }
        }
    }
}


//
function dW(dw){
    if(dw==crest){
        dwC.classList.add('winner');
        dwC.classList.add('won');
        resetElements();
    }if(dw==zero){
        dwN.classList.add('winner');
        dwN.classList.add('won');
        resetElements();
    }
}

//resetElements function

function resetElements(){
        firstPlayer.classList.remove('active');
        secondPlayer.classList.remove('active');
        ChangeOne=0;
        for(let i=0;i<elements.length;i++){
            elements[i].innerHTML=``;
        }
        count();
        crest=[];
        zero=[];
        gameStatus=false;
}

//score

function count(){ 
    scoreFirst.innerHTML=`${scoreF}`;
    scoreSecond.innerHTML=`${scoreS}`;
    if(dwC.classList.contains('won')){
        scoreFirst.innerHTML=`${++scoreF}`;
        dwC.classList.remove('won');
    }if(dwN.classList.contains('won')){
        scoreSecond.innerHTML=`${++scoreS}`;
       dwN.classList.remove('won');
    }
}

//restart game

restartGame.addEventListener('click',function(e){
        resetElements();
        dwC.classList.remove('winner');
        dwN.classList.remove('winner');
});






