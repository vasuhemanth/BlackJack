let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let startEl = document.getElementById("start-el")
let messageEl = document.getElementById("message-el")
//let sumEl = document.querySelector("#sum-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player = {
    name : "Hemanth",
    chips: 145
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function randomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1
    if(randomNumber > 10) {
        return 10
    }
    else if(randomNumber === 1) {
        return 11
    }
    else{
        return randomNumber
    }
}
function start(){
    isAlive = true
    let firstCard = randomCard()
    let secondCard = randomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    render()
}
function render(){
    cardsEl.textContent = "Cards: "
    for(let i = 0; i<cards.length;i++){
        cardsEl.textContent += cards[i] + " " 
    }

    sumEl.textContent = "Sum:" + sum

    if(sum < 21) {
        message = "Do you want to draw new card? "
    } else if(sum===21) {
        message = "Hurray!....Black Jack"
        hasBlackJack = true
    } else{
        message = "you're out"
        isAlive = false 
    }
    messageEl.textContent = message
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
    let card = randomCard()
    sum += card
    cards.push(card)
    //  console.log(cards)
    render()
    }
}