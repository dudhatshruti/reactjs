import React from 'react'
import Top_welcome from '../components/welcome/Top_welcome'
import Search_navbar from '../components/search_navbar/Search_navbar'
import Navbar from '../components/category_btn_navbar/Navbar'
import flower from "../../src/assets/images/flower.jpeg";
import pencil from "../../src/assets/images/pencil.jpeg";
import spoon from "../../src/assets/images/spoon.jpeg";
import top_category from "../assets/images/top_cat.jpeg";
import chair from "../assets/images/chair.svg";
import lamp from "../assets/images/lamp.svg";
import Christmas_tree from "../assets/images/christmas_tree.svg";
import Bluetooth from "../assets/images/bluetooth.svg";
import recievers from "../assets/images/recievers.svg";
import plate_set from "../assets/images/plate_set.svg";



const Home_page = () => {
  return (
    <>
    <Top_welcome/>
    <Search_navbar/>
    <Navbar/>
 {/* -------------------- IMAGE Slide--------------------------  */}
    <div className="container mx-auto px-2 ">
        <div className="row">
          <div className="grid grid-cols-12 space-x-3">
            <div className="lg:col-span-9 md:col-span-9 sm:col-span-12 col-span-12   flex justify-end  ">
              <img src={flower} alt="" />
            </div>

            <div className="lg:col-span-3 md:col-span-3 lg:inline md:inline sm:hidden  hidden overflow-hidden  ">
              <a href="/">
                <div className="slider_banner_img relative    hover:scale-110 duration-1000 ">
                  <img
                    src={pencil}
                    alt=""
                    className=" lg:min-h-38 md:min-h-40 rounded-md"
                  />
                  <div className="banner_img_info absolute top-0 left-0 p-5">
                    <span className="sub_class text-xs text-[#d51243] font-semibold">
                      Hand made
                    </span>
                    <h4 className="font-medium w-40">
                      New Morden Stylist Crafts
                    </h4>
                  </div>
                </div>
              </a>
              <a href="/">
                <div className="slider_banner_img relative  hover:scale-110 duration-1000">
                  <img
                    src={spoon}
                    alt=""
                    className="mt-5 lg:min-h-38 md:min-h-40 rounded-md "
                  />
                  <div className="banner_img_info absolute top-0 left-0 p-5">
                    <span className="sub_class text-xs text-[#d51243] font-semibold">
                      Popular
                    </span>
                    <h4 className="font-medium w-40">
                      Energy With our newest collection
                    </h4>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-2 px-2">
        <div className="row lg:hidden md:hidden sm:inline inline">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 overflow-hidden">
            <a href="/">
              <div className="slider_banner_img relative  hover:scale-110 duration-1000 ">
                <img src={pencil} alt="" className="mt-2 w-full rounded-md " />
                <div className="banner_img_info absolute top-0 left-0 p-5">
                  <span className="sub_class text-xs text-[#d51243] font-semibold">
                    Hand made
                  </span>
                  <h4 className="font-medium sm:w-40 w-64">
                    New Morden Stylist Crafts
                  </h4>
                </div>
              </div>
            </a>
            <a href="/">
              <div className="slider_banner_img relative  hover:scale-110 duration-1000 overflow-hidden">
                <img src={spoon} alt="" className="mt-2 w-full rounded-md " />
                <div className="banner_img_info absolute top-0 left-0 p-5">
                  <span className="sub_class text-xs text-[#d51243] font-semibold">
                    Popular
                  </span>
                  <h4 className="font-medium sm:w-40 w-64">
                    Energy With our newest collection
                  </h4>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

 {/*----------------------  TOP Categories------------------------*/}

 <section className="category_area pt-16">
        <div className="container mx-auto px-2">
          <div className="row flex items-center">
            <div className="grid grid-cols-12">
              <div className="top_cat_section mb-10 ">
                <div className="top_cat_title font-bold text-xl">
                  Top
                  <span className="font-light ms-2 tracking-tighter text-[#d51243] relative">
                    Categories
                    <img
                      src={top_category}
                      alt=""
                      className="absolute left-0  bottom-0 -z-50 "
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row flex flex-wrap justify-around pb-11 border-b border-gray-500 ">
            <div className="category relative text-center   ">
              <div className="cat_icon mb-5  bg-slate-50 rounded-full  py-8 px-10">
                <img src={chair} alt="" />
                <span className="categories6 ">20</span>
              </div>
              <div className="lg:category_content">
                <h5 className="w-20 font-semibold text-sm text-center ms-2">
                  <a href="/">Driftwood Table Decor</a>
                </h5>
              </div>
            </div>
            <div className="category relative text-center ">
              <div className="cat_icon  mb-5  bg-slate-50 rounded-full py-8 px-9">
                <img src={lamp} alt="" />
                <span className="categories6">12</span>
              </div>
              <div className="category_content">
                <h5 className="w-28 font-semibold text-sm">
                  <a href="/">Floor Driftwood Sculpture</a>
                </h5>
              </div>
            </div>
            <div className="category relative text-center ">
              <div className="cat_icon  mb-5  bg-slate-50 rounded-full py-8 px-9">
                <img src={Christmas_tree} alt="" />
                <span className="categories6">03</span>
              </div>
              <div className="category_content">
                <h5 className="w-28 font-semibold text-sm">
                  <a href="/">Driftwood Christmas Tree</a>
                </h5>
              </div>
            </div>
            <div className="category relative text-center  ">
              <div className="cat_icon   mb-3 bg-slate-50 rounded-full  py-8 px-9">
                <img src={Bluetooth} alt="" />
                <span className="categories6">09</span>
              </div>
              <div className="category_content text-center">
                <h5 className="w-28 font-semibold text-sm ">
                  <a href="/">Wooden Bluetooth Speaker</a>
                </h5>
              </div>
            </div>
            <div className="category relative text-center ">
              <div className="cat_icon  mb-5  bg-slate-50 rounded-full  py-8 px-10">
                <img src={recievers} alt="" />
                <span className="categories6">10</span>
              </div>
              <div className="category_content ">
                <h5 className="w-20 font-semibold text-sm text-center ms-4">
                  <a href="/">Recievers Amplifires</a>
                </h5>
              </div>
            </div>
            <div className="category relative text-center  ">
              <div className="cat_icon  mb-5  bg-slate-50 rounded-full  py-8 px-9">
                <img src={plate_set} alt="" />
                <span className="categories6">05</span>
              </div>
              <div className="category_content">
                <h5 className="w-20 font-semibold text-sm ms-4">
                  <a href="/">Appetizer Plate Set</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>


 {/* ---------------------Popular product------------------------ */}

 <section className="product_area pt-24">
        <div className="container mx-auto px-2">
          <div className="row">
            <div className="grid grid-cols-12">
              <div className="col-span-6 mb-10">
                <div className="top_pro_section mb-10 ">
                  <div className="top_pro_title font-bold text-xl">
                    Popular
                    <span className=" font-light ms-2 tracking-tighter text-[#d51243] relative">
                      Products
                      <img
                        src={top_category}
                        alt=""
                        className="absolute left-0  bottom-1 -z-50 "
                      />
                    </span>
                  </div>
                </div>
              </div>

              <div className="col-span-6 flex flex-end">
                <div className="pro_nav">
                  <nav>1</nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
    
  )
}

export default Home_page