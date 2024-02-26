import React from "react";
import "./navbar.css";
import Categories_btn, { Categories2_btn } from "./Categories_btn";

function Navbar() {
  return (
    <>
      <div className="container mx-auto px-2">
        <div className="row ">
          <div className="grid grid-cols-12   mt-4 ">
            <div className="col-span-2 lg:inline  hidden  ">
             <Categories_btn/>
            </div>
            <div className="col-span-7 lg:inline hidden">
              <div className="nav-item">
                <nav>
                  <ul className="dropdown-home flex py-3.5">
                    <li className="drop-down text-xs font-semibold relative">
                      <a
                        href="#"
                        className="hover:text-[#d51243]  transition ease-in-out"
                      >
                        Home
                        <i class="angel fa-solid fa-angle-down ms-1 hover:text-[#d51243]  transition ease-in-out text-gray-300 "></i>
                      </a>
                      <ul className="mt-3.5  rounded-b-xl border-2 border-t-[#d51243]">
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out translate-x-6 hover:translate-x-1    "
                          >
                            Wooden Home
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out"
                          >
                            Fashion Home
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out"
                          >
                            Furniture Home
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out"
                          >
                            Cosmetics Home
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out"
                          >
                            Food Grocery
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="drop-down ms-10 text-xs font-semibold">
                      <a
                        href="#"
                        className="hover:text-[#d51243]  transition ease-in-out"
                      >
                        Shop
                        <i class="angel fa-solid fa-angle-down ms-1 hover:text-[#d51243]  transition ease-in-out text-gray-300"></i>
                      </a>
                      <ul className="mt-3.5  rounded-b-xl border-2 border-t-[#d51243]">
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out translate-x-6  "
                          >
                            Shop
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out"
                          >
                            Shop 2
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out"
                          >
                            Shop Details
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out"
                          >
                            Shop Details 2
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out"
                          >
                            Shop Location
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out"
                          >
                            Cart
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out"
                          >
                            Sign In
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out"
                          >
                            Checkout
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out"
                          >
                            Whishlist
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out"
                          >
                            Product Track
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="drop-down ms-10 text-xs font-semibold">
                      <a
                        href="#"
                        className="hover:text-[#d51243]  transition ease-in-out"
                      >
                        Pages
                        <i class="angel fa-solid fa-angle-down ms-1  text-gray-300 hover:text-[#d51243]  transition ease-in-out "></i>
                      </a>
                      <ul className="mega-menu flex justify-around mt-3.5  rounded-b-xl border-2 border-t-[#d51243] ">
                        <li className="px-5 py-1">
                          <h6 className="title px-2.5 py-2 font-bold hover:text-[#d51243]  transition ease-in-out">
                            Page Layout
                          </h6>
                          <li className="px-2.5 pt-4 py-2 hover:text-[#d51243]  transition ease-in-out">
                            <a href="#">Shop Filters V1</a>
                          </li>
                          <li className="px-2.5 py-2 hover:text-[#d51243]  transition ease-in-out">
                            <a href="#">Shop Filters V2</a>
                          </li>
                          <li className="px-2.5 py-2 hover:text-[#d51243]  transition ease-in-out">
                            <a href="#">Shop Sidebar</a>
                          </li>
                          <li className="px-2.5 py-2 hover:text-[#d51243]  transition ease-in-out">
                            <a href="#">Shop Right Sidebar</a>
                          </li>
                          <li className="px-2.5 py-2 hover:text-[#d51243]  transition ease-in-out">
                            <a href="#">Shop List View</a>
                          </li>
                        </li>
                        <li className="px-5 py-1">
                          <h6 className="title px-1 py-2 font-bold hover:text-[#d51243]  transition ease-in-out">
                            Page Layout
                          </h6>
                          <li className="px-2.5 pt-4 py-2 hover:text-[#d51243]  transition ease-in-out">
                            <a href="#">About</a>
                          </li>
                          <li className="px-2.5 py-2 hover:text-[#d51243]  transition ease-in-out">
                            <a href="#">Cart</a>
                          </li>
                          <li className="px-2.5 py-2 hover:text-[#d51243]  transition ease-in-out">
                            <a href="#">Checkout</a>
                          </li>
                          <li className="px-2.5 py-2 hover:text-[#d51243]  transition ease-in-out">
                            <a href="#">Sign In</a>
                          </li>
                          <li className="px-2.5 py-2 hover:text-[#d51243]  transition ease-in-out">
                            <a href="#">Log In</a>
                          </li>
                        </li>
                        <li className="px-5 py-1  ">
                          <h6 className="title px-5 py-2 font-bold hover:text-[#d51243]  transition ease-in-out">
                            Page Type
                          </h6>
                          <li className="px-2.5 pt-4 py-2 hover:text-[#d51243]  transition ease-in-out">
                            <a href="#">Product Track</a>
                          </li>
                          <li className="px-2.5 py-2 hover:text-[#d51243]  transition ease-in-out">
                            <a href="#">Whishlist</a>
                          </li>
                          <li className="px-2.5 py-2 hover:text-[#d51243]  transition ease-in-out">
                            <a href="#">404 / Error</a>
                          </li>
                          <li className="px-2.5 py-2 hover:text-[#d51243]  transition ease-in-out">
                            <a href="#">Coming Soon</a>
                          </li>
                        </li>
                      </ul>
                    </li>

                    <li className="drop-down ms-10 text-xs font-semibold">
                      <a
                        href="#"
                        className="hover:text-[#d51243]  transition ease-in-out"
                      >
                        Blog
                        <i class="angel fa-solid fa-angle-down ms-1 hover:text-[#d51243]  transition ease-in-out  text-gray-300 "></i>
                      </a>
                      <ul className="mt-3.5  rounded-b-xl border-2 border-t-[#d51243]">
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out translate-x-6  "
                          >
                            Blog
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out translate-x-6  "
                          >
                            Blog Details
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="ms-10 text-xs font-semibold">
                      <a
                        href="#"
                        className="hover:text-[#d51243]  transition ease-in-out"
                      >
                        Contact
                        <i class="angel fa-solid fa-angle-down ms-1  hover:text-[#d51243]  transition ease-in-out text-gray-300 text "></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="col-span-3 lg:inline hidden ">
              <div className="flex justify-end text-xs font-semibold">
                <div className="menu-content py-3.5 mr-10">
                  <i class="fa-solid fa-phone-flip text-[#d51243] mr-2"></i>
                  <span>
                    <a href="#">908. 408. 501. 89</a>
                  </span>
                </div>
                <div className="menu-content py-3.5">
                  <i class="fa-solid fa-location-dot text-[#d51243] mr-2"></i>
                  <span>
                    <a href="#">Find Store</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



//  when click category button

export function Navbarclickbtn() {
  return (
    <>
      <div className="container mx-auto px-2">
        <div className="row ">
          <div className="grid grid-cols-12    ">
            <div className="col-span-2 lg:inline  hidden  ">
             <Categories2_btn/>
            </div>
            <div className="col-span-7 lg:inline hidden">
              <div className="nav-item">
                <nav>
                  <ul className="dropdown-home flex py-3.5">
                    <li className="drop-down text-xs font-semibold relative">
                      <a
                        href="#"
                        className="hover:text-[#d51243]  transition ease-in-out"
                      >
                        Home
                        <i class="angel fa-solid fa-angle-down ms-1 hover:text-[#d51243]  transition ease-in-out text-gray-300 "></i>
                      </a>
                      <ul className="mt-3.5  rounded-b-xl border-2 border-t-[#d51243]">
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out translate-x-6 hover:translate-x-1    "
                          >
                            Wooden Home
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out"
                          >
                            Fashion Home
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out"
                          >
                            Furniture Home
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out"
                          >
                            Cosmetics Home
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out"
                          >
                            Food Grocery
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="drop-down ms-10 text-xs font-semibold">
                      <a
                        href="#"
                        className="hover:text-[#d51243]  transition ease-in-out"
                      >
                        Shop
                        <i class="angel fa-solid fa-angle-down ms-1 hover:text-[#d51243]  transition ease-in-out text-gray-300"></i>
                      </a>
                      <ul className="mt-3.5  rounded-b-xl border-2 border-t-[#d51243]">
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out translate-x-6  "
                          >
                            Shop
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out"
                          >
                            Shop 2
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out"
                          >
                            Shop Details
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out"
                          >
                            Shop Details 2
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out"
                          >
                            Shop Location
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out"
                          >
                            Cart
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out"
                          >
                            Sign In
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out"
                          >
                            Checkout
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out"
                          >
                            Whishlist
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out"
                          >
                            Product Track
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="drop-down ms-10 text-xs font-semibold">
                      <a
                        href="#"
                        className="hover:text-[#d51243]  transition ease-in-out"
                      >
                        Pages
                        <i class="angel fa-solid fa-angle-down ms-1  text-gray-300 hover:text-[#d51243]  transition ease-in-out "></i>
                      </a>
                      <ul className="mega-menu flex justify-around mt-3.5  rounded-b-xl border-2 border-t-[#d51243] ">
                        <li className="px-5 py-1">
                          <h6 className="title px-2.5 py-2 font-bold hover:text-[#d51243]  transition ease-in-out">
                            Page Layout
                          </h6>
                          <li className="px-2.5 pt-4 py-2 hover:text-[#d51243]  transition ease-in-out">
                            <a href="#">Shop Filters V1</a>
                          </li>
                          <li className="px-2.5 py-2 hover:text-[#d51243]  transition ease-in-out">
                            <a href="#">Shop Filters V2</a>
                          </li>
                          <li className="px-2.5 py-2 hover:text-[#d51243]  transition ease-in-out">
                            <a href="#">Shop Sidebar</a>
                          </li>
                          <li className="px-2.5 py-2 hover:text-[#d51243]  transition ease-in-out">
                            <a href="#">Shop Right Sidebar</a>
                          </li>
                          <li className="px-2.5 py-2 hover:text-[#d51243]  transition ease-in-out">
                            <a href="#">Shop List View</a>
                          </li>
                        </li>
                        <li className="px-5 py-1">
                          <h6 className="title px-1 py-2 font-bold hover:text-[#d51243]  transition ease-in-out">
                            Page Layout
                          </h6>
                          <li className="px-2.5 pt-4 py-2 hover:text-[#d51243]  transition ease-in-out">
                            <a href="#">About</a>
                          </li>
                          <li className="px-2.5 py-2 hover:text-[#d51243]  transition ease-in-out">
                            <a href="#">Cart</a>
                          </li>
                          <li className="px-2.5 py-2 hover:text-[#d51243]  transition ease-in-out">
                            <a href="#">Checkout</a>
                          </li>
                          <li className="px-2.5 py-2 hover:text-[#d51243]  transition ease-in-out">
                            <a href="#">Sign In</a>
                          </li>
                          <li className="px-2.5 py-2 hover:text-[#d51243]  transition ease-in-out">
                            <a href="#">Log In</a>
                          </li>
                        </li>
                        <li className="px-5 py-1  ">
                          <h6 className="title px-5 py-2 font-bold hover:text-[#d51243]  transition ease-in-out">
                            Page Type
                          </h6>
                          <li className="px-2.5 pt-4 py-2 hover:text-[#d51243]  transition ease-in-out">
                            <a href="#">Product Track</a>
                          </li>
                          <li className="px-2.5 py-2 hover:text-[#d51243]  transition ease-in-out">
                            <a href="#">Whishlist</a>
                          </li>
                          <li className="px-2.5 py-2 hover:text-[#d51243]  transition ease-in-out">
                            <a href="#">404 / Error</a>
                          </li>
                          <li className="px-2.5 py-2 hover:text-[#d51243]  transition ease-in-out">
                            <a href="#">Coming Soon</a>
                          </li>
                        </li>
                      </ul>
                    </li>

                    <li className="drop-down ms-10 text-xs font-semibold">
                      <a
                        href="#"
                        className="hover:text-[#d51243]  transition ease-in-out"
                      >
                        Blog
                        <i class="angel fa-solid fa-angle-down ms-1 hover:text-[#d51243]  transition ease-in-out  text-gray-300 "></i>
                      </a>
                      <ul className="mt-3.5  rounded-b-xl border-2 border-t-[#d51243]">
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out translate-x-6  "
                          >
                            Blog
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover:text-[#d51243]  transition ease-in-out translate-x-6  "
                          >
                            Blog Details
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li className="ms-10 text-xs font-semibold">
                      <a
                        href="#"
                        className="hover:text-[#d51243]  transition ease-in-out"
                      >
                        Contact
                        <i class="angel fa-solid fa-angle-down ms-1  hover:text-[#d51243]  transition ease-in-out text-gray-300 text "></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="col-span-3 lg:inline hidden ">
              <div className="flex justify-end text-xs font-semibold">
                <div className="menu-content py-3.5 mr-10">
                  <i class="fa-solid fa-phone-flip text-[#d51243] mr-2"></i>
                  <span>
                    <a href="#">908. 408. 501. 89</a>
                  </span>
                </div>
                <div className="menu-content py-3.5">
                  <i class="fa-solid fa-location-dot text-[#d51243] mr-2"></i>
                  <span>
                    <a href="#">Find Store</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
