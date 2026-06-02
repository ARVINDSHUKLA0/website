"use client";

import Navbar from "@/Compoents/Navbar";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { motion, useScroll } from "framer-motion";
import ImgesScollSlider from "@/Compoents/ImgesScollSlider";
import Link from "next/link";
import ViedoComp from "@/Compoents/ViedoComp";
import SliderBrand from "@/Compoents/SliderBrand";
import Footer from "@/Compoents/Footer";
import AwardSection from "@/Compoents/AwardSection";
import WaveTransition from "@/Compoents/WaveTransition";
import { desc } from "framer-motion/client";
gsap.registerPlugin(ScrollTrigger);




export default function Home() {
  const [active, setActive] = useState(false);
  const textRef = useRef();
  const textRefTwo = useRef();
  const textRefThree = useRef();
  const textRefFour = useRef();


  const leftRef = useRef(null);
  const rightRef = useRef(null);

  // useGSAP(() => {
  //   gsap.to(leftRef.current, {
  //     y: -200,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: leftRef.current,
  //       start: "top bottom",
  //       end: "bottom top",
  //       scrub: true,
  //     },
  //   });

  //   gsap.to(rightRef.current, {
  //     y: 200,
  //     ease: "none",
  //     scrollTrigger: {
  //       trigger: rightRef.current,
  //       start: "top bottom",
  //       end: "bottom top",
  //       scrub: true,
  //     },
  //   });
  // });
  useEffect(() => {
    const ctx = gsap.context(() => {

      const animateText = (ref) => {
        if (!ref.current) return;

        gsap.fromTo(
          ref.current,
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
              trigger: ref.current,
              start: "top 90%",
              end: "top 40%",
              scrub: 1.5,
            },
          }
        );
      };

      // 👇 dono pe apply
      // animateText(textRef);
      // animateText(textRefTwo);
      // animateText(textRefThree);
      // animateText(textRefFour);
      [textRef, textRefTwo, textRefThree, textRefFour].forEach(animateText);

    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {

    gsap.fromTo(textRef.current, {}, {});

    // gsap.fromTo(textRefTwo.current, {}, {});

  }, []);


  // useEffect(() => {
  //   const handleScroll = () => {

  //     const boxes = document.querySelectorAll(".box");

  //     if (window.innerWidth < 1197) {
  //       boxes.forEach(box => {
  //         box.style.transform = "none";
  //       });
  //       return;
  //     }

  //     const container = document.querySelector(".boxes");
  //     if (!container || boxes.length === 0) return;

  //     const rect = container.getBoundingClientRect();

  //     const start = window.innerHeight * 0.8;
  //     const end = window.innerHeight * 0.2;

  //     let progress = (start - rect.top) / (start - end);
  //     progress = Math.max(0, Math.min(1, progress));
  //     const containerWidth = window.innerWidth;
  //     const boxWidth = 300;
  //     const spacing = 10;

  //     const gap = boxWidth + spacing; // 340 
  //     const maxGap = (containerWidth - boxWidth) / (boxes.length);
  //     const isEven = boxes.length % 2 === 0;

  //     boxes.forEach((box, i) => {
  //       let offset;

  //       if (isEven) {
  //         const centerLeft = boxes.length / 2 - 1;
  //         const centerRight = boxes.length / 2;

  //         if (i <= centerLeft) {
  //           offset = i - centerLeft - 0.5;
  //         } else {
  //           offset = i - centerRight + 0.5;
  //         }

  //       } else {
  //         const centerIndex = Math.floor(boxes.length / 2);
  //         offset = i - centerIndex;
  //       }

  //       box.style.transform = `translate(calc(-50% + ${offset * gap * progress}px), -50%)`;
  //     });

  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   window.addEventListener("resize", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     window.removeEventListener("resize", handleScroll);
  //   };
  // }, []);



  const DataStrogre = [
    { id: "1", imegs: "/assets/img/BrandCreation.webp", txtOne: "Logo and Brand Creation", },
    { id: "2", imegs: "/assets/img/ProductDesign.webp", txtOne: "Product Design and Development", },
    { id: "3", imegs: "/assets/img/PackagingDesign .webp", txtOne: "Packaging Design and Production", },
    { id: "4", imegs: "/assets/img/PetCasting.webp", txtOne: "Pet Casting and Animal Talent", },
  ]
  const dataServices = [
    { id: '1', ServicesImg: "/assets/img/dog-1 (2).png", hedaing: "Branding", desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's" },
    { id: '2', ServicesImg: "/assets/img/dog-1 (2).png", hedaing: "Product Design & Development", desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's" },
    { id: '3', ServicesImg: "/assets/img/dog-1 (2).png", hedaing: "Packaging Design", desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's" },
    { id: '4', ServicesImg: "/assets/img/dog-1 (2).png", hedaing: "Strategy", desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's" },
  ]
  const leftData = dataServices.filter((_, index) => index % 2 === 0);
  const rightData = dataServices.filter((_, index) => index % 2 !== 0);
  const dataServicesTwo = [
    { id: '1', ServicesImg: "/assets/img/dog-1 (2).png", hedaing: "Branding", desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's" },
    { id: '2', ServicesImg: "/assets/img/dog-1 (2).png", hedaing: "Product Design & Development", desc: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's" },
  ]


  const BardTable = [
    { id: 1, name: "Awwwards", para: " 3x creative agency of the day", years: "2021" },
    { id: 1, name: "Awwwards", para: " 3x creative agency of the day", years: "2021" },
    { id: 1, name: "Awwwards", para: " 3x creative agency of the day", years: "2021" },
    { id: 1, name: "Awwwards", para: " 3x creative agency of the day", years: "2021" },
    { id: 1, name: "Awwwards", para: " 3x creative agency of the day", years: "2021" },
  ]

  const sectionRef = useRef();
  return (
    <>

      <section className={styles.page}>
        <div className={`${styles.MainBannerWarper} position-relative`}>
          <video autoPlay muted loop playsInline>
            <source src="/assets/viedo/puppy.mp4" type="video/mp4" />
          </video>
          <Navbar theme="dark" />
          <div className="px-2">
            <div className="container-fluid custom-container p-0 pb-4">
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



        {/* <div ref={sectionRef} className="mb-5 userbox" >
          <div className={styles.MainServices}>
            <div className="d-xl-block d-none">
              <div className="d-flex justify-content-between align-items-center border border-dark m-3 p-3 rounded-4">
                <div>
                  <img className="img-fluid" src="/assets/img/logoBlack.png" width={90} />
                </div>
                <div>
                  <Link href="#">
                    <i className="fa-solid fa-bars fs-18 text-dark"></i>
                  </Link>
                </div>
              </div>
              <div className="pt-1 ps-3">
                <h5>Capabilities</h5>
                <h5>Explore</h5>
              </div>
            </div>
            <div className="boxes">
              {
                dataServices.map((DataServicesItem, index) => (
                  <div className="box mb-2   mb-md-0" key={index}>
                    <div className="position-relative">
                      <div className={`${styles.onePostion}`}>
                        <img className="ms-2" src={DataServicesItem.ServicesImg} width={50} />
                      </div>
                      <div className={`${styles.twoPostion}`}>
                        <h3>{DataServicesItem.name}</h3>
                      </div>

                    </div>

                  </div>
                ))
              }
               
            </div>
          </div>
        </div> */}

        <section className="container-fluid custom-container">
          {/* <div className="row m-0 py-3">
            {
              dataServices.map((CurrentValue, index) => (
                <div key={index} className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="my-2 py-1">
                    <img className="img-fluid rounded-2" src={`${CurrentValue.ServicesImg}`}></img>
                  </div>
                  <div>
                    <h5 className="fw-bold ps-1">{CurrentValue.hedaing}</h5>
                    <p className="ps-1">{CurrentValue.desc}</p>
                  </div>
                </div>
              ))
            }
          </div> */}

          <div className="row m-0 py-3">

            {/* Left Column */}
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="leftColumn">
                {leftData.map((CurrentValue, index) => (
                  <div key={index}>
                    <div className="my-2 py-1">
                      <img
                        className="img-fluid rounded-2"
                        src={CurrentValue.ServicesImg}
                        alt=""
                      />
                    </div>

                    <div>
                      <h5 className="fw-bold ps-1">
                        {CurrentValue.hedaing}
                      </h5>

                      <p className="ps-1">
                        {CurrentValue.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="rightColumn">
                {rightData.map((CurrentValue, index) => (
                  <div key={index}>
                    <div className="my-2 py-1">
                      <img
                        className="img-fluid rounded-2"
                        src={CurrentValue.ServicesImg}
                        alt=""
                      />
                    </div>

                    <div>
                      <h5 className="fw-bold ps-1">
                        {CurrentValue.hedaing}
                      </h5>

                      <p className="ps-1">
                        {CurrentValue.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
 
          <div className="row m-0 mt-3">
            {
              dataServicesTwo.map((CurrentData, index) => (
                <div key={index} className="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div>
                    <img className="img-fluid rounded-2" src={`${CurrentData.ServicesImg}`}></img>
                  </div>
                  <div className="mt-2">
                    <h5 className="fw-bold ps-1">{CurrentData.hedaing}</h5>
                    <p className="ps-1">{CurrentData.desc}</p>
                  </div>
                </div>
              ))
            }

          </div>
        </section>




        <div className="container-fluid custom-container">
          <div className="row m-0  ">
            <div className="col-12 col-lg-6 offset-lg-6 p-0">
              <div className="py-5" style={{ perspective: "1000px" }}>
                <h2 ref={textRef} className={`${styles.customFontSize} title-wrapper`}>
                  We provide brilliant idea to grow the startup agency with your sharp brand.
                </h2>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <h2 className="text-center">Built for the Pet Industry. Not Just Inspired by It</h2>
          </div>
          <div className="row align-items-center mb-5 pb-3">
            <div className="col-lg- ps-lg-6 col-md-6 col-sm-12 col-12 d-flex justify-content-center align-items-end">
              <div className={`${styles.imageBox}`}>
                <img className="img-fluid rounded-4" src="/assets/img/founder-dummy.jpg"></img>

              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12">
              <h2 className='fw-bold fs-1 mb-sm-4 mb-2'>Neha Mishra Panjeta</h2>
              <div>
                <p>Neha Mishra Panjeta, a graduate of the <span className='fw-bold fs-16'>National Institute of Fashion Technology (NIFT)</span>, is the creative force behind Pawform Studio. With a strong foundation in design and a deeply rooted love for animals, she brings a unique perspective to the pet industry.
                </p>
                <p>Her connection with animals goes beyond interest—it’s instinctive, empathetic, and boundless. Much like the unconditional love pets offer, her passion for them knows no limits.</p>
                <p>Recognizing a gap in how pet brands were being built and communicated, Neha set out to merge her design expertise with her lifelong affection for animals. The result was Pawform Studio—a space where creativity meets compassion, and where design is shaped by genuine understanding of the pet world.
                </p>
              </div>

            </div>
          </div>
        </div>

        <div className="container-fluid custom-container">
          <ViedoComp />

        </div>

      </section>
      <Footer textRef={textRefFour} />
      <WaveTransition />

    </>
  );
}