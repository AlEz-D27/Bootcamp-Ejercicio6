// Lista de compra
const ListaCompra = ["Carne", "Queso", "Azúcar", "Leche", "Café", "Fideos", "Sal", "Huevos"];
console.log(ListaCompra);


// Añadir a la lista ListaCompra "Aceite de Girasol"
ListaCompra.push("Aceite de Girasol");
console.log(ListaCompra);


// Eliminar de la lista ListaCompra "Aceite de Girasol"
ListaCompra.pop();
console.log(ListaCompra);


// lista de mis 3 peliculas favoritas
const PeliculasFav = [
    { titulo: "The Revenant", director: "Alejandro González Iñárritu", fecha: new Date(2015, 11, 25)},
    { titulo: "The last samurai", director: "Edward Zwick", fecha: new Date(2005, 10, 25)},
    { titulo: "The Karate kid (2010)", director: "Harald Zwart", fecha: new Date(2010, 5, 11)}
];

console.log(PeliculasFav);


// Lista Peliculas mayores al 1 de enero de 2010
const PeliculasMayores = PeliculasFav.filter( valor => valor.fecha > new Date(2010, 0, 1) );

console.log(PeliculasMayores);


// Lista de directores de mis peliculas favoritas
const ListaDirectores = PeliculasFav.map( valor => valor.director );

console.log(ListaDirectores);


// Lista de titulos de mis peliculas favoritas
const ListaTitulos = PeliculasFav.map( valor => valor.titulo );

console.log(ListaTitulos);


// Lista concatenada de la lista ListaDirectores y la lista ListaTitulos ( con .concat() )
const Lista_Concat = ListaDirectores.concat(ListaTitulos);

console.log(Lista_Concat);


// Lista concatenada de la lista ListaDirectores y la lista ListaTitulos ( con el factor de propagación )
const Lista_Propagacion = [...ListaDirectores, ...ListaTitulos];

console.log(Lista_Propagacion);