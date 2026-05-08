class Animal{
    constructor(name, speed){
        this.name = name;
        this.speed = speed;
    }

    get info(){
        return `this ${this.name} runs at ${this.speed} km/h.`;
    }

    set changeSpeed(newSpeed){
        this.speed = newSpeed;
    }

}


class bird extends Animal{
    constructor(name,speed,wingspan){
        super(name,speed)
        this.wingspan = wingspan
    }
    fly(){
        console.log(`${this.name} დაფრინავს. ამ სიჩქარით ${this.speed} და ფრთების ზომა ${this.wingspan} `)
    }
}

const bird1 = new bird("Eagle", 120, "2 მეტრი")

console.log(bird1.info)
bird1.move();
bird1.fly();
bird.changeSpeed(150)
console.log(bird1.info())