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
    // iHunger(){
    //     this.hunger++
    // },
    // iAmTired(){
    //     this.sleepness++
    // },
    // iAmBored(){
    //     this.boredom++
    // }
    movingAround(){
        const movements = ['flex-start', 'flex-end', 'center']
        let randoMovement1 = Math.floor(Math.random() * movements.length)
        let randoMovement2 = Math.floor(Math.random() * movements.length)
        if (this.time % 2 === 0) {
        let leftRight = document.querySelector('#skelly-container')
        let upDown = document.querySelector('#skelly-container')
        leftRight.style.justifyContent = movements[randoMovement1]
        upDown.style.alignItems = movements[randoMovement2]
        }
    }
    closerToDeath(){
        this.age++
    }
    glowUp(){
        if (this.age >= 10){
            let skellySprite = document.querySelector('#skelly')
            skellySprite.style.height = '100px'
        }
    }
}

const gamePlay = {
    tamagothchi: null;

}

const pet = new Tamagothchi('Stevie')
console.log(pet)

// Global variables set for easy use in below functions
let hungerScore = document.querySelector('#hungerNum')
let tiredScore = document.querySelector('#sleepyNum')
let boredScore = document.querySelector('#boredNum')

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
    if (pet.hunger >= 10) {
        // alert('Oh bones, you starved to death!')
        console.log('Oh bones, you starved to death!')
    } else if (pet.sleepness >= 10) {
        // alert('Oh bones, you were so tired you died!')
        console.log('Oh bones, you were so tired you died!')
    } else if (pet.boredom >= 10) {
        // alert('Oh bones, you died of boredom!')
        console.log('Oh bones, you died of boredom!')
    }
}
deathBecomesHer()

// Timer To Rule Them All //
startGame = () => {
    // let skellySprite = document.querySelector('#skelly')
    // console.log(skellySprite)
    //         // skellySprite.style.height = '85px'
    const nameInput = document.getElementById('namevalue').value
    const name = document.getElementById('hellothere')
    name.innerText = `Let's play ${nameInput}!`
    console.log(name)
    setInterval(() => {
    pet.time++
    pet.hunger++
    hungerScore.innerHTML = pet.hunger
    pet.sleepness++
    tiredScore.innerHTML = pet.sleepness
    pet.boredom++
    boredScore.innerHTML = pet.boredom
}, 1000)
}
// startGame()