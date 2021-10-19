import { useEffect, useState } from "react";
import service from "../images/service.jpg";

const ServicesList = () => {
  const [servicesArray, setservicesArray] = useState(null);

  useEffect(
    () =>
      setservicesArray([
        {
          id: 1,
          name: "Home delivery",
          rate: "15 LKR per km",
          avaliability: "currently unavaliable",
        },
        {
          id: 2,
          name: "Easy installments",
          rate: "2 % interest",
          avaliability: "avaliable",
        },
        {
          id: 3,
          name: "Cash withdraw",
          rate: "0% interest",
          avaliability: "avaliable",
        },

        {
          id: 3,
          name: "After Pay",
          rate: "2% interest",
          avaliability: "avaliable",
        },
      ]),

    []
  );

  return (
    <div className="bg-gray-200 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {servicesArray &&
        servicesArray.map((element) => (
          <div class="card">
            <img
              src={service}
              alt="Product"
              class="h-42 sm:h-62 w-full object-cover"
            />
            <div class="m-4">
              <span class="font-bold">{element.name}</span>
              <span class="block text-gray-500 text-sm">{element.rate}</span>
            </div>
            <div class="badge">
              <span> {element.avaliability}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ServicesList;
