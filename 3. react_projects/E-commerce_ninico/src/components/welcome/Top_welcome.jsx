import React from "react";

const Top_welcome = () => {
  return (
    <>
      <div className="bg-[#e7e7e7]">
        <div className="container mx-auto px-2 py-1 ">
          <div className="row ">
            <div className=" cols-12 sm:text-start items-center">
              <span className="welcome font-bold text-xs line">
                Welcome to our international shop! Enjoy free shipping on orders
                $100 up.
              </span>
              <span className="header-welcome-text  space-x-3  relative font-semibold text-xs text-[#d51243]">
                <a href="/shop" className="font-bold font-serif after:absolute after:content-[''] after:bottom-[-3px] after:h-[1px] after:w-full after:bg-[#d51243] after:left-0 ">
                  Shop Now
                </a>
                <span>
                  <i class="fa-solid fa-arrow-right transition hover:translate-x-1  hover:ease-in-out "></i>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top_welcome;

export const Welcome = () => {
  return (
    <>
      <div className="bg-[#e7e7e7]">
        <div className="container mx-auto px-2 py-1 ">
          <div className="row ">
            <div className="grid grid-cols-12 sm:text-start items-center">
              <div className="lg:col-span-7 col-span-12">
                <span className="welcome font-bold text-xs line">
                  Welcome to our international shop! Enjoy free shipping on
                  orders $100 up.
                </span>
                <span className="header-welcome-text space-x-3  relative font-semibold text-xs text-[#d51243]">
                  <a href="/shop" className="font-bold font-serif ">
                    Shop Now
                  </a>
                  <span>
                    <i class="fa-solid fa-arrow-right transition hover:translate-x-1  hover:ease-in-out "></i>
                  </span>
                </span>
              </div>

              <div className="col-span-5 lg:inline hidden">
                <div className="flex justify-end space-x-7">
                  <div className="account text-[14px] font-bold hover_text ">
                    <a href="/">
                      <i class="fa-regular fa-user"></i>
                    <span className="ms-2">Account</span>
                    </a>
                  </div>
                  <div className="track_order text-[14px] mx-5 hover_text">
                    <a href=""><i class="fa-solid fa-plane-departure transition hover:translate-x-1  hover:ease-in-out"></i>
                    <span className="ms-2 font-bold">Track Your Order</span></a>
                  </div>
                  <div className="icon text-[14px] space-x-2 ">
                    <a href="/"></a><i class="fa-brands fa-facebook-f hover_text"></i>
                    <a href="/"><i class="fa-brands fa-twitter hover_text"></i></a>
                    <a href="/"><i class="fa-brands fa-behance hover_text"></i></a>
                    <a href="/"><i class="fa-brands fa-youtube hover_text"></i></a>
                    <a href="/"><i class="fa-brands fa-linkedin hover_text"></i></a>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
