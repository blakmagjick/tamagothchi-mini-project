class Tamagothchi {
    constructor(name) {
        this.name = name;
        this.hunger = 1;
        this.sleepness = 1;
        this.boredom = 1;
        this.age = 0;
        this.alive = true;
        this.agingTime = 0
    }
    movingAround(){
        const movements = ['flex-start', 'flex-end', 'center']
        let randoMovement1 = Math.floor(Math.random() * movements.length)
        let randoMovement2 = Math.floor(Math.random() * movements.length)
        if (this.agingTime % 2000 === 0) {
        let leftRight = document.querySelector('#skelly-container')
        let upDown = document.querySelector('#skelly-container')
        leftRight.style.justifyContent = movements[randoMovement1]
        upDown.style.alignItems = movements[randoMovement2]
        }
    }
    closerToDeath(){
        if (this.agingTime % 5000 === 0){
            this.age++
        }
    }
    glowUp(){
        if (this.age >= 10){
            let skellySprite = document.querySelector('#skelly')
            skellySprite.style.height = '100px'
        }
    }
    deathBecomesHer() {
        if (this.hunger >= 10) {
            alert('Oh bones, you starved to death!')
            // console.log('Oh bones, you starved to death!')
        } else if (this.sleepness >= 10) {
            alert('Oh bones, you were so tired you died!')
            // console.log('Oh bones, you were so tired you died!')
        } else if (this.boredom >= 10) {
            alert('Oh bones, you died of boredom!')
            // console.log('Oh bones, you died of boredom!')
        }
    }
}

const gamePlay = {
    tamagothchi: null,
    runningTime: null,

    startAtTheBeginning(){
        const nameInput = document.getElementById('namevalue').value
        const petName = document.getElementById('hellothere')
        petName.innerText = `Let's play ${nameInput}!`
        const newPet = new Tamagothchi(nameInput);
        this.tamagothchi = newPet
        this.startGame()
    },
    startGame() {
        let hungerScore = document.querySelector('#hungerNum')
        let tiredScore = document.querySelector('#sleepyNum')
        let boredScore = document.querySelector('#boredNum')
        setInterval(() => {
        this.runningTime++
        this.tamagothchi.hunger++
        hungerScore.innerHTML = this.tamagothchi.hunger
        this.tamagothchi.sleepness++
        tiredScore.innerHTML = this.tamagothchi.sleepness
        this.tamagothchi.boredom++
        boredScore.innerHTML = this.tamagothchi.boredom
    }, 1000)
    },
    feedMePlz() {
        // let hungerScore1 = document.querySelector('#hungerNum')
        // this.tamagothchi.hunger--
        // hungerScore1.innerHTML = this.tamagothchi.hunger 
        console.log('I\'m hungry yo!')
    },
    sleepNowPlz() {
        // let tiredScore1 = document.querySelector('#sleepyNum')
        // this.tamagothchi.sleepness--
        // tiredScore1.innerHTML = this.tamagothchi.sleepness
        console.log('*yawns*')
    },
    playWithMePlz() {
        // let boredScore1 = document.querySelector('#boredNum')
        // this.tamagothchi.boredom--
        // boredScore1.innerHTML = this.tamagothchi.boredom
        console.log('I\'m so bored!')
    }
}
// deathBecomesHer()

// ButtonListeners
const feedMe = document.querySelector('#feedme')
feedMe.addEventListener('click', gamePlay.feedMePlz)

const sleepNow = document.querySelector('#sleepnow')
sleepNow.addEventListener('click', gamePlay.sleepNowPlz)

const playThing = document.querySelector('#plaything')
playThing.addEventListener('click', gamePlay.playWithMePlz)