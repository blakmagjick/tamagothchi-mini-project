class Tamagothchi {
    constructor(name) {
        this.name = name;
        this.hunger = 1;
        this.sleepness = 1;
        this.boredom = 1;
        this.age = 0;
        this.alive = true;
    }
    movingAround(){
        const movements = ['flex-start', 'flex-end', 'center']
        let randoMovement1 = Math.floor(Math.random() * movements.length)
        let randoMovement2 = Math.floor(Math.random() * movements.length)
        let leftRight = document.querySelector('#skelly-container')
        let upDown = document.querySelector('#skelly-container')
        leftRight.style.justifyContent = movements[randoMovement1]
        upDown.style.alignItems = movements[randoMovement2]
    }
    glowUp() {
        let skellySprite = document.querySelector('#skelly')
        skellySprite.style.height = '125px'
    }
    deathBecomesHer() {
        if (this.hunger >= 10) {
            console.log('Oh bones, you starved to death!')
            return 
        } else if (this.sleepness >= 10) {
            console.log('Oh bones, you were so tired you died!')
            return 
        } else if (this.boredom >= 10) {
            console.log('Oh bones, you died of boredom!')
            return 
        }
    }
}

const gamePlay = {
    tamagothchi: null,
    runningTime: null,

    startAtTheBeginning(){
        const nameInput = document.getElementById('namevalue').value
        const petName = document.getElementById('hellothere')
        petName.innerText = `${nameInput} is the perfect name for me! `
        const newPet = new Tamagothchi(nameInput);
        this.tamagothchi = newPet
        this.startGame()
    },
    hungerCount(){
        let hungerScore = document.querySelector('#hungerNum')
        setInterval(() => {
        this.tamagothchi.hunger++
        hungerScore.innerHTML = this.tamagothchi.hunger
        }, 1000)
    },
    tiredCount(){
        let tiredScore = document.querySelector('#sleepyNum')
        setInterval(() => {
        this.tamagothchi.sleepness++
        tiredScore.innerHTML = this.tamagothchi.sleepness
        }, 1000)
    },
    boredCount(){
        let boredScore = document.querySelector('#boredNum')
        setInterval(() => {
        this.tamagothchi.boredom++
        boredScore.innerHTML = this.tamagothchi.boredom
        }, 1000)
    },
    startGame() {
        setInterval(() => {
        this.runningTime++
        this.tamagothchi.movingAround()
        this.morphing()
        this.aging()
        this.tamagothchi.deathBecomesHer()
    }, 1000)
        this.hungerCount()
        this.tiredCount()
        this.boredCount()
    },
    morphing() {
        if (this.runningTime >= 10){
             this.tamagothchi.glowUp()
        }
    },
    aging(){
        let ageCheck = document.querySelector('#ageNum')
        if (this.runningTime % 10 === 0){
            this.tamagothchi.age++
            ageCheck.innerHTML = this.tamagothchi.age
        }
    },
    feedMePlz() {
        let hungerScore = document.querySelector('#hungerNum')
        this.tamagothchi.hunger--
        hungerScore.innerHTML = this.tamagothchi.hunger 
        // console.log('I\'m hungry yo!')
    },
    sleepNowPlz() {
        let tiredScore1 = document.querySelector('#sleepyNum')
        this.tamagothchi.sleepness--
        tiredScore1.innerHTML = this.tamagothchi.sleepness
        // console.log('*yawns*')
    },
    playWithMePlz() {
        let boredScore1 = document.querySelector('#boredNum')
        this.tamagothchi.boredom--
        boredScore1.innerHTML = this.tamagothchi.boredom
        // console.log('I\'m so bored!')
    }
}

// ButtonListeners
const feedMe = document.querySelector('#feedme')
feedMe.addEventListener('click', () => gamePlay.feedMePlz())

const sleepNow = document.querySelector('#sleepnow')
sleepNow.addEventListener('click', () => gamePlay.sleepNowPlz())

const playThing = document.querySelector('#plaything')
playThing.addEventListener('click', () => gamePlay.playWithMePlz())