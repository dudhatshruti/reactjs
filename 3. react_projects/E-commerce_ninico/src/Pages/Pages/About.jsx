import React from "react";
import { Welcome } from "../../components/welcome/Top_welcome";
import Search_navbar from "../../components/search_navbar/Search_navbar";
import { Navbarclickbtn } from "../../components/category_btn_navbar/Navbar";
import shop from "../../assets/images/shop.jpg";
import about_img_1 from "../../assets/images/about_img_1.jpg";
import about_img_2 from "../../assets/images/about_img_2.jpg";
import about_img_3 from "../../assets/images/about_img_3.png";
import about_banner1 from '../../assets/images/about_banner1.jpg'
import about_banner2 from '../../assets/images/about_banner2.jpg'

// import Swipper from "./Swipper";

import { Swiper, SwiperSlide } from "swiper/react";
import team1 from "../../assets/images/team1.jpg";
import team2 from "../../assets/images/team2.jpg";
import team3 from "../../assets/images/team3.jpg";
import team4 from "../../assets/images/team4.jpg";

import { Autoplay } from "swiper/modules";
import Footer from "../../components/footer/Footer";

export function Slides() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={25}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={
          {
            // 320:{
            //   slidesPerView: 1,
            //   spaceBetween: 0,
            // },
            // 576: {
            //   slidesPerView: 2,
            //   spaceBetween: 20,
            // },
            // 768: {
            //   slidesPerView: 3,
            //   spaceBetween: 10,
            // },
            // 1000: {
            //   slidesPerView: 4,
            //   spaceBetween: 10,
            // },
            // 1200: {
            //   slidesPerView:5,
            //   spaceBetween: 10,
            // },
            // 1399: {
            //   slidesPerView:6,
            //   spaceBetween: 10,
            // },
          }
        }
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="gradient relative  mb-10">
            <img src={team1} alt=""/>
            <div className="profile absolute bottom-[35px] z-50 left-7 text-white">
              <p className="text-[15px] font-semibold">Founder</p>
              <h5 className="text-[25px]">Rosalina D. Willson</h5>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide><img src={team2} alt=""/></SwiperSlide>
         <SwiperSlide><img src={team3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={team4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={team1} alt="" /></SwiperSlide>
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
            <div className="logo absolute -bottom-5   left-80 right-0">
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

      <section className="bg-gray-100 pb-4 mb-10">
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
            <Slides />
          </div>
        </div>
      </section>

      <section className="feature-area pb-5 ">
      <div className="container mx-auto px-2">
            <div className="row ">
              <div className="grid md:grid-cols-12 sm:grid-cols-6 lg:space-x-0 md:space-x-4">
                <div className="col-span-6">
                  <div className="feature mb-16">
                    <div className="banner relative   ">
                      <img src={about_banner1} alt="about_banner" />
                    </div>
                  </div>
                </div>
                <div className="col-span-6 ">
                  <div className="feature-info  mx-[50px] mb-[70px]">
                    <div className="feature text-[14px] mb-1 text-[#777]">
                      <p>Features #01</p>
                    </div>
                    <div className="product_text ">
                      <h4 className="title mb-4 lg:text-[39px] font-semibold tracking-tight">
                        <a href="/">Solutions that work together</a>
                      </h4>
                      <p className="text-[#777] lg:text-[17px] text-[17px] mb-9">
                      Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.
                      </p>
                    </div>
                    
                    <div className="">
                      <button className="border px-6 py-3 text-[18px] font-semibold rounded-md mx-auto hover:bg-[#d51243] ease-in-out duration-500 hover:text-white">
                        <a href="/">Get In Touch</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="row ">
              <div className="grid md:grid-cols-12 sm:grid-cols-6 lg:space-x-0 md:space-x-4">
               
                <div className="col-span-6 ">
                  <div className="feature-info  mx-[50px] mb-[70px]">
                    <div className="feature text-[14px] mb-1 text-[#777]">
                      <p>Features #02</p>
                    </div>
                    <div className="product_text ">
                      <h4 className="title mb-4 lg:text-[39px] font-semibold tracking-tight">
                        <a href="/">All kinds of payments securely</a>
                      </h4>
                      <p className="text-[#777] lg:text-[17px] text-[17px] mb-9">
                      Publish your eCommerce site quickly with our easy-to-use store builder— no coding required. Migrate your items from your point of sale system or turn your Instagram feed into a shopping site and start selling fast. Square Online works for all kinds of businesses—retail, restaurants, services.
                      </p>
                    </div>
                    
                    <div className="">
                      <button className="border px-6 py-3 text-[18px] font-semibold rounded-md mx-auto hover:bg-[#d51243] ease-in-out duration-500 hover:text-white">
                        <a href="/">Contact With Us</a>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col-span-6">
                  <div className="feature mb-10">
                    <div className="banner relative   ">
                      <img src={about_banner2} alt="about_banner" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* footer */}
    <Footer/>
    </>
  );
};

export default About;
