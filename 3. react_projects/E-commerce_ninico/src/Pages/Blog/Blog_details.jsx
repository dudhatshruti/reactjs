import React from "react";
import { Link } from "react-router-dom";
import { Welcome } from "../../components/welcome/Top_welcome";
import Search_navbar from "../../components/search_navbar/Search_navbar";
import { Navbarclickbtn } from "../../components/category_btn_navbar/Navbar";
import shop from "../../assets/images/shop.jpg";
import blog1 from "../../assets/images/blog1.jpg";
import blog2 from "../../assets/images/blog2.jpg";
import blog3 from "../../assets/images/blog3.jpg";
import blog4 from "../../assets/images/blog4.jpg";
import comment1 from "../../assets/images/comment-1.png";
import comment2 from "../../assets/images/comment-2.png";
import blog_sm_1 from "../../assets/images/blog-sm-1.jpg";
import blog_sm_2 from "../../assets/images/blog-sm-2.jpg";
import blog_sm_3 from "../../assets/images/blog-sm-3.jpg";
import blog_sm_4 from "../../assets/images/blog-sm-4.jpg";
import Footer from "../../components/footer/Footer";

const Blog_details = () => {
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
                  <span className="text-[#777]">Blog Details</span>
                  <h2 className="text-[44px] font-semibold pt-1 ">
                    Blog Details
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*----------------- blog area --------------- */}

      <section className="blog-area py-16">
        <div className="container mx-auto px-4">
          <div className="row">
            <div className="grid grid-cols-12">
              <div className="lg:col-span-8 md:col-span-7 col-span-12">
                <div className="box md:pr-5">
                  <div className="image-part mb-6">
                    <div className="box-thumb mb-0">
                      <img src={blog1} alt="" className="rounded-md" />
                    </div>
                  </div>
                  <div className="box-content">
                    <div className="row">
                      <div className="grid grid-cols-12">
                        <div className="col-span-12">
                          <div className="content-area mb-14">
                            <div className="box-meta mb-2 ">
                              <span className="text-[15px] font-semibold mr-[55px]">
                                <a href="/">
                                  <i class="fa-regular fa-user text-[#d51243]"></i>
                                </a>
                                <span className="ms-1.5 uppercase text-[#5b5757] ">
                                  alextina
                                </span>
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
                                <a href="/">
                                  <i class="fa-regular fa-comment-alt text-[#d51243]"></i>
                                </a>
                                <span className="ms-1.5 uppercase text-[#5b5757]">
                                  (04) comments
                                </span>
                              </span>
                            </div>

                            <h4 className="lg:text-[36px] md:text-[25px] sm:text-[31px] text-[28px] font-bold pb-6">
                              Lavoratories used for scientic reseach take many
                              froms.
                            </h4>

                            <p className="text-[16px] pb-4">
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque laudantium,
                              aperiam ipsquae ab illo inventore veritatis et
                              quasi architecto beatae vitae dicta sunt
                              explicabo. Nemo enim voluptatem voluptas sit
                              aspernatur aut odit aut fugit, sed quia
                              consequuntur magni dolores eos qui ratione
                              voluptatem sequi nesciunt. Neque porro quisquam
                              est, qui dolorem ipsum quia dolor sit amet.
                            </p>

                            <p className="text-[16px] mb-4">
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque laudantium,
                              aperiam ipsquae ab illo inventore veritatis et
                              quasi architecto beatae vitae dicta sunt
                              explicabo.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="grid grid-cols-12 gap-5">
                        <div className="sm:col-span-6 col-span-12">
                          <div className="detail sm:mb-12 mb-5">
                            <h4 className="text-3xl font-bold mb-2">
                              Our Approach
                            </h4>
                            <div className="text ">
                              <p className="text-[16px] leading-5 mb-7">
                                Must explain to you how all praising uts pain
                                was born and I will gives you a itself completed
                                account of the system, and sed expounds the ut
                                actual teachings of that greater
                              </p>
                              <div className="list_item text-[15px]">
                                <h6 className="space-x-4 font-medium mb-2">
                                  <i class="fa-solid fa-check text-[#d51243]"></i>
                                  <span>Extramural Funding</span>
                                </h6>
                                <h6 className="space-x-4 font-medium mb-2">
                                  <i class="fa-solid fa-check text-[#d51243]"></i>
                                  <span>Bacteria Markers</span>
                                </h6>
                                <h6 className="space-x-4 font-medium ">
                                  <i class="fa-solid fa-check text-[#d51243]"></i>
                                  <span>Nam nec mi euismod euismod</span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="sm:col-span-6 col-span-12">
                          <div className="blog2 ">
                            <img src={blog2} alt="" className="rounded-md" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="grid grid-cols-12">
                        <div className="col-span-12">
                          <div className="techno mb-8">
                            <h4 className="lg:text-3xl md:text-xl text-2xl  font-bold mb-5 md:mt-0 sm:mt-0 
                            mt-10">
                              What Is A Business Technology Roadmap?
                            </h4>
                            <div className="text-[16px]">
                              <p>
                                Unlike detailed blueprints that lay out all
                                tasks, deadlines, bug reports, and more along
                                the way, technology roadmaps are high-level
                                visual summaries highlighting a company’s vision
                                or plans.
                              </p>

                              <p className="mt-6">
                                In an Agile approach, a technology roadmap feeds
                                the sprint and grooming processes, providing
                                insight into how the product will travel from
                                start to finish. It makes it easier for
                                development teams to:
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="grid grid-cols-12 gap-6 ">
                        <div className="sm:col-span-6 col-span-12">
                          <div className="thumb">
                            <img src={blog3} alt="" className="rounded-md" />
                          </div>
                        </div>
                        <div className="sm:col-span-6 col-span-12">
                          <div className="thumb">
                            <img src={blog4} alt="" className="rounded-md" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border border-b-gray-50 mt-8"></div>
                    <div className="row items-center">
                      <div className="grid grid-cols-12 py-4 ">
                        <div className="lg:col-span-7 col-span-12 pt-3.5 ">
                          <div className="postbox_tag  space-x-2">
                            <span className="text-[20px] mr-4 font-bold">
                              Tag
                            </span>
                            <button className="bttn">
                              <Link to="/blog" href="/">furniture</Link>
                            </button>
                            <button className="bttn">
                              <Link to="/blog" href="/">Table</Link>
                            </button>
                            <button className="bttn">
                              <Link to="/blog" href="/">Fashion</Link>
                            </button>
                          </div>
                        </div>
                        <div className="md:col-span-5 col-span-12 md:mt-0 py-4 ">
                          <div className="icon flex lg:justify-end  space-x-6">
                            <span className="text-[20px] font-bold">Share</span>
                            <Link to="#" href="">
                              <i class="fa-brands fa-linkedin-in"></i>
                            </Link>
                            <Link to="#" href="">
                              <i class="fa-brands fa-pinterest-p"></i>
                            </Link>
                            <Link to="#" href="">
                              <i class="fa-brands fa-facebook-f"></i>
                            </Link>
                            <Link to="#" href="">
                              <i class="fa-brands fa-twitter"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border border-b-gray-50 "></div>
                  </div>

                  <div className="comment">
                    <div className="row">
                      <div className="grid grid-cols-12 mt-10">
                        <div className="col-span-12">
                          <div className="box-comment mb-10">
                            <div className="title text-[20px] font-semibold">
                              (04) Comment
                            </div>
                            <ul>
                              <li>
                                <div className="comment flex mt-7">
                                  <div className="profile">
                                    <div className="avtar mr-6 w-16 h-16 ">
                                      <img
                                        src={comment1}
                                        alt=""
                                        className="rounded-full "
                                      />
                                    </div>
                                  </div>
                                  <div className="info text-[16px] ">
                                    <div className="name text-[16px] font-medium">
                                      <h5>Kristin Watson</h5>
                                      <h5 className="uppercase mt-1.5 text-[#777] ">
                                        march 10, 2022
                                      </h5>
                                      <p className="mt-4  max-w-lg text-[#777] mb-2">
                                        Patient Comments are a collection of
                                        comments submitted by viewers in
                                        response to a question posed by a
                                        MedicineNet doctor.
                                      </p>
                                      <div className="reply mt-4 ms-3 text-[#d51243] hover:text-white ">
                                        <Link to="/blog_details" href="/">
                                          <i class="fa-solid fa-reply-all bg-white hover:bg-[#d51243] ease-in-out duration-500 p-1"></i>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>

                              <li>
                                <div className="comment flex mt-10 justify-center">
                                  <div className="profile">
                                    <div className="avtar mr-6 w-16 h-16 ">
                                      <img
                                        src={comment2}
                                        alt=""
                                        className="rounded-full "
                                      />
                                    </div>
                                  </div>
                                  <div className="info text-[16px] ">
                                    <div className="name text-[16px] font-medium">
                                      <h5>Brooklyn Simmons</h5>
                                      <h5 className="uppercase mt-1.5 text-[#777] ">
                                        march 10, 2022
                                      </h5>
                                      <p className="mt-4  max-w-lg text-[#777] mb-2">
                                        Include anecdotal examples of your
                                        experience, or things you took notice of
                                        that you feel others would find useful.
                                      </p>
                                      <div className="reply mt-4 ms-3 text-[#d51243] hover:text-white ">
                                        <Link to="/blog_details" href="/">
                                          <i class="fa-solid fa-reply-all bg-white hover:bg-[#d51243] ease-in-out duration-500 p-1"></i>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                            <div className="border border-b-gray-50 mt-14"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-section">
                    <div className="form-title text-[20px] font-semibold">
                      <h3 className="mb-2">Leave a Reply</h3>
                      <p className="text-[16px] text-[#777]">
                        Your email address will not be published. Required
                        fields are marked *
                      </p>
                    </div>

                    <div className="form mt-12">
                      <div className="row">
                        <div className="grid grid-cols-12 gap-6">
                          <div className="md:col-span-6 col-span-12">
                            <div className="contact_input  ">
                              <input
                                type="text"
                                placeholder="Enter your Name"
                                name="name"
                                required
                                disable
                                className="border rounded-md py-1.5 h-11 px-5 text-[14px] font-normal outline-1 outline-[#d51243] w-full  shadow-md shadow-gray-100"
                              ></input>
                            </div>
                          </div>
                          <div className="md:col-span-6 col-span-12">
                            <div className="contact_input mb-2 ">
                              <input
                                type="text"
                                placeholder="Enter your Email"
                                name="name"
                                required
                                disable
                                className="border rounded-md py-1.5 h-11 px-5 text-[14px] font-normal outline-1 outline-[#d51243] w-full  shadow-md shadow-gray-100"
                              ></input>
                            </div>
                          </div>

                          <div className="md:col-span-6 col-span-12">
                            <div className="contact_input mb-5 ">
                              <input
                                type="text"
                                placeholder="Enter your Number"
                                name="name"
                                required
                                disable
                                className="border rounded-md py-1.5 h-11 px-5 text-[14px] font-normal outline-1 outline-[#d51243] w-full shadow-md shadow-gray-100"
                              ></input>
                            </div>
                          </div>

                          <div className="md:col-span-6 col-span-12">
                            <div className="contact_input ">
                              <input
                                type="text"
                                placeholder="Enter your Website"
                                name="name"
                                required
                                disable
                                className="border rounded-md py-1.5 h-11 px-5 text-[14px] font-normal outline-1 outline-[#d51243] w-full  shadow-md shadow-gray-100"
                              ></input>
                            </div>
                          </div>

                          <div className="col-span-12">
                            <div className="">
                              <textarea
                                id=""
                                rows="6"
                                class="border p-5 outline-1 outline-[#d51243]  w-full text-[14px] font-normal rounded-md shadow-md shadow-gray-100"
                                placeholder="Type your comment"
                              ></textarea>
                            </div>
                          </div>

                          <div className=" lg:col-span-3 md:col-span-4 sm:col-span-3 xs:col-span-4 col-span-7 text-center">
                            <div className="btn">
                              <button>
                                <Link to="/blog_details" href=""> Post Comment </Link>
                              </button>
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
                      </div>{" "}
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
                        <a href="/">
                          <img
                            src={blog_sm_1}
                            alt=""
                            className="w-[100px] h-[100px] object-cover"
                          />
                        </a>
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
                        <a href="/">
                          <img
                            src={blog_sm_2}
                            alt=""
                            className="w-[100px] h-[100px] object-cover "
                          />
                        </a>
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
                        <a href="/">
                          <img
                            src={blog_sm_3}
                            alt=""
                            className="w-[100px] h-[100px] object-cover"
                          />
                        </a>
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
                        <a href="/">
                          <img
                            src={blog_sm_4}
                            alt=""
                            className="w-[100px] h-[100px] object-cover "
                          />
                        </a>
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
                        t-shirt
                      </Link>
                      <Link to="/"
                        href=""
                        className="border py-1.5  font-bold px-6 my-1 inline-block mx-1 hover:bg-[#d51243] ease-in-out duration-500 hover:text-white"
                      >
                        dress
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
                        Clock
                      </Link>
                      <Link to="/"
                        href=""
                        className="border py-1.5  font-bold px-6 my-1 inline-block mx-1 hover:bg-[#d51243] ease-in-out duration-500 hover:text-white"
                      >
                        Craft
                      </Link>
                      <Link to="/"
                        href=""
                        className="border py-1.5  font-bold px-6 my-1 inline-block mx-1 hover:bg-[#d51243] ease-in-out duration-500 hover:text-white"
                      >
                        Gift
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

      <Footer/>
    </>
  );
};

export default Blog_details;
