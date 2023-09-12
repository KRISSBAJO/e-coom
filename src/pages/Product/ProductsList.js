

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FilterBar } from '../../components/';
import { useTitle } from '../../hooks/useTitle';
// eslint-disable-next-line no-unused-vars
import { ProductCard } from '../../components/';
import { toast } from 'react-toastify';

import { useFilter } from '../../context';
import { getProductList } from '../../services/productService';



export const ProductsList = () => {
  const { products, initialProductList } = useFilter();
  const[ errorMessage] = useState(" "); // [1
  useTitle("Products");
  
  const [showFilter, setShowFilter] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search).get("q");

  
  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProductList(searchParams);
        initialProductList(data);
        
        setError(false);        // You might not even need this anymore if you're only using toasts
    
        setLoading(false);
      } catch (err) {
        if (err.message.includes('Failed to fetch product list')) {
          toast.error("We couldn't retrieve the product list. Please check your connection.", {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            closeOnClick: true
          });
        } else {
          toast.error('Something went wrong. Please try again later.', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
            closeOnClick: true
          });
        }
        setLoading(false);
      }
    }
    
    fetchProducts();
    // eslint-disable-next-line
  }, [searchParams]);
  
  return (
          <main>
                  {loading && <div>Loading...</div>}

            {error && (
              <div className={`bg-red-100 p-5 rounded-md mb-4 shadow-md ${errorMessage.includes('connection') ? 'bg-red-300' : 'bg-yellow-200 dark:bg-red-600'}`}>
                <p className="text-red-800 dark:text-red-200">{errorMessage}</p>
              </div>
            )}
        <section className="my-5">
          <div className="my-5 flex justify-between">
            <span className="text-2xl font-semibold dark:text-slate-100 mb-5">All Exotic Cars ({products.length}) </span>
            <span>
              <button onClick={() => setShowFilter(!showFilter)}  id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" title="Filter" type="button"> 
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
              </button>
            </span>            
          </div>    

          <div className="flex flex-wrap justify-center lg:flex-row">
            {loading && <p>Loading...</p>}
            {products && products.map((product) => (
            <ProductCard  key={product.id} product={product}/>
            ))}
          </div>  


       <div className="flex flex-wrap justify-center lg:flex-row">
          {loading && <p>Loading...</p>}
          {products && products.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>  
      </section>
        {showFilter && <FilterBar setShowFilter={setShowFilter}/> }
    </main> 
  )
}

// Compare this snippet from e-com/src/pages/Product/ProductsList.js: