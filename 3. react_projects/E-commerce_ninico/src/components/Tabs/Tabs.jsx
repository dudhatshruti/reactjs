import React from "react";
import { Tab } from "@headlessui/react";
import reviewer1 from "../../assets/images/reviewer1.png";
import reviewer2 from "../../assets/images/reviewer2.png";
import reviewer3 from "../../assets/images/reviewer3.png";

const Tabs = () => {
  return (
    <div className="container mx-auto">
      <div className="row ">
        <div className="grid grid-cols-12">
          <div className="col-span-12 ">
            <div className="product-detail tabs mb-9 ">
              <div className="w-full max-w-7xl px-2  sm:px-0 mx-auto">
                <Tab.Group>
                  <Tab.List className="flex space-x-12 rounded-xl  justify-center  ">
                    <Tab className=" rounded-lg  text-[17px] font-semibold leading-5 text-black outline-0">
                      Description
                    </Tab>
                    <Tab className="text-[#777] rounded-lg  text-[17px] font-semibold leading-5 outline-0 ">
                      additional information
                    </Tab>
                    <Tab className=" rounded-lg  text-[17px] font-medium leading-5 text-[#777] outline-0 ">
                      reviews (2)
                    </Tab>
                  </Tab.List>

                  <Tab.Panels className="mt-2">
                    <Tab.Panel>
                      <div className="border border-b-gray-50 mt-3"></div>
                      <p className="w-full text-[15px] text-[#777] mt-6 leading-5">
                        In marketing a product is an object or system made
                        available for consumer use it is anything that can be
                        offered to a market to satisfy the desire or need of a
                        customer. In retailing, products are often referred to
                        as merchandise, and in manufacturing, products are
                        bought as raw materials and then sold as finished goods.
                        A service is also regarded to as a type of product.
                        Commodities are usually raw materials such as metals and
                        agricultural products, but a commodity can also be
                        anything widely available in the open market. In project
                        management, products are the formal definition of the
                        project deliverables that make up contribute to
                        delivering the objectives of the project.
                      </p>
                      <p className="w-full text-[15px] text-[#777] mt-7 mb-14 leading-5">
                        A product can be classified as tangible or intangible. A
                        tangible product is a physical object that can be
                        perceived by touch such as a building, vehicle, gadget,
                        or clothing. An intangible product is a product that can
                        only be perceived indirectly such as an insurance
                        policy. Services can be broadly classified under
                        intangible products which can be durable or non durable.
                        A product line is "a group of products that are closely
                        related, either because they function in a similar
                        manner, are sold to the same customer groups, are
                        marketed through the same types of outlets, or fall
                        within given price ranges."Many businesses offer a range
                        of product lines which may be unique to a single
                        organisation or may be common across the business's
                        industry. In 2002 the US Census compiled revenue figures
                        for the finance and insurance industry by various
                        product lines such as "accident, health and medical
                        insurance premiums" and "income from secured consumer
                        loans.
                      </p>
                    </Tab.Panel>
                    <Tab.Panel className="rounded-xl bg-white p-3">2</Tab.Panel>
                    <Tab.Panel className="rounded-xl bg-white p-3">
                      <div className="review">
                        <h4 className="text-[24px] ">
                          3 reviews for "Wide Cotton Tunic extern hammer"
                        </h4>
                      </div>
                      <div className="comment mb-11 mt-7 flex">
                        <div className="comment-box">
                          <img src={reviewer1} alt="" />
                        </div>
                        <div className="text ms-5 w-full">
                          <div className="comments-top justify-between flex ">
                            <div className="name">
                              <h1 className="text-[18px] font-bold ">
                                Siarhei Dzenisenka
                              </h1>
                              <p className="text-[16px] text-[#777] mt-0.5">
                                March 27, 2018 9:51 am
                              </p>
                            </div>
                            <div className="rating  ">
                              <i class="fa-solid fa-star text-yellow-400"></i>
                              <i class="fa-solid fa-star text-yellow-400"></i>
                              <i class="fa-solid fa-star text-yellow-400"></i>
                              <i class="fa-solid fa-star text-yellow-400"></i>
                              <i class="fa-regular fa-star text-yellow-400"></i>
                            </div>
                          </div>
                          <p className="text-[16px] mt-5 text-[#777]">
                            This is cardigan is a comfortable warm classic
                            piece. Great to layer with a light top and you can
                            dress up or down given the jewel buttons. I'm 5'8”
                            128lbs a 34A and the Small fit fine.
                          </p>
                        </div>
                      </div>

                      <div className="comment mb-11 mt-7 flex">
                        <div className="comment-box">
                          <img src={reviewer2} alt="" />
                        </div>
                        <div className="text ms-5 w-full">
                          <div className="comments-top justify-between flex ">
                            <div className="name">
                              <h1 className="text-[18px] font-bold ">
                                Tommy Jarvis
                              </h1>
                              <p className="text-[16px] text-[#777] mt-0.5">
                                March 27, 2018 9:51 am
                              </p>
                            </div>
                            <div className="rating  ">
                              <i class="fa-solid fa-star text-yellow-400"></i>
                              <i class="fa-solid fa-star text-yellow-400"></i>
                              <i class="fa-solid fa-star text-yellow-400"></i>
                              <i class="fa-solid fa-star text-yellow-400"></i>
                              <i class="fa-regular fa-star text-yellow-400"></i>
                            </div>
                          </div>
                          <p className="text-[16px] mt-5 text-[#777]">
                            This is cardigan is a comfortable warm classic
                            piece. Great to layer with a light top and you can
                            dress up or down given the jewel buttons. I'm 5'8”
                            128lbs a 34A and the Small fit fine.
                          </p>
                        </div>
                      </div>

                      <div className="comment mb-12 mt-7 flex">
                        <div className="comment-box">
                          <img src={reviewer3} alt="" />
                        </div>
                        <div className="text ms-5 w-full">
                          <div className="comments-top justify-between flex ">
                            <div className="name">
                              <h1 className="text-[18px] font-bold ">
                                Johnny Cash
                              </h1>
                              <p className="text-[16px] text-[#777] mt-0.5">
                                March 27, 2018 9:51 am
                              </p>
                            </div>
                            <div className="rating  ">
                              <i class="fa-solid fa-star text-yellow-400"></i>
                              <i class="fa-solid fa-star text-yellow-400"></i>
                              <i class="fa-solid fa-star text-yellow-400"></i>
                              <i class="fa-solid fa-star text-yellow-400"></i>
                              <i class="fa-regular fa-star text-yellow-400"></i>
                            </div>
                          </div>
                          <p className="text-[16px] mt-5 text-[#777]">
                            This is cardigan is a comfortable warm classic
                            piece. Great to layer with a light top and you can
                            dress up or down given the jewel buttons. I'm 5'8”
                            128lbs a 34A and the Small fit fine.
                          </p>
                        </div>
                      </div>

                      <div className="addreview mb-7">
                        <h1 className="text-[26px] mb-1.5">Add a review</h1>
                        <p className="text-[15px] font-semibold text-[#777]">
                          Your email address will not be published. Required
                          fields are marked*
                        </p>
                      </div>
                      <div className="overall mb-3">
                        <div className="text flex">
                          <h2 className="text-[19px] font-semibold">
                            Overall ratings
                          </h2>
                          <div className="rating ms-1.5 ">
                            <i class="fa-solid fa-star text-yellow-400"></i>
                            <i class="fa-solid fa-star text-yellow-400"></i>
                            <i class="fa-solid fa-star text-yellow-400"></i>
                            <i class="fa-solid fa-star text-yellow-400"></i>
                            <i class="fa-regular fa-star text-yellow-400"></i>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="grid grid-cols-12">
                          <div className="col-span-12">
                            <div className="form mb-4">
                              <div className="">
                                <textarea
                                  id="message"
                                  rows="3"
                                  class="border p-5 outline-1 outline-[#d51243]  w-full text-sm  text-black"
                                  placeholder="Your review..."
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-12 gap-6 ">
                          <div className="md:col-span-6 col-span-12">
                            <div className="contact_input mb-5 ">
                              <input
                                type="text"
                                placeholder="Your Name*"
                                name="name"
                                required
                                disable
                                className="border  py-1.5 h-11 px-5 text-[18px] outline-1 outline-[#d51243] w-full"
                              ></input>
                            </div>
                          </div>

                          <div className="md:col-span-6 col-span-12">
                            <div className="contact_input mb-5 ">
                              <input
                                type="text"
                                placeholder="Your Email*"
                                name="name"
                                required
                                disable
                                className="border py-1.5 h-11 px-5 text-[18px] outline-1 outline-[#d51243] w-full"
                              ></input>
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-12 ">
                          <div className="col-span-12">
                            <button className="btn">
                              <a href="/"> Submit</a>
                            </button>
                          </div>
                        </div>
                      </div>
                      
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Tabs;
