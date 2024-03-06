import React from "react";
import { Welcome } from "../../components/welcome/Top_welcome";
import Search_navbar from "../../components/search_navbar/Search_navbar";
import { Navbarclickbtn } from "../../components/category_btn_navbar/Navbar";
import shop from "../../assets/images/shop.jpg";
import shop_pro1 from "../../assets/images/shop_pro1.jpeg";
import shop_pro2 from "../../assets/images/shop_pro2.jpeg";
import shop_pro3 from "../../assets/images/shop_pro3.jpeg";
import Product_details from "../../components/shop_details/Product_details";
import Details_condition from "../../components/shop_details/Details_condition";
import Tabs from "../../components/Tabs/Tabs";
import Related_products from "../../components/popular_product/Related_products";
import { Footer2 } from "../../components/footer/Footer";

const Shop_details_2 = () => {
  return (
    <>
      <Welcome />
      <Search_navbar />
      <div className="border border-b-gray-50 mt-3"></div>
      <Navbarclickbtn />

      {/* shop image */}
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
            <div className="grid md:grid-cols-2">
              <div className="shop_content">
                <div className="link mb-2 text-[16px]">
                  <span className="item_active relative font-normal pr-10 text-[#040404] after:absolute after:content-[''] after:h-[2px] after:w-[33px] after:bg-[#e4ded5] after:top-[50%] after:translate-x-[-50%] after:right-[-9px]">
                    <a href="/">Home</a>
                  </span>
                  <span className="text-[#777]">Shop Details 2</span>
                  <h2 className="text-[44px] font-bold pt-1 ">
                    Shop Details 2
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* product area */}

      <section className="product-area pt-10 pb-12">
        <div className="container mx-auto px-2">
          <div className="row">
            <div className="grid grid-cols-12">
              <div className="col-span-5">
                <div className="product pr-[60px]">
                  <div className="product-img mb-2.5">
                    <img src={shop_pro1} alt="" />
                  </div>
                  <div className="product-img mb-2.5">
                    <img src={shop_pro2} alt="" />
                  </div>
                  <div className="product-img mb-2.5">
                    <img src={shop_pro3} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-span-5 ">
                <div className="sticky top-6">
                  <Product_details />
                </div>
              </div>
              <div className="col-span-2">
                <Details_condition />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tabs">
        <div className="container mx-auto px-2">
          <div className="row">
            <div className="grid grid-cols-12">
              <div className="col-span-12">
                <Tabs />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="border border-b-gray-50"></div>
      </section>

      <section className="related-product mt-10 mb-10">
        <div className="container mx-auto px-2">
          <div className="row">
            <div className="grid grid-cols-12">
              <div className="col-span-12">
                <h1 className="text-[26px] font-semibold mb-7">Related Products</h1>
              </div>
            </div>
          <Related_products/>
          </div>
        </div>
      </section>

      {/* footer */}

        <Footer2/>
    </>
  );
};

export default Shop_details_2;
