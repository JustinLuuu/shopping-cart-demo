// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const products = [
  {
    name: "Ben and Jerry",
    type: "congelados",
    price: 5.95,
    img_url: "/products/benjerry.jpg",
  },
  {
    name: "Cafelatte",
    type: "frescos",
    price: 1.27,
    img_url: "/products/caffelatte.jpg",
  },
  {
    name: "Calippo",
    type: "congelados",
    price: 4.10,
    img_url: "/products/calippo.jpg",
  },
  {
    name: "Evax",
    type: "limpieza y hogar",
    price: 2.40,
    img_url: "/products/evax.jpg",
  },
  {
    name: "Pizza",
    type: "basicos",
    price: 4.95,
    img_url: "/products/pizza.jpg",
  },
  {
    name: "Scottex",
    type: "limpieza y hogar",
    price: 4.50,
    img_url: "/products/scottex.jpg",
  },
  {
    name: "Spaghetti",
    type: "basicos",
    price: 1.25,
    img_url: "/products/spaghetti.jpg",
  },
  {
    name: "Triangulos",
    type: "frescos",
    price: 2.35,
    img_url: "/products/triangulos.jpg",
  },
  {
    name: "Xibeca",
    type: "basicos",
    price: 3.75,
    img_url: "/products/xibeca.jpg",
  },
  {
    name: "Chips Ahoy",
    type: "basicos",
    price: 2.20,
    img_url: "/products/chipsahoy.jpg",
  },
];

export default function handler(req, res) {
  let formatted = products.map((p, index) => ({ id: index, ...p }));
  res.status(200).json({ products: formatted });
}
