// Object Oriented Programming
class Dog {
    constructor(name, breed) {
        this.name = name;
        this.breed = breed;
        this.walks = [];
        this.totalWalks = 0;
        this.averageWalk = 0;
    }

    walk(distance) {
        this.walks.push(distance)
    }

    totalWalkDistance() {
        this.totalWalks = this.walks.reduce((acc, walk) => acc + walk);
    }

    averageWalkDistance() {
        this.averageWalk = this.totalWalks / this.walks.length;
    }

    walkSummary() {
        console.log(this.walks);
    }


}

const pet = new Dog('Daisy', 'Labrador');

pet.walk(10);
pet.walk(20);
pet.totalWalkDistance();
pet.averageWalkDistance();
console.log(pet.totalWalks);
console.log(pet.averageWalk);
pet.walkSummary();
console.log(pet.name);