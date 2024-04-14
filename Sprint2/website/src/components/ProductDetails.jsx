import { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import Button from "./Button";
import { MdDescription } from "react-icons/md";
import { IoPricetag } from "react-icons/io5";

const ProductDetails = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProduct] = useState({});
  // const [error, setError] = useState(null);

  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`http://localhost:5000/product/${params.id}`);
      if (res.status !== 200) {
        navigate("/");
      }
      const data = await res.json();

      // if (res.status === 404) {
      //   navigate("/");
      // }

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
      <p>
        <MdDescription style={{ color: "white", margin: "5px" }} />
        {products.description}
      </p>
      <p>
        <IoPricetag style={{ color: "white", margin: "5px" }} />
        {products.price}
      </p>
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
