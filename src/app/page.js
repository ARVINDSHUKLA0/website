"use client";

import Navbar from "@/Compoents/Navbar";
import styles from "./page.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);


export default function Home() {
   const textRef = useRef();  

 useEffect(() => {
    gsap.fromTo(
      textRef.current,
      {
        y: 50,
        z: -50,
        rotateX: -80,
        opacity: 0,
        transformOrigin: "top center",
      },
      {
        y: 0,
        z: 0,
        rotateX: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          end: "top 40%",
          scrub: 1.5,
        },
      }
    );
  }, []);

  return (
    <section className={styles.page}>
      <div className={`${styles.MainBannerWarper} position-relative`}>
        <video autoPlay muted loop playsInline>
          <source src="/assets/viedo/puppy.mp4" type="video/mp4" />
        </video>
        <Navbar />
        <div className="px-2">
          <div className="container-fluid custom-container">
            <div className={styles.customPostion}>
              <div className={`row d-flex justify-content-center align-items-end g-3 ${styles.customWidthText}`}>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                  <h1 className={`text-white ${styles.heroheading}`}>
                    Designing the Future of Pet Brands
                  </h1>
                </div>
                <div className="col-lg-4 offset-lg-2 offset-xl-2 col-xl-4 col-md-12 col-sm-12 col-12">
                  <h2 className="text-white fs-20">
                    We are a creative studio dedicated to the pet industry — building brands, products, and experiences that connect deeply with pet parents.
                  </h2>
                </div>
                <div className="d-xl-none d-block">
                  <div className='m-0'>
                    <hr className='white-custom-color' />
                    <p className='m-0 white-custom-color fs-20'>An award</p>
                    <p className='m-0 white-custom-color fs-20'>wining digital agency</p>
                    <p className='m-0 white-custom-color fs-20'>since-2017</p>
                  </div>
                  <div>
                    <hr className='white-custom-color' />
                    <p className='m-0 white-custom-color fs-20'>Adon</p>
                    <p className='m-0 white-custom-color fs-20'>1772 Street Charleston,</p>
                    <p className='m-0 white-custom-color fs-20'>New York</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


      <div className="row m-0">
        <div className="col-12 col-lg-6 offset-lg-6">
          <div   className="mt-100 mb-100" style={{ perspective: "1000px" }}>
            <h2 ref={textRef} className={`${styles.customFontSize} title-wrapper`}>
              We provide brilliant idea to grow the startup agency with your sharp brand.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}