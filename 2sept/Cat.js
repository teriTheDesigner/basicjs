export class Cat {
  constructor(catsname, color, breed) {
    this.catsname = catsname;
    this.color = color;
    this.breed = breed;
  }

  bio() {
    const catsbio =
      this.catsname +
      " " +
      "is" +
      " " +
      this.color +
      " " +
      "and it is" +
      " " +
      this.breed;
    return catsbio;
  }
  changeName(newName) {
    this.catsname = newName;
  }
}
