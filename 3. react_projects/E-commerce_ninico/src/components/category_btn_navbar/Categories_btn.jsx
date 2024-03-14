import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../components/category_btn_navbar/categories_btn.css";

//  categories btn open by default
const Categories_btn = () => {
  const [show, setShow] = useState(true);

  const Showcategory = () => {
    if (show == true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div className="absolute">
      <button
        onClick={Showcategory}
        className=" lg:w-44 md:w-32 py-2 bg-[#d51243] rounded-t-md flex"
      >
        <a href="#" className="space-x-2  text-white ">
          <i class="fa-solid fa-bars text-sm pl-4  "></i>
          <span className="text-sm font-semibold"> Categories</span>
        </a>
      </button>
      {show && (
        <>
          <ul className="menu  text-black bg-[#fff] border border-slate-100  ">
            <li className="ml-5 pt-2">
              <Link to="/shop" href="" className="text-xs space-x-3 ">
                <i class="fa-regular fa-user text-[#d51243] "></i>
                <span className="text-xs  hover:text-[#d51243]  transition ease-in-out ">
                  Candles
                </span>
              </Link>
            </li>

            <li className="ml-5 pt-1.5 ">
              <Link to="/shop" href="" className="text-xs space-x-3 ">
                <i class="fa-regular fa-user text-[#d51243]  "></i>
                <span className="text-xs  hover:text-[#d51243]  transition ease-in-out ">
                  Handmade
                </span>
                <i class="fa-solid fa-arrow-right text-xs text-gray-400 hover:text-[#d51243] "></i>
              </Link>
              <ul className=" menu text-left  text-xs  bg-[#fff] border border-slate-100 h-96  ">
                <li className="ml-2  pt-4 hover:text-[#d51243]  transition ease-in-out ">
                  <Link to="/shop" href="">Chair</Link>
                </li>
                <li className="ml-2  hover:text-[#d51243]  transition ease-in-out ">
                <Link to="/shop" href="">Table</Link>
                </li>
                <li className="ml-2  hover:text-[#d51243]  transition ease-in-out ">
                <Link to="/shop" href="">Wooden</Link>
                </li>
                <li className="ml-2 hover:text-[#d51243]  transition ease-in-out ">
                <Link to="/shop" href="">Furniture</Link>
                </li>
                <li className="ml-2  hover:text-[#d51243]  transition ease-in-out ">
                <Link to="/shop" href="">Clock</Link>
                </li>
                <li className="ml-2  hover:text-[#d51243]  transition ease-in-out ">
                <Link to="/shop" href="#">Gifts</Link>
                </li>
                <li className="ml-2  hover:text-[#d51243]  transition ease-in-out ">
                <Link to="/shop" href="#">Crafts</Link>
                </li>
              </ul>
            </li>

            <li className="ml-5  pt-1.5">
              <Link to="/shop" href="" className="text-xs space-x-3 ">
                <i class="fa-solid fa-shoe-prints text-[#d51243]"></i>
                <span className="text-xs  hover:text-[#d51243]  transition ease-in-out ">
                  Gift Sets
                </span>
              </Link>
            </li>

            <li className="ml-5  pt-1.5">
              <Link to="/shop" href="" className="text-xs space-x-3 ">
                <i class="fa-regular fa-face-smile text-[#d51243]"></i>
                <span className="text-xs  hover:text-[#d51243]  transition ease-in-out ">
                  Plastic Gifts
                </span>
              </Link>
            </li>

            <li className="ml-5  pt-1.5">
              <Link to="/shop" href="" className="text-xs space-x-3 ">
                <i class="fa-regular fa-futbol text-[#d51243]"></i>
                <span className="text-xs  hover:text-[#d51243]  transition ease-in-out ">
                  Handy Cream
                </span>
              </Link>
            </li>

            <li className="ml-5  pt-1.5">
              <Link to="/shop" href="" className="text-xs space-x-3 ">
                <i class="fa-solid fa-crown text-[#d51243]"></i>
                <span className="text-xs  hover:text-[#d51243]  transition ease-in-out ">
                  Cosmetics
                </span>
              </Link>
            </li>

            <li className="ml-5  pt-1.5 pb-2">
              <Link to="/shop" href="" className="text-xs space-x-3 ">
                <i class="fa-solid fa-gift text-[#d51243]"></i>
                <span className="text-xs  hover:text-[#d51243]  transition ease-in-out ">
                  Silk Accessories
                </span>
              </Link>
            </li>
          </ul>
          <div className="daily-offer text-[14px] bg-gray-100  py-5 ">
            <ul className="ms-5 text-black font-semibold">
              <li className="py-1">
                <Link to="/shop" href="#" className="relative hover:text-[#d51243]">
                  Value of the Day
                </Link>
              </li>
              <li className="py-1">
                <Link to="/shop" href="" className="relative hover:text-[#d51243]">
                  Top 100 Offers
                </Link>
              </li>
              <li className="py-1">
                <Link to="/shop" href="" className="relative hover:text-[#d51243]">
                  New Arrivals
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Categories_btn;

//  categories btn open when click

export const Categories2_btn = () => {
  const [show, setShow] = useState(false);

  const Showcategory2 = () => {
    if (show == true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <div className="absolute">
      <button
        onClick={Showcategory2}
        className=" lg:w-44  py-2.5 bg-[#d51243]  flex"
      >
        <a href="#" className="space-x-2  text-white ">
          <i class="fa-solid fa-bars text-sm pl-4  "></i>
          <span className="text-sm font-semibold"> Categories</span>
        </a>
      </button>
      {show && (
        <>
          <ul className="menu  text-black bg-[#fff] border border-slate-100  ">
            <li className="ml-5 pt-2">
              <a href="#" className="text-xs space-x-3 ">
                <i class="fa-solid fa-chair text-[#d51243]"></i>
                <span className="text-xs  hover_text ">Furniture</span>
              </a>
            </li>

            <li className="ml-5 pt-1.5">
              <a href="#" className="text-xs space-x-3 ">
                <i class="fa-solid fa-fire text-[#d51243]"></i>
                <span className="text-xs  hover_text ">Cooking</span>
                <i class="fa-solid fa-arrow-right text-xs text-gray-400 hover:text-[#d51243] "></i>
              </a>
              <ul className=" menu text-left  text-xs  bg-[#fff] border border-slate-100   ">
                <li className="ml-2  pt-4 hover_text ">
                  <a href="#">Chair</a>
                </li>
                <li className="ml-2  hover_text ">
                  <a href="#">Table</a>
                </li>
                <li className="ml-2  hover_text ">
                  <a href="#">Wooden</a>
                </li>
                <li className="ml-2 hover_text ">
                  <a href="#">Furniture</a>
                </li>
                <li className="ml-2  hover_text ">
                  <a href="#">Clock</a>
                </li>
                <li className="ml-2  hover_text ">
                  <a href="#">Gifts</a>
                </li>
                <li className="ml-2  hover_text ">
                  <a href="#">Crafts</a>
                </li>
              </ul>
            </li>

            <li className="ml-5  pt-1.5">
              <a href="#" className="text-xs space-x-3 ">
                <i class="fa-solid fa-shoe-prints text-[#d51243]"></i>
                <span className="text-xs  hover_text ">Accessories</span>
              </a>
            </li>

            <li className="ml-5  pt-1.5">
              <a href="#" className="text-xs space-x-3 ">
                <i class="fa-solid fa-shirt text-[#d51243] "></i>
                <span className="text-xs  hover_text ">Fashion</span>
              </a>
            </li>

            <li className="ml-5  pt-1.5">
              <a href="#" className="text-xs space-x-3 ">
                <i class="fa-regular fa-clock text-[#d51243]"></i>
                <span className="text-xs hover_text ">Clocks</span>
              </a>
            </li>

            <li className="ml-5  pt-1.5">
              <a href="#" className="text-xs space-x-3 ">
                <i class="fa-regular fa-lightbulb text-[#d51243]"></i>
                <span className="text-xs  hover_text ">Lighting</span>
              </a>
            </li>

            <li className="ml-5  pt-1.5 pb-2">
              <a href="#" className="text-xs space-x-3 ">
                <i class="fa-solid fa-gift text-[#d51243]"></i>
                <span className="text-xs hover_text ">Toys</span>
              </a>
            </li>

            <li className="ml-5   pb-2">
              <a href="#" className="text-xs space-x-3 ">
                <i class="fa-solid fa-basketball text-[#d51243]"></i>
                <span className="text-xs hover_text ">Hand Made</span>
              </a>
            </li>

            <li className="ml-5   pb-2">
              <a href="#" className="text-xs space-x-3 ">
                <i class="fa-solid fa-gift text-[#d51243]"></i>
                <span className="text-xs hover_text ">Minimalism</span>
              </a>
            </li>

            <li className="ml-5   pb-2">
              <a href="#" className="text-xs space-x-3 ">
                <i class="fa-regular fa-lightbulb text-[#d51243]"></i>
                <span className="text-xs hover_text ">Electronics</span>
              </a>
            </li>

            <li className="ml-5   pb-2">
              <a href="#" className="text-xs space-x-3 ">
                <i class="fa-solid fa-car text-[#d51243]"></i>
                <span className="text-xs hover_text ">Cars</span>
              </a>
            </li>
          </ul>
          <div className="coupan text-[14px] bg-black py-2.5 px-5 flex justify-between ">
            <div className="flex">
              <h6 className="text-[14px] text-[#777]">Coupan:</h6>
              <a href="/">
                <span className="text-white underline text-xs ms-1 font-semibold">
                  Offers50
                </span>
              </a>
            </div>
            <div className="copy text-[#777] text-sm">
              <i class="fa-regular fa-copy"></i>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export const Clicklogin = () => {
  const [show, setShow] = useState(false);

  const Showdetails = () => {
    if (show == true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <>
      <button onClick={Showdetails} className=" ">
        <a href="#" className="  ">
          <span className="text-[14px] ms-1  text-[#777]">
            Click here to login
          </span>
        </a>
      </button>
      {show && (
        <>
          <div className=" mt-2">
            <div className="row">
              <div className="grid grid-cols-6">
                <div className="col-span-6 bg-white">
                  <div className="form border p-[30px] text-[18px]">
                    <div className="notice   text-start leading-6">
                      <p className=" font-normal ">
                        Quisque gravida turpis sit amet nulla posuere lacinia.
                        Cras sed est sit amet ipsum luctus.
                      </p>
                    </div>
                    <div className="forma text-start">
                      <label className="text-[#999]">
                        Username or email
                        <span className="ms-1 text-red-500 text-xl">*</span>
                      </label>
                      <input
                        type="text"
                        className="flex border   h-9 px-5 text-xs outline-1 outline-[#d51243] w-full"
                      />
                    </div>

                    <div className="forma text-start mt-3">
                      <label className="text-[#999]">
                        Password
                        <span className="ms-1 text-red-500 text-xl">*</span>
                      </label>
                      <input
                        type="text"
                        className="flex border   h-9 px-5 text-xs outline-1 outline-[#d51243] w-full"
                      />
                    </div>

                    <div className="mt-4 text-start">
                      <div className="form-btn">
                        <button className="btn px-7">Login</button>
                        <input type="checkbox" className="ms-3" />
                        <label className="text-[#777]">Remember me</label>
                      </div>
                    </div>

                    <div className="pass text-start mt-3.5 text-[#777]">
                      <a href="/">Lost your password?</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export const ClickCode = () => {
  const [show, setShow] = useState(false);

  const Showdetails = () => {
    if (show == true) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  return (
    <>
      <button onClick={Showdetails} className=" ">
        <a href="#" className="  ">
          <span className="text-[14px] ms-1  text-[#777] ">
            Click here to enter your code
          </span>
        </a>
      </button>
      {show && (
        <>
          <div className=" mt-2">
            <div className="row">
              <div className="grid grid-cols-6">
                <div className="col-span-6 ">
                  <div className="form border p-[30px] text-[18px]">
                    <div className="notice   text-start leading-6">
                      <p className=" font-normal ">
                        Quisque gravida turpis sit amet nulla posuere lacinia.
                        Cras sed est sit amet ipsum luctus.
                      </p>
                    </div>
                    <div className="form">
                      <input
                        type="text" placeholder="Coupon Code"
                        className="flex border   h-9 px-5 text-xs outline-1 outline-[#d51243] w-full"
                      />
                    </div> 

                    <button className="btn mt-4">
                      Apply Coupon
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
