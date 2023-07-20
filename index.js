const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


// -------------------------------------------------

console.log('Punto a: Las pizzas que tengan un id impar.');

const idImpar = pizzas.filter((pizza) => {
  return pizza.id % 2 === 1
});

idImpar.forEach((pizza) => {
  console.log(`La ${pizza.nombre} tiene id impar y es ${pizza.id}`);
})




console.log(' ');
console.log('----------------------------------------');




console.log('Punto b: Responder: ¿Hay alguna pizza que valga menos de $600?');

const precioMenorA = (precio) => {
  return pizzas.some((pizza) => {
    return pizza.precio < precio
  })
    ? console.log(`Hay pizza que vale menos de ${precio}`)
    : console.log(`No hay pizza que vale menos de ${precio}`);
};
precioMenorA(600);




console.log(' ');
console.log('----------------------------------------');




console.log('Punto c: El nombre de cada pizza con su respectivo precio.');

pizzas.forEach((pizza) => {
  console.log(`${pizza.nombre} $${pizza.precio}`);
});




console.log(' ');
console.log('----------------------------------------');




console.log('Punto d: Todos los ingredientes de cada pizza.');

const pizzaIngredientes = pizzas.filter((pizza) => {
  console.log(`La ${pizza.nombre} tiene estos ingredientes: ${pizza.ingredientes.join(', ').toLowerCase()}`);
});