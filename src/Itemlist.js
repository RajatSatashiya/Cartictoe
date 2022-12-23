import React, { useState } from "react";
import Item from "./Item";

function Itemlist() {
  const data = [
    { item: "Noodles", rate: 30, id: 1, qty: 1 },
    { item: "Biryani", rate: 90, id: 2, qty: 1 },
    { item: "Chips", rate: 10, id: 3, qty: 1 },
  ];

  const [amount, setAmount] = useState(0);
  const changeAmount = (id, sign) => {
    const value = data.filter((item) => {
      return item.id === id;
    });
    setAmount((prev) => {
      return prev + value[0].rate * sign;
    });
  };

  const displayItems = data.map((item, index) => (
    <Item key={index} {...item} changeAmount={changeAmount} />
  ));

  return (
    <>
      <div>
        {displayItems}
        <div className="amount">Total: ₹ {amount}</div>
      </div>
    </>
  );
}

export default Itemlist;
