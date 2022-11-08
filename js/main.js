
const playerfirst=document.querySelector(".score__player");
const player__second=document.querySelector(".score__player1");
playerfirst.classList.add('turn');
let r=1;
const cell=document.querySelector(".cell");
const cell2=document.querySelector(".cell2");
const cell3=document.querySelector(".cell3");
const cell4=document.querySelector(".cell4");
const cell5=document.querySelector(".cell5");
const cell6=document.querySelector(".cell6");
const cell7=document.querySelector(".cell7");
const cell8=document.querySelector(".cell8");
const cell9=document.querySelector(".cell9");

const crest=document.querySelector(".cell__crest");
const circle=document.querySelector(".cell__circle");
const crest2=document.querySelector(".cell__crest2");
const circle2=document.querySelector(".cell__circle2");
const crest3=document.querySelector(".cell__crest3");
const circle3=document.querySelector(".cell__circle3");
const crest4=document.querySelector(".cell__crest4");
const circle4=document.querySelector(".cell__circle4");
const crest5=document.querySelector(".cell__crest5");
const circle5=document.querySelector(".cell__circle5");
const crest6=document.querySelector(".cell__crest6");
const circle6=document.querySelector(".cell__circle6");
const crest7=document.querySelector(".cell__crest7");
const circle7=document.querySelector(".cell__circle7");
const crest8=document.querySelector(".cell__crest8");
const circle8=document.querySelector(".cell__circle8");
const crest9=document.querySelector(".cell__crest9");
const circle9=document.querySelector(".cell__circle9");
const restart=document.querySelector(".subfield__text");
let turn='0';

player__second.addEventListener("click", function (event){
        player__second.classList.add('turn');
    playerfirst.classList.remove('turn');
    if(turn==0){
        turn=1;
        console.log(turn);
    }
});

playerfirst.addEventListener("click", function(t){
    playerfirst.classList.add('turn');
    player__second.classList.remove('turn');
        if(turn==1){
            turn=0;
            console.log(turn);
        }
});

cell.addEventListener("click", function(e){
    for(let s;0<1;){
        if(turn==0){
        crest.classList.add('active');
        circle.classList.remove('active');
            
            playerfirst.classList.remove('turn');
            player__second.classList.add('turn');
            turn=1;
            break;
    }if(turn==1){
        circle.classList.add('active');
        crest.classList.remove('active');
        player__second.classList.remove('turn');
        playerfirst.classList.add('turn');
        turn=0;
        break;
    }
        
    }
    
    console.log(turn);
});

cell2.addEventListener("click", function(e){
    for(let s;0<1;){
        if(turn==0){
        crest2.classList.add('active');
        circle2.classList.remove('active');
            
            playerfirst.classList.remove('turn');
            player__second.classList.add('turn');
            turn=1;
            break;
    }if(turn==1){
        circle2.classList.add('active');
        crest2.classList.remove('active');
        player__second.classList.remove('turn');
        playerfirst.classList.add('turn');
        turn=0;
        break;
    }
        
    }
        console.log(turn);
});

cell3.addEventListener("click", function(e){
    for(let s;0<1;){
        if(turn==0){
        crest3.classList.add('active');
        circle3.classList.remove('active');
            
            playerfirst.classList.remove('turn');
            player__second.classList.add('turn');
            turn=1;
            break;
    }if(turn==1){
        circle3.classList.add('active');
        crest3.classList.remove('active');
        player__second.classList.remove('turn');
        playerfirst.classList.add('turn');
        turn=0;
        break;
    }
        
    }
});

cell4.addEventListener("click", function(e){
    for(let s;0<1;){
        if(turn==0){
        crest4.classList.add('active');
        circle4.classList.remove('active');
            
            playerfirst.classList.remove('turn');
            player__second.classList.add('turn');
            turn=1;
            break;
    }if(turn==1){
        circle4.classList.add('active');
        crest4.classList.remove('active');
        player__second.classList.remove('turn');
        playerfirst.classList.add('turn');
        turn=0;
        break;
    }
        
    }
});

cell5.addEventListener("click", function(e){
    for(let s;0<1;){
        if(turn==0){
        crest5.classList.add('active');
        circle5.classList.remove('active');
            
            playerfirst.classList.remove('turn');
            player__second.classList.add('turn');
            turn=1;
            break;
    }if(turn==1){
        circle5.classList.add('active');
        crest5.classList.remove('active');
        player__second.classList.remove('turn');
        playerfirst.classList.add('turn');
        turn=0;
        break;
    }
        
    }
});

cell6.addEventListener("click", function(e){
    for(let s;0<1;){
        if(turn==0){
        crest6.classList.add('active');
        circle6.classList.remove('active');
            
            playerfirst.classList.remove('turn');
            player__second.classList.add('turn');
            turn=1;
            break;
    }if(turn==1){
        circle6.classList.add('active');
        crest6.classList.remove('active');
        player__second.classList.remove('turn');
        playerfirst.classList.add('turn');
        turn=0;
        break;
    }
        
    }
});

cell7.addEventListener("click", function(e){
    for(let s;0<1;){
        if(turn==0){
        crest7.classList.add('active');
        circle7.classList.remove('active');
            
            playerfirst.classList.remove('turn');
            player__second.classList.add('turn');
            turn=1;
            break;
    }if(turn==1){
        circle7.classList.add('active');
        crest7.classList.remove('active');
        player__second.classList.remove('turn');
        playerfirst.classList.add('turn');
        turn=0;
        break;
    }
        
    }
});

cell8.addEventListener("click", function(e){
    for(let s;0<1;){
        if(turn==0){
        crest8.classList.add('active');
        circle8.classList.remove('active');
            
            playerfirst.classList.remove('turn');
            player__second.classList.add('turn');
            turn=1;
            break;
    }if(turn==1){
        circle8.classList.add('active');
        crest8.classList.remove('active');
        player__second.classList.remove('turn');
        playerfirst.classList.add('turn');
        turn=0;
        break;
    }
        
    }
});

cell9.addEventListener("click", function(e){
    for(let s;0<1;){
        if(turn==0){
        crest9.classList.add('active');
        circle9.classList.remove('active');
            
            playerfirst.classList.remove('turn');
            player__second.classList.add('turn');
            turn=1;
            break;
    }if(turn==1){
        circle9.classList.add('active');
        crest9.classList.remove('active');
        player__second.classList.remove('turn');
        playerfirst.classList.add('turn');
        turn=0;
        break;
    }
        
    }
});
restart.addEventListener("click",function(r){
    turn=0;
    circle.classList.remove('active');
    circle2.classList.remove('active');
    circle3.classList.remove('active');
    circle4.classList.remove('active');
    circle5.classList.remove('active');
    circle6.classList.remove('active');
    circle7.classList.remove('active');
    circle8.classList.remove('active');
    circle9.classList.remove('active');
    crest.classList.remove('active');
    crest2.classList.remove('active');
    crest3.classList.remove('active');
    crest4.classList.remove('active');
    crest5.classList.remove('active');
    crest6.classList.remove('active');
    crest7.classList.remove('active');
    crest8.classList.remove('active');
    crest9.classList.remove('active');
    playerfirst.classList.add('turn');
    player__second.classList.remove('turn');
});
