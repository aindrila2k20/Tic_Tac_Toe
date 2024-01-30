let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const resetBox=()=>{
    turnO=true;
    enableBox();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;

        checkWinner();
    });
});
const enableBox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const disableBox=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, The winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
}
const drawGame=()=>{
    msg.innerText="Draw Game!!";
    msgContainer.classList.remove("hide");
    disableBox();
}
const checkWinner=()=>{
    let c=1;
    for(let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            c++;
            if(pos1===pos2 && pos2===pos3){
                console.log("winner");
                showWinner(pos1);
            }
        }
    }
    if(c===9){
        drawGame();
    }
};
reset.addEventListener("click",resetBox);