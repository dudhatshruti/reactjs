import React from "react";
import { Welcome } from "../../components/welcome/Top_welcome";
import Search_navbar from "../../components/search_navbar/Search_navbar";
import { Navbarclickbtn } from "../../components/category_btn_navbar/Navbar";
import shop from "../../assets/images/shop.jpg";
import error from "../../assets/images/error.png";
import Footer from "../../components/footer/Footer";

 const Error = () => {
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
                  <span className="text-[#777]">Error</span>
                  <h2 className="text-[44px] font-bold pt-1  ">Error</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------- error area ------------ */}
      <section className="py-16">
        <div className="container mx-auto px-2">
          <div className="row">
            <div className="grid grid-cols-12 ">
              <div className="col-span-12">
                <div className="error_part text-center ">
                  <div className="error_thumb mb-9 justify-center flex">
                    <img src={error} alt="" />
                  </div>
                  <div className="content">
                    <h4 className="error_title mb-6 font-bold text-4xl">404. Page not Found</h4>
                    <p className="text-[18px] text-[#777] ">Sorry, we couldn’t find the page you where looking for. We suggest that </p>
                    <span className="text-[18px] text-[#777] mb-12">you return to homepage.</span>
                  </div>

                  <div className="b">
                    <button className=" text-[14px] font-semibold py-3 px-8 rounded-md bg-[#d51243] text-white hover:text-black space-x-2.5 mt-8 ">
                    <a href="/" className="space-x-2.5">
                    <i class="fa-solid fa-arrow-left  transition hover:-translate-x-1  hover:ease-in-out"></i>
                    <span>Back To Home</span>
                    </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------- footer ----------------------- */}
      <Footer/>
    </>
  );
};

export default Error;