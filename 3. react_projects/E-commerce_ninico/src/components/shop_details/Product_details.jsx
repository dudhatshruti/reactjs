import React from "react";

const Product_details = () => {
  return (
    <>
      <div className="product-details flex items-center mb-0.5 ">
        <div className="tag-area ">
          <span className="tag text-[14px] text-[#d51243] font-semibold bg-[#fbe1e7] pt-0.5 pb-0.5 px-2 leading-normal rounded-sm">
            Dress
          </span>
        </div>
        <div className="details-rating text-[14px] text-yellow-400 ms-3.5">
          <a href="/">
            <i class="fa-solid fa-star"></i>
          </a>
          <a href="/">
            <i class="fa-solid fa-star"></i>
          </a>
          <a href="/">
            <i class="fa-solid fa-star"></i>
          </a>
        </div>
        <div className="review text-[14px] text-[#777] cursor-pointer ms-1">
          10 Reviews
        </div>
      </div>

      <div className="product-title flex flex-wrap items-center mb-4">
        <h3 className="title text-[25px] font-semibold">
          Wide Cotton Tunic Dress
        </h3>
        <span className="detail-stock border text-[12px] font-semibold rounded-sm ms-2 px-2 text-[#d51243]">
          In Stock
        </span>
      </div>

      <div className="product-price mb-[30px]">
        <del className="text-[20px] text-[#cfcfcf] font-semibold">$9.35</del>
        <span className="text-[#d51243] text-[36px] font-bold ms-2">$7.25</span>
      </div>
      <div className="product-detail mb-6">
        <p className="text-[16px] text-[#777] w-10/12">
          Priyoshop has brought to you the Hijab 3 Pieces Combo Pack PS23. It is
          a completely modern design and you feel comfortable to put on this
          hijab. Buy it at the best price.
        </p>
      </div>

      <div className="product-count flex items-center flex-wrap mb-6">
        <div className="quantity">
          <div className="pro-qty border rounded-md py-3 px-4">
            <span className="minus text-[#d3d3d3]">
              <i class="fa-solid fa-minus"></i>
            </span>
            <input
              type="text"
              value={1}
              className="w-6 font-semibold text-center text-[18px] "
            />
            <span className="plus text-[#d3d3d3]">
              <i class="fa-solid fa-plus"></i>
            </span>
          </div>
        </div>
        <div className="cart ms-4">
          <button className="text-[17px] font-semibold py-3.5 px-8 rounded-md bg-[#d51243] text-white hover:bg-black  transition ease-in-out duration-500">
            <i class="fa-solid fa-cart-shopping"></i>
            <a href="/" className="ms-1">
              Add To cart
            </a>
          </button>
        </div>
        <div className="whishlist ms-4">
          <div className="pro-fav border rounded-md py-3 px-4 text-[#d3d3d3] hover:bg-[#d51243]  transition ease-in-out duration-700">
            <i class="fa-regular fa-heart"></i>
          </div>
        </div>
      </div>

      <div className="pro-dot mb-5 flex items-center space-x-1">
        <a href="/">
          <div className="shap w-3 h-3 rounded-full relative">
            <span className="bg absolute top-0 left-0 w-full h-[100%] rounded-full bg-[#99c4ff] transition hover:ease duration-700"></span>
            <span className="shap-border absolute top-0 left-0 rounded-full bg-[#99c4ff] border border-[#99c4ff] ease-out duration-300"></span>
          </div>
        </a>
        <a href="/">
          <div className="shap w-3 h-3 rounded-full relative">
            <span className="bg absolute top-0 left-0 w-[100%] h-[100%] rounded-full bg-[#d51243] transition hover:ease duration-700"></span>
            <span className="shap-border absolute top-0 left-0 rounded-full  border border-[#d51243] ease-out duration-300"></span>
          </div>
        </a>
        <a href="/">
          <div className="shap w-3 h-3 rounded-full relative">
            <span className="bg absolute top-0 left-0 w-[100%] h-[100%] rounded-full bg-[#ff7373] transition hover:ease duration-700"></span>
            <span className="shap-border absolute top-0 left-0 rounded-full  border border-[#ff7373] ease-out duration-300"></span>
          </div>
        </a>
        <a href="/">
          <div className="shap w-3 h-3 rounded-full relative">
            <span className="bg absolute top-0 left-0 w-[100%] h-[100%] rounded-full bg-[#be9aff] transition hover:ease duration-700"></span>
            <span className="shap-border absolute top-0 left-0 rounded-full border border-[#be9aff] ease-out duration-300"></span>
          </div>
        </a>
      </div>

      <div className="pro-information">
        <p className="text-[16px] font-semibold inline-block mr-1">SKU:</p>
        <span className="text-[#777] text-[16px] font-normal ">BO1D0MX8SJ</span>
      </div>
      <div className="categories">
        <p className="text-[16px] font-semibold inline-block mr-1">
          Categories:
        </p>
        <span className="span mr-3">T-Shirts,</span>
        <span className="span mr-3">Tops,</span>
        <span className="span mr-3">Womens</span>
      </div>

      <div className="tags">
        <p className="text-[16px] font-semibold inline-block mr-1">Tags:</p>
        <span className="span mr-3">Fashion,</span>
        <span className="span mr-3">t-shirts,</span>
        <span className="span mr-3">Women</span>
      </div>

      <div className="shar">
        <p className="text-[16px] font-semibold inline-block mr-1">shares:</p>
        <span className="span mr-2.5">
          <a href="/">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
        </span>
        <span className="span mr-2.5">
          <a href="/">
            <i class="fa-brands fa-twitter"></i>
          </a>
        </span>
        <span className="span mr-2.5">
          <a href="/">
            <i class="fa-brands fa-behance"></i>
          </a>
        </span>
        <span className="span mr-2.5">
          <a href="/">
            <i class="fa-brands fa-youtube"></i>
          </a>
        </span>
        <span className="span mr-2.5">
          <a href="/">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </span>
      </div>
    </>
  );
};

export default Product_details;
