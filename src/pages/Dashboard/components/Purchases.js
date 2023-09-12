import React from 'react';

export const Purchases = () => {
    return (
        <div className="max-w-5xl mx-auto">
        <div className="min-h-screen bg-white dark:bg-gray-800 p-6">
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Recent Exotic Car Purchases</h1>
            
            <ul className="space-y-4">
                <li className="bg-white dark:bg-gray-700 border rounded-lg shadow hover:shadow-md p-4 transition">
                    <div className="flex items-center justify-between text-gray-900 dark:text-white">
                        <span>2023 Lamborghini Aventador</span>
                        <span className="text-green-500 dark:text-green-400"> 20 Purchased</span>
                    </div>
                </li>

                <li className="bg-white dark:bg-gray-700 border rounded-lg shadow hover:shadow-md p-4 transition">
                    <div className="flex items-center justify-between text-gray-900 dark:text-white">
                        <span>2023 Ferrari SF90 Stradale</span>
                        <span className="text-green-500 dark:text-green-400">54 Purchased</span>
                    </div>
                </li>

                <li className="bg-white dark:bg-gray-700 border rounded-lg shadow hover:shadow-md p-4 transition">
                    <div className="flex items-center justify-between text-gray-900 dark:text-white">
                        <span>2023 Bugatti Chiron</span>
                        <span className="text-green-500 dark:text-green-400">12 Purchased</span>
                    </div>
                </li>

                <li className="bg-white dark:bg-gray-700 border rounded-lg shadow hover:shadow-md p-4 transition">
                    <div className="flex items-center justify-between text-gray-900 dark:text-white">
                        <span>2023 Aston Martin Valhalla</span>
                        <span className="text-green-500 dark:text-green-400">98 Purchased</span>
                    </div>
                </li>

                {/* ... Add more cars as necessary */}
            </ul>
        </div>
        </div>
    );
}
