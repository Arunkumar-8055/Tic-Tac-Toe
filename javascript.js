let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset-btn");
let start=document.querySelector(".s-btn");
let nctnr=document.querySelector(".ncontener");
let msg=document.querySelector(".msg");



let turnO=true;
const pattern=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,4,8],
[0,3,6],
[1,4,7],
[2,5,8],
[2,4,6],
]
const resetgame=()=>{
    turnO=true
    enablebox();
    nctnr.classList.add("hide")
}
const enablebox=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const disablebox=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(turnO === true){
        box.innerText="🏀";
        turnO=false;
       }else{
        box.innerText="🏐"
        turnO=true;
       }
       box.disabled=true;
       checkwinner();
    })


    const showWinner=(winner)=>{
        msg.innerText=`Congratulaion is Win by"${winner}"`
        nctnr.classList.remove("hide");
        disablebox();
    }


    const checkwinner=()=>{
        for(let winpattern of pattern){
            console.log(winpattern[0],winpattern[1],winpattern[2]);
            console.log(boxes[winpattern[0]].innerText,
            boxes[winpattern[1]].innerText,
            boxes[winpattern[2]].innerText,
            );
            let pos1=boxes[winpattern[0]].innerText;
            let pos2=boxes[winpattern[1]].innerText;
            let pos3=boxes[winpattern[2]].innerText;
    
            if( pos1!="" && pos2!="" && pos3!=""){
                if(pos1===pos2&&pos2===pos3){
                    console.log("Winner");
                    showWinner(pos1);
                }
            }
        }
    }
})

start.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);

