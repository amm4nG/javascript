class Manusia{
    constructor(name){
        this.name = name
    }
    Makan(){
        console.log(`${this.name} bisa makan`)
    }
    Tidur(){
        console.log(`${this.name} bisa tidur`)
    }
}

//inherithence atau class turunan
class ManusiaMilenial extends Manusia{
    //overidding constructor/menambah parameter pada constructor
    constructor(name, username){
        super(name)
        this.username = username
    }
    Healing(){
        console.log(`${this.username} pergi healing`)
    }
}
const manusia = new ManusiaMilenial("Ismail", "ismail15")
manusia.Tidur()
manusia.Healing()
