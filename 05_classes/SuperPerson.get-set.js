class SuperPerson {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  canWork() {
    return `${this._name} can work so hard!`;
  }
}

class SuperProgrammer extends SuperPerson {
  constructor(name, language) {
    super(name);
    this.language = language;
  }

  canWork() {
    return super.canWork() + `His superpower is ${this.language}!`;
  }
}
