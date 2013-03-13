//Prototypal inheritance

function Person(name, age) {
  this.name = name;
  this.age = age;
}


function Employee(name, age) {
  Person.call(this, name, age);
}

Employee.prototype = new Person();
Employee.prototype.constructor = Person;

var e = new Employee("Rolf", 21);

console.log(e);