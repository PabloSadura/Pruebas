const fechaHoy = new Date();
console.log(fechaHoy);

const fechaNacimiento = new Date("1986, 3, 11");
console.log(fechaNacimiento);

const esMasTarde = fechaHoy > fechaNacimiento;
console.log(esMasTarde);

const diaNacimiento = fechaNacimiento.getDate();
console.log(diaNacimiento);

const mesNacimiento = fechaNacimiento.getMonth() + 1;
console.log(mesNacimiento);

const anioNacimiento = fechaNacimiento.getFullYear();
console.log(anioNacimiento);
