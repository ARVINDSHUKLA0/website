"use client";
import React, { useEffect, useRef } from 'react'
import Link from "next/link";
import '../ourServices/OurServices.css'
import Navbar from '@/Compoents/Navbar'
import Footer from '@/Compoents/Footer';

const page = () => {
    const sectionRef = useRef();
    const dataServicess = [
        { id: '1', ServicesImg: "/assets/img/four-icon.png", hedaing: "branding", },
        { id: '2', ServicesImg: "/assets/img/two-icon.png", hedaing: "Product Development ", },
        { id: '3', ServicesImg: "/assets/img/three-icon.png", hedaing: "Packaging Design ", },
        { id: '4', ServicesImg: "/assets/img/one-icon.png", hedaing: "Marketing & Strategy", },

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

    const DataServicesImges = [
        { id: '1', ServicesImg: "/assets/img/Services-1.png", hedaing: "Product Development ", },
        { id: '2', ServicesImg: "/assets/img/Services-2.png", hedaing: "Product Development ", },
        { id: '3', ServicesImg: "/assets/img/Services-3.png", hedaing: "Packaging Design ", },
        { id: '4', ServicesImg: "/assets/img/Services-4.png", hedaing: "Marketing & Strategy", },
        { id: '5', ServicesImg: "/assets/img/Services-5.png", hedaing: "Marketing & Strategy", },

    ]
    return (
        <>
            <Navbar className="black-Navbar" />
            <section>
                <div>
                    <div ref={sectionRef} className="mb-lg-5 mb-0 userbox" >
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
                                                    <img className="ms-2 img-fluid rounded-3" src={DataServicesItem.ServicesImg} width={120}  />
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
            <section>
                <div className='container'>
                    <h2 className='my-3 ps-3 text-capitalize fw-bold mb-4'>our trusted client</h2>
                    <div className="row m-0 d-flex justify-content-center align-items-center">
                        {
                            DataServicesImges.map((OurSerImg, index) => (
                                <div key={index} className='col-lg-4 col-md-4 col-sm-6 col-12'>
                                    <div className='mb-4'>
                                        <img className='img-fluid rounded-3' src={OurSerImg.ServicesImg} alt="" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default page