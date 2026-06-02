"use client";
import React, { useEffect, useRef } from 'react'
import Link from "next/link";
import '../ourServices/OurServices.css'
import Navbar from '@/Compoents/Navbar'
import Footer from '@/Compoents/Footer';

const page = () => {
    const sectionRef = useRef();
    const dataServicess = [
        { id: '1', ServicesImg: "/assets/img/DOG-3.jpeg", hedaing: "Branding", },
        { id: '2', ServicesImg: "/assets/img/dog-1 (2).png", hedaing: "Product Development ", },
        { id: '3', ServicesImg: "/assets/img/dog-1 (2).png", hedaing: "Packaging Design ", },
        { id: '4', ServicesImg: "/assets/img/dog-1 (2).png", hedaing: "Marketing & Strategy", },   
      
    ]

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
          const boxWidth = 200;
          const spacing = 125;
    
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
              const centerIndex = Math.floor(boxes.length / 2.2);
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
    return (
        <>
            <Navbar className="black-Navbar" />
            <section>
                <div>
                    <div ref={sectionRef} className="mb-5 userbox" >
                        <div className="MainServices">
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
                                    dataServicess.map((DataServicesItem, index) => (
                                        <div className="box mb-2   mb-md-0" key={index}>
                                            <div className="position-relative custom-width-postion">
                                                <div className="onePostion">
                                                    <img className="ms-2 rounded-3" src={DataServicesItem.ServicesImg} width={50} />
                                                </div>
                                                <div className="twoPostion">
                                                    <h4 className='text-white'>{DataServicesItem.hedaing}</h4>
                                                </div>

                                            </div>

                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default page