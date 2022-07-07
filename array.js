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
