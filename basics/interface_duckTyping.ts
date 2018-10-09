interface Item {
    name: string;
    price: number;
    getDetails(): string;
}

class Lappy implements Item {
    name: string = "0";
    price: number = 123;

    getDetails(): string {
        return `${this.name}    ${this.price}`
    }
}

let lenovo: Item = new Lappy();

let someLaptop = {
    name: "turbo",
    price: 234,
    getDetails: () => "turbo  - $234.00",

}

lenovo = someLaptop;
console.log(lenovo.getDetails());