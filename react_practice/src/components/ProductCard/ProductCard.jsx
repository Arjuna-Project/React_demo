import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h5>{product.name}</h5>
      <p>₹{product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
