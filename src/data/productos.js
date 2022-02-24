
export const productos = [
  {
    id: 0,
    title: "Nike Waffles One",
    description:
      "Con un diseño inspirado en algo tan sencillo como una waflera de hierro, una idea que revolucionó al cofundador de Nike. ",
    price: 17499,
    pictureUrl:
      "https://res.cloudinary.com/ojedaweb/image/upload/v1645061218/nike-waffles-one.jpg",
    category: "Zapatillas",
    stock: 11,
  },
  {
    id: 1,
    title: "Nike Air Max 90",
    description:
      "Para vos que te gusta estar en constante contacto con la naturaleza y disfrutar del aire con cada kilómetro que recorrés.",
    price: 23999,
    pictureUrl:
      "https://res.cloudinary.com/ojedaweb/image/upload/v1644777495/nike-air-max-90.jpg",
    category: "Zapatillas",
    stock: 10,
  },

  {
    id: 2,
    title: "Nike Crater Impact",
    description:
      "Para vos que recorrés las calles de la ciudad, las Zapatillas Nike Crater Impact son ideales por su diseño inspirado en las pistas de atletismo.",
    price: 18999,
    pictureUrl:
      "https://res.cloudinary.com/ojedaweb/image/upload/v1644777486/nike-crater-impact.jpg",
    category: "Zapatillas",
    stock: 15,
  }
 
];
 

export const obtenerProductos = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productos);
  }, 3500);
});

