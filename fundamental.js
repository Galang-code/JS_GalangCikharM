let firstName = 'Galang';
let lastName = 'Mahatfa';
let fullName = firstName + ' ' + lastName;
console.log(fullName);



let age = 17;
if (age >= 17) {
    console.log("Anda sudah Memiliki KTP.");
} else {
    console.log("Anda belum Memilki Ktp.");
}



let hargaBuku = 25000;
let hargaPensil = 5000;
let hargaPenghapus = 3000;
let totalBelanja = hargaBuku + hargaPensil + hargaPenghapus;
console.log("Total belanja:", totalBelanja);




let buah = ["apel", "pisang", "mangga"];
console.log(buah[0]);
console.log(buah[2]);

buah[1] = "jeruk";
console.log(buah);



let car = {
    brand: "Toyota",
    model: "Supra",
    year: 2023,
    color: "Silver"
};

console.log("Car brand:", car.brand);
console.log("Car model:", car["model"]);