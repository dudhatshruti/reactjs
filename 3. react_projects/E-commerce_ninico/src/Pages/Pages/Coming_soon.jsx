import React from "react";
import coming_soon1 from "../../assets/images/comming_soon1.jpg";
import ninico from "../../assets/images/logo-white.png";
import Time from "../../components/Timer/Time";

const Coming_soon = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(${coming_soon1}`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="container mx-auto px-2">
          <div className="row flex justify-center">
            <div className="grid grid-cols-6">
              <div className="col-span-6">
                <div className="coming_soon-area pt-[80px] pb-[280px] text-center">
                  <div className="logo ">
                    <a href="/">
                      <img src={ninico} alt="" />
                    </a>
                  </div>
                  <div className="content pt-[280px]">
                    <span className="text-[18px] text-white mb-2 inline-block ">
                      Coming Soon!
                    </span>
                    <h4 className="title text-white text-[48px] font-semibold mb-[20px]">
                      We are Coming Soon
                    </h4>
                  </div>
                  <div className="product_count mb-10 ">
                    <div className="count-down text-white flex justify-center  ">
                      <Time duration={78 * 24 * 60 * 60 * 1000}  />
                    </div>
                    
                  </div>
                  <div className="submit">
                  <div className="search text-center relative pb-7">
                  <i class="fa-regular fa-envelope absolute top-4 left-3"></i>
                  <input
                    type="text"
                    placeholder="Email address"
                    className="w-[100%] h-12 text-[13px] font-semibold  xl:pr-72 md:pr-[220px] sm:pr-[550px] pr-52 pl-8 outline-0"
                  />
                  <button className=" font-semibold right-0 bg-[#d51243] text-white absolute px-5 py-3.5 text-[16px]">
                    <a href="/">
                      Subscribe Now
                      <span className="ms-2">
                        <i class="fa-solid fa-arrow-right"></i>
                      </span>
                    </a>
                  </button>
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Coming_soon;
