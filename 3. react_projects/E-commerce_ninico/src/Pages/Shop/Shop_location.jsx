import React from "react";
import { Welcome } from "../../components/welcome/Top_welcome";
import Search_navbar from "../../components/search_navbar/Search_navbar";
import { Navbarclickbtn } from "../../components/category_btn_navbar/Navbar";
import shop from "../../assets/images/shop.jpg";
import location1 from "../../assets/images/location1.jpg";
import location2 from "../../assets/images/location2.jpg";
import location3 from "../../assets/images/location3.jpg";
import location4 from "../../assets/images/location4.jpg";
import Map from "../../components/Map/Map";
import Footer from "../../components/footer/Footer";



const Shop_location = () => {
  return (
    <>
      <Welcome />
      <Search_navbar />
      <div className="border border-b-gray-50 mt-3"></div>
      <Navbarclickbtn />

      {/*  image */}
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
            <div className="grid md:grid-cols-3">
              <div className="shop_content">
                <div className="link mb-2 text-[16px]">
                  <span className="item_active relative font-normal pr-10 text-[#040404] after:absolute after:content-[''] after:h-[2px] after:w-[33px] after:bg-[#e4ded5] after:top-[50%] after:translate-x-[-50%] after:right-[-9px]">
                    <a href="/">Home</a>
                  </span>
                  <span className="text-[#777]">Shop Location</span>
                  <h2 className="text-[44px] font-semibold pt-1 ">
                    Shop Location
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="location-area pt-14 ">
        <div className="container mx-auto px-2">
          <div className="row flex justify-center pb-8">
            <div className="grid grid-cols-12">
              <div className="col-span-12">
                <div className="shop-search text-center relative pb-7">
                  <input
                    type="text"
                    placeholder="Search here"
                    className="w-full h-12 text-[15px] font-semibold border rounded-md pr-72 pl-7 outline-0"
                  />
                  <button className=" font-semibold right-0 rounded-r-md bg-[#d51243] text-white absolute px-5 py-3.5 text-[16px]">
                    <a href="/">
                      Find Nearby Store
                      <span className="ms-2">
                        <i class="fa-solid fa-arrow-right"></i>
                      </span>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="grid grid-cols-12 gap-6">
              <div className="lg:col-span-6 col-span-12">
                <div className="shop-location  items-center xs:flex xs:justify-between  border rounded-md">
                  <div className="content  xl:px-10  lg:pl-2.5   md:pl-8 sm:pl-5 pl-1   ">
                    <div className="title  mb-3 text-[18px] font-semibold text-black   ">
                      Balwin Hills Crenshaw Plaza
                    </div>
                    <div className="shop_info">
                      <div className="address flex text-[#777] text-[16px] font-normal">
                        <div className="icon">
                          <i class="fa-solid fa-location-dot "></i>
                        </div>
                        <div className=" w-60  ms-2 hover_text leading-5">
                          <a href="/">
                            24/26 Strait Barget, Boston, PE21, United Kingdom
                          </a>
                        </div>
                      </div>

                      <div className="tel flex text-[#777] text-[16px] font-normal mt-4">
                        <div className="icon">
                          <i class="fa-solid fa-phone-flip"></i>
                        </div>
                        <div className=" text-[17px] w-32 ms-2 leading-5">
                          <a href="/" className="hover_text">
                            +098 (905) 786 897 8 6 - 146 - 389 - 5748
                          </a>
                        </div>
                      </div>

                      <div className="tel flex text-[#777] text-[16px] font-normal mt-3">
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
                  <div className="image">
                    <img src={location1} alt="shop" className="w-full xs:mt-0 mt-4"   />
                  </div>
                </div>
              </div>


              <div className="lg:col-span-6 col-span-12">
                <div className="shop-location mb-7 items-center xs:flex xs:justify-between  border rounded-md">
                  <div className="content  xl:px-10 lg:pl-2.5 md:pl-8 sm:pl-5 pl-1">
                    <div className="title mb-3 text-[18px] font-semibold text-black ">
                    Ninico Hills Crenshaw Plaza
                    </div>
                    <div className="shop_info">
                      <div className="address flex text-[#777] text-[16px] font-normal">
                        <div className="icon">
                          <i class="fa-solid fa-location-dot "></i>
                        </div>
                        <div className=" w-60  ms-2 hover_text leading-5">
                          <a href="/">
                            36/26 Strait Barget, Boston, PE21, United Kingdom
                          </a>
                        </div>
                      </div>

                      <div className="tel flex text-[#777] text-[16px] font-normal mt-4">
                        <div className="icon">
                          <i class="fa-solid fa-phone-flip"></i>
                        </div>
                        <div className=" text-[17px] w-32 ms-2 leading-5">
                          <a href="/" className="hover_text">
                            +098 112 786 897 8 697 - 146 - 963 - 57
                          </a>
                        </div>
                      </div>

                      <div className="tel flex text-[#777] text-[16px] font-normal mt-3">
                        <div className="icon">
                          <i class="fa-regular fa-clock"></i>
                        </div>
                        <div className=" text-[17px] w-21 ms-2 leading-5">
                          <a href="/" className="hover_text">
                            <span>Store Hours:</span>
                            <p>9 am - 10 pm EST, 5 days a week</p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="image">
                    <img src={location2} alt="shop" className="w-full xs:mt-0 mt-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="row ">
            <div className="grid grid-cols-12 gap-6">
            <div className="lg:col-span-6 col-span-12">
                <div className="shop-location items-center xs:flex xs:justify-between  border rounded-md">
                  <div className="content  xl:px-10 lg:pl-2.5 md:pl-8 sm:pl-5 pl-1">
                    <div className="title mb-3 text-[18px] font-semibold text-black ">
                    Vegas BGM Crenshaw Plaza
                    </div>
                    <div className="shop_info">
                      <div className="address flex text-[#777] text-[16px] font-normal">
                        <div className="icon">
                          <i class="fa-solid fa-location-dot "></i>
                        </div>
                        <div className=" w-60  ms-2 hover_text leading-5">
                          <a href="/">
                            40/26 Strait Barget, Boston, PE21, United Kingdom
                          </a>
                        </div>
                      </div>

                      <div className="tel flex text-[#777] text-[16px] font-normal mt-4">
                        <div className="icon">
                          <i class="fa-solid fa-phone-flip"></i>
                        </div>
                        <div className=" text-[17px] w-32 ms-2 leading-5">
                          <a href="/" className="hover_text">
                            +098 (905) 786 897 8 648 85952 -555
                          </a>
                        </div>
                      </div>

                      <div className="tel flex text-[#777] text-[16px] font-normal mt-3">
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
                  <div className="image">
                    <img src={location3} alt="shop" className="w-full xs:mt-0 mt-4"  />
                  </div>
                </div>
              </div>


              <div className="lg:col-span-6 col-span-12">
                <div className="shop-location mb-7 items-center xs:flex xs:justify-between  border rounded-md">
                  <div className="content  xl:px-10 lg:pl-2.5 md:pl-8 sm:pl-5 pl-1 ">
                    <div className="title mb-3 text-[18px] font-semibold text-black ">
                    Bargate Cine Crenshaw Plaza
                    </div>
                    <div className="shop_info">
                      <div className="address flex text-[#777] text-[16px] font-normal">
                        <div className="icon">
                          <i class="fa-solid fa-location-dot "></i>
                        </div>
                        <div className=" w-60  ms-2 hover_text leading-5">
                          <a href="/">
                            38/26 Strait Barget, Boston, PE21, United Kingdom
                          </a>
                        </div>
                      </div>

                      <div className="tel flex text-[#777] text-[16px] font-normal mt-4">
                        <div className="icon">
                          <i class="fa-solid fa-phone-flip"></i>
                        </div>
                        <div className=" text-[17px] w-32 ms-2 leading-5">
                          <a href="/" className="hover_text">
                            +098 (905) 786 897 8 6 - 146 - 389 - 5748
                          </a>
                        </div>
                      </div>

                      <div className="tel flex text-[#777] text-[16px] font-normal mt-3">
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
                  <div className="image">
                    <img src={location4} alt="shop" className="w-full xs:mt-0 mt-4"  />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* map */}

      <Map/>

      {/* footer */}

      <Footer/>
    </>
  );
};

export default Shop_location;
