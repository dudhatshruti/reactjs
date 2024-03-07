import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import asset15 from "../../assets/images/asset 15.jpeg";
import asset16 from "../../assets/images/asset 16.jpeg";
import asset17 from "../../assets/images/asset 17.jpeg";
import asset18 from "../../assets/images/asset 18.jpeg";
import asset19 from "../../assets/images/asset 19.jpeg";
import asset20 from "../../assets/images/asset 20.jpeg";
import asset21 from "../../assets/images/asset 21.jpeg";
import asset22 from "../../assets/images/asset 22.jpeg";
import asset23 from "../../assets/images/asset 23.jpeg";
import asset24 from "../../assets/images/asset 24.jpeg";
import asset25 from "../../assets/images/asset 25.jpeg";
import asset26 from "../../assets/images/asset 26.jpeg";
import "./product.css";

import { Autoplay } from "swiper/modules";

function Related_products() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
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
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1399: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className=" main_bg  rounded-md p-2.5 ">
            <Link to="/shop_details_2">
            <div className="img_area outer relative  ">
              <img src={asset15} alt="" />
              <div className="group inner absolute top-0 left-0 hidden ">
                <img src={asset16} alt="" />

                <div className=" product_4icon mx-12 absolute flex  ">
                  <div className="related_proicon hidden inner px-3 py-2 ">
                    <a href="/">
                      <i class="fa-solid fa-arrow-right-arrow-left"></i>
                    </a>
                  </div>
                  <div className="related_proicon ml-1.5 hidden inner px-3 py-2 ">
                    <a href="/">
                      <i class="fa-regular fa-eye"></i>
                    </a>
                  </div>
                  <div className="related_proicon ml-1.5 hidden inner px-3 py-2 ">
                    <a href="/">
                      <i class="fa-regular fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="img_info_area  mt-3">
                <h3 className="img_info ">Miko Wooden Bluetooth Speaker</h3>
                <div className="price-info ">
                  <div className="amount text-[17px] font-bold mt-0.5">
                    <div className="img_area  relative  ">
                      <span className="price   ">$31.00</span>
                      <div className="group inner absolute top-0 left-0  hidden ">
                        <a
                          href="/"
                          className="text-black bg-white  hover:duration-700 ease-in-out transition text-center"
                        >
                          <i class="fa-solid fa-cart-shopping text-[#d51243]"></i>
                          <span className="ms-1 underline font-semibold text-[16px] hover_text">
                            Add To Cart
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" main_bg rounded-md p-2.5 ">
          <Link to="/shop_details_2">
            <div className="img_area outer relative  ">
              <img src={asset17} alt="" />
              <div className="group inner absolute top-0 left-0 hidden ">
                <img src={asset18} alt="" />

                <div className=" product_4icon mx-12 absolute flex  ">
                  <div className="related_proicon hidden inner px-3 py-2 ">
                    <a href="/">
                      <i class="fa-solid fa-arrow-right-arrow-left"></i>
                    </a>
                  </div>
                  <div className="related_proicon ml-1.5 hidden inner px-3 py-2 ">
                    <a href="/">
                      <i class="fa-regular fa-eye"></i>
                    </a>
                  </div>
                  <div className="related_proicon ml-1.5 hidden inner px-3 py-2 ">
                    <a href="/">
                      <i class="fa-regular fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="img_info_area  mt-3">
                <h3 className="img_info ">Gorgeous Wooden Gloves</h3>
                <div className="price-info ">
                  <div className="amount text-[17px] font-bold mt-0.5">
                    <div className="img_area  relative  ">
                      <span className="price   ">$31.00</span>
                      <div className="group inner absolute top-0 left-0  hidden ">
                        <a
                          href="/"
                          className="text-black bg-white  hover:duration-700 ease-in-out transition text-center"
                        >
                          <i class="fa-solid fa-cart-shopping text-[#d51243]"></i>
                          <span className="ms-1 underline font-semibold text-[16px] hover_text">
                            Add To Cart
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" main_bg rounded-md p-2.5 ">
          <Link to="/shop_details_2">
            <div className="img_area outer relative  ">
              <img src={asset19} alt="" />
              <div className="group inner absolute top-0 left-0 hidden ">
                <img src={asset20} alt="" />

                <div className=" product_4icon mx-12 absolute flex  ">
                  <div className="related_proicon hidden inner px-3 py-2 ">
                    <a href="/">
                      <i class="fa-solid fa-arrow-right-arrow-left"></i>
                    </a>
                  </div>
                  <div className="related_proicon ml-1.5 hidden inner px-3 py-2 ">
                    <a href="/">
                      <i class="fa-regular fa-eye"></i>
                    </a>
                  </div>
                  <div className="related_proicon ml-1.5 hidden inner px-3 py-2 ">
                    <a href="/">
                      <i class="fa-regular fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="img_info_area  mt-3">
                <h3 className="img_info ">Pinkol Enormous Grantie Bottle</h3>
                <div className="price-info ">
                  <div className="amount text-[17px] font-bold mt-0.5">
                    <div className="img_area  relative  ">
                      <span className="price   ">$31.00</span>
                      <div className="group inner absolute top-0 left-0  hidden ">
                        <a
                          href="/"
                          className="text-black bg-white  hover:duration-700 ease-in-out transition text-center"
                        >
                          <i class="fa-solid fa-cart-shopping text-[#d51243]"></i>
                          <span className="ms-1 underline font-semibold text-[16px] hover_text">
                            Add To Cart
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" main_bg pb-12 rounded-md p-2.5 ">
          <Link to="/shop_details_2">
            <div className="img_area outer relative  ">
              <img src={asset21} alt="" />
              <button className="bg-[#d51243] absolute  top-3 left-5 text-white text-[14px] font-semibold px-2 rounded-md animate-pulse">
                on sale
              </button>

              <div className="group inner absolute top-0 left-0 hidden ">
                <img src={asset22} alt="" />
                <button className="bg-[#d51243] absolute top-3 left-5 text-white text-[14px] font-semibold px-2 rounded-md animate-pulse">
                  on sale
                </button>

                <div className=" product_4icon mx-12 absolute flex  ">
                  <div className="related_proicon hidden inner px-3 py-2 ">
                    <a href="/">
                      <i class="fa-solid fa-arrow-right-arrow-left"></i>
                    </a>
                  </div>
                  <div className="related_proicon ml-1.5 hidden inner px-3 py-2 ">
                    <a href="/">
                      <i class="fa-regular fa-eye"></i>
                    </a>
                  </div>
                  <div className="related_proicon ml-1.5 hidden inner px-3 py-2 ">
                    <a href="/">
                      <i class="fa-regular fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="img_info_area  mt-3">
                <h3 className="img_info ">Gorgeous Aluminium Table</h3>
                <div className="price-info ">
                  <div className="amount text-[17px] font-bold mt-0.5">
                    <div className="img_area  relative  ">
                      <span className="price ">$31.00</span>
                      <div className="group inner absolute top-0 left-0  hidden ">
                        <a
                          href="/"
                          className="text-black bg-white  hover:duration-700 ease-in-out transition text-center"
                        >
                          <i class="fa-solid fa-cart-shopping text-[#d51243]"></i>
                          <span className="ms-1 underline font-semibold text-[16px] hover_text">
                            Add To Cart
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" main_bg pb-12 rounded-md p-2.5 ">
          <Link to="/shop_details_2">
            <div className="img_area outer relative  ">
              <img src={asset23} alt="" />
              <div className="group inner absolute top-0 left-0 hidden ">
                <img src={asset24} alt="" />

                <div className=" product_4icon mx-12 absolute flex  ">
                  <div className="related_proicon hidden inner px-3 py-2 ">
                    <a href="/">
                      <i class="fa-solid fa-arrow-right-arrow-left"></i>
                    </a>
                  </div>
                  <div className="related_proicon ml-1.5 hidden inner px-3 py-2 ">
                    <a href="/">
                      <i class="fa-regular fa-eye"></i>
                    </a>
                  </div>
                  <div className="related_proicon ml-1.5 hidden inner px-3 py-2 ">
                    <a href="/">
                      <i class="fa-regular fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="img_info_area  mt-3">
                <h3 className="img_info ">Evo Lightweight Granite Shirts</h3>
                <div className="price-info ">
                  <div className="amount text-[17px] font-bold mt-0.5">
                    <div className="img_area  relative  ">
                      <span className="price ">$31.00</span>
                      {/* <span className="price  text-[#999] "><del>$39.00</del></span> */}

                      <div className="group inner absolute top-0 left-0  hidden ">
                        <a
                          href="/"
                          className="text-black bg-white   hover:duration-700 ease-in-out transition text-center"
                        >
                          <i class="fa-solid fa-cart-shopping text-[#d51243]"></i>
                          <span className="ms-1 underline font-semibold text-[16px] hover_text">
                            Add To Cart
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className=" main_bg pb-12 rounded-md p-2.5 ">
          <Link to="/shop_details_2">
            <div className="img_area outer relative  ">
              <img src={asset25} alt="" />
              <button className="bg-[#777] absolute  top-3 left-5 text-white text-[14px] font-semibold px-1 rounded-md animate-pulse">
                <a href="/"><i class="fa-solid fa-bolt-lightning"></i></a>
              </button>
              <div className="group inner absolute top-0 left-0 hidden ">
                <img src={asset26} alt="" />
                <button className="bg-[#777] absolute  top-3 left-5 text-white text-[14px] font-semibold px-1 rounded-md animate-pulse">
                <a href="/"><i class="fa-solid fa-bolt-lightning"></i></a>
              </button>
                <div className=" product_4icon mx-12 absolute flex  ">
                  <div className="related_proicon hidden inner px-3 py-2 ">
                    <a href="/">
                      <i class="fa-solid fa-arrow-right-arrow-left"></i>
                    </a>
                  </div>
                  <div className="related_proicon ml-1.5 hidden inner px-3 py-2 ">
                    <a href="/">
                      <i class="fa-regular fa-eye"></i>
                    </a>
                  </div>
                  <div className="related_proicon ml-1.5 hidden inner px-3 py-2 ">
                    <a href="/">
                      <i class="fa-regular fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="img_info_area  mt-3">
                <h3 className="img_info ">CLCo. Incredible Paper Car</h3>
                <div className="price-info ">
                  <div className="amount text-[17px] font-bold mt-0.5">
                    <div className="img_area  relative  ">
                      <span className="price   ">$31.00</span>
                      <div className="group inner absolute top-0 left-0  hidden ">
                        <a
                          href="/"
                          className="text-black bg-white  hover:duration-700 ease-in-out transition text-center"
                        >
                          <i class="fa-solid fa-cart-shopping text-[#d51243]"></i>
                          <span className="ms-1 underline font-semibold text-[16px] hover_text">
                            Add To Cart
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </Link>
          </div>
        </SwiperSlide>

       
      </Swiper>
    </>
  );
}

export default Related_products;
