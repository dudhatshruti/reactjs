import React from "react";
import { Welcome } from "../../components/welcome/Top_welcome";
import Search_navbar from "../../components/search_navbar/Search_navbar";
import { Navbarclickbtn } from "../../components/category_btn_navbar/Navbar";
import shop from "../../assets/images/shop.jpg";
import asset17 from "../../assets/images/asset 17.jpeg";

const Cart = () => {
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
                  <span className="text-[#777]">Cart</span>
                  <h2 className="text-[44px] font-bold pt-1 ">Cart</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                        <th className="border py-1.5 text-[18px]">unit price</th>
                        <th className="border py-1.5 text-[18px]">Quantity</th>
                        <th className="border py-1.5 text-[18px]">total</th>
                        <th className="border py-1.5 text-[18px]">remove</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="cart-item  ">
                        <td className="product border  py-[20px] px-[10px]" style={{textAlign:"-webkit-center"}}>
                          <a href="/">
                            <img src={asset17} alt="" className="w-[125px]" />
                          </a>
                        </td>
                        <td className="product-name border  text-[16px]   py-[20px] px-[10px] font-medium hover_text">
                          <a href="/">Allie Sharp</a>
                        </td>
                        <td className="product-name border text-[16px]  py-[20px] px-[10px] ">
                       $30
                        </td>
                        <td className="product-quantity border  py-[20px] px-[10px] font-medium">
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

                        <td className="product-name border text-[16px]  py-[20px] px-[10px]  ">
                          $90.00
                        </td>
                        <td className="product-name border text-[16px]  py-[20px] px-[10px] font-medium">
                          <a href="/">Remove</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="grid grid-cols-12">
              <div className="col-span-6 ">
                <div className="coupoun-all ">
                  <div className="coupon">
                    <input
                      type="text"
                      placeholder="Coupon code"
                      name="coupon code"
                      className="border h-[52px] px-[15px] text-[17px] text-black rounded-md outline-0 mr-2"
                    />

                    <button className="btn">
                      <a href="/">Apply Coupon</a>
                    </button>
                  </div>
                  <div className="coupon2"></div>
                </div>
              </div>
              <div className="col-span-6 flex justify-end">
                <button className="btn">
                  <a href="/">Update cart</a>
                </button>
              </div>
            </div>
          </div>

          <div className="row mt-10">
            <div className="grid grid-cols-12 ">
              <div className="col-span-5 ">
                <div className="cart-total  ">
                  <h1 className="text-[25px] mb-5">Cart Totals</h1>
                  <div className="cat_list">
                    <div className="category-sub">
                      <h5>chemistry</h5>
                      <h6>03</h6>
                    </div>
                    <div className="category-sub border-t-0">
                      <h5>Forensic science</h5>
                      <h6>07</h6>
                    </div>
                  </div>
                  <button className="btn mt-4">
                    <a href="/">processed to checkout</a>
                  </button>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
