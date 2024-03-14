// import React from 'react'

// const Child_G = () => {
//   const products = [
//     {
//       name:"samsung s24 Ultra",
//       price:"12999",
//       color:"Titanium Gray",
//       company: "samsung",
//       detailes:"256GB Rom 12GB Ram",
//     },
//     {
//       name:"oppo Ultra 5G ",
//       price:"10,9999",
//       color:"blue",
//       company: "oppo",
//       detailes:"236GB Rom 10GB Ram",
//     },
//     {
//       name:"vivo 5G ",
//       price:"10,9999",
//       color:"gray",
//       company: "vivo",
//       detailes:"236GB Rom 10GB Ram",
//     },
//     {
//       name:"iphone 12 ",
//       price:"110,9999",
//       color:"gray",
//       company: "iphone",
//       detailes:"236GB Rom 10GB Ram",
//     }
//   ]

//   return (
//     <div>
//         {/* {
//           products.filter(function(products){
//             return (
//               products.company === "samsung" || "oppo"
//             )
//           }).map(function(products){
//             return (
//               <button className='btn'>{products.company}</button>
//             )
//           })
//         }
//         {
//           products.map(({name,price,color})=>{
//             return(
//               <p>{name}</p>,
//               <p>{price}</p>,
//               <p>{color}</p>
//             )
//           })
//         } */}

//         {/* {
//         products.map(({company})=>{
//           return(
//             <button className='btn'>{company}</button>
//           )
//         })
//        } */}

//     </div>
//   )
// }

// export default Child_G

import React, { useState } from "react";
import image1 from '../../../assets/sam1.jpg'

const Child_G = () => {
  const phones = [
    {
      brand: "Oppo",
      model: "Oppo A1",
      description:"The Oppo A1 runs Android and is powered by a 3180mAh battery.",
      RAM:"4GB",
      Internal_storage:"64GB",
      Resolution:"720x1440 pixels",
      price: 30000,
      Colours:"Red, White, Blue",
    },
    {
      brand: "Samsung",
      model: "Samsung Galaxy S10",
      description:"The Samsung Galaxy S10 runs Android and is powered by a 3180mAh battery.",
      RAM:"6GB",
      Internal_storage:"64GB",
      Resolution:"720x1440 pixels",
      Colours:"blue,gray,white",
      price: 17000,
    },
    {
      brand: "Oppo",
      model: "Oppo F9",
      description:"The Oppo F9 runs Android and is powered by a 3180mAh battery.",
      RAM:"4GB",
      Internal_storage:"64GB",
      Resolution:"720x1440 pixels",
      Colours:"Red, White, Blue",
      price: 24400,
    },
    {
      brand: "Samsung",
      model: "Samsung Galaxy Note 9",
      description:"The samsung Galaxy Note 9 runs Android and is powered by a 3180mAh battery.",
      RAM:"6GB",
      Internal_storage:"64GB",
      Resolution:"750x1440 pixels",
      Colours:"blue,gray,white",
      price: 18900,
    },
    {
      brand: "Vivo",
      model: "Vivo Y21t",
      description:"The Vivo Y21t runs Android and is powered by a 3180mAh battery.",
      RAM:"4GB+1GB Extended RAM",
      Internal_storage:"64GB",
      Resolution:"2408×1080 (FHD+)",
      Colours:"Midnight Blue/Pearl White",
      price: 20000,
    },
    {
      brand: "iphone",
      model: "iphone 12 pro",
      description:"The iphone 12 pro runs Android and is powered by a 3180mAh battery.",
      RAM:"4GB+1GB Extended RAM",
      Internal_storage:"64GB",
      Resolution:"2408×1080 (FHD+)",
      Colours:"Midnight Blue/Pearl White",
      price: 120000,
    },
    
  ];

  const [open, setopen] = useState();
  
  const A = () => {
    setopen("Oppo");
  };
  
  const B = () => {
    setopen("Samsung");
  };

  const C = () => {
    setopen("Vivo");
  };
  
  const a = phones.filter((phones) => phones.brand === open);

  return (
    <div>
      <div className="flex justify-center mt-6">
      <button className="btn" onClick={A}>
        Oppo
      </button>
      <button className="btn " onClick={B}>
        Samsung
      </button>
      <button className="btn" onClick={C}>
        Vivo
      </button>
      </div>
      <div>
        <ul className="flex  px-3 space-x-3 justify-center ">
          {a.map((phones) => (
            <div className="p-4 border-2 shadow-2xl shadow-white bg-red-100 border-blue-200 rounded-md mt-3 w-3/12  text-sm font-semibold" >
              <p> {`Model:  ${phones.model}`}</p>
              <p> {`Description: ${phones.description}`}</p>
              <p>{`Ram : ${phones.RAM}`}</p>
              <p>{`Internal Storage: ${phones.Internal_storage}`}</p>
              <p>{`Resolution: ${phones.Resolution}`}</p>
              <p>{`Colour: ${phones.Colours}`}</p>
              <p>{`Price: ${phones.price}`}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Child_G;
