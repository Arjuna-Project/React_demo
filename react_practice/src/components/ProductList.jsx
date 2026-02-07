import ProductCard from "./ProductCard";

function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      image:
        "https://p2-ofp.static.pub//fes/cms/2024/07/17/109vq5fdalv01w5jsu6vh35ncnk5jn890135.png",
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000,
      image:
        "https://www.sathya.store/img/product/4HU8xT9woC4ghnaP.png",
    },
    {
      id: 3,
      name: "Headphones",
      price: 3000,
      image:
        "https://www.leafstudios.in/cdn/shop/files/1_a43c5e0b-3a47-497d-acec-b4764259b10e_grande.png?v=1750486829",
    },
    {
      id: 4,
      name: "Watch",
      price: 4000,
      image:
        "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    },
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((product) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
