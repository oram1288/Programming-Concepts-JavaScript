import { MdDescription } from "react-icons/md";
import { IoPricetag } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import { IoMdAddCircleOutline } from "react-icons/io";

import { useState } from "react";

const Product = ({ product, onDelete, onAdd, onToggle }) => {
  // let [warranty, setWarranty] = useState(false);
  let [warranty, setWarranty] = useState(false);

  let onSubmit = (e) => {
    e.preventDefault();

    onAdd({ warranty });

    setWarranty(false);
  };

  return (
    <div
      className={`product ${product.warranty ? "warranty" : ""}`}
      onDoubleClick={() => onToggle(product.id)}
    >
      <h3>
        {product.name}
        <IoMdAddCircleOutline
          style={{ color: "navy", cursor: "pointer" }}
          onClick={() => onAdd(product.id)}
        />
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(product.id)}
        />
      </h3>
      <p>
        <MdDescription style={{ color: "white", margin: "5px" }} />
        {product.description}
      </p>
      <p>
        <IoPricetag style={{ color: "white", margin: "5px" }} />
        {product.price}
      </p>
      <form className="add-form" onSubmit={onSubmit}>
        <div className="form-control-check">
          <label>Extended Warranty</label>
          <input
            type="checkbox"
            onChange={(e) => setWarranty(e.currentTarget.checked)}
            value={warranty}
            checked={warranty}
          />
        </div>
        <input type="submit" value="Confirm" className="btn" />
      </form>
    </div>
  );
};

export default Product;
