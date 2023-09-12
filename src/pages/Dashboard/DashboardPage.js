
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";
import { getUserOrders } from "../../services/dataService";
import { useTitle } from '../../hooks/useTitle';



export const DashboardPage = () => {
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useTitle(`Dashboard Page (${orders.length})`);

    useEffect(() => {
        async function fetchOrders() {
            try {
                setIsLoading(true);
                const data = await getUserOrders();
              
                setOrders(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchOrders();

    }, []); // Adding cbid and token to dependency array

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (

<div>
    <section className="text-gray-600 body-font dark:bg-gray-900">
        <p className="text-4xl text-center font-extrabold text-gray-900 mt-5 mb-1 dark:text-slate-200">Dashboard</p>
        <div className="container px-10 py-24 mx-auto">  
            <div className="flex flex-wrap -m-2 justify-center">
                
                <div className="p-4 md:w-1/5 sm:w-1/2 w-full">
                    <Link to="/downloads" className="block transform transition hover:scale-105">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg shadow-lg hover:border-blue-500 dark:border-gray-700">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-blue-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                            <path d="M21 6a9 9 0 00-18 0"></path>
                            <path d="M10 3a4 4 0 100 8 4 4 0 000-8z"></path>
                        </svg>
                            <h2 className="title-font font-medium text-3xl text-gray-900 mt-4 dark:text-slate-200">2.7K</h2>
                            <p className="leading-relaxed">Downloads</p>
                        </div>
                    </Link>
                </div>

                <div className="p-4 md:w-1/5 sm:w-1/2 w-full">
                    <Link to="/purchases" className="block transform transition hover:scale-105">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg shadow-lg hover:border-blue-500 dark:border-gray-700">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-blue-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                            <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                            <path d="M21 6a9 9 0 00-18 0"></path>
                            <path d="M10 3a4 4 0 100 8 4 4 0 000-8z"></path>
                        </svg>
                            <h2 className="title-font font-medium text-3xl text-gray-900 mt-4 dark:text-slate-200">1.3K</h2>
                            <p className="leading-relaxed">Purchases</p>
                        </div>
                    </Link>
                </div>

                <div className="p-4 md:w-1/5 sm:w-1/2 w-full">
                    <Link to="/files" className="block transform transition hover:scale-105">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg shadow-lg hover:border-blue-500 dark:border-gray-700">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-blue-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                            <path d="M8 17l4 4 4-4m-4-5v9"></path>
                            <path d="M20 21H4a2 2 0 01-2-2V7a2 2 0 012-2h8l2-4h4l2 4h8a2 2 0 012 2v12a2 2 0 01-2 2z"></path>
                        </svg>
                            <h2 className="title-font font-medium text-3xl text-gray-900 mt-4 dark:text-slate-200">18</h2>
                            <p className="leading-relaxed">Manuals</p>
                        </div>
                    </Link>
                </div>

                <div className="p-4 md:w-1/5 sm:w-1/2 w-full">
                    <Link to="/places" className="block transform transition hover:scale-105">
                        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg shadow-lg hover:border-blue-500 dark:border-gray-700">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="text-blue-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                            <circle cx="12" cy="5" r="3"></circle>
                            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                        </svg>
                            <h2 className="title-font font-medium text-3xl text-gray-900 mt-4 dark:text-slate-200">8</h2>
                            <p className="leading-relaxed">Places</p>
                        </div>
                    </Link>
                </div>

            </div>
        </div>
       
        <section>
        { orders.length ? orders.map((order) => <DashboardCard key={order.id} order={order} />) : null }
    </section>
    <section className="flex justify-center items-center mt-5"> {/* Added classes for centering and a margin-top */}
    <div className="container px-5 py-5 mx-auto flex flex-wrap"> 
        <div className="lg:w-1/3 w-full p-4"> 
            { !orders.length &&  <DashboardEmpty /> }
        </div>
    </div>
</section>
</section>



   

</div>
  )
}


