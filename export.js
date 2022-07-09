class Animal{
  constructor(name){
    this.name = name
  }
}
class Rabbit extends Animal{
  constructor(name){
    super(name)
  }
  eat(){
    return `${this.name} sedang makan!`
  }
}
class Eagle extends Animal{
  constructor(name){
    super(name)
  }
  terbang(){
    return `${this.name} sedang terbang!`
  }

}

const rabbit = new Rabbit("Kelinci").eat()
const eagle = new Eagle("Elo").terbang()
module.exports = {rabbit, eagle}
