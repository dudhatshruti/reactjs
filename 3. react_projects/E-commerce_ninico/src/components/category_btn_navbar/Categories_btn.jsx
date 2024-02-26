import React, { useState } from "react";
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
              <a href="#" className="text-xs space-x-3 ">
                <i class="fa-regular fa-user text-[#d51243] "></i>
                <span className="text-xs  hover:text-[#d51243]  transition ease-in-out ">
                  Candles
                </span>
              </a>
            </li>

            <li className="ml-5 pt-1.5">
              <a href="#" className="text-xs space-x-3 ">
                <i class="fa-regular fa-user text-[#d51243]  "></i>
                <span className="text-xs  hover:text-[#d51243]  transition ease-in-out ">
                  Handmade
                </span>
                <i class="fa-solid fa-arrow-right text-xs text-gray-400 hover:text-[#d51243] "></i>
              </a>
              <ul className=" menu text-left  text-xs  bg-[#fff] border border-slate-100   ">
                <li className="ml-2  pt-4 hover:text-[#d51243]  transition ease-in-out ">
                  <a href="#">Chair</a>
                </li>
                <li className="ml-2  hover:text-[#d51243]  transition ease-in-out ">
                  <a href="#">Table</a>
                </li>
                <li className="ml-2  hover:text-[#d51243]  transition ease-in-out ">
                  <a href="#">Wooden</a>
                </li>
                <li className="ml-2 hover:text-[#d51243]  transition ease-in-out ">
                  <a href="#">Furniture</a>
                </li>
                <li className="ml-2  hover:text-[#d51243]  transition ease-in-out ">
                  <a href="#">Clock</a>
                </li>
                <li className="ml-2  hover:text-[#d51243]  transition ease-in-out ">
                  <a href="#">Gifts</a>
                </li>
                <li className="ml-2  hover:text-[#d51243]  transition ease-in-out ">
                  <a href="#">Crafts</a>
                </li>
              </ul>
            </li>

            <li className="ml-5  pt-1.5">
              <a href="#" className="text-xs space-x-3 ">
                <i class="fa-solid fa-shoe-prints text-[#d51243]"></i>
                <span className="text-xs  hover:text-[#d51243]  transition ease-in-out ">
                  Gift Sets
                </span>
              </a>
            </li>

            <li className="ml-5  pt-1.5">
              <a href="#" className="text-xs space-x-3 ">
                <i class="fa-regular fa-face-smile text-[#d51243]"></i>
                <span className="text-xs  hover:text-[#d51243]  transition ease-in-out ">
                  Plastic Gifts
                </span>
              </a>
            </li>

            <li className="ml-5  pt-1.5">
              <a href="#" className="text-xs space-x-3 ">
                <i class="fa-regular fa-futbol text-[#d51243]"></i>
                <span className="text-xs  hover:text-[#d51243]  transition ease-in-out ">
                  Handy Cream
                </span>
              </a>
            </li>

            <li className="ml-5  pt-1.5">
              <a href="#" className="text-xs space-x-3 ">
                <i class="fa-solid fa-crown text-[#d51243]"></i>
                <span className="text-xs  hover:text-[#d51243]  transition ease-in-out ">
                  Cosmetics
                </span>
              </a>
            </li>

            <li className="ml-5  pt-1.5 pb-2">
              <a href="#" className="text-xs space-x-3 ">
                <i class="fa-solid fa-gift text-[#d51243]"></i>
                <span className="text-xs  hover:text-[#d51243]  transition ease-in-out ">
                  Silk Accessories
                </span>
              </a>
            </li>
          </ul>
          <div className="daily-offer text-[14px] bg-gray-100  py-5 ">
            <ul className="ms-5 text-black font-semibold">
              <li className="py-1">
                <a href="#" className="relative hover:text-[#d51243]">
                  Value of the Day
                </a>
              </li>
              <li className="py-1">
                <a href="#" className="relative hover:text-[#d51243]">
                  Top 100 Offers
                </a>
              </li>
              <li className="py-1">
                <a href="#" className="relative hover:text-[#d51243]">
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

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

export default Categories_btn;
