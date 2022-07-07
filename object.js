//structure data object
let user = {
    //property
    name: "arman",
    nim: "D0221049",
    angkatan: 2021
};
//tampilkan semua property
console.log(user);

//cara akses property tertentu
console.log(`Nama saya ${user.name}`);

//update value property
user.name = "Arman";
user.nim = "D0221050";
user.angkatan = 2022;

console.log(user);

//menghapus property
delete user.angkatan;
console.log(user);
