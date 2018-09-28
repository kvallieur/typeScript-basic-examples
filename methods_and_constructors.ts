class Employee{
    // memeber variables
    firstName: any
    lastName: any
   
    // TS allows only one constructor per class
    /* 
    constructor(){
        this.firstName = ""
        this.lastName = ""
    }
    */
    
    constructor (firstName:string, lastName:string){
        this.firstName = firstName
        this.lastName = lastName
    }
   
    // method
    getFullName(){
        return this.firstName + ' ' +  this.lastName
    }

    getFirstNameLowerCase(){
        return this.firstName.toLowerCase()
    }
}

var emp1 = new Employee("PETER", "THIEL")


console.log(`${emp1.getFirstNameLowerCase()}`)

console.log(`${emp1.getFullName()}`)

console.log(`${new Employee("", "").getFullName()}  --- `)
