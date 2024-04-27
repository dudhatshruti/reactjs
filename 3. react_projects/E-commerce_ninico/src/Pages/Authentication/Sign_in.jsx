import React from "react";
import {useState} from 'react'
import { authUse } from "./Auth";
import { useNavigate } from "react-router-dom";
import { Welcome } from "../../components/welcome/Top_welcome";
import Search_navbar from "../../components/search_navbar/Search_navbar";
import { Navbarclickbtn } from "../../components/category_btn_navbar/Navbar";
import shop from "../../assets/images/shop.jpg";
import login from "../../assets/images/login.jpg";
import signup from "../../assets/images/signup.jpg";
import Footer from "../../components/footer/Footer";

const Sign_in = () => {

  const [user, setuser] = useState('')
  const auth = authUse()
  const navigate = useNavigate()

  const handleLogin = () => {
    auth.login(user)
    navigate('/')
  }

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
                  <span className="text-[#777]">Sign In</span>
                  <h2 className="text-[44px] font-bold pt-1 ">Sign In</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Login and Sign up area-------------------------  */}

      <section className="track_area py-16">
        <div className="container mx-auto px-2">
          <div className="row flex justify-center">
            <div className="grid grid-cols-12 gap-6">
              <div className="md:col-span-6 col-span-12">
                <div className="product_track_content">
                  <div className="product">
                    <img src={login} alt="" />
                  </div>
                  <div className="details bg-gray-100 pb-10 rounded-b-md ">
                    <div className="login flex mb-4 pt-10 pl-10">
                      <div className="login  mr-5">
                        <i class="fa-solid fa-lock bg-white p-3 rounded-md text-[#d51243] text-xs"></i>
                      </div>
                      <div className="content">
                        <h4 className="title text-[18px] text-black font-semibold pb-1">
                          Login Here
                        </h4>
                        <p className="text-[13px] text-[#777] max-w-md leading-5">
                          Your personal data will be used to support your
                          experience throughout this website, to manage access
                          to your account.
                        </p>
                      </div>
                    </div>
                    <div className="id mb-2 pl-10">
                      <form>
                        <div className="search-info relative">
                          <button className="search-icon absolute top-2 ">
                            <i class="fa-regular fa-user text-xs ms-4"></i>
                          </button>
                          <input
                            type="text" onchange={(e) => setuser(e.target.value)}
                            placeholder="Username / email address"
                            className=" input-field w-11/12 border-white rounded-md outline-0 text-[14px]  "
                          />
                        </div>
                      </form>
                    </div>
                    <div className="email mb-2 pl-10"> 
                        <div className="search-info relative ">
                          <button className="search-icon absolute top-2 ">
                          <i class="fa-solid fa-key ms-4 "></i>
                          </button>
                          <input
                            type="text"
                            placeholder="Password"
                            className=" input-field w-11/12  border-white rounded-md outline-0 text-[14px] "
                          />
                        </div>
                    </div>
                    <div className="checkbox mb-3 mt-2 flex justify-between items-center px-10">
                      <div className="form-check">
                    <input type="checkbox"   value="remember" className="border border-white "></input>
                    <label  className="text-[14px] text-[#777]"> Remember me</label>
                    </div>

                    <div className="forget_pass text-[14px] underline hover_text  "> 
                      <a href="/">Forget Password</a>
                    </div>
                    </div>
                   
                    <div className="btn mt-4 flex justify-center mx-10 hover:bg-red-700">
                      <button onClick={handleLogin} className=" text-[16px] py-1 font-semibold">
                        Login Now
                      </button>
                      <span>
                        <i class="fa-solid fa-arrow-right mt-2.5 pl-2"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-6 col-span-12">
                <div className="product_track_content">
                  <div className="product">
                    <img src={signup} alt="" />
                  </div>
                  <div className="details bg-gray-100 pb-10 rounded-b-md ">
                    <div className="login flex mb-4 pt-10 pl-10">
                      <div className="login  mr-5">
                        <i class="fa-solid fa-briefcase bg-white p-3 rounded-md text-[#d51243] text-xs"></i>
                      </div>
                      <div className="content">
                        <h4 className="title text-[18px] text-black font-semibold pb-1">
                          Sign Up
                        </h4>
                        <p className="text-[13px] text-[#777] max-w-md leading-5">
                          Your personal data will be used to support your
                          experience throughout this website, to manage access
                          to your account.
                        </p>
                      </div>
                    </div>
                    <div className="id mb-2 pl-10">
                      <form>
                        <div className="search-info relative">
                          <button className="search-icon absolute top-2 ">
                          <i class="fa-regular fa-envelope text-xs ms-4"></i>
                          </button>
                          <input
                            type="text"
                            placeholder="email address"
                            className=" input-field w-11/12 border-white rounded-md outline-0 text-[14px]  "
                          />
                        </div>
                      </form>
                    </div>
                    <div className="email mb-2 pl-10"> 
                        <div className="search-info relative ">
                          <button className="search-icon absolute top-2 ">
                          <i class="fa-solid fa-key ms-4 "></i>
                          </button>
                          <input
                            type="text"
                            placeholder="Password"
                            className=" input-field w-11/12  border-white rounded-md outline-0 text-[14px] "
                          />
                        </div>
                    </div>
                    <div className="account mb-3 mt-2   px-10">
                    <div className="forget_pass text-[14px] underline hover_text "> 
                      <a href="/">Already Have Account?</a>
                    </div>
                    </div>
                   
                    <div className="text-[14px] font-semibold py-3 px-6 rounded-md bg-[#f3eee7] hover:bg-black ease-in-out duration-700 hover:text-white text-black mt-5 flex justify-center mx-10">
                      <button className=" text-[16px] py-1 font-semibold">
                        Register Now
                      </button>
                      <span>
                        <i class="fa-solid fa-arrow-right mt-2.5 pl-2"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------- footer ------------------- */}
      <Footer/>
    </>
  );
};

export default Sign_in;
