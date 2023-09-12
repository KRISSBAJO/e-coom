import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';  // Importing cart icon from react-icons

export const CartEmpty = () => {
  return (
    <section className="flex flex-col items-center justify-center text-xl max-w-4xl mx-auto my-10 py-5 dark:text-slate-100 border dark:border-slate-700 rounded space-y-4">
        
        <FaShoppingCart size={100} className="text-green-600 mb-2"/>  {/* SVG Cart Icon */}
        
        <h2 className="text-2xl font-semibold">Oops! Your cart is empty.</h2>
        <p>Discover our collection of exotic cars and pick your favorite.</p>
        
        <Link 
          to="/products" 
          type="button" 
          className="flex items-center justify-center space-x-2 text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg px-6 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">
            <span>Continue Shopping</span>
            <FaShoppingCart size={24}/>  {/* SVG Cart Icon */}
        </Link>
    </section>
  )
}
