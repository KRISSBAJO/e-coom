import { Link } from "react-router-dom";
import ExoticCar from "../../../assets/images/hero.png"

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center">
        <div className="text my-5">
            <h1 className="text-4xl font-bold mr-7">The Ultimate Car Store</h1>
            <p className="text-xl my-5 px-1 mr-7 dark:text-slate-300">
                Discover the world's most popular and authoritative source for exotic cars.
                Dive into our collection and explore the world of luxury.
                </p>

            <Link to="/products" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Explore Exotic Cars</Link>
        </div>
        <div className="visual my-5 lg:max-w-xl">
            <img className="rounded-lg max-h-full" src={ExoticCar} alt="Exotic Car Collection" />
        </div>
    </section>
  );
}
