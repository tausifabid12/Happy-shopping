import React, { useContext } from 'react';
import { BsFillBagCheckFill, BsFillPersonFill } from 'react-icons/bs';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ProductContext } from '../../utilities/contexts/ProductInfoProvider';
import Link from 'next/link';
import { HiUserCircle } from 'react-icons/hi2';
import { AuthContext } from '../../utilities/contexts/AuthProvider';
import { toast } from 'react-hot-toast';

const NavigationBar = () => {
  const [cartCount, setCartCount] = useState(0);
  const { user, logOut } = useContext(AuthContext);

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
    <header className="bg-white px-0 lg:px-16 shadow-md">
      <div className="flex items-center  p-2 flex-grow space-x-10">
        {/* logo */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="/assets/logo.png"
            height={90}
            width={120}
            alt="logo"
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
              {user?.uid && user?.uid ? (
                <>
                  <li>
                    <button onClick={() => toast.error('Coming Soon')}>
                      Profile
                    </button>
                  </li>
                  <li>
                    <button onClick={() => logOut()}>Log Out</button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="/login">Log In</Link>
                  </li>
                  <li>
                    <Link href="/signUp">SingUp</Link>
                  </li>
                </>
              )}
              {/* <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>

      <nav className="bg-white text-sm lg:text-md dark:bg-gray-800 border-b ">
        <div className=" container flex items-center justify-center px-2 lg:px-6 pt-2 pb-5 mx-auto text-gray-600 capitalize dark:text-gray-300">
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
            href="/aboutUs"
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-primary mx-1.5 sm:mx-6"
          >
            About Us
          </Link>
          <Link
            href="/faq"
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-primary mx-1.5 sm:mx-6"
          >
            F.A.Q
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default NavigationBar;
