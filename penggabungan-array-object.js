let kelasD = ["arman", "taslim", "aco"]
let kelasC = ["masri", "parif"]
let kelasF = ["hendra", "fyan"]
//penggabungan array
let gabung = [...kelasD, ...kelasC,, ...kelasF]
for(let i=0; i<gabung.length; i++){
    console.log(gabung[i])
}

const object1 = {
    firsName: "arman",
    lastName: "ismail",
}
const object2 = {
    nim: "D0221049",
    angkatan: 2021
}

//gabung objectnya
const gabungObject = {...object1, ...object2}
console.log(gabungObject)
