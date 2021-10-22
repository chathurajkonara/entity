import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

const NavBar = () => {
  const [productsSelected, setProductsSelected] = useState(true);
  const [servicesSelected, setServicesSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);

  let history = useHistory();

  useEffect(() => {
    setProductsSelected(true);
    setServicesSelected(false);
    setContactSelected(false);
    history.push("/");
  }, [history]);

  return (
    <nav className=" text-sm sm:text-base  mb-12 mt-2 bg-transparent sticky top-10 sm:top-22 z-10">
      {/* sticky top-33 sm:top-29 md:top-21 z-10 */}
      <ul className="flex justify-evenly space-x-2 bg-gray-200 bg-opacity-80">
        <li
          className={`flex-auto text-center rounded-md bg-white hover:bg-gray-100 transition ease-out duration-700 text-gray-700 shadow-md inline-block p-2 ${
            productsSelected ? "bg-gray-200 font-bold" : "bg-current"
          }`}
        >
          <Link
            className=" flex w-full justify-center"
            to="/"
            onClick={(e) => {
              setProductsSelected(true);
              setServicesSelected(false);
              setContactSelected(false);
            }}
          >
            <span>Products</span>
          </Link>
        </li>
        <li
          className={`flex-auto text-center rounded-md bg-white hover:bg-gray-100 transition ease-in-out duration-700 text-gray-700 shadow-md inline-block p-2 ${
            servicesSelected ? "bg-gray-200 font-bold" : "bg-current"
          }`}
        >
          <Link
            className=" flex w-full justify-center"
            to="/services"
            onClick={(e) => {
              setServicesSelected(true);
              setProductsSelected(false);
              setContactSelected(false);
            }}
          >
            <span>Services</span>
          </Link>
        </li>
        <li
          className={`flex-auto text-center rounded-md bg-white hover:bg-gray-100 transition ease-in-out duration-700 text-gray-700 shadow-md inline-block p-2 ${
            contactSelected ? "bg-gray-200 font-bold" : "bg-current"
          }`}
        >
          <Link
            className=" flex w-full justify-center"
            to="/contact"
            onClick={(e) => {
              setContactSelected(true);
              setProductsSelected(false);
              setServicesSelected(false);
            }}
          >
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
