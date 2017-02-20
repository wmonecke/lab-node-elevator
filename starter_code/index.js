const Elevator = require('./elevator.js');
const Person = require('./person.js');

let myElevator = new Elevator();
let walt = new Person('Walter', 2, 8);
myElevator.start(walt);
myElevator.call(walt);
myElevator.log();
console.log(myElevator.waitingList);
