let playerAns = document.querySelector(".playerans")
let compAns = document.querySelector(".compans")

let rockBtn = document.querySelector(".rock")
let paperBtn = document.querySelector(".paper")
let scissorsBtn = document.querySelector(".scissor")

let result = document.querySelector(".result")

let plyerScore = document.querySelector(".playerscore")
let compScore = document.querySelector(".compscore")

plyerScore.innerText = 0
compScore.innerText = 0


let resetBtn = document.querySelector(".resetbtn")


function getRanodmElement(arr){
    return arr[Math.floor(Math.random()*arr.length)];
}

let arr = ["✊", "✋", "✌️"]

rockBtn.addEventListener("click", ()=>{
    console.log(getRanodmElement(arr))
    let comp = getRanodmElement(arr)
    playerAns.innerText = "✊"
    compAns.innerText = comp

    if(comp == "✊"){
        result.innerText="Neither side won, the match was tied"
    }
    else if(comp == "✋"){
        result.innerText = "You lose the match"
        compScore.innerText++
    }
    else if(comp == "✌️"){
        result.innerText = "You win the match"
        plyerScore.innerText++
    }
    
});

paperBtn.addEventListener("click", ()=>{
    console.log(getRanodmElement(arr))
    let comp = getRanodmElement(arr)
    playerAns.innerText = "✋"
    compAns.innerText = comp
    if(comp == "✋"){
        result.innerText="Neither side won, the match was tied."
    }
    else if(comp == "✌️"){
        result.innerText = "You lose the match"
        compScore.innerText++
    }
    else if(comp == "✊"){
        result.innerText = "You win the match"
        plyerScore.innerText++
    } 
});

scissorsBtn.addEventListener("click", ()=>{
    console.log(getRanodmElement(arr))
    let comp = getRanodmElement(arr)
    playerAns.innerText = "✌️"
    compAns.innerText = comp
    if(comp == "✌️"){
        result.innerText="Neither side won, the match was tied."
    }
    else if(comp == "✊"){
        result.innerText = "You lose the match"
        compScore.innerText++
    }
    else if(comp == "✋"){
        result.innerText = "You win the match"
        plyerScore.innerText++
    } 
});


resetBtn.addEventListener("click", ()=>{
playerAns.innerText = ""
compAns.innerText = ""
result.innerText = "Who win and who lose will declare here!"
plyerScore.innerText = 0
compScore.innerText = 0
});