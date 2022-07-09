//array map()
// let kelasD = ["arman", "taslim", "aco"]
/*
Seperti yang Anda ketahui di awal, fungsi map akan mengembalikan array baru. 
Nilai tiap item pada array yang dikembalikan, dihasilkan dari kembalian callback 
function-nya. Karena callback function dapat mengakses item array, 
biasanya developer menggunakannya untuk menghasilkan nilai baru.
*/
// const kelasBaru = kelasD.map((anggota) => {return `${anggota}`})
// console.log(kelasBaru)

//array filter
// Contoh lain, penggunaan filter untuk menyaring array dari objek 
// siswa yang layak mendapatkan beasiswa berdasarkan nilai skor yang didapat.
const students = [
{
    name: "arman",
    score: 80
},
{
    name: "arman",
    score: 81
},
{
    name: "taslim",
    score: 82
},
{
    name: "hendry",
    score: 85
},
{
    name: "aco",
    score: 90
}
]
//memfilter nilai siswa yang lebih dari 83
// const studentBidikmisi = students.filter((student) => student.score > 83)
// console.log(studentBidikmisi)

//array find
//Mirip dengan array.some(), array.find() sesuai namanya digunakan untuk mencari
//apakah di dalam deretan nilai terdapat nilai yang sesuai dengan kriteria yang
//kita definisikan pada callback function. 

// Yang membedakan array.find() dengan array.some(), find akan menghasilkan satu 
// nilai dari elemen yang pertama kali ditemukan berdasarkan kriteria tertentu 
// dan akan menghasilkan nilai undefine bila tidak ada kriteria yang terpenuhi 
// pada item array.
const findJames = students.find(student => student.name === 'arman');
console.log(findJames);

//array reduce
const totalScore = students.reduce((acc, student) => acc + student.score, 0)
console.log(totalScore)

//array some
// Nilai yang dihasilkan didasarkan pada pernyataan apakah ada setidaknya satu 
// dari deretan nilai dalam array tersebut lolos berdasarkan kriteria yang kita 
// tuliskan dalam callback function.

// Contoh penggunaannya misalkan kita ingin mengetahui apakah dalam deretan angka 
// terdapat angka genap.
const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);
console.log(even);
/** 
output true
**/

//array sort
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// output: [ 'Dec', 'Feb', 'Jan', 'March' ]

const array1 = [1, 30, 4, 1000]

const compareNumber = (a, b) => {
  return a - b
};
const sorting = array1.sort(compareNumber);
console.log(sorting)

/**
output
[ 1, 4, 30, 1000 ]
**/

// const array1 = [1, 30, 4, 1000, 101, 121];
// array1.sort();
// console.log(array1);
// output: [ 1, 1000, 101, 121, 30, 4 ]

const scores = [70,85,90];
const minimumScore = 65;

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed);

/**
output
true
**/
