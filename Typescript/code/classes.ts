interface UserInterface {
  name: string;
  email: string;
  register();
}

class User implements UserInterface {
  name: string;
  email: string;
  private age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
    console.log('User Created: ' + this.name);
  }

  register() {
    console.log(this.name + ' is now registered');
  }
}

class Member extends User {
  id: number;
  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }
  register() {
    super.register();
  }
}

let john = new User('John', 'john@email.com', 20);
let member: User = new Member(1003829743, 'John', 'john@email.com', 20);
// console.log(john.name);
member.register();
