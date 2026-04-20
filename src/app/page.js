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
gsap.registerPlugin(ScrollTrigger);



export default function Home() {
  const [active, setActive] = useState(false);
  const textRef = useRef();
  const textRefTwo = useRef();
  const textRefThree = useRef();
  const textRefFour = useRef();

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

    gsap.fromTo(textRefTwo.current, {}, {}); 

  }, []);

  useEffect(() => {
    const handleScroll = () => {

      const boxes = document.querySelectorAll(".box");

      if (window.innerWidth < 1197) {
        boxes.forEach(box => {
          box.style.transform = "none";
        });
        return;
      }

      const container = document.querySelector(".boxes");
      if (!container || boxes.length === 0) return;

      const rect = container.getBoundingClientRect();

      const start = window.innerHeight * 0.8;
      const end = window.innerHeight * 0.2;

      let progress = (start - rect.top) / (start - end);
      progress = Math.max(0, Math.min(1, progress));
      const containerWidth = window.innerWidth;
      const boxWidth = 300;
      const spacing = 10;

      const gap = boxWidth + spacing; // 340 
      const maxGap = (containerWidth - boxWidth) / (boxes.length);
      const isEven = boxes.length % 2 === 0;

      boxes.forEach((box, i) => {
        let offset;

        if (isEven) {
          const centerLeft = boxes.length / 2 - 1;
          const centerRight = boxes.length / 2;

          if (i <= centerLeft) {
            offset = i - centerLeft - 0.5;
          } else {
            offset = i - centerRight + 0.5;
          }

        } else {
          const centerIndex = Math.floor(boxes.length / 2);
          offset = i - centerIndex;
        }

        box.style.transform = `translate(calc(-50% + ${offset * gap * progress}px), -50%)`;
      });

    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const DataStrogre = [
    { id: "1", imegs: "/assets/img/pet.jpg", txtOne: "Lambax Nanak", txtTwo: "Strategy, Visual Identity, Re-branding", years: "(2022)" },
    { id: "2", imegs: "/assets/img/pet.jpg", txtOne: "Lambax Nanak", txtTwo: "Strategy, Visual Identity, Re-branding", years: "(2022)" },
    { id: "3", imegs: "/assets/img/pet.jpg", txtOne: "Lambax Nanak", txtTwo: "Strategy, Visual Identity, Re-branding", years: "(2022)" },
    { id: "4", imegs: "/assets/img/pet.jpg", txtOne: "Lambax Nanak", txtTwo: "Strategy, Visual Identity, Re-branding", years: "(2022)" },
  ]
  const dataServices = [
    { id: '1', ServicesImg: "/assets/img/icon-s-1.webp", name: "Branding" },
    { id: '2', ServicesImg: "/assets/img/icon-s-1.webp", name: "Product Design & Development" },
    { id: '3', ServicesImg: "/assets/img/icon-s-1.webp", name: "Packaging Design" },
    { id: '4', ServicesImg: "/assets/img/icon-s-1.webp", name: "Strategy" },
    { id: '5', ServicesImg: "/assets/img/icon-s-1.webp", name: "Marketing & Content" },
    { id: '6', ServicesImg: "/assets/img/icon-s-1.webp", name: "Pet Casting" },
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
                <img className="img-fluid rounded-4" src="/assets/img/pet.jpg"></img>

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
          <ImgesScollSlider />
        </div>
        <div className="container-fluid custom-containe p-0" >
          <div className="mt-50 pt-5">
            <div className="row  m-0">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div>
                  <img className="img-fluid rounded-4" src="/assets/img/pet.jpg" />
                </div>

                <div className="py-3 ps-1">
                  <p className="mt-3 m-0 fs-16 fw-bold">Arrox Digital Agency HTML Template</p>
                  <p className="m-0 fs-16 fw-bold">WordPress, Themeforest</p>
                  <p className="m-0 fs-16 fw-bold">(2025)</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                <div>
                  <img className="img-fluid rounded-4" src="/assets/img/pet.jpg" />
                </div>
                <div className="py-3 ps-1">
                  <p className="mt-3 m-0 fs-16 fw-bold">Arrox Digital Agency HTML Template</p>
                  <p className="m-0 fs-16 fw-bold">WordPress, Themeforest</p>
                  <p className="m-0 fs-16 fw-bold">(2025)</p>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                <div className={`${styles.ImagesHeight}`}>
                  <img className="img-fluid rounded-4" src="/assets/img/pet.jpg" />
                </div>
                <div className="py-3 ps-1">
                  <p className="mt-3 m-0 fs-16 fw-bold">Arrox Digital Agency HTML Template</p>
                  <p className="m-0 fs-16 fw-bold">WordPress, Themeforest</p>
                  <p className="m-0 fs-16 fw-bold">(2025)</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="row m-0">
              {
                DataStrogre.map((DataValue, index) => (

                  <div key={index} className="col-lg-6 col-md-6 col-sm-12 col-12 my-4">
                    <img className="img-fluid rounded-4" src={DataValue.imegs} />
                    <div className="py-3 ps-1">
                      <p className="m-0 fs-16 fw-bold">{DataValue.txtOne}</p>
                      <p className="m-0 fs-16 fw-bold">{DataValue.txtTwo}</p>
                      <p className="m-0 fs-16 fw-bold">{DataValue.years}</p>
                    </div>
                  </div>

                ))
              }
            </div>
          </div>
          <div className="row m-0 hh">
            <div className="col-12 col-lg-6 ">
              <div className="mt-100 mb-100" style={{ perspective: "1000px" }}>
                <h2 ref={textRefTwo} className={`${styles.customFontSize} title-wrapper `}>
                  We think out of the box for tailor-made service      </h2>
              </div>
            </div>
          </div>
        </div>

        <div ref={sectionRef} className="mb-5 userbox" >
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
        </div>

       <div className="container-fluid custom-container">
        <ViedoComp />
        <AwardSection  textRef={textRefThree}  />
        <SliderBrand />
        </div>

      </section>
      <Footer textRef={textRefFour}/>

    </>
  );
}