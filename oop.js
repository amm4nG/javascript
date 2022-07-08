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
    makanMakan() {
        const makan = this.Makan()
        return makan
    }
}
const manusia = new Manusia("Ismail")
manusia.makanMakan()
manusia.Tidur()
