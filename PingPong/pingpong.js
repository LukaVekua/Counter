let firstBtn = document.getElementById("one");
let secondBtn = document.getElementById("two");
let reset = document.getElementById("rst");
let firstPlayer = document.getElementById("frst");
let secondPlayer = document.getElementById("scnd");
let setting = document.getElementById("set");

let scrOne = 0; 
let scrTwo = 0;


let scoreAdd = (e) =>{

    if(e.target == firstBtn){
        scrOne++;
        firstPlayer.innerText = scrOne;
    }
    else if(e.target == secondBtn){
        scrTwo++;
        secondPlayer.innerText = scrTwo;
    }
    else{
        scrOne = 0;
        scrTwo = 0;
        firstPlayer.innerText = scrOne;
        secondPlayer.innerText = scrTwo;
        firstBtn.disabled = false;
        secondBtn.disabled = false;
        firstPlayer.style.color = "black";
        secondPlayer.style.color ="black";
    }

    if(setting.value == scrOne){
        firstPlayer.style.color = "green";
        secondPlayer.style.color ="red";
        firstBtn.disabled = true;
        secondBtn.disabled = true;
    }
    
    else if(setting.value == scrTwo){
        secondPlayer.style.color ="green";
        firstPlayer.style.color = "red";
        firstBtn.disabled = true;
        secondBtn.disabled = true;
    }
    
}



firstBtn.addEventListener("click",scoreAdd);
secondBtn.addEventListener("click",scoreAdd);
reset.addEventListener("click",scoreAdd);



