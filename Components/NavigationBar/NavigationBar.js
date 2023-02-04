import React, { useContext } from 'react';
import { BsFillBagCheckFill, BsFillPersonFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ProductContext } from '../../utilities/contexts/ProductInfoProvider';
import Link from 'next/link';
import { HiUserCircle } from 'react-icons/hi2';
import { AuthContext } from '../../utilities/contexts/AuthProvider';

const NavigationBar = () => {
  const [cartCount, setCartCount] = useState(0);
  const { user } = useContext(AuthContext);

  const {
    state: { cart },
  } = useContext(ProductContext);

  useEffect(() => {
    // if (isInitialRender) {
    //   setIsInitialRender(false);
    setCartCount(() => cart.cartItems.reduce((a, c) => a + c.quantity, 0));
    // }
  }, [cart.cartItems]);

  return (
    <header className="bg-white px-0 lg:px-16">
      <div className="flex items-center  p-2 flex-grow space-x-10">
        {/* logo */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="/assets/logo.png"
            height={90}
            width={120}
            objectFit="contain"
          ></Image>
        </div>
        {/* search  */}
        <div className="hidden sm:flex  items-center  flex-grow justify-center pb-6 md:py-0 ">
          {/* <form> */}
          <div className="flex shadow-sm p-1.5 ml-10 flex-row  flex-grow border rounded-lg dark:border-gray-600  ">
            <input
              className="px-1 text-center py-2 flex flex-grow flex-shrink rounded-l-lg text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:outline-none"
              type="text"
              name="search"
              placeholder="Search here.."
              aria-label="Search here.."
            />

            <button className="px-6 py-2 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-primary rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Search
            </button>
          </div>
          {/* </form> */}
        </div>

        {/* cart and profile  */}
        <div className="flex items-center justify-center space-x-2 lg:space-x-5 ">
          <div className="hidden lg:block">
            <p className="text-md font-bold pb-1">(+880) 136655444</p>
            <p className="text-sm font-semibold">Call Us Now !</p>
          </div>
          <Link href="/cart">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-md indicator-item">
                  {cartCount && cartCount}
                </span>
              </div>
            </label>
          </Link>

          <div className="dropdown dropdown-end relative z-50">
            <label
              tabIndex={0}
              className="flex items-center justify-center cursor-pointer hover:bg-gray-300 rounded-full"
            >
              <HiUserCircle className="text-5xl" />
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <nav className="bg-white  dark:bg-gray-800">
        <div className="container flex items-center justify-center px-2 lg:px-6 pt-2 pb-5 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <Link
            href="/"
            className="border-b-2 border-transparent text-gray-800 transition-colors duration-300 transform dark:text-gray-200 hover:border-primary  mx-1.5 sm:mx-6"
          >
            home
          </Link>

          <Link
            href={`orders/${user?.uid}`}
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-primary mx-1.5 sm:mx-6"
          >
            Orders
          </Link>
          <Link
            href="/login"
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-primary mx-1.5 sm:mx-6"
          >
            login
          </Link>
          <Link
            href="/signUp"
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-primary mx-1.5 sm:mx-6"
          >
            SignUp
          </Link>

          <a
            href="#"
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-primary mx-1.5 sm:mx-6"
          >
            blog
          </a>

          <a
            href="#"
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-primary mx-1.5 sm:mx-6"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m.75 19h7.092c4.552 0 6.131-6.037 2.107-8.203 2.701-2.354 1.029-6.797-2.595-6.797h-6.604c-.414 0-.75.336-.75.75v13.5c0 .414.336.75.75.75zm.75-13.5h5.854c3.211 0 3.215 4.768 0 4.768h-5.854zm0 6.268h6.342c3.861 0 3.861 5.732 0 5.732h-6.342z" />
              <path d="m18.374 7.857c-3.259 0-5.755 2.888-5.635 5.159-.247 3.28 2.397 5.984 5.635 5.984 2.012 0 3.888-1.065 4.895-2.781.503-.857-.791-1.613-1.293-.76-.739 1.259-2.12 2.041-3.602 2.041-2.187 0-3.965-1.668-4.125-3.771 1.443.017 4.136-.188 8.987-.033.016 0 .027-.008.042-.008 2-.09-.189-5.831-4.904-5.831zm-3.928 4.298c1.286-3.789 6.718-3.676 7.89.064-4.064.097-6.496-.066-7.89-.064z" />
              <path d="m21.308 6.464c.993 0 .992-1.5 0-1.5h-5.87c-.993 0-.992 1.5 0 1.5z" />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
