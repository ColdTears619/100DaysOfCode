class Car {
    constructor(name, age)
    {
        this.name = name;
        this.age = age;   
    }
    Hi() {
        console.log("Hi");
        //console.log("Hi " + this.name + " with " + this.age);
    }
}

module.exports = Car;