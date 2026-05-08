import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Catalog() {
  return (
    <div className="catalog">

      <h1>Products</h1>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </div>
  );
}

export default Catalog;