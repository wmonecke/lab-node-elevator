class Elevator {
  constructor(){
    this.floor      = 0;
    this.maxFloor   = 10;
    this.direction = 'up';

    this.requests   = [];
    this.waitingList = [];
    this.passengers = [];
  }

  start(person) {
    var clear = setInterval(() => {
      this.update();
      this.floorUp();
      console.log(this.passengers);
      this._passengersEnter(person);
      this._passengersLeave(person);
    }, 1000);
   }

  stop() {
    clearInterval(clear);
   }

  update() {
    this.log();
   }

  _passengersEnter(person) {
    for (var i = 0; i < this.waitingList.length; i++) {
      if (this.waitingList[i].originFloor === this.floor) {
        this.passengers.push(person);
        this.waitingList.splice(0, 1, person);
      }
    }
  }

  _passengersLeave() {
    for (var i = 0; i < this.passengers.length; i++) {
      if (this.passengers[i].destinationFloor === this.floor) {
        this.passengers.splice(0, 1);
      }
    }
  }

  floorUp() {
    if(this.floor < this.maxFloor) {
    this.floor++;
    }
  }

  floorDown() {
    if (this.floor >= 1) {
      this.floor = this.floor - 1;
    } else {
      console.log('You are in floor 0');
    }
  }

  call(person) {
    this.waitingList.push(person);
    this.requests.push(person.originFloor);
  }

  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }

}

module.exports = Elevator;
