import React from "react";
import { Welcome } from "../../components/welcome/Top_welcome";
import Search_navbar from "../../components/search_navbar/Search_navbar";
import { Navbarclickbtn } from "../../components/category_btn_navbar/Navbar";
import shop from "../../assets/images/shop.jpg";
import product_track from "../../assets/images/product_track.jpg";
import track from "../../assets/images/track.png";
import Footer from "../../components/footer/Footer";

const Product_track = () => {
  return (
    <>
      <Welcome />
      <Search_navbar />
      <div className="border border-b-gray-50 mt-3"></div>
      <Navbarclickbtn />

      {/* image */}
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
                  <span className="text-[#777]">Track</span>
                  <h2 className="text-[44px] font-bold pt-1 ">
                    Track
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* track area */}
      <section className="track_area py-16">
        <div className="container mx-auto px-2">
          <div className="row flex justify-center">
            <div className="grid grid-cols-12">
              <div className="col-span-12">
                <div className="product_track_content">
                  <div className="product">
                    <img src={product_track} alt="" />
                    
                  </div>
                  <div className="details bg-gray-100 p-10 rounded-md">
                    <div className="track_item flex mb-4">
                      <div className="track_icon mr-5   ">
                        {/* <img src={track} alt="track" className="bg-white p-3 rounded-md w-full"/> */}
                        <i class="fa-solid fa-truck bg-white p-3 rounded-md text-xs"></i>
                      </div>
                      <div className="content">
                        <h4 className="title text-[18px] text-black font-semibold pb-1">
                          Track Your Order
                        </h4>
                        <p className="text-[14px] text-[#777] max-w-md leading-4">
                          To track your order please enter your Order ID in the
                          box below and press the "Track" button. This was given
                          to you on your receipt and in the confirmation email
                          you should have received.
                        </p>
                      </div>
                    </div>
                    <div className="id mb-2">
                      <form>
                        <div className="search-info relative ">
                          <button className="search-icon absolute top-2 ">
                          <i class="fa-regular fa-address-card ms-4"></i>
                          </button>
                          <input
                            type="text"
                            placeholder="Order ID"
                            className=" input-field w-full  border-white rounded-md outline-0 text-[14px] "
                          />
                        </div>
                      </form>
                    </div>
                    <div className="email">
                    <form>
                        <div className="search-info relative ">
                          <button className="search-icon absolute top-2 ">
                          <i class="fa-regular fa-envelope ms-4"></i>
                          </button>
                          <input
                            type="text"
                            placeholder="Billing email"
                            className=" input-field w-full  border-white rounded-md outline-0 text-[14px] "
                          />
                        </div>
                      </form>
                    </div>
                    <div className="btn mt-2 flex justify-center hover:bg-pink-800">
                        <button className=" text-[16px] py-1 font-semibold ">Track Now </button>
                        <span><i class="fa-solid fa-arrow-right mt-2.5 pl-2 transition hover:translate-x-1  hover:ease-in-out"></i></span>
                    </div>
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

export default Product_track;
