import React from 'react';
import USA from "../../../assets/images/flag1.png";
import Canada from "../../../assets/images/flag2.png";
import UK from "../../../assets/images/flag3.png";
import Germany from "../../../assets/images/flag4.png";
import France from "../../../assets/images/flag5.png";
import Australia from "../../../assets/images/flag6.png";
import Brazil from "../../../assets/images/flag7.png";
import Japan from "../../../assets/images/flag8.png";

export const Places = () => {
    const countries = [
        {name: "United States", flag: USA, date: "Jan 1, 2000"},
        {name: "Canada", flag: Canada, date: "Mar 5, 2001"},
        {name: "United Kingdom", flag: UK, date: "Aug 12, 2002"},
        {name: "Germany", flag: Germany, date: "Nov 3, 2003"},
        {name: "France", flag: France, date: "Apr 17, 2004"},
        {name: "Australia", flag: Australia, date: "Jun 22, 2005"},
        {name: "Brazil", flag: Brazil, date: "Oct 9, 2006"},
        {name: "Japan", flag: Japan, date: "Dec 24, 2007"},
    ]

        return (
            <div className="min-h-screen bg-white dark:bg-gray-800 p-6">
                <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">Our Locations</h1>
                
                <div className="max-w-4xl mx-auto">
                    <ul className="space-y-4">
                        {countries.map((country, index) => (
                            <li key={index} className="bg-white dark:bg-gray-700 border rounded-lg shadow hover:shadow-md p-4 transition">
                                <div className="flex items-center justify-between text-gray-900 dark:text-white">
                                    <img src={country.flag} alt={country.name + ' flag'} className="w-10 h-6 mr-3" />
                                    <div>
                                        <span className="font-medium">{country.name}</span>
                                        <div className="text-sm text-gray-600 dark:text-gray-400">Started: {country.date}</div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );  
}
