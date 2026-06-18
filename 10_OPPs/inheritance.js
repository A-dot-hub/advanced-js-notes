class USer {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends USer {
  constructor(username, eamil, password) {
    super(username);
    this.eamil = eamil;
    this.password = password;
  }

  addCousrse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const chi = new Teacher("chi", "chi@gmail.com", "1341");
chi.addCousrse();
chi.logMe();

const masalachai = new USer("masalacahi");

masalachai.logMe();
console.log(chi instanceof Teacher);
