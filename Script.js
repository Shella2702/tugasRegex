//no 1

let cekKalimat = /(?=.*[A-Z])/;
if (cekKalimat.test("SHELLA BATRISYIA")) {
  console.log("Huruf pertama adalah besar");
} else {
  console.log("Huruf pertama adalah kecil");
}

// no 2
let cekNomor = /^([^0-9]*[0-9]){10,12}[^0-9]*$/;
if (cekNomor.test("085606022966")) {
  console.log("Input yang anda masukkan benar");
} else {
  console.log("Jumlah digit yang anda masukkan salah");
}

//no 3

let cekRegex = /(?=.*[A-Z])/;
let kata1 = "Bagaimana cara memulai usaha bisnis";
let kata2 = "Bootcamp impact byte";
let kata3 = "Status covid hari ini";

if (cekRegex.test(kata1, kata2, kata3)) {
  console.log();
} else if (cexRegex.test(kata1)) {
  console.log("Bagaimana cara memulai bisnis");
} else if (cexRegex.test(kata2)) {
  console.log("Bootcamp impact byte");
} else if (cexRegex.test(kata3)) {
  console.log("Status covid hari ini");
} else {
}
console.log(cekRegex.test("Bagaimana cara memulai bisnis"));
console.log(cekRegex.test("bagaimana cara memulai bisnis"));