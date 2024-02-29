import React from "react";
import { Welcome } from "../../components/welcome/Top_welcome";
import Search_navbar from "../../components/search_navbar/Search_navbar";
import { Navbarclickbtn } from "../../components/category_btn_navbar/Navbar";
import shop from "../../assets/images/shop.jpg";
import about_img_1 from "../../assets/images/about_img_1.jpg";
import about_img_2 from "../../assets/images/about_img_2.jpg";
import about_img_3 from "../../assets/images/about_img_3.png";
// import Swipper from "./Swipper";

import { Swiper, SwiperSlide } from 'swiper/react';
import asset76 from '../../assets/images/asset 76.jpeg'
import asset77 from '../../assets/images/asset 77.jpeg'
import asset78 from '../../assets/images/asset 78.jpeg'
import asset79 from '../../assets/images/asset 79.jpeg'
import asset80 from '../../assets/images/asset 80.jpeg'
import asset81 from '../../assets/images/asset 81.jpeg'

import { Autoplay } from 'swiper/modules';

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
        <SwiperSlide><img src={asset76} alt="" /></SwiperSlide>
        <SwiperSlide><img src={asset77} alt="" /></SwiperSlide>
        <SwiperSlide><img src={asset78} alt="" /></SwiperSlide>
        <SwiperSlide><img src={asset79} alt="" /></SwiperSlide>
        <SwiperSlide><img src={asset80} alt="" /></SwiperSlide>
        <SwiperSlide><img src={asset81} alt="" /></SwiperSlide>
        <SwiperSlide><img src={asset76} alt="" /></SwiperSlide>
        <SwiperSlide><img src={asset77} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
}

const About = () => {
  return (
    <>
      <Welcome />
      <Search_navbar />
      <div className="border border-b-gray-50 mt-3"></div>
      <Navbarclickbtn />

      {/* ---------------------image----------------  */}
      <section
        className="py-12 "
        style={{
          backgroundImage: `url(${shop}`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          backgroundSize: "cover",
        }}
      >
        <div className="container mx-auto px-2">
          <div className="row items-center">
            <div className="grid md:grid-cols-7">
              <div className="shop_content">
                <div className="link mb-2 text-[16px]">
                  <span className="item_active relative font-normal pr-10 text-[#040404] after:absolute after:content-[''] after:h-[2px] after:w-[33px] after:bg-[#e4ded5] after:top-[50%] after:translate-x-[-50%] after:right-[-9px]">
                    <a href="/">Home</a>
                  </span>
                  <span className="text-[#777]">About Us</span>
                  <h2 className="text-[44px] font-bold pt-1  ">About Us</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------- about area----------------- */}

      <section className="about_area pt-16 pb-10">
        <div className="container mx-auto px-2">
          <div className="about-inner-logo relative ">
            <div className="row">
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-6">
                  <div className="about_1">
                    <img src={about_img_1} alt="" />
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="about_2">
                    <img src={about_img_2} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="logo absolute bottom-1  mx-auto left-0 right-0">
              <a href="/">
                <img src={about_img_3} alt="" className="" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* story area */}

      <section className="about-story mb-6">
        <div className="container mx-auto px-2">
          <div className="row">
            <div className="grid grid-cols-12">
              <div className="col-span-12">
                <div className="title-area mt-6 mb-11">
                  <h4 className="sub-title text-[14px] mb-2  text-[#777]">
                    About Us
                  </h4>
                  <h5 className="title text-4xl  font-semibold">
                    About Our Story
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-4">
              <div className="story mb-10">
                <p className="text-[17px] text-[#777] mr-1">
                  Publish your eCommerce site quickly with our easy-to-use store
                  builder— no coding required. Migrate your items from your
                  point of sale system or turn your Instagram feed into a
                  shopping site and start selling fast. Square Online works for
                  all kinds of businesses—retail, restaurants, services without
                  costly customization or add ons. Get orders to your customers
                  in lots of ways by offering shipping, pickup, delivery, and
                  even QR code ordering.
                </p>
              </div>
            </div>
            <div className="col-span-5">
              <p className="text-[17px] text-[#777] ml-16">
                Expand your reach and sell more using seamless integrations with
                Google, Instagram, Facebook, and more. Built- in SEO tools make
                it easy for shoppers to find your business on search engines.
                Get access to the entire suite of integrated Square solutions to
                help you run your business. Integration between Square Online
                and all Square point of sale systems makes inventory management
                easy. Subscribe to Square Marketing and easily send email
                promotions to your customers using the contact information
              </p>
            </div>
            <div className="col-span-3 ml-10">
              <div className="list_item text-[17px] mb-10">
                <h6 className="space-x-4  mb-5 flex">
                  <div>
                    <i class="fa-solid fa-check text-[#777] "></i>
                  </div>
                  <span className="font-normal ">
                    Orders go right to your restaurant point of sale, KDS, and
                    kitchen
                  </span>
                </h6>

                <h6 className="space-x-4  mb-5 flex">
                  <div>
                    <i class="fa-solid fa-check text-[#777] "></i>
                  </div>
                  <span className="font-normal ">
                    Provide in-person pickup, delivery by professional couriers
                  </span>
                </h6>

                <h6 className="space-x-4  mb-5 flex ">
                  <div>
                    <i class="fa-solid fa-check text-[#777] "></i>
                  </div>
                  <span className="font-normal relative after:absolute after:content-[''] after:h-[1px] after:w-full after:left-0 after:bg-black ">
                    Offer in-person diners self-serve, contactless ordering via
                    QR codes.
                  </span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* team section */}

      <section className="bg-gray-100">
        <div className="container mx-auto px-2">
          <div className="row">
            <div className="grid grid-cols-12">
              <div className="col-span-12">
                <div className="title-area  text-center mt-12 mb-10">
                  <h4 className="sub-title text-[14px] text-[#777]">Team</h4>
                  <h5 className="title text-3xl  font-bold">Meet With Team</h5>
                </div>
              </div>
            </div>
          <Slides/>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;
