class Animal {
    constructor(name, speed) {
        this.name = name;
        this.speed =speed;
    }

    increaseSpeed(newSpeed) {
        this.speed = newSpeed;
    }
}

var rabbit = new Animal('bugs bunny', 30);
console.log(rabbit);

var turtle = new Animal ('sea turly', 10);
console.log(turtle);








class Mammal extends Animal{
    constructor(name, speed, extinct) {
        super(name, speed);
        this.extinct = extinct;
    }
}

var mammal = new Mammal('blue', 5, true);
console.log(mammal);
debugger;
mammal.increaseSpeed(15);
console.log(mammal);