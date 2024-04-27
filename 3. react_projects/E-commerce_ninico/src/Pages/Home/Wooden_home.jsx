import React from "react";
import { Link } from "react-router-dom";
import Top_welcome from "../../components/welcome/Top_welcome";
import Search_navbar from "../../components/search_navbar/Search_navbar";
import Navbar from "../../components/category_btn_navbar/Navbar";
import flower from '../../assets/images/flower.jpeg'
import pencil from "../../assets/images/pencil.jpeg";
import spoon from "../../assets/images/spoon.jpeg";
import top_category from "../../assets/images/top_cat.jpeg";
import chair from "../../assets/images/chair.svg";
import lamp from "../../assets/images/lamp.svg";
import Christmas_tree from "../../assets/images/christmas_tree.svg";
import Bluetooth from "../../assets/images/bluetooth.svg";
import recievers from "../../assets/images/recievers.svg";
import plate_set from "../../assets/images/plate_set.svg";
import Popular_product from "../../components/popular_product/Popular_product";
import dealproduct from "../../assets/images/dealproduct.png";
import Time from "../../components/Timer/Time";
import Footer from "../../components/footer/Footer";
import Swipper from "./Swipper";
/*---------------- follow section slider ------------------- */
import { Swiper, SwiperSlide } from 'swiper/react';
import asset76 from '../../assets/images/asset 76.jpeg'
import asset77 from '../../assets/images/asset 77.jpeg'
import asset78 from '../../assets/images/asset 78.jpeg'
import asset79 from '../../assets/images/asset 79.jpeg'
import asset80 from '../../assets/images/asset 80.jpeg'
import asset81 from '../../assets/images/asset 81.jpeg'

import { Autoplay } from 'swiper/modules';
import { Changeheader } from "../../components/category_btn_navbar/Change_header";

export function Slides() {
  return (
    <>
      <Swiper
        slidesPerView={6}
        spaceBetween={25}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        breakpoints={{
          320:{
            slidesPerView: 1,
            spaceBetween: 0,
          },
       
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1000: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView:5,
            spaceBetween: 10,
          },
          1399: {
            slidesPerView:6,
            spaceBetween: 10,
          },
        }}
        modules={ [Autoplay ]}
      >
        <SwiperSlide><Link to="/"><img src={asset76} alt="ninico_shop" /></Link></SwiperSlide>
        <SwiperSlide><Link to="/"><img src={asset77} alt="ninico_shop" /></Link></SwiperSlide>
        <SwiperSlide><Link to="/"><img src={asset78} alt="ninico_shop" /></Link></SwiperSlide>
        <SwiperSlide><Link to="/"><img src={asset79} alt="ninico_shop" /></Link></SwiperSlide>
        <SwiperSlide><Link to="/"><img src={asset80} alt="ninico_shop" /></Link></SwiperSlide>
        <SwiperSlide><Link to="/"><img src={asset81} alt="ninico_shop" /></Link></SwiperSlide>
        <SwiperSlide><Link to="/"><img src={asset76} alt="ninico_shop" /></Link></SwiperSlide>
        <SwiperSlide><Link to="/"><img src={asset77} alt="ninico_shop" /></Link></SwiperSlide>
      </Swiper>
    </>
  );
}
/*---------------------------------------------------------------------------- */

const Wooden_home = () => {
  return (
    <>

      {/* -------------------- TOP Navbar -------------------------- */}

      <Top_welcome />
      <Search_navbar />
      <Navbar />

      {/* -------------------- IMAGE Slide--------------------------  */}
      
      <div className="container mx-auto px-2 ">
        <div className="row">
          <div className="grid grid-cols-12 space-x-3">
            <div className="lg:col-span-9 md:col-span-9 sm:col-span-12 col-span-12   flex justify-end  ">
              <img src={flower} alt=""/>
              {/* <Swipper/> */}
            </div>

            <div className="lg:col-span-3 md:col-span-3 lg:inline md:inline sm:hidden  hidden overflow-hidden  ">
              <Link to="/shop_details" href="">
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
              </Link>
              <Link to="/shop_details" href="">
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
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-2 px-2">
        <div className="row lg:hidden md:hidden sm:inline inline">
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 overflow-hidden">
            <Link to="/shop_details" href="/">
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
            </Link>
            <Link to="/shop_details" href="/">
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
            </Link>
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
                      alt="categories"
                      className="absolute left-0  bottom-0 -z-50 "
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="row flex flex-wrap justify-around pb-11 border-b border-gray-200 ">
            <div className="category relative text-center   ">
              <div className="group cat_icon mb-5  bg-slate-50 rounded-full  py-8 px-10">
                <img src={chair} alt="chair" />
                <span className="categories6 ">20</span>
              </div>
              <div className="lg:category_content">
                <h5 className="w-20 font-semibold text-sm text-center ms-2">
                  <Link to="/shop" href="">Driftwood Table Decor</Link>
                </h5>
              </div>
            </div>
            <div className="category relative text-center ">
              <div className="group cat_icon  mb-5  bg-slate-50 rounded-full py-8 px-9">
                <img src={lamp} alt="lamp" />
                <span className="categories6">12</span>
              </div>
              <div className="category_content">
                <h5 className="w-28 font-semibold text-sm">
                  <a href="/">Floor Driftwood Sculpture</a>
                </h5>
              </div>
            </div>
            <div className="category relative text-center ">
              <div className="group cat_icon  mb-5  bg-slate-50 rounded-full py-8 px-9">
                <img src={Christmas_tree} alt="" />
                <span className="categories6">03</span>
              </div>
              <div className="category_content">
                <h5 className="w-28 font-semibold text-sm">
                  <Link to="/shop" href="">Driftwood Christmas Tree</Link>
                </h5>
              </div>
            </div>
            <div className="category relative text-center  ">
              <div className="group cat_icon   mb-3 bg-slate-50 rounded-full  py-8 px-9">
                <img src={Bluetooth} alt="Bluetooth" />
                <span className="categories6">09</span>
              </div>
              <div className="category_content text-center">
                <h5 className="w-28 font-semibold text-sm ">
                  <Link to="/shop" href="">Wooden Bluetooth Speaker</Link>
                </h5>
              </div>
            </div>
            <div className="category relative text-center ">
              <div className="group cat_icon  mb-5  bg-slate-50 rounded-full  py-8 px-10">
                <img src={recievers} alt="recievers" />
                <span className="categories6">10</span>
              </div>
              <div className="category_content ">
                <h5 className="w-20 font-semibold text-sm text-center ms-4">
                  <Link to="/shop" href="">Recievers Amplifires</Link>
                </h5>
              </div>
            </div>
            <div className="category relative text-center  ">
              <div className="group cat_icon  mb-5  bg-slate-50 rounded-full  py-8 px-9">
                <img src={plate_set} alt="plate_set" />
                <span className="categories6">05</span>
              </div>
              <div className="category_content">
                <h5 className="w-20 font-semibold text-sm ms-4">
                  <Link to="/shop" href="">Appetizer Plate Set</Link>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------Popular product------------------------ */}

      <section className="product_area pt-24 pb-16">
        <div className="container mx-auto px-2">
          <div className="row">
            <div className="grid grid-cols-12">
              <div className="sm:col-span-6 col-span-12 ">
                <div className="top_pro_section mb-9 ">
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

              <div className="sm:col-span-6 col-span-12 ">
                <div className="product_nav flex sm:justify-end sm:pb-0 pb-3">
                  <nav className="space-x-10 text-[17px] font-semibold">
                    <button className="text-[#d51243] underline">All</button>
                    <button>Popular</button>
                    <button>On sale</button>
                    <button>Best Rated</button>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-2 grid-cols-1  gap-2">
              <Popular_product />
            </div>
          </div>
        </div>
      </section>

      {/*----------------------Deal product --------------------------  */}
      <section className="pb-20">
        <div className="container mx-auto px-2">
          <div className="theme_bg pt-10 pb-10 bg-[#f8f8f8]">
            <div className="row">
              <div className="grid md:grid-cols-12 sm:grid-cols-6 lg:space-x-0 md:space-x-4">
                <div className="col-span-6">
                  <div className="dealproduct md:ml-[68px]   ">
                    <div className="deal_product_img relative flex justify-center  ">
                      <img src={dealproduct} alt="dealproduct" />
                      <div className="dealproduct_offer text-center">
                        <h5 className="product_offer-price absolute  top-[75px] right-[155px] text-[26px] font-bold text-white bg-[#d51243] rounded-full py-3  px-4 animate-pulse">
                          <span className="text-[12px] block ">From</span>
                          $49
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="dealproduct_info pt-8 mr-10 md:ml-0  ml-5  ">
                    <div className="product_price mb-3 text-[22px] font-bold ">
                      <span className="text-[#d51243]">$49.00</span>
                      <del className="text-[#adadad] ">$59.00</del>
                    </div>
                    <div className="product_text mb-[30px]">
                      <h4 className="title mb-3 lg:text-[50px] md:text-2xl sm:text-[50px]  text-2xl text-black font-semibold tracking-tight">
                        <Link to="/shop_details" href="">Pro2 Abstract Folded Pots</Link>
                      </h4>
                      <p className="text-[#777] lg:text-[18px] text-[17px] lg:leading-6 md:leading-5">
                        Elegant pink origami design three-dimensional view and
                        decoration co-exist. Great for adding a decorative touch
                        to any room’s decor. Wonderful accent piece for coffee
                        tables or side tables.
                      </p>
                    </div>
                    <div className="product_progress mb-7 bg-white w-full">
                      <div className="progress">
                        <div class="w-[75%]  rounded-full h-1.5 mb-4 ">
                          <div class="bg-[#d51243] h-1.5 rounded-full "></div>
                        </div>
                      </div>
                    </div>
                    <div className="product_count lg:flex md:flex-0 sm:flex">
                      <div className="count-down flex">
                          <Time duration={78 * 24 * 60 * 60 * 1000} />
                      </div>
                      <p className="lg:ml-4 sm:ml-4  lg:mt-3 sm:mt-3 mt-1 text-[16px] text-[#777] lg:w-28 sm:w-28 leading-5">Remains until the end of the offer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------------Follow section----------------------------- */}
      
      <section className="shop-area pb-7">
        <div className="container mx-auto px-2">
          <div className="row">
            <div className="grid grid-cols-1">
              <div className="sectionarea text-center mb-9">
                <h5 className="sub-title text-[20px] font-normal text-[#d51243]">Follow On</h5>
                <h2 className="title text-[38px] font-bold text-[#040404]">
                <i class="fa-brands fa-instagram translate-y-0.5"></i>
                <span className="mx-2">ninico-shop</span>
                </h2>
              </div>
            </div>
          </div>
           <Slides/>
        </div>
      </section>

    {/* ----------------- Footer area ----------------------------- */}

    <Footer/>
    {/* <Changeheader/> */}
    </>
  );
};


export default Wooden_home;