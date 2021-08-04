class Tamagothchi {
    constructor(name) {
        this.name = name;
        this.hunger = 1;
        this.sleepness = 1;
        this.boredom = 1;
        this.age = 0;
        this.alive = true;
        // this.time = 0
    }
    getHungry() {
        this.hunger++
    }
    getSleepy(){
        this.sleepness++
    }
    getBored(){
        this.boredom++    
    }
}

const pet = new Tamagothchi('Stevie')
console.log(pet)

// Setting up game to have pet's stats, and make it for easy changing in functions below. 
let hungerScore = document.querySelector('#hungerNum')
// hungerScore.innerHTML = pet.hunger
let tiredScore = document.querySelector('#sleepyNum')
tiredScore.innerHTML = pet.sleepness
let boredScore = document.querySelector('#boredNum')
boredScore.innerHTML = pet.boredom

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

