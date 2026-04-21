import Navbar from '@/Compoents/Navbar'
import React from 'react'
import '../about/about.css'
import Footer from '@/Compoents/Footer'

const page = () => {
    return (
        <div className='custom-container' >
            <Navbar className="black-Navbar" />
            <section className='my-5 container-fluid '>
                <div className="row m-0 align-items-center">
                    <div className="col-lg-4  offset-lg-1 col-md-6 col-sm-12 col-12 mb-sm-0 mb-5">
                        <div className='about-imges-founder'>
                            <img className='img-fluid ' src="/assets/img/founder.webp" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 col-md-6 col-sm-12 col-12">
                        <h2 className='fw-bold fs-1 mb-sm-4 mb-2'>Neha Mishra Panjeta</h2>
                        <div className='me-5'>
                            <p>Neha Mishra Panjeta, a graduate of the <span className='fw-bold fs-16'>National Institute of Fashion Technology (NIFT)</span>, is the creative force behind Pawform Studio. With a strong foundation in design and a deeply rooted love for animals, she brings a unique perspective to the pet industry.
                            </p>
                            <p>Her connection with animals goes beyond interest—it’s instinctive, empathetic, and boundless. Much like the unconditional love pets offer, her passion for them knows no limits.</p>
                            <p>Recognizing a gap in how pet brands were being built and communicated, Neha set out to merge her design expertise with her lifelong affection for animals. The result was Pawform Studio—a space where creativity meets compassion, and where design is shaped by genuine understanding of the pet world.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default page