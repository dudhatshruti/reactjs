import React from "react";
import { Link } from "react-router-dom";
import { Welcome } from "../../components/welcome/Top_welcome";
import Search_navbar from "../../components/search_navbar/Search_navbar";
import { Navbarclickbtn } from "../../components/category_btn_navbar/Navbar";
import shop from "../../assets/images/shop.jpg";
import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog2.jpg";
import blog_sm_1 from "../../assets/images/blog-sm-1.jpg";
import blog_sm_2 from "../../assets/images/blog-sm-2.jpg";
import blog_sm_3 from "../../assets/images/blog-sm-3.jpg";
import blog_sm_4 from "../../assets/images/blog-sm-4.jpg";
import Footer from "../../components/footer/Footer";

const Blog = () => {
  return (
    <>
      <Welcome />
      <Search_navbar />
      <div className="border border-b-gray-50 mt-3"></div>
      <Navbarclickbtn />

      {/*  image */}

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
            <div className="grid md:grid-cols-3">
              <div className="shop_content">
                <div className="link mb-2 text-[16px]">
                  <span className="item_active relative font-normal pr-10 text-[#040404] after:absolute after:content-[''] after:h-[2px] after:w-[33px] after:bg-[#e4ded5] after:top-[50%] after:translate-x-[-50%] after:right-[-9px]">
                    <a href="/">Home</a>
                  </span>
                  <span className="text-[#777] ">Blog</span>
                  <h2 className="text-[44px] font-semibold pt-1 ">Blog</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-area py-16">
        <div className="container mx-auto px-4">
          <div className="row">
            <div className="grid grid-cols-12">
              <div className="lg:col-span-8 md:col-span-7 col-span-12">
                <div className="box md:pr-5">
                  <div className="image-part mb-6">
                    <div className="box-thumb mb-0">
                      <Link to="/blog_details">
                        <img src={blog1} alt="" className="rounded-md" />
                      </Link>
                    </div>
                  </div>
                  <div className="box-content">
                    <div className="row">
                      <div className="grid grid-cols-12">
                        <div className="col-span-12">
                          <div className="content-area mb-14">
                            <div className="box-meta mb-2 ">
                              <span className="text-[15px] font-semibold mr-[55px]">
                                <Link to="#" href="">
                                  <i class="fa-regular fa-user text-[#d51243]"></i>
                                  <span className="ms-1.5 uppercase text-[#5b5757] hover_text ">
                                    alextina
                                  </span>
                                </Link>
                              </span>

                              <span className="text-[15px] font-semibold mr-[55px]">
                                <a href="/">
                                  <i class="fa-regular fa-clock text-[#d51243]"></i>
                                </a>
                                <span className="ms-1.5  text-[#5b5757]">
                                  Dec 28, 2022
                                </span>
                              </span>

                              <span className="text-[15px] font-semibold mr-[55px]">
                                <Link to="#" href="">
                                  <i class="fa-regular fa-comment-alt text-[#d51243]"></i>
                                  <span className="ms-1.5 uppercase text-[#5b5757] hover_text">
                                    (04) comments
                                  </span>
                                </Link>
                              </span>
                            </div>

                            <h4 className="lg:text-[34px] md:text-[25px] sm:text-[31px] text-[28px] font-bold pb-6 hover_text cursor-pointer">
                              <Link to="/blog_details">
                                Scientists speculate that ours might not be held
                              </Link>
                            </h4>

                            <p className="text-[16px] pb-7">
                              Laboratories used for scientific research take
                              many forms because of the differing requirements
                              of specialists in the various fields of science
                              and engineering. A physics laboratory
                            </p>

                            <div className="btn w-28">
                              <button className="text-[14px] ">
                                <Link to="/blog_details" href="">
                                  Read More
                                </Link>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="image-part mb-6">
                    <div className="box-thumb mb-0">
                      <Link to="/blog_details">
                        <img src={blog2} alt="" className="rounded-md" />
                      </Link>
                    </div>
                  </div>
                  <div className="box-content">
                    <div className="row">
                      <div className="grid grid-cols-12">
                        <div className="col-span-12">
                          <div className="content-area mb-14">
                            <div className="box-meta mb-2 ">
                              <span className="text-[15px] font-semibold mr-[55px]">
                                <Link to="#" href="">
                                  <i class="fa-regular fa-user text-[#d51243]"></i>
                                  <span className="ms-1.5 uppercase text-[#5b5757] hover_text ">
                                    alextina
                                  </span>
                                </Link>
                              </span>

                              <span className="text-[15px] font-semibold mr-[55px]">
                                <a href="/">
                                  <i class="fa-regular fa-clock text-[#d51243]"></i>
                                </a>
                                <span className="ms-1.5  text-[#5b5757]">
                                  Dec 28, 2022
                                </span>
                              </span>

                              <span className="text-[15px] font-semibold mr-[55px]">
                              <Link to="#" href="">
                                  <i class="fa-regular fa-comment-alt text-[#d51243]"></i>
                                  <span className="ms-1.5 uppercase text-[#5b5757] hover_text">
                                    (04) comments
                                  </span>
                                </Link>
                              </span>
                            </div>

                            <h4 className="lg:text-[34px] md:text-[25px] sm:text-[31px] text-[28px] font-bold pb-3 hover_text cursor-pointer">
                              <Link to="/blog_details">
                                The Multiverse is the collection of alternate
                                universe
                              </Link>
                            </h4>

                            <p className="text-[16px] pb-7">
                              Laboratories used for scientific research take
                              many forms because of the differing requirements
                              of specialists in the various fields of science
                              and engineering. A physics laboratory
                            </p>

                            <div className="btn w-28">
                              <button className="text-[14px] ">
                                <Link to="/blog_details" href="">
                                  Read More
                                </Link>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="image-part mb-6">
                      <div className="box-thumb mb-0">
                        <Link to="/blog_details">
                          <img src={blog_sm_3} alt="" className="rounded-md" />
                        </Link>
                      </div>
                    </div>
                    <div className="box-content">
                      <div className="row">
                        <div className="grid grid-cols-12">
                          <div className="col-span-12">
                            <div className="content-area mb-14">
                              <div className="box-meta mb-2 ">
                                <span className="text-[15px] font-semibold mr-[55px]">
                                  <Link to="#" href="">
                                    <i class="fa-regular fa-user text-[#d51243]"></i>
                                    <span className="ms-1.5 uppercase text-[#5b5757] hover_text ">
                                      alextina
                                    </span>
                                  </Link>
                                </span>

                                <span className="text-[15px] font-semibold mr-[55px]">
                                  <a href="/">
                                    <i class="fa-regular fa-clock text-[#d51243]"></i>
                                  </a>
                                  <span className="ms-1.5  text-[#5b5757]">
                                    Dec 28, 2022
                                  </span>
                                </span>

                                <span className="text-[15px] font-semibold mr-[55px]">
                                <Link to="#" href="">
                                  <i class="fa-regular fa-comment-alt text-[#d51243]"></i>
                                  <span className="ms-1.5 uppercase text-[#5b5757] hover_text">
                                    (04) comments
                                  </span>
                                </Link>
                                </span>
                              </div>

                              <h4 className="lg:text-[34px] md:text-[25px] sm:text-[31px] text-[28px] font-bold pb-3 hover_text cursor-pointer">
                                <Link to="/blog_details">
                                That share a universal hierarchy a large variety
                                of these
                                </Link>
                              </h4>

                              <p className="text-[16px] pb-7">
                                Laboratories used for scientific research take
                                many forms because of the differing requirements
                                of specialists in the various fields of science
                                and engineering. A physics laboratory
                              </p>

                              <div className="btn w-28 mb-24">
                                <button className="text-[14px] ">
                                  <Link to="/blog_details" href="">Read More</Link>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 md:col-span-5 col-span-12 md:pl-6 pb-10 md:mt-0 mt-4">
                <div className="search_area border pt-9 pr-7 pb-8  pl-7 px-5 rounded-md">
                  <h1 className="text-md font-bold">Search</h1>
                  <div className="search-info relative mt-5">
                    <input
                      type="text"
                      placeholder="SEARCH POST"
                      className="bg-slate-50  border-white w-full outline-0  text-[12px] font-medium"
                    />
                    <button className="search-icon absolute top-2 right-7">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </div>
                </div>

                <div className="category_area border mt-9 rounded-md">
                  <div className=" pt-9 pr-7 pb-8  pl-7 px-5 ">
                    <h1 className="text-lg font-bold mb-5">Category</h1>
                    <div className="cat_list">
                      <div className="category-sub mb-3">
                        <h5>chemistry</h5>
                        <h6>03</h6>
                      </div>
                      <div className="category-sub mb-3">
                        <h5>Forensic science</h5>
                        <h6>07</h6>
                      </div>
                      <div className="category-sub mb-3">
                        <h5>Gemological</h5>
                        <h6>09</h6>
                      </div>
                      <div className="category-sub mb-3">
                        <h5>covid analysis</h5>
                        <h6>01</h6>
                      </div>
                      <div className="category-sub mb-3">
                        <h5>becteriology</h5>
                        <h6>00</h6>
                      </div>
                      <div className="category-sub mb-3">
                        <h5>angiosperm</h5>
                        <h6>26</h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="post_area border mt-9 rounded-md">
                  <div className=" pt-9 pr-7 pb-8  pl-6 px-5 ">
                    <h1 className="text-lg font-bold mb-5">Recent Post</h1>
                    <div className="flex mb-4">
                      <div className="img_thumb">
                        <Link to="/blog_details" href="">
                          <img
                            src={blog_sm_1}
                            alt=""
                            className="w-[100px] h-[100px] object-cover"
                          />
                        </Link>
                      </div>
                      <div className="info  ms-4 items-center mt-0.5 ">
                        <p className="text-[#777] text-[15px] font-semibold mb-2">
                          4 March. 2022
                        </p>
                        <p className="text-[16px] font-medium hover_text">
                          Don't Underestimate Tree For Furniture
                        </p>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      <div className="img_thumb">
                      <Link to="/blog_details" href="">
                          <img
                            src={blog_sm_2}
                            alt=""
                            className="w-[100px] h-[100px] object-cover"
                          />
                        </Link>
                      </div>
                      <div className="info  ms-4 items-center mt-0.5 ">
                        <p className="text-[#777] text-[15px] font-semibold mb-2">
                          12 February. 2022
                        </p>
                        <p className="text-[16px] font-medium  hover_text">
                          Equipping Researchers in the Developing World
                        </p>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      <div className="img_thumb">
                      <Link to="/blog_details" href="">
                          <img
                            src={blog_sm_3}
                            alt=""
                            className="w-[100px] h-[100px] object-cover"
                          />
                        </Link>
                      </div>
                      <div className="info  ms-4 items-center mt-0.5 ">
                        <p className="text-[#777] text-[15px] font-semibold mb-2">
                          14 January. 2022
                        </p>
                        <p className="text-[16px] font-medium  hover_text">
                          Things To do before shopping
                        </p>
                      </div>
                    </div>

                    <div className="flex ">
                      <div className="img_thumb">
                      <Link to="/blog_details" href="">
                          <img
                            src={blog_sm_4}
                            alt=""
                            className="w-[100px] h-[100px] object-cover"
                          />
                        </Link>
                      </div>
                      <div className="info  ms-4 items-center mt-0.5 ">
                        <p className="text-[#777] text-[15px] font-semibold mb-2">
                          12 February. 2022
                        </p>
                        <p className="text-[16px] font-medium hover_text">
                          Research And Verify of a Quality Product
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="category_area border mt-9 rounded-md">
                  <div className=" pt-9 pr-7 pb-10 pl-7 px-5 ">
                    <h1 className="text-lg font-bold mb-5">Popular Tag</h1>
                    <div className="content text-[12px] font-semibold uppercase text-[#777]  ">
                      <Link to="/"
                        href=""
                        className="border py-1.5  font-bold px-6 my-1 inline-block mx-1 hover:bg-[#d51243] ease-in-out duration-500 hover:text-white"
                      >
                        Furniture
                      </Link>
                      <Link to="/"
                        href=""
                        className="border py-1.5  font-bold px-6 my-1 inline-block mx-1 hover:bg-[#d51243] ease-in-out duration-500 hover:text-white"
                      >
                        Table
                      </Link>
                      <Link to="/"
                        href=""
                        className="border py-1.5  font-bold px-6 my-1 inline-block mx-1 hover:bg-[#d51243] ease-in-out duration-500 hover:text-white"
                      >
                        Chair
                      </Link>
                      <Link to="/"
                        href=""
                        className="border py-1.5  font-bold px-6 my-1 inline-block mx-1 hover:bg-[#d51243] ease-in-out duration-500 hover:text-white"
                      >
                        Clothes
                      </Link>
                      <Link to="/"
                        href=""
                        className="border py-1.5  font-bold px-6 my-1 inline-block mx-1 hover:bg-[#d51243] ease-in-out duration-500 hover:text-white"
                      >
                        Toy
                      </Link>
                      <Link to="/"
                        href=""
                        className="border py-1.5  font-bold px-6 my-1 inline-block mx-1 hover:bg-[#d51243] ease-in-out duration-500 hover:text-white"
                      >
                        Suit
                      </Link>
                      <Link to="/"
                        href=""
                        className="border py-1.5  font-bold px-6 my-1 inline-block mx-1 hover:bg-[#d51243] ease-in-out duration-500 hover:text-white"
                      >
                        T-shirt
                      </Link>
                      <Link to="/"
                        href=""
                        className="border py-1.5  font-bold px-6 my-1 inline-block mx-1 hover:bg-[#d51243] ease-in-out duration-500 hover:text-white"
                      >
                        Dress
                      </Link>
                      <Link to="/"
                        href=""
                        className="border py-1.5  font-bold px-6 my-1 inline-block mx-1 hover:bg-[#d51243] ease-in-out duration-500 hover:text-white"
                      >
                        Wooden
                      </Link>
                      <Link to="/"
                        href=""
                        className="border py-1.5  font-bold px-6 my-1 inline-block mx-1 hover:bg-[#d51243] ease-in-out duration-500 hover:text-white"
                      >
                        clock
                      </Link>
                      <Link to="/"
                        href=""
                        className="border py-1.5  font-bold px-6 my-1 inline-block mx-1 hover:bg-[#d51243] ease-in-out duration-500 hover:text-white"
                      >
                        craft
                      </Link>
                      <Link to="/"
                        href=""
                        className="border py-1.5  font-bold px-6 my-1 inline-block mx-1 hover:bg-[#d51243] ease-in-out duration-500 hover:text-white"
                      >
                        gift
                      </Link>
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

export default Blog;
