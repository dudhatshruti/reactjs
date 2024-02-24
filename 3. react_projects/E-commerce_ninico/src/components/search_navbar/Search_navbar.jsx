import React from "react";
import "../../components/search_navbar/search_navbar.css"
import ninico from "../../assets/images/ninico.png";
import flag from "../../assets/images/flag.png";
import Cart_offcanvas from "./Offcanvas/Cart_offcanvas";
import Togglebar_offcanvas from "./Offcanvas/Togglebar_offcanvas";


const Search_navbar = () => {
  return (
    <>
      <div className="container mx-auto px-2 lg:relative md:sticky md:top-0 bg-white z-50">
        <div className="row  sm:inline hidden ">
          <div className="grid grid-cols-12 items-center mt-6 ">
            <div className="lg:col-span-2 md:col-span-3 sm:col-span-4 flex items-center">
             <Togglebar_offcanvas/>
              <div>
                <img
                  src={ninico}
                  alt="logo"
                  className="lg:ml-0 md:ml-3 sm:ml-3"
                />
              </div>
            </div>
            <div className="xl:col-span-6 lg:col-span-6 sm:inline hidden md:col-span-7 sm:col-span-5 icon py-1 ">
              <div className="search-info relative">
                <button className="search-icon absolute top-2 left-3">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
                <input
                  type="text"
                  placeholder="Serach Products..."
                  className=" input-field w-full  bg-slate-100 border-white rounded-md outline-0 text-sm "
                />
              </div>
            </div>
            <div className=" country col-span-2 xl:inline lg:inline md:hidden hidden  border border-slate-100 ml-8 mr-2.5">
              <div className="home-dropdown flex justify-between ">
                <div className="rounded flex items-center mx-auto space-x-2 py-1">
                  <img src={flag} alt="" className=" " />
                  <span className="text-xs font-bold">English</span>
                  <span className="angelgown text-[11px]">
                    <i class="fa-solid fa-angle-down  text-gray-200 hover:text-[#d51243]"></i>
                  </span>
                  <div className="home-content pt-1 transition duration-700 ease-in-out ">
                    <ul className="list rounded-sm">
                      <li>
                        <a
                          href="#"
                          className="text-sm hover:text-[#d51243]  transition ease-in-out duration-1000"
                        >
                          Arabic
                        </a>
                        <a
                          href="#"
                          className="text-sm hover:text-[#d51243]  transition ease-in-out duration-1000 "
                        >
                          Spanish
                        </a>
                        <a
                          href="#"
                          className="text-sm hover:text-[#d51243]  transition ease-in-out duration-1000"
                        >
                          Mandarin
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1  xl:inline lg:inline md:hidden hidden  border py-1.5 border-slate-100 w-4/6 rounded-sm ">
              <select className="outline-0 text-sm">
                <option>USD</option>
                <option>YEAN</option>
                <option>EURO</option>
              </select>
            </div>
            <div className="col-span-1 flex flex-end space-x-4 xl:ml-4 lg:ml-0 md:ml-10 sm:ml-10">
              <div>
                <Cart_offcanvas/>
              </div>
              {/* <span className="top-10 start-75 w-3 h-4 text-center  rounded bg-[#d51243] absolute ">0</span> */}
              <div>
                <a href="#">
                  <i class="fa-regular fa-user"></i>
                </a>
              </div>
              <div>
                <a href="#" className="relative">
                  <i class="fa-regular fa-heart "></i>
                </a>
                <div className=" text-center w-3.5 h-3.5 rounded-full text-xs text-white absolute top-2 right-0 bg-[#d51243]">2</div> 
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-2 ">
        <div className="row items-center sm:hidden inline">
          <div className="grid grid-cols-12 py-7">
            <div className="col-span-3">
              <Togglebar_offcanvas/>
            </div>
            <div className="col-span-6 justify-self-center">
              <img src={ninico} alt="" className="ml-3  " />
            </div>
            <div className="col-span-3  space-x-4 flex justify-end">
              <div>
                <a href="#">
                  <i class="fa-solid fa-cart-shopping"></i>
                </a>
              </div>
              <div>
                <a href="#">
                  {" "}
                  <i class="fa-regular fa-user"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search_navbar;
