import { useEffect, useState } from "react"
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import { Rating } from "../components/Elements/Rating";
import { useCart } from "../context";
import { getProduct } from "../services";


export const ProductDetail = () => {
  const { cartList, addToCart, removeFromCart } = useCart();
  const [inCart, setInCart] = useState(false);
  const [product, setProduct] = useState({});
  const [error, setError] = useState(null);

  const { id } = useParams();
  useTitle(product.name);


  useEffect(() => {
    async function fetchProduct() {
        try {
            const data = await getProduct(id);
            setProduct(data);
            setError(null); // reset error if the previous fetch had an error but now it's successful
        } catch (err) {
            // Here we just capture the error for potential debugging or logging but display a user-friendly message
            setError(err); 
            toast.error("Something went wrong. Please try again later.", {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 5000,
                closeOnClick: true
            });
        }
    }
    fetchProduct();
}, [id]);


    useEffect(() => {
      const productInCart = cartList.find(item => item.id === product.id);
  
      if(productInCart && !inCart){ 
          // Check if product was just added
          toast.success("Product added to the cart!", {
              position: toast.POSITION.BOTTOM_RIGHT,
              autoClose: 2000,
              closeOnClick: true
          });
          setInCart(true);
      } else if (!productInCart && inCart) { 
          // Check if product was just removed
          toast.info("Product removed from the cart.", {
              position: toast.POSITION.BOTTOM_RIGHT,
              autoClose: 2000,
              closeOnClick: true
          });
          setInCart(false);
      }
  }, [cartList, product.id, inCart]);
  

    return (
        <main className="py-10 px-5 sm:px-20 md:px-40 lg:px-60">
          {error && (
            <div className="max-w-5xl mx-auto mb-5 p-4 bg-red-100 border border-red-500 text-red-700 rounded shadow">
                {error.message}
            </div>
        )}
          <section className="max-w-5xl mx-auto">
            <h1 className="mb-4 text-4xl text-center font-extrabold text-gray-900 dark:text-slate-200">
              {product.name}
            </h1>
            <p className="mb-8 text-xl text-center text-gray-600 dark:text-slate-300 italic">
              {product.overview}
            </p>
    
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="w-full md:w-1/2">
                <img className="w-full h-full object-cover rounded shadow-lg" src={product.image_local} alt={product.name} />
              </div>
              
              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div>
                  <p className="mb-5 text-3xl font-semibold text-gray-900 dark:text-slate-200">
                    <span className="mr-2">$</span>
                    {product.price}M
                  </p>
                  <div className="my-5">
                    <Rating rating={product.rating} />
                  </div>
    
                  <div className="my-5 flex flex-wrap gap-2">
                    {product.best_seller && (
                      <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1">
                        BEST SELLER
                      </span>
                    )}
                    {product.in_stock ? (
                      <span className="font-semibold text-emerald-600 border bg-slate-100 rounded-lg px-3 py-1">
                        INSTOCK
                      </span>
                    ) : (
                      <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1">
                        OUT OF STOCK
                      </span>
                    )}
                    <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1">
                      {product.size} MB
                    </span>

                     <p className="my-3">
                    { !inCart && <button onClick={() => addToCart(product)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 ${product.in_stock ? "" : "cursor-not-allowed"}`} disabled={ product.in_stock ? "" : "disabled" }>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button> } 
                    { inCart && <button onClick={() => removeFromCart(product)} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 ${product.in_stock ? "" : "cursor-not-allowed"}`}  disabled={ product.in_stock ? "" : "disabled" }>Remove Item <i className="ml-1 bi bi-trash3"></i></button> }  
                  </p>
                  </div>
                </div>
    
                <p className="mt-5 text-lg leading-relaxed text-gray-700 dark:text-slate-300">
                  {product.long_description}
                </p>
              </div>
            </div>
          </section>
        </main>
      );
    };
    