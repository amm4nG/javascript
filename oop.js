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
    constructor(name){
        super(name)
    }
    Healing(){
        console.log(`${this.name} pergi healing`)
    }
}
const manusia = new ManusiaMilenial("Ismail")
manusia.Tidur()
manusia.Healing()
