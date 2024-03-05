import React from 'react'
import shipping from "../../assets/images/shipping.png";
import guranted from "../../assets/images/guranted.png";
import returnimg from "../../assets/images/returnimg.png";
import covid from "../../assets/images/covid.png";

const Details_condition = () => {
  return (
    <>
    <div className="pro-details border rounded-md -ml-[40px] mb-4">
                  <div className="flex items-center py-[11px] px-[25px] ">
                    <div className="img_thumb">
                      <a href="/">
                        <img
                          src={shipping}
                          alt=""
                          className="transform duration-300 hover:-translate-y-1.5  ease-in-out"
                        />
                      </a>
                    </div>
                    <div className="info ms-3 text-[14px] leading-5 text-[#777] w-32">
                      <p>Free Shipping apply to all orders over $100</p>
                    </div>
                  </div>
                </div>

                <div className="pro-details border rounded-md -ml-[40px] mb-4 ">
                  <div className="flex items-center py-[11px] px-[25px] ">
                    <div className="img_thumb">
                      <a href="/">
                        <img
                          src={guranted}
                          alt=""
                          className="transform duration-300 hover:-translate-y-1.5  ease-in-out"
                        />
                      </a>
                    </div>
                    <div className="info ms-3 text-[14px] leading-5 text-[#777] w-36">
                      <p>Guarenteed 100% Organic from natural farmas </p>
                    </div>
                  </div>
                </div>

                <div className="pro-details border rounded-md -ml-[40px] mb-4 ">
                  <div className="flex items-center py-[11px] px-[25px] ">
                    <div className="img_thumb">
                      <a href="/">
                        <img
                          src={returnimg}
                          alt=""
                          className="transform duration-300 hover:-translate-y-1.5  ease-in-out"
                        />
                      </a>
                    </div>
                    <div className="info ms-3 text-[14px] leading-5 text-[#777] w-36">
                      <p>1 Day Returns if you change your mind</p>
                    </div>
                  </div>
                </div>

                <div className="pro-details border rounded-md -ml-[40px] mb-4 ">
                  <div className="flex items-center py-[11px] px-[25px] ">
                    <div className="img_thumb">
                      <a href="/">
                        <img
                          src={covid}
                          alt=""
                          className="transform duration-300 hover:-translate-y-1.5  ease-in-out"
                        />
                      </a>
                    </div>
                    <div className="info ms-3 text-[14px] leading-5 text-[#777] w-32">
                      <p>Covid-19 info: We Keep delivering.</p>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default Details_condition