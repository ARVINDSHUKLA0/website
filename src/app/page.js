"use client";

import Navbar from "@/Compoents/Navbar";
import styles from "./page.module.css";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { motion, useScroll } from "framer-motion";
import ImgesScollSlider from "@/Compoents/ImgesScollSlider";
gsap.registerPlugin(ScrollTrigger);



export default function Home() {
  const textRef = useRef();
  const textRefTwo = useRef();

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
      animateText(textRef);
      animateText(textRefTwo);

    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {

    gsap.fromTo(textRef.current, {}, {});

    gsap.fromTo(textRefTwo.current, {}, {});

  }, []);

  const DataStrogre = [
    { id: "1", imegs: "/assets/img/pet.jpg", txtOne: "Lambax Nanak", txtTwo: "Strategy, Visual Identity, Re-branding", years: "(2022)" },
    { id: "2", imegs: "/assets/img/pet.jpg", txtOne: "Lambax Nanak", txtTwo: "Strategy, Visual Identity, Re-branding", years: "(2022)" },
    { id: "3", imegs: "/assets/img/pet.jpg", txtOne: "Lambax Nanak", txtTwo: "Strategy, Visual Identity, Re-branding", years: "(2022)" },
    { id: "4", imegs: "/assets/img/pet.jpg", txtOne: "Lambax Nanak", txtTwo: "Strategy, Visual Identity, Re-branding", years: "(2022)" },
  ]

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const container = document.querySelector(".boxes");
  //     const boxes = container?.querySelectorAll(".box");

  //     if (!boxes || boxes.length < 5) return;

  //     const scroll = window.scrollY;

  //     if (scroll > 100) {

  //       const move = container.offsetWidth / 3;
  //       const gap = 330;

  //       boxes[0].style.transform = `translate(calc(-50% - ${gap * 2}px), -50%)`;
  //       boxes[1].style.transform = `translate(calc(-50% - ${gap}px), -50%)`;
  //       boxes[2].style.transform = `translate(-50%, -50%)`;
  //       boxes[3].style.transform = `translate(calc(-50% + ${gap}px), -50%)`;
  //       boxes[4].style.transform = `translate(calc(-50% + ${gap * 2}px), -50%)`;

  //     } else {
  //       boxes.forEach((box) => {
  //         box.style.transform = "translate(-50%, -50%)";
  //       });
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);


  useEffect(() => {
  const handleScroll = () => {
    const container = document.querySelector(".boxes");
    const boxes = container?.querySelectorAll(".box");

    if (!boxes || boxes.length < 5) return;

    const rect = container.getBoundingClientRect();
    const screenHeight = window.innerHeight;

    // 👇 progress 0 → 1 (smooth)
    let progress = (screenHeight - rect.top) / screenHeight;
    progress = Math.max(0, Math.min(1, progress));

    const gap = 320; // 300 box + spacing

    boxes[0].style.transform = `translate(calc(-50% - ${gap * 2 * progress}px), -50%)`;
    boxes[1].style.transform = `translate(calc(-50% - ${gap * 1 * progress}px), -50%)`;
    boxes[2].style.transform = `translate(-50%, -50%)`;
    boxes[3].style.transform = `translate(calc(-50% + ${gap * 1 * progress}px), -50%)`;
    boxes[4].style.transform = `translate(calc(-50% + ${gap * 2 * progress}px), -50%)`;
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
        <ImgesScollSlider />
      </div>
      <div className="container-fluid custom-container">
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
                <>
                  <div className="col-lg-6 col-md-6 col-sm-12 col-12 my-4">
                    <img className="img-fluid rounded-4" src={DataValue.imegs} />
                    <div className="py-3 ps-1">
                      <p className="m-0 fs-16 fw-bold">{DataValue.txtOne}</p>
                      <p className="m-0 fs-16 fw-bold">{DataValue.txtTwo}</p>
                      <p className="m-0 fs-16 fw-bold">{DataValue.years}</p>
                    </div>
                  </div>
                </>
              ))
            }
          </div>
        </div>
        <div className="row m-0">
          <div className="col-12 col-lg-6 ">
            <div className="mt-100 mb-100" style={{ perspective: "1000px" }}>
              <h2 ref={textRefTwo} className={`${styles.customFontSize} title-wrapper`}>
                We think out of the box for tailor-made service      </h2>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="mb-5 position-relative">
          <div className={`${styles.MainServices} `}>
                <div>Capabilities</div>
                <div>Capabilities</div>
                <div>Capabilities</div>
                <div className="d-flex mt-50 gap-5">
                     <div className={`bg-info py-5  px-5 ${styles.CustomPostinSer}`}>1</div>
                     <div className={`bg-info py-5  px-5 ${styles.CustomPostinSer}`}>1</div>
                     <div className={`bg-info py-5  px-5 ${styles.CustomPostinSer}`}>1</div>
                     <div className={`bg-info py-5  px-5 ${styles.CustomPostinSer}`}>1</div>
                     <div className={`bg-info py-5  px-5 ${styles.CustomPostinSer}`}>1</div>
                     
                </div>
          </div>
       </div> */}

      <div className="mb-5">
        <div className={styles.MainServices}>

          <div>Capabilities</div>
          <div>Capabilities</div>
          <div>Capabilities</div>

          <div className="boxes">
            <div className="box">1</div>
            <div className="box">1</div>
            <div className="box active">1</div> {/* center */}
            <div className="box">1</div>
            <div className="box">1</div>
          </div>

        </div>
      </div>

      <p>
        Lorem Ipsum
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
        What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

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
        Lorem Ipsum
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."
        What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

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