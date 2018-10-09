
//Classes
export class Person {
    // no need for explicitly declaring member variables and also setting them in constructor TS takes care of it
    constructor(private firstName: string, private lastName: string, readonly appId: number) { }
    setFirstName(firstName: string) {
        this.firstName = firstName;
    }
    getFirstName() {
        return this.firstName;
    }
    setLastName(lastName: string) {
        this.lastName = lastName;
    }
    getLastName() {
        return this.lastName;
    }
    greet() {
        return "Hi There"
    }
}

// var person1 = new Person("karthik", "musunur", 12354);
// console.log(person1)
// person1.setFirstName('Ratra')
// console.log(person1.getFirstName())

