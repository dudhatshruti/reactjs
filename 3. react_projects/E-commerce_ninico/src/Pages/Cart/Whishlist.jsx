import React from "react";
import { Link } from "react-router-dom";
import { Welcome } from "../../components/welcome/Top_welcome";
import Search_navbar from "../../components/search_navbar/Search_navbar";
import { Navbarclickbtn } from "../../components/category_btn_navbar/Navbar";
import shop from "../../assets/images/shop.jpg";
import asset15 from "../../assets/images/asset 15.jpeg";
import asset17 from "../../assets/images/asset 17.jpeg";
import Footer from "../../components/footer/Footer";

const Whishlist = () => {
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
                  <span className="text-[#777]">Wishlist</span>
                  <h2 className="text-[40px] font-bold pt-1 tracking-wide ">
                    Wishlist
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* add to cart area */}

      <section className="cart-area my-11 ">
        <div className="container mx-auto px-2">
          <div className="row">
            <div className="grid grid-cols-12">
              <div className="col-span-12 ">
                <div className="table-content overflow-x-auto py-5">
                  <table className="table text-center md:w-full w-[1000px]">
                    <thead>
                      <tr>
                        <th className="border py-1.5 text-[18px]">Images</th>
                        <th className="border py-1.5 text-[18px]">Courses</th>
                        <th className="border py-1.5 text-[18px]">
                          unit price
                        </th>
                        <th className="border py-1.5 text-[18px]">Quantity</th>
                        <th className="border py-1.5 text-[18px]">total</th>
                        <th className="border py-1.5 text-[18px]">
                          add to cart
                        </th>
                        <th className="border py-1.5 text-[18px]">remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="cart-item  ">
                        <td
                          className="product border  py-[20px]"
                          style={{ textAlign: "-webkit-center" }}
                        >
                          <Link to="/shop_details" href="">
                            <img src={asset15} alt="" className="w-[125px]" />
                          </Link>
                        </td>
                        <td className="product-name border  text-[16px]   py-[20px]  font-medium hover_text">
                          <Link to="/shop_details" href="">Bradley Burgess 2</Link>
                        </td>
                        <td className="product-name border text-[17px]  py-[20px] px-[20px] ">
                          $20
                        </td>
                        <td className="product-quantity border  py-[20px] font-medium">
                          <div className="item-quantity">
                            <input
                              type="number"
                              name="numberField"
                              min={1}
                              value="3"
                              className="text-black text-[18px] font-semibold border h-[60px] rounded-sm px-[15px] outline-0"
                            />
                          </div>
                        </td>

                        <td className="product-name border text-[17px]  px-[10px] py-[20px] ">
                          $100.00
                        </td>

                        <td className="product-name border   px-[10px] py-[20px]  font-medium hover_text">
                          <button className="text-[14px] font-semibold py-3 px-7 rounded-md bg-[#d51243] text-white">
                            <a href="/">Add To cart</a>
                          </button>
                        </td>
                        <td className="product-name border text-[16px] px-[10px]  py-[20px]  ">
                          <a href="/">Remove</a>
                        </td>
                      </tr>

                      <tr className="cart-item  ">
                        <td
                          className="product border  py-[20px]"
                          style={{ textAlign: "-webkit-center" }}
                        >
                          <Link to="/shop_details" href="">
                            <img src={asset17} alt="" className="w-[125px]" />
                          </Link>
                        </td>
                        <td className="product-name border  text-[16px]   py-[20px] px-[20px] font-medium hover_text">
                          <Link to="/shop_details" href="/">Allie Sharp</Link>
                        </td>
                        <td className="product-name border text-[17px]  py-[20px] px-[20px] ">
                          $30
                        </td>
                        <td className="product-quantity border  py-[20px] font-medium">
                          <div className="item-quantity">
                            <input
                              type="number"
                              name="numberField"
                              min={1}
                              value="1"
                              className="text-black text-[18px] font-semibold border h-[60px] rounded-sm px-[15px] outline-0"
                            />
                          </div>
                        </td>

                        <td className="product-name border text-[17px]  px-[10px] py-[20px] ">
                          $30.00
                        </td>

                        <td className="product-name border   px-[10px] py-[20px]  font-medium hover_text">
                          <button className="text-[14px] font-semibold py-3 px-7 rounded-md bg-[#d51243] text-white ">
                            <a href="/">Add To cart</a>
                          </button>
                        </td>
                        <td className="product-name border text-[16px] px-[10px]  py-[20px]  ">
                          <a href="/">Remove</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     <Footer/>
      
    </>
  );
};

export default Whishlist;
