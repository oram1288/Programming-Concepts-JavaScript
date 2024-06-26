import { useState } from "react";

import { Link } from "react-router-dom";

const CheckOut = ({ onAdd }) => {
  let [number, setNumber] = useState("");
  let [date, setDate] = useState("");
  let [CCV, setCCV] = useState("");

  let onSubmit = (e) => {
    e.preventDefault();

    if (!number) {
      alert("Please add your card number");
      return;
    }

    onAdd({ number, date, CCV });

    setNumber("");
    setDate("");
    setCCV("");
  };

  // function clearFields() {
  //   document.getElementById("card number").value = "";
  //   document.getElementById("expiry date").value = "";
  //   document.getElementById("ccv").value = "";
  // }

  return (
    <div>
      <form className="add-form" onSubmit={onSubmit}>
        <h2>Check Out</h2>
        <div className="form-control">
          <label>Card Number</label>
          <input
            type="number"
            placeholder="Card Number"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          />
        </div>

        <div className="form-control">
          <label>Expiry Date</label>
          <input
            type="data"
            placeholder="Expiry Date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>

        <div className="form-control">
          <label>CCV</label>
          <input
            type="number"
            placeholder="CCV"
            onChange={(e) => setCCV(e.target.value)}
            value={CCV}
          />
        </div>

        <input
          type="submit"
          value="Confirm"
          className="btn"
          onSubmit={onSubmit}
        />
      </form>

      <Link class="btn2" to="/shoppingcart">
        Go Back
      </Link>
    </div>
  );
};

export default CheckOut;
