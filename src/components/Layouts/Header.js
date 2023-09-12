import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { useEffect, useState } from "react";
import { Search } from "../Sections/Search";
import { DropdownLogIn } from "../Elements/DropDownLogin";
import { DropdownLogOut } from "../Elements/DropDownLogote";
import { useCart } from "../../context";

export const Header = () => {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("darkMode")) || false);
 const [isSearch, setIsSearch] = useState(false);
 const [dropdown, setDropdown] = useState(false);
 const token = JSON.parse(sessionStorage.getItem("token"));
 const { cartList } = useCart();

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <header>
     <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <Link to="/" className="flex items-center">
                <img src={Logo} className="h-8 mr-3 rounded" alt="LogaXp Logo" />
                <span className="self-center text-2xl font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                    LogaXP
                </span>
            </Link>
            <div className="flex items-center relative">
                <span  onClick={() => setIsDark(!isDark)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi-gear-wide-connected"></span>
                <span onClick={() => setIsSearch(!isSearch)} className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
                
                <Link to="/cart" className="text-gray-700 dark:text-white mr-5 relative">
                    <span className="text-2xl bi bi-cart4">
                        <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full">{cartList.length}</span>
                    </span>                    
                </Link>
                <span onClick={() => setDropdown(!dropdown)} className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
                  { dropdown && ( token ? <DropdownLogIn setDropdown={setDropdown} /> : <DropdownLogOut setDropdown={setDropdown} /> ) }
              </div>
          </div>
    </nav>

      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-3 py-2 mx-auto">
          <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  <span
                    className="bi bi-house-door text-xl mx-2"
                    title="Home"
                  ></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  <span
                    className="bi bi-people-fill text-xl mx-2"
                    title="Team"
                  ></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="text-gray-900 dark:text-white hover:underline"
                >
                  <span
                    className="bi bi-check-circle-fill text-xl mx-2"
                    title="Features"
                  ></span>
                </Link>
              </li>
              
            </ul>
          </div>
        </div>
       
      </nav>
      {isSearch && <Search />}
     
    </header>
  );
};
