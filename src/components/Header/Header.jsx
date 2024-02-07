import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    const handleToggle = () => {
        const menu=document.getElementById('mobile-menu-2');
        if(menu.classList.contains('hidden')){
            menu.classList.remove('hidden');
        }
        else{
            menu.classList.add('hidden');
        }
    }
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/Portfolio" className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-800">Portfolio</h1>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              target="_blank"
              to="https://drive.google.com/file/d/10iO-WoMPOfPTAlzIVCrX3xv8yy64tP3M/view?usp=sharing"
              className="text-white bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Resume
            </Link>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              onClick={handleToggle}
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="Portfolio"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50
                                      ${
                                        isActive
                                          ? "text-orange-700"
                                          : "text-gray-700"
                                      } 
                                      lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50
                                      ${
                                        isActive
                                          ? "text-orange-700"
                                          : "text-gray-700"
                                      } 
                                      lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50
                                      ${
                                        isActive
                                          ? "text-orange-700"
                                          : "text-gray-700"
                                      } 
                                      lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50
                                      ${
                                        isActive
                                          ? "text-orange-700"
                                          : "text-gray-700"
                                      } 
                                      lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Github
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
