// Downloads.js
import React from 'react';
import { Link } from 'react-router-dom';

export const Downloads = () => {
    return (
        <div className="max-w-7xl mx-auto">
        <div className="min-h-screen bg-white dark:bg-gray-800 p-6">
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Downloads</h1>
            
            <ul className="space-y-4">
                <li className="bg-white dark:bg-gray-700 border rounded-lg shadow hover:shadow-md p-4 transition">
                    <Link to="/" className="flex items-center justify-between text-gray-900 dark:text-white">
                        <span>Document 1</span>
                        <svg className="h-6 w-6 text-blue-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                        </svg>
                    </Link>
                </li>

                <li className="bg-white dark:bg-gray-700 border rounded-lg shadow hover:shadow-md p-4 transition">
                    <Link to="/" className="flex items-center justify-between text-gray-900 dark:text-white">
                        <span>Document 2</span>
                        <svg className="h-6 w-6 text-blue-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                        </svg>
                    </Link>
                </li>

                <li className="bg-white dark:bg-gray-700 border rounded-lg shadow hover:shadow-md p-4 transition">
                    <Link to="/" className="flex items-center justify-between text-gray-900 dark:text-white">
                        <span>Document 3</span>
                        <svg className="h-6 w-6 text-blue-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                        </svg>
                    </Link>
                </li>
                
                {/* ... Add more as necessary */}
            </ul>
        </div>
        </div>
    );
}
