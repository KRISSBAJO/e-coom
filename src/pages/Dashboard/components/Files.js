import React from 'react';

export const Files = () => {
    return (
        <div className="max-w-4xl mx-auto">
        <div className="min-h-screen bg-white dark:bg-gray-800 p-6">
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Car Manuals</h1>
            
            <ul className="space-y-7 ">
                <li className="bg-white dark:bg-gray-700 border rounded-lg shadow hover:shadow-md p-4 transition">
                    <div className="flex items-center justify-between text-gray-900 dark:text-white">
                        <span>Sonic Boom</span>
                        <a href="#download-link" className="text-blue-500 hover:underline">Download Manual</a>
                    </div>
                </li>

                <li className="bg-white dark:bg-gray-700 border rounded-lg shadow hover:shadow-md p-4 transition">
                    <div className="flex items-center justify-between text-gray-900 dark:text-white">
                        <span>Vintage Voyager 2030</span>
                        <a href="#download-link" className="text-blue-500 hover:underline">Download Manual</a>
                    </div>
                </li>

                <li className="bg-white dark:bg-gray-700 border rounded-lg shadow hover:shadow-md p-4 transition">
                    <div className="flex items-center justify-between text-gray-900 dark:text-white">
                        <span>EcoTrailblazer 2026</span>
                        <a href="#download-link" className="text-blue-500 hover:underline">Download Manual</a>
                    </div>
                </li>

                <li className="bg-white dark:bg-gray-700 border rounded-lg shadow hover:shadow-md p-4 transition">
                    <div className="flex items-center justify-between text-gray-900 dark:text-white">
                        <span>Silhouette Shadow</span>
                        <a href="#download-link" className="text-blue-500 hover:underline">Download Manual</a>
                    </div>
                </li>

                <li className="bg-white dark:bg-gray-700 border rounded-lg shadow hover:shadow-md p-4 transition">
                    <div className="flex items-center justify-between text-gray-900 dark:text-white">
                        <span>Adventure Seeker</span>
                        <a href="#download-link" className="text-blue-500 hover:underline">Download Manual</a>
                    </div>
                </li>

                <li className="bg-white dark:bg-gray-700 border rounded-lg shadow hover:shadow-md p-4 transition">
                    <div className="flex items-center justify-between text-gray-900 dark:text-white">
                        <span>Adventure Seeker Pro</span>
                        <a href="#download-link" className="text-blue-500 hover:underline">Download Manual</a>
                    </div>
                </li>

                <li className="bg-white dark:bg-gray-700 border rounded-lg shadow hover:shadow-md p-4 transition">
                    <div className="flex items-center justify-between text-gray-900 dark:text-white">
                        <span>Urbanite Z1</span>
                        <a href="#download-link" className="text-blue-500 hover:underline">Download Manual</a>
                    </div>
                </li>

                <li className="bg-white dark:bg-gray-700 border rounded-lg shadow hover:shadow-md p-4 transition">
                    <div className="flex items-center justify-between text-gray-900 dark:text-white">
                        <span>Skyline Racer</span>
                        <a href="#download-link" className="text-blue-500 hover:underline">Download Manual</a>
                    </div>
                </li>

                {/* ... Add more cars as necessary */}
            </ul>
        </div>
        </div>
    );
}
