//Destructuring Object
let profile = {
    name: "arman",
    nim: "D0221049",
    angkatan: 2021
}

let {name, nim, angkatan} = profile
console.log(name, nim, angkatan)

//Destructuring Array
let array = [
    "kuda",
    "sapi",
    "kerbau"
]
let [hewan1, hewan2, hewan3] = array
console.log(hewan1, hewan2, hewan3)

//akses pada index tertenntu
let [,, data3 ] = array
console.log(data3)
