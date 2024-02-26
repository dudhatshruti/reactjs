import React from 'react'
import { Welcome } from '../../components/welcome/Top_welcome'
import Search_navbar from '../../components/search_navbar/Search_navbar'
import { Navbarclickbtn } from '../../components/category_btn_navbar/Navbar'
import shop from "../../assets/images/shop.jpg";


const Whishlist = () => {
  return (
    <>
        <Welcome/>
        <Search_navbar/>
      <div className="border border-b-gray-50 mt-3"></div>
      <Navbarclickbtn/>

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

      {/* cart area */}

      <section className='cart_area py-20'>
        <div className="container">
            <div className="row">
                <div className="columns-12">
        <table>
        <tr>
            <th className='px-10'>Images</th>
            <th className='px-10'>Courses</th>
            <th className='px-10'>Unit Price</th>
            <th className='px-10'>quantity</th>
            <th className='px-10'>Total</th>
            <th className='px-10'>Add to cart</th>
            <th className='px-10'>remove</th>
        </tr>
        {/* <tr>
            <td>Anom</td>
            <td>19</td>
            <td>Male</td>
        </tr>
        <tr>
            <td>Megha</td>
            <td>19</td>
            <td>Female</td>
        </tr>
        <tr>
            <td>Subham</td>
            <td>25</td>
            <td>Male</td>
        </tr> */}
    </table>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Whishlist