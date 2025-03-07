// write product card here
import React from "react";
import ViewButton from "../components/button";

const Productcard = () => {
  const productName = "Wireless Headphones";
  const productImage = "https://cdn.thewirecutter.com/wp-content/media/2023/07/bluetoothheadphones-2048px-0876.jpg";
  const productPrice = "$199";

  return (
    <div className="border shadow-lg rounded-lg p-4 text-center max-w-sm">
      <img src={productImage} alt={productName} className="w-full h-48 object-cover rounded-lg" />
      <h2 className="text-lg font-semibold mt-4">{productName}</h2>
      <p className="text-gray-600">{productPrice}</p>
      <div className="mt-4">
        <ViewButton />
      </div>
    </div>
  );
};

export default Productcard;
