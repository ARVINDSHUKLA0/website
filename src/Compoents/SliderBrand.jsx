// import React from 'react'
// import '../CompoentsStyle/SliderBrand.css'
// import Slider from "react-slick";

// const SliderBrand = () => {
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 6,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//     };

//     const ImgesArr = [
//         { id : 1, imge}
//     ]
//     return (
//         <>
//             <Slider {...settings}>

//                 <div> 
//                     tfygjh
//                 </div>

//                 <div> 
//                     ygui
//                 </div>

//                 <div> 
//                     ftygjhuk
//                 </div>

//                 <div> 
//                     fhgjk
//                 </div>
//                 <div> 
//                     fhgjk
//                 </div>
//                 <div> 
//                     fhgjk
//                 </div>

//             </Slider>
//         </>
//     )
// }

// export default SliderBrand




"use client";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


const SliderBrand = () => {
  const settingsBrand = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };


  const BrandStartups = [
   { id: 1, BrandImg: "https://s3.ap-south-1.amazonaws.com/bucket.gigbig/trusted-company-logo/logos/1.webp" },
    { id: 2, BrandImg: "https://s3.ap-south-1.amazonaws.com/bucket.gigbig/trusted-company-logo/logos/2.webp" },
    { id: 3, BrandImg: "https://s3.ap-south-1.amazonaws.com/bucket.gigbig/trusted-company-logo/logos/3.webp" },
    { id: 4, BrandImg: "https://s3.ap-south-1.amazonaws.com/bucket.gigbig/trusted-company-logo/logos/4.webp" },
    { id: 5, BrandImg: "https://s3.ap-south-1.amazonaws.com/bucket.gigbig/trusted-company-logo/logos/5.webp" },
    { id: 6, BrandImg: "https://s3.ap-south-1.amazonaws.com/bucket.gigbig/trusted-company-logo/logos/6.webp" },
    { id: 7, BrandImg: "https://s3.ap-south-1.amazonaws.com/bucket.gigbig/trusted-company-logo/logos/7.webp" },
    { id: 8, BrandImg: "https://s3.ap-south-1.amazonaws.com/bucket.gigbig/trusted-company-logo/logos/8.webp" },
    { id: 9, BrandImg: "https://s3.ap-south-1.amazonaws.com/bucket.gigbig/trusted-company-logo/logos/9.webp" },
  ]
  
  return (
    <>
      <section className='Trusted-By-Leading-Wrapper mt-5 py-5 mb-5 rounded-3' style={{padding:'0px 20px',backgroundColor:"black"}}>
        <div className="container-fluid p-0">
          <div className='text-center'>
            <h3 className="fs-30 text-white fw-bold Playfair-font mb-5">Trusted by leading brands and startups</h3>
          </div>
          <div className="row m-0">
            <Slider {...settingsBrand}>
              {
                BrandStartups.map((BrandData, index) => (
                  <div key={index} className='col-lg-4 col-md-4 col-sm-6 col-12'>
                    <div className='ms-2'>
                      <img className='img-fluid rounded-4' src={BrandData.BrandImg} alt="BrandDataImg" />
                    </div>
                  </div>
                ))
              }
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}

export default SliderBrand