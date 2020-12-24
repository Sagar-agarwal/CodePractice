class Animal {
  String name = 'Animal';

  Animal() {
    print('Animal Base class');
  }

  Animal.myBaseClass() {
    print('Bae class name constructor');
  }

  Animal.printMember() {
    print(this.name);
  }

  void move() {
    print('Animal Moving!');
  }
}

class Dog extends Animal {}

main(List<String> args) {
  var dog = Dog();
  print(dog);
}
