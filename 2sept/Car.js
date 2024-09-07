export class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning;
  }

  getCarInfo() {
    return (
      this.make +
      " " +
      "model" +
      " " +
      this.model +
      " " +
      "and it was made in" +
      " " +
      this.year
    );
  }
  start() {
    this.isRunning = true;
    return "car is running";
  }

  stop() {
    this.isRunning = false;
    return "car stopped";
  }
}
