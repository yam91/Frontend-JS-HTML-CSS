class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea(){
        return this.width*this.height;
    } 
}


//Write this in a test environment for js:
let rect = new Rectangle(4,5,'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

class Person {
    constructor(firstName, lastName="", age="", email="") {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    static arrPeople = [];
    static getArrPeople(){
        return [Person.arrPeople.map((person) => person.toString())];
    }

    addPerson() {
     Person.arrPeople = Person.arrPeople.concat(this);
    }

    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`; 
     } 
}

let person1 = new Person('Maria', 'Petterson', 22, 'mp@gmail.com');
person1.addPerson();
let school = new Person('Lexicon');
school.addPerson();
let person2 = new Person('Stefan', 'Larsson', 25);
person2.addPerson();
let person3 = new Person('Peter', 'Jansson', 24, 'ptr@live.com');
person3.addPerson();
Person.getArrPeople();

class Circle {
    constructor(radius)  {
        this.radius = radius;
        this.diameter = 2*radius;
    }
    get diameter() {
        return this.radius*2;
    }

    set diameter(newDiam) {
        this.radius = newDiam/2;
    }
    area(){
        return Math.PI*(this.radius)*(this.radius);
    } 
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area()}`);
c.diameter = 1.6
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area()}`);

class Point {
    constructor(x,y)  {
        this.x = x;
        this.y = y;
    }

    static distance(point1, point2) {
        return Math.sqrt((point1.x - point2.x)**2 + (point1.y - point2.y)**2);
    }
}

let p1 = new Point(5,5);
let p2 = new Point(9,8);
console.log(Point.distance(p1,p2));