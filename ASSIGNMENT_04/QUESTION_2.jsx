import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 25000 },
  { id: 3, name: "Headphones", price: 3000 },
];

function ProductList() {
  return (
    <div>
      <h1>Product List</h1>

      {products.map((product) => (
        <div key={product.id}>
          <a href={`/p/${product.id}`}>{product.name}</a>
        </div>
      ))}
    </div>
  );
}

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <p>Name: {product.name}</p>
      <p>Price: ₹{product.price}</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/p/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
