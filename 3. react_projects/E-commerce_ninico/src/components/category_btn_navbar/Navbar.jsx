import React from "react";
import { Link } from "react-router-dom";
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
                      <Link to="/"
                        href=""
                        className="hover:text-[#d51243]  transition ease-in-out"
                      >
                        Home
                        <i class="angel fa-solid fa-angle-down ms-1 hover:text-[#d51243]  transition ease-in-out text-gray-300 "></i>
                      </Link>
                      <ul className="mt-3.5  rounded-b-xl border-2 border-t-[#d51243]">
                        <li className="px-5 py-2">
                          <Link to="/"
                            href=""
                            className="hover_text"
                          >
                            Wooden Home
                          </Link>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover_text"
                          >
                            Fashion Home
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover_text"
                          >
                            Furniture Home
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover_text"
                          >
                            Cosmetics Home
                          </a>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover_text"
                          >
                            Food Grocery
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="drop-down ms-10 text-xs font-semibold">
                      <Link to="/shop"
                        href=""
                        className="hover_text"
                      >
                        Shop
                        <i class="angel fa-solid fa-angle-down ms-1 hover_text text-gray-300"></i>
                      </Link>
                      <ul className="mt-3.5  rounded-b-xl border-2 border-t-[#d51243]">
                        <li className="px-5 py-2">
                          <Link to="/shop"
                            href=""
                            className="hover_text  "
                          >
                            Shop
                          </Link>
                        </li>
                        <li className="px-5 py-2">
                          <Link to="/shop_2"
                            href=""
                            className="hover_text"
                          >
                            Shop 2
                          </Link>
                        </li>
                        <li className="px-5 py-2">
                          <Link to="/shop_details"
                            href=""
                            className="hover_text"
                          >
                            Shop Details
                          </Link>
                        </li>
                        <li className="px-5 py-2">
                          <Link to="/shop_details_2"
                            href=""
                            className="hover_text"
                          >
                            Shop Details 2
                          </Link>
                        </li>
                        <li className="px-5 py-2">
                          <Link to="/shop_location"
                            href=""
                            className="hover_text"
                          >
                            Shop Location
                          </Link>
                        </li>
                        <li className="px-5 py-2">
                          <Link to="/cart"
                            href=""
                            className="hover_text"
                          >
                            Cart
                          </Link>
                        </li>
                        <li className="px-5 py-2">
                          <Link to="/sign_in"
                            href=""
                            className="hover_text"
                          >
                            Sign In
                          </Link>
                        </li>
                        <li className="px-5 py-2">
                          <Link to="/checkout"
                            href=""
                            className="hover_text"
                          >
                            Checkout
                          </Link>
                        </li>
                        <li className="px-5 py-2">
                          <Link to="/whishlist"
                            href=""
                            className="hover_text"
                          >
                            Whishlist
                          </Link>
                        </li>
                        <li className="px-5 py-2">
                          <Link to="/product_track"
                            href=""
                            className="hover_text"
                          >
                            Product Track
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="drop-down ms-10 text-xs font-semibold">
                      <Link to="/about"
                        href=""
                        className="hover_text"
                      >
                        Pages
                        <i class="angel fa-solid fa-angle-down ms-1  text-gray-300 hover_text "></i>
                      </Link>
                      <ul className="mega-menu flex justify-around mt-3.5  rounded-b-xl border-2 border-t-[#d51243] ">
                        <li className="px-5 py-1">
                          <h6 className="title px-2.5 py-2 font-bold hover_text">
                            Page Layout
                          </h6>
                          <li className="px-2.5 pt-4 py-2 hover_text">
                            <Link to="/shop" href="">Shop Filters V1</Link>
                          </li>
                          <li className="px-2.5 py-2 hover_text">
                            <Link to="/shop_2" href="">Shop Filters V2</Link>
                          </li>
                          <li className="px-2.5 py-2 hover_text">
                            <Link to="/shop_details" href="">Shop Sidebar</Link>
                          </li>
                          <li className="px-2.5 py-2 hover_text">
                            <Link to="/shop_details_2" href="">Shop Right Sidebar</Link>
                          </li>
                          <li className="px-2.5 py-2 hover_text">
                            <Link to="/shop_location" href="">Shop List View</Link>
                          </li>
                        </li>
                        <li className="px-5 py-1">
                          <h6 className="title px-1 py-2 font-bold hover_text">
                            Page Layout
                          </h6>
                          <li className="px-2.5 pt-4 py-2 hover_text">
                            <Link to="/about" href="">About</Link>
                          </li>
                          <li className="px-2.5 py-2 hover_text">
                            <Link to="/cart" href="">Cart</Link>
                          </li>
                          <li className="px-2.5 py-2 hover_text">
                            <Link to="/checkout" href="">Checkout</Link>
                          </li>
                          <li className="px-2.5 py-2 hover_text">
                            <Link to="/sign_in" href="#">Sign In</Link>
                          </li>
                          <li className="px-2.5 py-2 hover_text">
                            <Link to="/sign_in" href="">Log In</Link>
                          </li>
                        </li>
                        <li className="px-5 py-1  ">
                          <h6 className="title px-5 py-2 font-bold hover_text">
                            Page Type
                          </h6>
                          <li className="px-2.5 pt-4 py-2 hover_text">
                            <Link to="/product_track" href="">Product Track</Link>
                          </li>
                          <li className="px-2.5 py-2 hover_text">
                            <Link to="/whishlist" href="">Whishlist</Link>
                          </li>
                          <li className="px-2.5 py-2 hover_text">
                            <Link to="/error" href="">404 / Error</Link>
                          </li>
                          <li className="px-2.5 py-2 hover_text">
                            <Link to="/coming_soon" href="">Coming Soon</Link>
                          </li>
                        </li>
                      </ul>
                    </li>

                    <li className="drop-down ms-10 text-xs font-semibold">
                      <Link to="/blog"
                        href="#"
                        className="hover_text"
                      >
                        Blog
                        <i class="angel fa-solid fa-angle-down ms-1 hover_text text-gray-300 "></i>
                      </Link>
                      <ul className="mt-3.5  rounded-b-xl border-2 border-t-[#d51243]">
                        <li className="px-5 py-2">
                          <Link to="/blog"
                            href="#"
                            className="hover_text  "
                          >
                            Blog
                          </Link>
                        </li>
                        <li className="px-5 py-2">
                          <Link to="/blog_details"
                            href="#"
                            className="hover_text  "
                          >
                            Blog Details
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="ms-10 text-xs font-semibold">
                      <Link to="/contact"
                        href="#"
                        className="hover_text"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="col-span-3 lg:inline hidden ">
              <div className="flex justify-end text-xs font-semibold">
                <div className="menu-content py-3.5 mr-10 hover_text">
                  <i class="fa-solid fa-phone-flip text-[#d51243] mr-2"></i>
                  <span>
                    <Link to="/error" href="#">908. 408. 501. 89</Link>
                  </span>
                </div>
                <div className="menu-content py-3.5 hover_text">
                  <i class="fa-solid fa-location-dot text-[#d51243] mr-2"></i>
                  <span>
                    <Link to="/shop_location" href="#">Find Store</Link>
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
            <div className="col-span-7  lg:inline hidden">
              <div className="nav-item">
                <nav>
                  <ul className="dropdown-home flex py-3.5 ">
                    <li className="drop-down text-[14px] font-semibold relative ">
                      <Link to="/"
                        href=""
                        className="hover_text  "
                      >
                        Home
                        <i class="angel fa-solid fa-angle-down ms-1 hover_text text-gray-300 "></i>
                      </Link>
                      <ul className="mt-3.5 text-[15px]  rounded-b-xl border-2 border-t-[#d51243]">
                        <li className="px-5 py-2">
                          <Link to="/"
                            href=""
                            className="hover_text "
                          >
                            Wooden Home
                          </Link>
                        </li>
                        <li className="px-5 py-2">
                          <a
                            href="#"
                            className="hover_text"
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
                      <Link to="/shop"
                        href=""
                        className="hover_text text-[14px]"
                      >
                        Shop
                        <i class="angel fa-solid fa-angle-down ms-1 hover_text text-gray-300"></i>
                      </Link>
                      <ul className="mt-3.5 text-[15px] rounded-b-xl border-2 border-t-[#d51243]">
                        <li className="px-5 py-2">
                          <Link to="/shop"
                            href=""
                            className="hover_text  "
                          >
                            Shop
                          </Link>
                        </li>
                        <li className="px-5 py-2">
                          <Link to="/shop_2"
                            href=""
                            className="hover_text"
                          >
                            Shop 2
                          </Link>
                        </li>
                        <li className="px-5 py-2">
                          <Link to="/shop_details"
                            href=""
                            className="hover_text"
                          >
                            Shop Details
                          </Link>
                        </li>
                        <li className="px-5 py-2">
                          <Link to="/shop_details_2"
                            href=""
                            className="hover_text"
                          >
                            Shop Details 2
                          </Link>
                        </li>
                        <li className="px-5 py-2">
                          <Link to="/shop_location"
                            href=""
                            className="hover_text"
                          >
                            Shop Location
                          </Link>
                        </li>
                        <li className="px-5 py-2">
                          <Link to="/cart"
                            href=""
                            className="hover_text"
                          >
                            Cart
                          </Link>
                        </li>
                        <li className="px-5 py-2">
                          <Link to="/sign_in"
                            href=""
                            className="hover_text"
                          >
                            Sign In
                          </Link>
                        </li>
                        <li className="px-5 py-2">
                          <Link to="/checkout"
                            href=""
                            className="hover_text"
                          >
                            Checkout
                          </Link>
                        </li>
                        <li className="px-5 py-2">
                          <Link to="/whishlist"
                            href=""
                            className="hover_text"
                          >
                            Whishlist
                          </Link>
                        </li>
                        <li className="px-5 py-2">
                          <Link to="/product_track"
                            href=""
                            className="hover_text"
                          >
                            Product Track
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="drop-down ms-10 text-[14px] font-semibold">
                      <Link to="/about"
                        href=""
                        className="hover_text"
                      >
                        Pages
                        <i class="angel fa-solid fa-angle-down ms-1  text-gray-300 hover_text "></i>
                      </Link>
                      <ul className="mega-menu flex justify-around mt-3.5  rounded-b-xl border-2 border-t-[#d51243] text-[15px] ">
                        <li className="px-5 py-1">
                          <h6 className="title px-2.5 py-2 font-semibold uppercase hover_text">
                            Page Layout
                          </h6>
                          <li className="px-2.5 pt-4 py-2 font-normal hover_text">
                            <Link to="/shop" href="">Shop Filters V1</Link>
                          </li>
                          <li className="px-2.5 py-2 hover_text  font-normal  ">
                            <Link to="/shop_2" href="">Shop Filters V2</Link>
                          </li>
                          <li className="px-2.5 py-2 hover_text  font-normal ">
                            <Link to="/shop_details" href="">Shop Sidebar</Link>
                          </li>
                          <li className="px-2.5 py-2 hover_text  font-normal ">
                            <Link to="/shop_details_2" href="">Shop Right Sidebar</Link>
                          </li>
                          <li className="px-2.5 py-2 hover_text  font-normal ">
                            <Link to="/shop_location" href="">Shop List View</Link>
                          </li>
                        </li>
                        <li className="px-5 py-1 ">
                          <h6 className="title px-1 py-2 font-semibold uppercase hover_text">
                            Page Layout
                          </h6>
                          <li className="px-2.5 pt-4 py-2 hover_text font-normal ">
                            <Link to="/about" href="">About</Link>
                          </li>
                          <li className="px-2.5 py-2 hover_text  font-normal ">
                            <Link to="/cart" href="">Cart</Link>
                          </li>
                          <li className="px-2.5 py-2 hover_text  font-normal ">
                            <Link to="/checkout" href="">Checkout</Link>
                          </li>
                          <li className="px-2.5 py-2 hover_text  font-normal ">
                            <Link to="/sign_in" href="#">Sign In</Link>
                          </li>
                          <li className="px-2.5 py-2 hover_text  font-normal ">
                            <Link to="/sign_in" href="">Log In</Link>
                          </li>
                        </li>
                        <li className="px-5 py-1  ">
                          <h6 className="title px-5 py-2 font-semibold uppercase hover_text">
                            Page Type
                          </h6>
                          <li className="px-2.5 pt-4 py-2 hover_text  font-normal ">
                            <Link to="/product_track" href="">Product Track</Link>
                          </li>
                          <li className="px-2.5 py-2 hover_text  font-normal ">
                            <Link to="/whishlist" href="">Whishlist</Link>
                          </li>
                          <li className="px-2.5 py-2 hover_text  font-normal ">
                            <Link to="/error" href="">404 / Error</Link>
                          </li>
                          <li className="px-2.5 py-2 hover_text  font-normal ">
                            <Link to="/coming_soon" href="">Coming Soon</Link>
                          </li>
                        </li>
                      </ul>
                    </li>

                    <li className="drop-down ms-10 text-xs font-semibold">
                      <Link to="/blog"
                        href="#"
                        className="hover_text text-[14px]"
                      >
                        Blog
                        <i class="angel fa-solid fa-angle-down ms-1 hover_text text-gray-300 "></i>
                      </Link>
                      <ul className="mt-3.5 text-[15px]  rounded-b-xl border-2 border-t-[#d51243]">
                        <li className="px-5 py-2">
                          <Link to="/blog"
                            href="#"
                            className="hover_text  "
                          >
                            Blog
                          </Link>
                        </li>
                        <li className="px-5 py-2">
                          <Link to="/blog_details"
                            href="#"
                            className="hover_text  "
                          >
                            Blog Details
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="ms-10 text-xs font-semibold">
                      <Link to="/contact"
                        href="#"
                        className="hover_text text-[14px]"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="col-span-3 lg:inline hidden ">
              <div className="flex justify-end text-xs font-semibold">
                <div className="menu-content hover_text py-3.5 mr-10">
                  <i class="fa-solid fa-phone-flip text-[#d51243] mr-2"></i>
                  <span>
                    <Link to="/error" href="">908. 408. 501. 89</Link>
                  </span>
                </div>
                <div className="menu-content py-3.5 hover_text">
                  <i class="fa-solid fa-location-dot text-[#d51243] mr-2"></i>
                  <span>
                    <Link to="/shop_location" href="">Find Store</Link>
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
