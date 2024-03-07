import React from "react";
import { Welcome } from "../../components/welcome/Top_welcome";
import Search_navbar from "../../components/search_navbar/Search_navbar";
import { Navbarclickbtn } from "../../components/category_btn_navbar/Navbar";
import shop from "../../assets/images/shop.jpg";
import {
  ClickCode,
  Clicklogin,
} from "../../components/category_btn_navbar/Categories_btn";
import Footer, { Footer2 } from "../../components/footer/Footer";

const Checkout = () => {
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
                  <span className="text-[#777]">Checkout</span>
                  <h2 className="text-[44px] font-bold pt-1 ">Checkout</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* details */}
      <section className="coupan-area pt-12 pb-12">
        <div className="container mx-auto px-2">
          <div className="row">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-6  pt-1.5 border-2 border-t-[#d51243]">
                <button className="text-start">
                  <div className="txt">
                    <i class="fa-solid fa-folder text-xs px-3 text-[#777]"></i>
                    <span className=" text-[14px] text-black font-semibold">
                      Returning customer?
                      <Clicklogin />
                    </span>
                  </div>
                </button>
              </div>
              <div className="col-span-6  pt-1.5 border-2 border-t-[#d51243]">
                <button className="text-start">
                  <div className="txt">
                    <i class="fa-solid fa-folder text-xs px-3 text-[#777]"></i>
                    <span className=" text-[14px] text-black font-semibold">
                      Have a coupon?
                      <ClickCode />
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* billing details */}
      <section>
        <div className="container mx-auto px-2 mb-52">
          <div className="row">
            <div className="grid grid-cols-12 gap-5">
              <div className="col-span-6 ">
                <div className="form">
                  <div className="billing">
                    <h1 className="text-[25px] font-semibold">
                      Billing Details
                    </h1>
                    <div className="border border-b-gray-50 mt-2 mb-3"></div>
                  </div>
                  <label className="text-[#6f7172] text-sm flex">
                    Country
                    <span className="ms-1 text-red-500 text-md">*</span>
                  </label>
                  <select
                    name="pets"
                    id="pet-select"
                    className="w-full h-10  px-2 mt-2 text-[18px] border"
                  >
                    <option>United States</option>
                    <option> Algeria</option>
                    <option>Canada</option>
                    <option>Givenchyy</option>
                    <option>England</option>
                    <option>Qatar</option>
                    <option>Dominican Republic</option>
                  </select>

                  <div className="row mt-4">
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-6">
                        <div className="forma text-start">
                          <label className="text-[#6f7172] text-sm">
                            First Name
                            <span className="ms-1 text-red-500 text-md">*</span>
                          </label>
                          <input
                            type="text"
                            className="flex border   h-9 px-5 text-xs outline-1 outline-[#d51243] w-full mt-1"
                          />
                        </div>
                      </div>
                      <div className="col-span-6">
                        <div className="forma text-start">
                          <label className="text-[#6f7172] text-sm">
                            First Name
                            <span className="ms-1 text-red-500 text-md">*</span>
                          </label>
                          <input
                            type="text"
                            className="flex border   h-9 px-5 text-xs outline-1 outline-[#d51243] w-full mt-1"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 mt-6">
                      <div className="col-span-12">
                        <div className="form">
                          <label className="text-[#6f7172] text-sm">
                            Company Name
                          </label>
                          <input
                            type="text"
                            className="flex border   h-9 px-5 text-xs outline-1 outline-[#d51243] w-full mt-1"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 mt-6">
                      <div className="col-span-12">
                        <div className="form">
                          <label className="text-[#6f7172] text-sm">
                            Address
                            <span className="ms-1 text-red-500 text-md">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Street address"
                            className="flex border   h-9  px-2  text-sm outline-1 outline-[#d51243] w-full mt-1"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 mt-6">
                      <div className="col-span-12">
                        <div className="form">
                          <input
                            type="text"
                            placeholder="Apartment,suits,unit etc. (optional)"
                            className="flex border   h-9  px-2  text-sm outline-1 outline-[#d51243] w-full mt-1"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 mt-6">
                      <div className="col-span-12">
                        <div className="form">
                          <label className="text-[#6f7172] text-sm">
                            Town / City
                            <span className="ms-1 text-red-500 text-md">*</span>
                          </label>
                          <input
                            type="text"
                            placeholder="Street address"
                            className="flex border   h-9  px-2  text-sm outline-1 outline-[#d51243] w-full mt-1"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row mt-5">
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-6">
                          <div className="forma text-start">
                            <label className="text-[#6f7172] text-sm">
                              State / Country
                              <span className="ms-1 text-red-500 text-md">
                                *
                              </span>
                            </label>
                            <input
                              type="text"
                              className="flex border   h-9 px-5 text-xs outline-1 outline-[#d51243] w-full mt-1"
                            />
                          </div>
                        </div>
                        <div className="col-span-6">
                          <div className="forma text-start">
                            <label className="text-[#6f7172] text-sm">
                              Postcode / Zip
                              <span className="ms-1 text-red-500 text-md">
                                *
                              </span>
                            </label>
                            <input
                              type="text"
                              placeholder="Postcode / Zip"
                              className="flex border   h-9 px-5 text-xs outline-1 outline-[#d51243] w-full mt-1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row mt-5">
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-6">
                          <div className="forma text-start">
                            <label className="text-[#6f7172] text-sm">
                              Email Address
                              <span className="ms-1 text-red-500 text-md">
                                *
                              </span>
                            </label>
                            <input
                              type="text"
                              className="flex border   h-9 px-5 text-xs outline-1 outline-[#d51243] w-full mt-1"
                            />
                          </div>
                        </div>
                        <div className="col-span-6">
                          <div className="forma text-start">
                            <label className="text-[#6f7172] text-sm">
                              Phone
                              <span className="ms-1 text-red-500 text-md">
                                *
                              </span>
                            </label>
                            <input
                              type="text"
                              placeholder="Postcode / Zip"
                              className="flex border   h-9 px-5 text-xs outline-1 outline-[#d51243] w-full mt-1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-12 mt-6">
                      <div className="col-span-12">
                        <div className="form">
                          <label className="text-[#6f7172] text-sm">
                            Order Notes
                          </label>
                          <input
                            type="text"
                            placeholder="Street address"
                            className="flex border  h-32  px-2  text-sm outline-1 outline-[#d51243] w-full mt-1"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-span-6 border-2 border-red-500">
                <div className="form p-[42px]">
                  <div className="billing">
                    <h1 className="text-[25px] font-semibold">Your Order</h1>
                    <div className="border border-b-gray-50 mt-2 mb-3"></div>
                  </div>

                  <div className="row mt-4">
                    <div className="grid grid-cols-12 mt-6">
                      <div className="col-span-12">
                        <div className="form">
                          <div className="tabel">
                            <table className="w-full">
                              <thead>
                                <tr>
                                  <th className="product-name text-[#6f7172]  text-left font-normal w-[250px] text-[14px] py-[15px] border-b-[1px]">
                                    Product
                                  </th>
                                  <th className="product-total text-[#6f7172] text-left font-normal w-[250px] text-[14px] py-[15px] border-b-[1px]">
                                    Total
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="cart-item">
                                  <th className="pro_name text-[#6f7172]  text-left font-normal w-[250px] text-[14px] py-[17px] border-b-[1px]">
                                    Vestibulum suscript
                                    <strong className="ms-0.5">
                                      <i class="fa-solid fa-xmark"></i>1
                                    </strong>
                                  </th>
                                  <th className="pro_name text-[#6f7172] text-left font-normal w-[250px] text-[14px] py-[17px] border-b-[1px]">
                                    $165.00
                                  </th>
                                </tr>

                                <tr className="cart-item">
                                  <th className="pro_name text-[#6f7172]  text-left font-normal w-[250px] text-[14px] py-[17px] border-b-[1px]">
                                    Vestibulum dictum magna
                                    <strong className="ms-0.5">
                                      <i class="fa-solid fa-xmark"></i>1
                                    </strong>
                                  </th>
                                  <th className="pro_name text-[#6f7172] text-left font-normal w-[250px] text-[14px] py-[17px] border-b-[1px]">
                                    $50.00
                                  </th>
                                </tr>

                                <tr className="cart-item">
                                  <th className="pro_name text-[#6f7172]  text-left font-normal w-[250px] text-[14px] py-[17px] border-b-[1px]">
                                    Cart Subtotal
                                  </th>
                                  <th className="pro_name text-[#6f7172] text-left font-normal w-[250px] text-[14px] py-[17px] border-b-[1px]">
                                    $215.00
                                  </th>
                                </tr>

                                <tr className="shipping border-b-[1px] ">
                                  <th className="product-name text-[#6f7172]  text-left font-normal w-[250px] text-[14px] py-[30px]  ">
                                    Shipping
                                  </th>
                                  <td>
                                    <ul>
                                      <li>
                                        <input type="radio" name="shipping" />
                                        <label className="text-[#6f7172]   font-normal text-[14px]  ">
                                          Flate Rate: $7.00
                                        </label>
                                      </li>
                                      <li>
                                        <input type="radio" name="shipping" />
                                        <label className="text-[#6f7172]  font-normal text-[14px]  ">
                                          Free Shipping:
                                        </label>
                                      </li>
                                    </ul>
                                  </td>
                                </tr>

                                <tr className="cart-item">
                                  <th className="pro_name text-[#6f7172]  text-left font-normal w-[250px] text-[14px] py-[17px]">
                                    Order Total
                                  </th>
                                  <th className="pro_name text-[#6f7172] text-left font-normal w-[250px] text-[20px] py-[17px] font-semibold">
                                    $215.00
                                  </th>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <Footer />
    </>
  );
};

export default Checkout;
