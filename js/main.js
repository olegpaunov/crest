const field = document.querySelector('.field__row');
let ChangeOne=0;
const player = document.querySelector('.player__row');
     const firstPlayer= document.getElementById('first');
    const secondPlayer =document.getElementById('second');
for(let i=0;i<9;i++){
        const wrapper = document.createElement('div');
        wrapper.classList.add('element');
        field.append(wrapper);
}

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
    console.log(target);
    console.log(element.target);
    if(ChangeOne==0){
        firstPlayer.classList.remove('active');
        secondPlayer.classList.add('active');
        target.innerHTML = `<img src="img/crest.png" class="pictures" alt="">`;
        ChangeOne++;
    }else if(ChangeOne==1){
        firstPlayer.classList.add('active');
        secondPlayer.classList.remove('active');
        target.innerHTML = `<img src="img/zero.jpg" class="pictures" alt="">`;
        ChangeOne--;
    }
    
});



