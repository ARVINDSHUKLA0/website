"use client";

import Navbar from "@/Compoents/Navbar";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { motion, useScroll } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);



export default function Home() {
  const textRef = useRef();
  const sectionRef = useRef(null);
  const recentRef = useRef(null);
  const workRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      {
        y: 50,
        z: -50,
        rotateX: -80,
        transformOrigin: "top center",
      },
      {
        y: 0,
        z: 0,
        rotateX: 0,
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

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (!sectionRef.current) return;

  //     const rect = sectionRef.current.getBoundingClientRect();
  //     const scrollProgress = window.innerHeight - rect.top;

  //     // jitna scroll utna move (adjust multiplier)
  //     const move = scrollProgress * 0.3;

  //     if (recentRef.current) {
  //       recentRef.current.style.transform = `translateX(${move}px)`;
  //     }

  //     if (workRef.current) {
  //       workRef.current.style.transform = `translateX(-${move}px)`;
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

useEffect(() => {
  const handleScroll = () => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // progress (0 to 1)
    const progress = Math.min(
      Math.max((windowHeight - rect.top) / windowHeight, 0),
      1.10
    );

    // max movement (screen ka aadha hi)
    const maxMove = window.innerWidth / 3.30;

    const move = progress * maxMove;

    if (recentRef.current) {
      recentRef.current.style.transform = `translateX(${move}px)`;
    }

    if (workRef.current) {
      workRef.current.style.transform = `translateX(-${move}px)`;
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
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

      <div className="container-fluid custom-container">
        <div className="row m-0">
          <div className="col-12 col-lg-6 offset-lg-6">
            <div className="mt-100 mb-100" style={{ perspective: "1000px" }}>
              <h2 ref={textRef} className={`${styles.customFontSize} title-wrapper`}>
                We provide brilliant idea to grow the startup agency with your sharp brand.
              </h2>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <h2>Built for the Pet Industry. Not Just Inspired by It</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 col-12">
            <hr className="m-0 pb-3" />
            <p>who are you</p>
          </div>
          <div className="col-lg-5 ps-lg-5 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-end">
            <div className={`${styles.imageBox}`}>
              <img className="img-fluid" src="/assets/img/pet.jpg"></img>

            </div>
            <div className="d-sm-block d-none">
              <img src="/assets/img/shape-s-1.webp" alt="shape" />
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 col-12">
            <p className="fs-18">Pawform Studio is a niche creative agency focused entirely on the pet ecosystem.</p>
            <p className="fs-18">From emerging pet startups to established brands, we craft meaningful identities, thoughtful products, and impactful strategies tailored to the emotional bond between pets and people.</p>
            <p className="fs-18">We don’t just design — we understand pet culture, behavior, and the evolving pet parent mindset.</p>
          </div>
        </div>
      </div>

      <div className="container-fluid custom-container">
        <div className=" row m-0 py-md-5 mb-5 py-3">
          <div className="col-lg-4 col-md-4 col-sm-6 col-6">
            <h6 className="fs-18">(Projects)</h6>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 col-6 text-center">
            <h6 className="fs-18">(All - 25)</h6>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 text-sm-end text-start">
            <h6 className="fs-18">Browse all work</h6>
          </div>
        </div>
        <div className="CustomP" ref={sectionRef}>
          <h2 ref={recentRef} className={`text-uppercase ${styles.CustomFontBigSize}`}>
            recent
          </h2>

          <h2 ref={workRef} className={`text-uppercase text-end ${styles.CustomFontBigSize}`}>
            work
          </h2>
        </div>
      </div>

      <p>
        e 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        Why do we use it?
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


        Where does it come from?
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

        Where can I get some?
        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

        5
        paragraphs
        words
        bytes
        lists
        Start with 'Lorem
        ipsum dolor sit amet...'

      </p>
    </section>
  );
}