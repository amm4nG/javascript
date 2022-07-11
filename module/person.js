class Person{
  constructor(name){
    this.name = name
  } 
}

class PersonMilenial extends Person{
  constructor(firstName, lastName){
    super(firstName)
    this.lastName = lastName
  } 
  say(){
    return `Selamat datang ${this.name} ${this.lastName}`
  }
}

export {PersonMilenial}
