class Tamagothchi {
    constructor(name) {
        this.name = name;
        this.alive = true;
        this.hunger = 1;
        this.sleepness = 1;
        this.boredom = 1;
        this.age = 0;
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
        let whyDied = document.querySelector('#why-died')
        if (this.hunger >= 10) {
            whyDied.innerHTML = 'Oh bones, you starved to death!'
        } else if (this.sleepness >= 10) {
            whyDied.innerHTML = 'Oh bones, you were so tired you died!'
        } else if (this.boredom >= 10) {
            whyDied.innerHTML = 'Oh bones, you died of boredom!'
        }
    }
}

const gamePlay = {
    tamagothchi: null,
    runningTime: null,
    counter: null,

    startAtTheBeginning(){
        const nameInput = document.getElementById('namevalue').value
        const petName = document.getElementById('hellothere')
        petName.innerText = `I love the name ${nameInput}!`
        const newPet = new Tamagothchi(nameInput);
        this.tamagothchi = newPet
        this.startGameTimer()
    },
    hungerCount(){
        let hungerScore = document.querySelector('#hungerNum')
        this.tamagothchi.hunger++
        hungerScore.innerHTML = this.tamagothchi.hunger
        if (this.tamagothchi.hunger >= 10){
            this.tamagothchi.alive = false
            this.ohNoesYouDied()
        }
    },
    tiredCount(){
        let tiredScore = document.querySelector('#sleepyNum')
        this.tamagothchi.sleepness++
        tiredScore.innerHTML = this.tamagothchi.sleepness
        if (this.tamagothchi.sleepness >= 10){
            this.tamagothchi.alive = false
            this.ohNoesYouDied()
        }
    },
    boredCount(){
        let boredScore = document.querySelector('#boredNum')
        this.tamagothchi.boredom++
        boredScore.innerHTML = this.tamagothchi.boredom
        if (this.tamagothchi.boredom >= 10){
            this.tamagothchi.alive = false
            this.ohNoesYouDied()
        }
    },
    startGameTimer() {
        alert('Don\'t let any of the stat scores hit 10, or you die!!')
        this.counter = setInterval (() => {
            this.runningTime++
            this.tamagothchi.movingAround()
            this.morphing()
            this.aging()
            this.hungerCount()
            if (this.runningTime % 2 == 0){
                this.tiredCount()
            } 
            if (this.runningTime % 3 == 0){
                this.boredCount()
            }
            if (this.tamagothchi.alive == false) {
                clearInterval(this.counter) 
                this.tamagothchi.deathBecomesHer()
                this.stopButtons()
             }
        }, 1000)
    },
    morphing() {
        if (this.runningTime == 10){
             this.tamagothchi.glowUp()
             this.getBigger()
        }
    },
    aging() {
        let ageCheck = document.querySelector('#ageNum')
        if (this.runningTime % 10 === 0){
            this.tamagothchi.age++
            ageCheck.innerHTML = this.tamagothchi.age
        }
        if (this.tamagothchi.age == 10){
            alert('You won!')
            clearInterval(this.counter) 
        }
    },
    feedMePlz() {
        this.eatSound()
        let hungerScore = document.querySelector('#hungerNum')
        if (this.tamagothchi.hunger > 1) {
        this.tamagothchi.hunger--
        hungerScore.innerHTML = this.tamagothchi.hunger 
        }
        // console.log('I\'m hungry yo!')
    },
    sleepNowPlz() {
        this.sleepSound()
        this.sleepyTime()
        let tiredScore1 = document.querySelector('#sleepyNum')
        if (this.tamagothchi.sleepness > 1) {
        this.tamagothchi.sleepness--
        tiredScore1.innerHTML = this.tamagothchi.sleepness
        }
        // console.log('*yawns*')
    },
    sleepyTime() {  
        let nightTime = document.querySelector('#screen')
        nightTime.style.backgroundImage = 'url("https://i.imgur.com/t1qzCrl.jpg")'
        setTimeout(() => (nightTime.style.backgroundImage = ''), 1000)
    },
    playWithMePlz() {
        this.playSound()
        let boredScore1 = document.querySelector('#boredNum')
        if (this.tamagothchi.boredom > 1) {
        this.tamagothchi.boredom--
        boredScore1.innerHTML = this.tamagothchi.boredom
        }
        // console.log('I\'m so bored!')
    },
    ohNoesYouDied(){
        let skellySprite = document.querySelector('#skelly')
        skellySprite.removeAttribute('src')
        skellySprite.setAttribute('src', 'https://i.imgur.com/riAAz0p.png')
        this.gameOver()
    },
    stopButtons() {
        feedMe.setAttribute('disabled', 'true')
        sleepNow.setAttribute('disabled', 'true')
        playThing.setAttribute('disabled', 'true')
    },
//// SOUND EFFECTS ////
    eatSound(){
        const audio = new Audio('crunch.mp3');
        audio.play();
    },
    sleepSound(){
        const audio = new Audio('snore.mp3');
        audio.play();
    },
    playSound(){
        const audio = new Audio('play.mp3');
        audio.play();
    },
    getBigger(){
        const audio = new Audio('grow.mp3');
        audio.play();
    },
    gameOver(){
        const audio = new Audio('game-over.mp3');
        audio.play();
    }
}

// ButtonListeners
const feedMe = document.querySelector('#feedme')
feedMe.addEventListener('click', () => gamePlay.feedMePlz())

const sleepNow = document.querySelector('#sleepnow')
sleepNow.addEventListener('click', () => gamePlay.sleepNowPlz())

const playThing = document.querySelector('#plaything')
playThing.addEventListener('click', () => gamePlay.playWithMePlz())