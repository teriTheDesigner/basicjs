export class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning;
  }

  getCarInfo() {
    const info =
      this.make +
      " " +
      "model" +
      " " +
      this.model +
      " " +
      "and it was made in" +
      " " +
      this.year;
    return info;
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
