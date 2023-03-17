class Hamster{
    constructor(name) {
        this.owner = ''
        this.name = name
        this.price = 15
    }
    wheelRun() {
        console.log('squeak squeak')
    }
    eatFood() {
        console.log('nibble nibble')
    }
    getPrice() {
        return this.price
    }
}




class Person{
    constructor(name,hamsters) {
        this.name = name
        this.age = 0
        this.height = 0
        this.weight = 0
        this.mood = 0
        this.hamsters = []
        this.bankAccount = 0
    }
    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }
    getWeight() {
        return this.weight
    }
    greet() {
        console.log(`Hello ${this.name}`)
    }
    eat() {
        ++this.weight
        ++this.mood
    }
    exercise() {
        --this.weight
    }
    ageUp() {
        ++this.age
        ++this.height
        ++this.weight
        --this.mood
        ++this.bankAccount
    }
    buyHamster(hamster) {
        this.hamsters.push(hamster)
        this.mood += 10
        this.bankAccount -= 15
        }
    
}

const timmy = new Person('Timmy')
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.ageUp()
timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();

const gus = new Hamster('Gus')
gus.owner = 'Timmy'
timmy.buyHamster('gus')

timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();
timmy.ageUp();

timmy.eat()
timmy.eat()
timmy.exercise()
timmy.exercise()

class Dinner{
    constructor(appetizer,entree,dessert) {
        this.appetizer = appetizer
       this.entree = entree
        this.dessert = dessert
    }
}

class Chef {
  newDinner(app,ent,dess) {
      const eatUp = new Dinner(app,ent,dess)
      return eatUp
  }
}

const newChef = new Chef('Gordon')
console.log(newChef.newDinner('ham','steak','pie'))
console.log(newChef.newDinner('jerky','egg','waffle'))
console.log(newChef.newDinner('scallops','pasta','cake'))
