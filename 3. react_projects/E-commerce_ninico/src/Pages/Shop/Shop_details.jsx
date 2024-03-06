import React from 'react'
import { Welcome } from '../../components/welcome/Top_welcome'
import Search_navbar from '../../components/search_navbar/Search_navbar'
import { Navbarclickbtn } from '../../components/category_btn_navbar/Navbar'
import shop from "../../assets/images/shop.jpg";
import Product_details from "../../components/shop_details/Product_details";
import Details_condition from "../../components/shop_details/Details_condition";
import Tabs from "../../components/Tabs/Tabs";
import Related_products from "../../components/popular_product/Related_products";
import Footer from '../../components/footer/Footer';



const Shop_details = () => {

  return (
    <>
    <Welcome/>
    <Search_navbar/>
    <div className="border border-b-gray-50 mt-3"></div>
    <Navbarclickbtn/>

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
                  <span className="text-[#777]">Shop Details </span>
                  <h2 className="text-[44px] font-bold pt-1 ">
                    Shop Details 
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-area pt-10 pb-12 ">
        <div className="container mx-auto px-2">
          <div className="row">
            <div className="grid grid-cols-12">
              <div className="col-span-5">
                <div className="product pr-[60px]">
                 1
                </div>
              </div>
              <div className="col-span-5 ">
                <div className="product-details">
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

      <section className="related-product mt-16 mb-10">
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

      <Footer/>

    </>
  )
}

export default Shop_details