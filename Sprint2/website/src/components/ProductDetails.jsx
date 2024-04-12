import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Button from "./Button";

const ProductDetails = () => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  // const [error, setError] = useState(null);

  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`http://localhost:5000/productlist/${params.id}`);
      const data = await res.json();

      if (res.status === 404) {
        navigate("/");
      }

      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  });

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <div className="product-details">
      <p>{pathname}</p>
      <h3>{product.description}</h3>
      <p>{product.price}</p>
      <p>{product.warranty.toString()}</p>
      <Button
        text="Go Back"
        color="lightblue"
        onClick={() => {
          navigate(-1);
        }}
      />
    </div>
  );
};

export default ProductDetails;
