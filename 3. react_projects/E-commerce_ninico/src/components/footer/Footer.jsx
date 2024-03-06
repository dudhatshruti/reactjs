import React from "react";
import ninico from "../../assets/images/ninico.png";
import gpay from "../../assets/images/google play.jpeg";
import app_store from "../../assets/images/app store.jpeg";
import brand from "../../assets/images/brand.png";
import logo_white from '../../assets/images/logo-white.png'

const Footer = () => {
  return (
    <>
      <section className="pt-16 bg-[#f8f8f8]">
        <div className="container mx-auto px-4">
          <div className="row">
            <div className="main-footer pb-3.5 mb-7 border-b border-[#e0e0e0]">
              <div className="grid grid-cols-12 sm:text-start text-center  ">
                <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 ">
                  <div className="logo mb-7">
                    <a href="/">
                      <img src={ninico} alt="logo"  />
                    </a>
                  </div>
                  <div className="footer-content text-[#777] text-[16px] w-56 ">
                    <p>
                      Elegant pink origami design three dimensional view and
                      decoration co-exist. Great for adding a decorative touch
                      to any room’s decor.
                    </p>
                  </div>
                </div>
                <div className="xl:col-span-2 lg:col-span-3 md:col-span-3 sm:col-span-3 col-span-12">
                  <div className="footer-information ml-7 mb-10">
                    <h4 className="title mb-7 underline text-[16px] font-semibold">
                      Information
                    </h4>
                    <div className="links">
                      <ul>
                        <li className="footer-links">
                          <a href="/">Custom Service</a>
                        </li>
                        <li className="footer-links">
                          <a href="/">FAQs</a>
                        </li>
                        <li className="footer-links">
                          <a href="/">Ordering Tracking</a>
                        </li>
                        <li className="footer-links">
                          <a href="/">Contacts</a>
                        </li>
                        <li className="footer-links">
                          <a href="/">Events</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="xl:col-span-2 lg:col-span-3  md:col-span-3 sm:col-span-3 col-span-12">
                  <div className="footer-information ml-4 mb-10">
                    <h4 className="title mb-7 underline text-[16px] font-semibold">
                      My Account
                    </h4>
                    <div className="links">
                      <ul>
                        <li className="footer-links">
                          <a href="/">Delivery Information</a>
                        </li>
                        <li className="footer-links">
                          <a href="/">Privacy Policy</a>
                        </li>
                        <li className="footer-links">
                          <a href="/">Discount</a>
                        </li>
                        <li className="footer-links">
                          <a href="/">Custom Service</a>
                        </li>
                        <li className="footer-links">
                          <a href="/">Terms Condition</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2 md:col-span-3 sm:col-span-6 col-span-12">
                  <div className="footer-information ml-4 mb-10">
                    <h4 className="title mb-7 underline text-[16px] font-semibold">
                      Social Network
                    </h4>
                    <div className="links">
                      <ul>
                        <li className="footer-links ">
                          <a href="/">
                            <i class="fa-brands fa-facebook-f w-8 text-black "></i>
                            Facebook
                          </a>
                        </li>
                        <li className="footer-links">
                          <a href="/">
                            <i class="fa-brands fa-dribbble w-8 text-black"></i>
                            Dribbble
                          </a>
                        </li>
                        <li className="footer-links">
                          <a href="/">
                            <i class="fa-brands fa-twitter w-8 text-black"></i>
                            Twitter
                          </a>
                        </li>
                        <li className="footer-links">
                          <a href="/">
                            <i class="fa-brands fa-behance w-8 text-black"></i>
                            Behance
                          </a>
                        </li>
                        <li className="footer-links">
                          <a href="/">
                            <i class="fa-brands fa-youtube w-8 text-black"></i>
                            Youtube
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12">
                  <div className="footer-information ml-4 mb-10">
                    <h4 className="title mb-7 underline text-[16px] font-semibold">
                      Get Newsletter
                    </h4>
                    <p className="text-[17px] text-[#777] mb-4">
                      Get on the list and get 10% off your first order!
                    </p>
                    <div className="form">
                      <form action="">
                        <input
                          type="email"
                          placeholder="Enter email address"
                          className="text-xs h-10 w-64 rounded-md px-7 py-0 mb-2 text-[#777] outline-0"
                        />
                        <button className="btn ">
                          Subscribe Now
                          <i class="fa-solid fa-arrow-right mx-2 transition hover:translate-x-1  hover:ease-in-out"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-cta pb-5">
              <div className="row items-center">
                <div className="grid grid-cols-12 ">
                  <div className="sm:col-span-6 col-span-12">
                  <div className="footer-contact flex items-center">
                    <div className="icon mr-4">
                      <i class="fa-solid fa-phone-flip bg-white rounded-full p-3 shadow-md"></i>
                    </div>
                    <div className="text">
                      <a href="/" className="text-[20px] font-bold leading-3 ">
                        980.029.666.99
                      </a>
                      <p className="text-[14px] font-normal text-[#777]">
                        Working 8:00 - 22:00
                      </p>
                    </div>
                  </div>
                  </div>
                  <div className="sm:col-span-6 col-span-12 footer-source md:flex justify-end sm:mt-0 mt-4 ">
                    <div className="content mr-5">
                      <div className="title text-[18px] font-bold tracking-wide pb-1">
                        Download App on Mobile
                      </div>
                      <p className="text-[14px] text-[#777] leading-3">
                        15% discount on your first purchase
                      </p>
                    </div>
                    <div className="button flex items-center space-x-1 md:mt-0 mt-3">
                      <a href="/" >
                        <img src={gpay} alt="" />
                      </a>
                      <a href="/">
                        <img src={app_store} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright pt-5 pb-6 bg-[#ededed]">
          <div className="container mx-auto px-2">
            <div className="row">
              <div className="grid sm:grid-cols-2 grid-cols-1">
                <div className="copyright-content text-[16px] text-[#777]">
                  <span>
                    Copyright 2024
                    <a
                      href="/"
                      className="text-[#040404] font-bold hover:text-[#d51243] transition ease-in-out duration-700"
                    >
                      &copy;Ninico.
                    </a>
                    <span> All rights reserved. Developed by</span>
                    <a
                      href="/"
                      className="text-[#040404] font-bold hover:text-[#d51243] transition ease-in-out duration-700"
                    >
                      Ali Themes.
                    </a>
                  </span>
                </div>
                <div className="copyright-brand items-center flex sm:justify-end justify-center sm:mt-0 mt-4">
                  <img src={brand} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;

export function Footer2 () {
  return(
    <>
      <section className="pt-16 bg-black">
        <div className="container mx-auto px-4">
          <div className="row">
            <div className="main-footer pb-3.5 mb-7 border-b border-[#e0e0e0]">
              <div className="grid grid-cols-12 sm:text-start text-center  ">
                <div className="xl:col-span-3 lg:col-span-4 md:col-span-6 sm:col-span-6 col-span-12 ">
                  <div className="logo mb-7 ">
                    <a href="/">
                      <img src={logo_white} alt="logo"  />
                    </a>
                  </div>
                  <div className="footer-content text-[#a0a0a0] text-[16px] w-56 ">
                    <p>
                      Elegant pink origami design three dimensional view and
                      decoration co-exist. Great for adding a decorative touch
                      to any room’s decor.
                    </p>
                  </div>
                </div>
                <div className="xl:col-span-2 lg:col-span-3 md:col-span-3 sm:col-span-3 col-span-12">
                  <div className="footer-information ml-7 mb-10">
                    <h4 className="title text-white mb-7 underline text-[16px] font-semibold">
                      Information
                    </h4>
                    <div className="links">
                      <ul>
                        <li className="footer-links text-[#a0a0a0]">
                          <a href="/">Custom Service</a>
                        </li>
                        <li className="footer-links text-[#a0a0a0]">
                          <a href="/">FAQs</a>
                        </li>
                        <li className="footer-links text-[#a0a0a0]">
                          <a href="/">Ordering Tracking</a>
                        </li>
                        <li className="footer-links text-[#a0a0a0]">
                          <a href="/">Contacts</a>
                        </li>
                        <li className="footer-links text-[#a0a0a0]">
                          <a href="/">Events</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="xl:col-span-2 lg:col-span-3  md:col-span-3 sm:col-span-3 col-span-12">
                  <div className="footer-information ml-4 mb-10">
                    <h4 className=" text-white title mb-7 underline text-[16px] font-semibold">
                      My Account
                    </h4>
                    <div className="links">
                      <ul>
                        <li className="footer-links text-[#a0a0a0]">
                          <a href="/">Delivery Information</a>
                        </li>
                        <li className="footer-links text-[#a0a0a0]">
                          <a href="/">Privacy Policy</a>
                        </li>
                        <li className="footer-links text-[#a0a0a0]">
                          <a href="/">Discount</a>
                        </li>
                        <li className="footer-links text-[#a0a0a0]">
                          <a href="/">Custom Service</a>
                        </li>
                        <li className="footer-links text-[#a0a0a0]">
                          <a href="/">Terms Condition</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2 md:col-span-3 sm:col-span-6 col-span-12">
                  <div className="footer-information ml-4 mb-10">
                    <h4 className="title text-white mb-7 underline text-[16px] font-semibold">
                      Social Network
                    </h4>
                    <div className="links">
                      <ul>
                        <li className="footer-links text-[#a0a0a0]">
                          <a href="/">
                            <i class="fa-brands fa-facebook-f w-8 text-white "></i>
                            Facebook
                          </a>
                        </li>
                        <li className="footer-links text-[#a0a0a0]">
                          <a href="/">
                            <i class="fa-brands fa-dribbble w-8 text-white"></i>
                            Dribbble
                          </a>
                        </li>
                        <li className="footer-links text-[#a0a0a0]">
                          <a href="/">
                            <i class="fa-brands fa-twitter w-8 text-white"></i>
                            Twitter
                          </a>
                        </li>
                        <li className="footer-links text-[#a0a0a0]">
                          <a href="/">
                            <i class="fa-brands fa-behance w-8 text-white"></i>
                            Behance
                          </a>
                        </li>
                        <li className="footer-links text-[#a0a0a0]">
                          <a href="/">
                            <i class="fa-brands fa-youtube w-8 text-white"></i>
                            Youtube
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12">
                  <div className="footer-information ml-4 mb-10">
                    <h4 className="title text-white mb-7 underline text-[16px] font-semibold">
                      Popular Keywords
                    </h4>
                    <div className="footer-widge">
                      <a href="/" className="footer2">Makeup</a>
                      <a href="/" className="footer2">Dresses For Girls</a>
                      <a href="/" className="footer2">T-shirts</a>
                      <a href="/" className="footer2">Sabdles</a>
                      <a href="/" className="footer2">Headphones</a>
                      <a href="/" className="footer2">Baby dolls</a>
                      <a href="/" className="footer2">Blazers</a>
                      <a href="/" className="footer2">Handbags</a>
                      <a href="/" className="footer2">Ladies Watches</a>
                      <a href="/" className="footer2">Bags</a>
                      <a href="/" className="footer2">Sport Shoes</a>
                      <a href="/" className="footer2">Reebok Shoes</a>
                      <a href="/" className="footer2">Puma Shoes</a>
                      <a href="/" className="footer2">Boxers</a>
                      <a href="/" className="footer2">Wallets</a>
                      <a href="/" className="footer2">Tops</a>                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="footer-cta pb-5">
              <div className="row items-center">
                <div className="grid grid-cols-12 ">
                  <div className="sm:col-span-6 col-span-12">
                  <div className="footer-contact flex items-center">
                    <div className="icon mr-4">
                      <i class="fa-solid fa-phone-flip text-white border border-[#999] rounded-full p-3 shadow-md"></i>
                    </div>
                    <div className="text">
                      <a href="/" className=" text-blue-600 text-[20px] font-bold leading-3 ">
                        980. 029. 666. 99
                      </a>
                      <p className="text-[14px] font-normal text-[#a0a0a0]">
                        Working 8:00 - 22:00
                      </p>
                    </div>
                  </div>
                  </div>
                  <div className="sm:col-span-6 col-span-12 footer-source md:flex justify-end sm:mt-0 mt-4 ">
                    <div className="content mr-5">
                      <div className="title text-white text-[18px] font-bold tracking-wide pb-1">
                        Download App on Mobile
                      </div>
                      <p className="text-[14px] text-[#777] leading-3">
                        15% discount on your first purchase
                      </p>
                    </div>
                    <div className="button flex items-center space-x-1 md:mt-0 mt-3 ">
                      <a href="/" >
                        <img src={gpay} alt=""  />
                      </a>
                      <a href="/">
                        <img src={app_store} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright pt-5 pb-6 ">
          <div className="container mx-auto px-2">
            <div className="row">
              <div className="grid sm:grid-cols-2 grid-cols-1">
                <div className="copyright-content text-[16px] text-[#777]">
                  <span>
                    Copyright 2024
                    <a
                      href="/"
                      className="text-white font-bold hover:text-[#d51243] transition ease-in-out duration-700"
                    >
                      <span className="ms-1">

                       &copy;Ninico.
                      </span>
                    </a>
                    <span> All rights reserved. Developed by</span>
                    <a
                      href="/"
                      className="text-white font-bold hover:text-[#d51243] transition ease-in-out duration-700"
                    >
                     <span className="ms-1">
                     Ali Themes.
                      </span> 
                    </a>
                  </span>
                </div>
                <div className="copyright-brand items-center flex sm:justify-end justify-center sm:mt-0 mt-4">
                  <img src={brand} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}