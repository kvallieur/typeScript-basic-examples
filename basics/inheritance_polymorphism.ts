class Animal {
    name: string;
    constructor(name: string) { 
        this.name = name; 
    }

    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal{
    constructor(name: string) {
        super(name); 
    }

    // Overriding move of Animal
    move(distanceInMeters = 10) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

let vera:Animal = new Dog("Vera");
vera.move();

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
    alert(vera.move());
}

document.body.appendChild(button);