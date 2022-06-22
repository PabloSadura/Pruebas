const listaCompras = ["pan", "leche", "huevos", "carne", "pollo", "queso"];

listaCompras.push("aceite de girasol");
console.log(listaCompras);
listaCompras.pop();
console.log(listaCompras);

const peliculas = [
  { titulo: "El señor de los anillos", director: "Peter Jackson", año: "2001" },
  {
    titulo: "El señor de los anillos 2",
    director: "Peter Jackson",
    año: "2002",
  },
  {
    titulo: "El señor de los anillos 3",
    director: "Peter Jackson",
    año: "2003",
  },
];

const peliculas2 = peliculas.filter((pelicula) => pelicula.año > 2002);

console.log(peliculas2);

const directores = peliculas.map((pelicula) => pelicula.director);
console.log(directores);
const titulos = peliculas.map((pelicula) => pelicula.titulo);
console.log(titulos);

const listaNueva = directores.concat(titulos);
console.log(listaNueva);
const nuevaLista = [...directores, ...titulos];
console.log(nuevaLista);
