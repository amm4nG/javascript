let array = ["ayam", "kambing", "sapi"];

//cara menampilkan yang pertama
console.log(array)

//cara kedua
for(let i=0; i<array.length; i++){
    console.log(array[i])
}

//cara ketiga
for(const hewan of array){
    console.log(hewan)
}

//akses index tertentu
console.log(array[0])

//menambah elemen array
array.push('kerbau')
console.log(array)

//menampilkan elemen dari belakang
// for(let i=array.length; i>=1; i--){
//     console.log(`[${i}. ${array.pop(i)}]`)
// }

//menampilkan elemen pertama
// console.log(array.shift())

//menghapus elemen array
array.splice(1, 1)
console.log(array)
/*
Metode lain yang bisa kita gunakan untuk memanipulasi data pada array adalah shift() 
dan unshift(). Metode shift() digunakan untuk mengeluarkan elemen pertama dari array, 
sementara unshift() digunakan untuk menambahkan elemen di awal array.
*/
