import React from "react";
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
              <div className="col-span-8">
                <div className="box pr-5">
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

                            <h4 className="text-[36px] font-bold pb-6">
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
                        <div className="col-span-6">
                          <div className="detail mb-12">
                            <h4 className="text-3xl font-bold mb-2">
                              Our Approach
                            </h4>
                            <div className="text mb-7">
                              <p className="text-[16px] w-96 leading-5 mb-7">
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
                                <h6 className="space-x-4 font-medium mb-2">
                                  <i class="fa-solid fa-check text-[#d51243]"></i>
                                  <span>Nam nec mi euismod euismod</span>
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-span-6">
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
                            <h4 className="text-3xl font-bold mb-5">
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
                        <div className="col-span-6">
                          <div className="thumb">
                            <img src={blog3} alt="" className="rounded-md" />
                          </div>
                        </div>
                        <div className="col-span-6">
                          <div className="thumb">
                            <img src={blog4} alt="" className="rounded-md" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="border border-b-gray-50 mt-8"></div>
                    <div className="row">
                      <div className="grid grid-cols-12 py-5">
                        <div className="col-span-7  ">
                          <div className="postbox_tag  space-x-2">
                            <span className="text-[20px] mr-4 font-bold">
                              Tag
                            </span>
                            <button className="bttn">
                              <a href="/">furniture</a>
                            </button>
                            <button className="bttn">
                              <a href="/">Table</a>
                            </button>
                            <button className="bttn">
                              <a href="/">Fashion</a>
                            </button>
                          </div>
                        </div>
                        <div className="col-span-5">
                          <div className="icon flex justify-end space-x-6">
                            <span className="text-[20px] font-bold">Share</span>
                            <a href="/">
                              <i class="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href="/">
                              <i class="fa-brands fa-pinterest-p"></i>
                            </a>
                            <a href="/">
                              <i class="fa-brands fa-facebook-f"></i>
                            </a>
                            <a href="/">
                              <i class="fa-brands fa-twitter"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border border-b-gray-50 mt-1.5"></div>
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
                                        <a href="/">
                                          <i class="fa-solid fa-reply-all bg-white hover:bg-[#d51243] ease-in-out duration-500 p-1"></i>
                                        </a>
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
                                        <a href="/">
                                          <i class="fa-solid fa-reply-all bg-white hover:bg-[#d51243] ease-in-out duration-500 p-1"></i>
                                        </a>
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
                          <div className="col-span-6">
                            <div className="contact_input  ">
                              <input
                                type="text"
                                placeholder="Enter your Name"
                                name="name"
                                required
                                disable
                                className="border rounded-md py-1.5 h-11 px-5 text-[14px] outline-1 outline-[#d51243] w-full shadow-sm"
                              ></input>
                            </div>
                          </div>
                          <div className="col-span-6">
                            <div className="contact_input mb-2 ">
                              <input
                                type="text"
                                placeholder="Enter your Email"
                                name="name"
                                required
                                disable
                                className="border rounded-md py-1.5 h-11 px-5 text-[14px] outline-1 outline-[#d51243] w-full shadow-sm"
                              ></input>
                            </div>
                          </div>

                          <div className="col-span-6">
                            <div className="contact_input mb-5 ">
                              <input
                                type="text"
                                placeholder="Enter your Number"
                                name="name"
                                required
                                disable
                                className="border rounded-md py-1.5 h-11 px-5 text-[14px] outline-1 outline-[#d51243] w-full shadow-sm"
                              ></input>
                            </div>
                          </div>

                          <div className="col-span-6">
                            <div className="contact_input ">
                              <input
                                type="text"
                                placeholder="Enter your Website"
                                name="name"
                                required
                                disable
                                className="border rounded-md py-1.5 h-11 px-5 text-[14px] outline-1 outline-[#d51243] w-full shadow-sm"
                              ></input>
                            </div>
                          </div>

                          <div className="col-span-12">
                          <div className="">
                            <textarea
                              id=""
                              rows="7"
                              class="border p-5 outline-1 outline-[#d51243]  w-full text-sm rounded-md"
                              placeholder="Enter message"
                            ></textarea>
                          </div>
                        </div>

                          <div className="col-span-3 text-center">
                            <div className="btn">
                              <button><a href="/"> Post Comment </a></button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-4">2</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
