import { useEffect, useState } from "react";
import item from "../images/item.jpg";

const ProductsList = () => {
  const [productsArray, setProductsArray] = useState(null);

  useEffect(
    () =>
      setProductsArray([
        { id: 1, name: "kiripiti", price: "500", qty: "15" },
        { id: 2, name: "gas", price: "250", qty: "25" },
        { id: 3, name: "paan", price: "125", qty: "18" },
        { id: 4, name: "kesel kan", price: "100", qty: "12" },
      ]),

    []
  );

  return (
    <div className="bg-gray-200 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {productsArray &&
        productsArray.map((element) => (
          <div class="card">
            <img
              src={item}
              alt="Product"
              class="h-42 sm:h-62 w-full object-cover"
            />
            <div class="m-4">
              <span class="font-bold">{element.name}</span>
              <span class="block text-gray-500 text-sm">
                {element.price} LKR
              </span>
            </div>
            <div class="badge">
              <span> {element.qty} in stock</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductsList;
