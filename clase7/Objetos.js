const misDatos = {
  nombre: "Pablo",
  edad: 36,
  altura: 1.82,
  eresDesarrollador: true,
};

const { edad } = misDatos;
console.log(edad);

const amigos = [
  { nombre: "Gonzalo", edad: 35 },
  { nombre: "Matias", edad: 36 },
  { nombre: "Ramiro", edad: 37 },
];

const listaCompleta = [misDatos, ...amigos];
console.log(listaCompleta);

const nuevaLista = listaCompleta.sort((a, b) => a.edad - b.edad);
console.log(nuevaLista);
