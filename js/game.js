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
    // getHungry() {
    //     this.hunger++

    // }
    // getSleepy(){
    //     this.sleepness++

    // }
    // getBored(){
    //     this.boredom++
         
    // }
}

const pet = new Tamagothchi('Stevie')
console.log(pet)

// Feed Me Button //
feedMePlz = () => {
    console.log('I\'m hungry yo!')
}
const feedMe = document.querySelector('#feedme')
feedMe.addEventListener('click', feedMePlz)

// Sleepy Time Button //
sleepNowPlz = () => {
    console.log('*yawns*')
}
const sleepNow = document.querySelector('#sleepnow')
sleepNow.addEventListener('click', sleepNowPlz)

// Let's Play Button //
playWithMePlz = () => {
    console.log('I\'m so bored!')
}
const playThing = document.querySelector('#plaything')
playThing.addEventListener('click', playWithMePlz)

