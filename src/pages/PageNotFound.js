import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";
import Logo from "../assets/images/logo.png";

export const PageNotFound = () => {
    useTitle("Page Not Found");

    return (
        <main className="min-h-screen flex flex-col justify-center items-center bg-gray-200 dark:bg-gray-900 p-6 space-y-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full max-w-lg text-center space-y-6">
                <div className="space-y-3">
                    <img className="mx-auto w-1/2 h-auto" src={Logo} alt="Exotic Cars Page Not Found" />
                    <p className="text-6xl text-gray-700 font-bold dark:text-white">404</p>
                    <h1 className="text-2xl text-gray-600 font-semibold dark:text-gray-300">Oops! Page not found.</h1>
                </div>
                <p className="text-gray-500 dark:text-gray-400">
                    We couldn't find the page you were looking for. It might have been removed, renamed, or might never existed.
                </p>
                <div className="mt-4">
                    <Link to="/">
                        <button type="button" className="text-2xl text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br font-medium rounded-lg px-5 py-2.5 transition-transform transform hover:scale-105">
                            Back To Home
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    )
}
