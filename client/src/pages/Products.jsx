import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";

function Products() {

  const products = [
    {
      id: 1,
      name: "Lipstick",
      price: 499,
      image:
        "https://images.unsplash.com/photo-1586495777744-4413f21062fa"
    },
    {
      id: 2,
      name: "Face Serum",
      price: 899,
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be"
    },
    {
      id: 3,
      name: "Compact Powder",
      price: 699,
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348"
    }
  ];

  return (

    <div>

      <Navbar />

      <div className="p-10 grid grid-cols-3 gap-8">

        {products.map((product) => (

          <div
            key={product.id}
            className="shadow-lg rounded-xl overflow-hidden"
          >

            <img
              src={product.image}
              className="h-64 w-full object-cover"
            />

            <div className="p-5">

              <h1 className="text-2xl font-bold">
                {product.name}
              </h1>

              <p className="text-pink-500 mt-2">
                ₹ {product.price}
              </p>

              <button className="bg-pink-500 text-white px-4 py-2 rounded mt-4">
                Add to Cart
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Products;