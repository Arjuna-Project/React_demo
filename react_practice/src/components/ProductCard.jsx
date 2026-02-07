function ProductCard({ product }) {
  return (
    <div className="card mb-4 shadow-sm">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        style={{ height: "180px", objectFit: "contain" }}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">₹{product.price}</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
