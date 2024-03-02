import React from "react";
import { Welcome } from "../../components/welcome/Top_welcome";
import Search_navbar from "../../components/search_navbar/Search_navbar";
import { Navbarclickbtn } from "../../components/category_btn_navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Map from "../../components/Map/Map";

export const Contact = () => {
  return (
    <>
      <Welcome />
      <Search_navbar />
      <div className="border border-b-gray-50 mt-3"></div>
      <Navbarclickbtn />

      {/* contact area */}

      <section className="contact_area py-16">
        <div className="container mx-auto px-2">
          <div className="row">
            <div className="grid grid-cols-12">
              <div className="md:col-span-4 col-span-12">
                <div className="contact-left mb-10 md:mr-16 mr-0">
                  <div className="contact_shop mb-6 border rounded-md lg:py-9 lg:px-9 md:py-11 md:px-2 py-9 px-9 ">
                    <h4 className="title mb-5 text-[26px] font-semibold">
                      Get In Touch
                    </h4>
                    <div className="shop_info">
                      <div className="address flex text-[#777] text-[16px] font-normal">
                        <div className="icon">
                          <i class="fa-solid fa-location-dot "></i>
                        </div>
                        <div className="  w-52  ms-2 hover_text leading-5">
                          <a href="/">
                            24/26 Strait Barget, Boston, PE21, United Kingdom
                          </a>
                        </div>
                      </div>

                      <div className="tel flex text-[#777] text-[16px] font-normal mt-2.5">
                        <div className="icon">
                          <i class="fa-solid fa-phone-flip"></i>
                        </div>
                        <div className=" text-[17px] w-32 ms-2 leading-5">
                          <a href="/" className="hover_text">
                            +098 (905) 786 897 8 6 - 146 - 389 - 5748
                          </a>
                        </div>
                      </div>

                      <div className="tel flex text-[#777] text-[16px] font-normal mt-2.5">
                        <div className="icon">
                          <i class="fa-regular fa-clock"></i>
                        </div>
                        <div className=" text-[17px] w-21 ms-2 leading-5">
                          <a href="/" className="hover_text">
                            <span>Store Hours:</span>
                            <p>10 am - 10 pm EST, 7 days a week</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="contact_support ">
                    <div className="border text-[16px] font-bold rounded-md py-4 px-1 text-center ">
                      <a href="/">
                        Get Support On Call
                        <i class="fa-solid fa-headphones ms-3.5 text-[#d51243]"></i>
                      </a>
                    </div>

                    <div className="border text-[16px] font-bold rounded-md py-4 px-1 mt-2 text-center ">
                      <a href="/">
                        Get Direction
                        <i class="fa-solid fa-location-dot  ms-3.5 text-[#d51243]"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-8 col-span-12">
                <div className="contact_form">
                  <div className="contact_info mb-8">
                    <h4 className="title text-[26px] font-semibold font-sans ">
                      Make Custom Request
                    </h4>
                    <p className="text-[14px] text-[#777]">
                      Must-have pieces selected every month want style Ideas and
                      Treats?
                    </p>
                  </div>

                  <form action="#">
                    <div className="row">
                      <div className="grid grid-cols-12 ">
                        <div className="md:col-span-6 col-span-12">
                          <div className="contact_input mb-5 ">
                            <input
                              type="text"
                              placeholder="Full name"
                              name="name"
                              required
                              disable
                              className="border rounded-md py-1.5 h-11 px-5 text-xs outline-1 outline-[#d51243] w-full"
                            ></input>
                          </div>
                        </div>
                        <div className="md:col-span-6 col-span-12">
                          <div className="contact_input mb-5 md:ml-4 ml-0">
                            <input
                              type="text"
                              placeholder="Email address"
                              name="email"
                              required
                              disable
                              className="border rounded-md py-1.5 h-11 px-5 text-xs outline-1 outline-[#d51243] w-full"
                            ></input>
                          </div>
                        </div>
                        <div className="md:col-span-6 col-span-12">
                          <div className="contact_input mb-5 ">
                            <input
                              type="text"
                              placeholder="Phone Number"
                              name="number"
                              required
                              disable
                              className="border rounded-md py-1.5 h-11 px-5 text-xs outline-1 outline-[#d51243] w-full"
                            ></input>
                          </div>
                        </div>
                        <div className="md:col-span-6 col-span-12">
                          <div className="contact_input mb-5 md:ml-4 ml-0 ">
                            <input
                              type="text"
                              placeholder="Subject"
                              name="name"
                              required
                              disable
                              className="border rounded-md py-1.5 h-11 px-5 text-xs outline-1 outline-[#d51243] w-full"
                            ></input>
                          </div>
                        </div>
                        <div className="col-span-12">
                          <div className="">
                            <textarea
                              id="message"
                              rows="7"
                              class="border p-5 outline-1 outline-[#d51243]  w-full text-sm rounded-md"
                              placeholder="Enter message"
                            ></textarea>
                          </div>
                        </div>

                        <div className="col-span-6 mt-6">
                          <button className="btn">
                            Get A Quote
                            <i class="fa-solid fa-arrow-right ml-3 transition hover:translate-x-1  hover:ease-in-out"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  -------------map area ---------------- */}
      <Map/>

      {/*---------------- footer--------------------- */}
      <Footer/>
    </>
  );
};
