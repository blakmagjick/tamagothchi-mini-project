class Tamagothchi {
    constructor(name) {
        this.name = name;
        this.hunger = 1;
        this.sleepness = 1;
        this.boredom = 1;
        this.age = 0;
        this.alive = true;
        this.time = 0
    }
}

const pet = new Tamagothchi('Stevie')
console.log(pet)

// Global variables set for easy use in below functions
let hungerScore = document.querySelector('#hungerNum')
let tiredScore = document.querySelector('#sleepyNum')
let boredScore = document.querySelector('#boredNum')

// Moving Skeleton
const movements = ['flex-start', 'flex-end', 'center']
movingAround = () => {
    let randoMovement1 = Math.floor(Math.random() * movements.length)
    let randoMovement2 = Math.floor(Math.random() * movements.length)
    let leftRight = document.querySelector('#skelly-container')
    let upDown = document.querySelector('#skelly-container')
    leftRight.style.justifyContent = movements[randoMovement1]
    upDown.style.alignItems = movements[randoMovement2]
}
// movingAround()

// Feed Me Button //
feedMePlz = () => {
    pet.hunger--
    hungerScore.innerHTML = pet.hunger 
    console.log('I\'m hungry yo!')
}
const feedMe = document.querySelector('#feedme')
feedMe.addEventListener('click', feedMePlz)

// Sleepy Time Button //
sleepNowPlz = () => {
    pet.sleepness--
    tiredScore.innerHTML = pet.sleepness
    console.log('*yawns*')
}
const sleepNow = document.querySelector('#sleepnow')
sleepNow.addEventListener('click', sleepNowPlz)

// Let's Play Button //
playWithMePlz = () => {
    pet.boredom--
    boredScore.innerHTML = pet.boredom
    console.log('I\'m so bored!')
}
const playThing = document.querySelector('#plaything')
playThing.addEventListener('click', playWithMePlz)

// But Did You Die? //
deathBecomesHer = () => {
    if (hungerScore >= 10 || tiredScore >= 10 || boredScore >= 10) {
        // Add code to change image to dead skelly
        // Change this to have seperate checks so you can write different console logs. 
        console.log ('Oh bones...you died!')
    }
}

// Timer To Rule Them All //
startGame = () => {
    const nameInput = document.getElementById('namevalue').value
    const name = document.getElementById('hellothere')
    name.innerText = `Let's play ${nameInput}!`
    console.log(name)
    setInterval(() => {
    pet.time+=2
    pet.hunger++
    hungerScore.innerHTML = pet.hunger
    pet.sleepness++
    tiredScore.innerHTML = pet.sleepness
    pet.boredom++
    boredScore.innerHTML = pet.boredom
}, 1000)
}
// startGame()