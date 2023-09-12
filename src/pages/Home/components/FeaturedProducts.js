
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { ProductCard } from "../../../components/";
import { getFeaturedList } from "../../../services";

export const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getFeaturedList();
        setProducts(data);
        setError(null); // Reset the error if the previous fetch had an error but now it's successful
      } catch (err) {
        setError(err);

        if (err.message.includes("Failed to fetch")) {
          toast.error("We couldn't connect to the server. Please check your connection.", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 5000,
            closeOnClick: true
          });
        } else {
          toast.error("Something went wrong. Please try again later.", {
            position: toast.POSITION.BOTTOM_RIGHT,
            autoClose: 5000,
            closeOnClick: true
          });
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Premium Selection</h1>
      <div className="flex flex-wrap justify-center lg:flex-row">

        {loading && <p>Loading...</p>}

        {error && (
          <div className="max-w-xl mx-auto mb-5 p-4 bg-red-100 border border-red-500 text-red-700 rounded shadow">
            {error.message}
          </div>
        )}

        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
