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
                            <img className='img-fluid ' src="/assets/img/about-img.jpeg" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 col-md-6 col-sm-12 col-12">
                        <h2 className='fw-bold fs-1 mb-sm-4 mb-2'>Pawform Studio</h2>
                        <div className='me-5'>
                            <p>is a pet-focused creative lifestyle brand dedicated to celebrating the bond between pets and their people. We create products, experiences, and opportunities that enrich pet life while bringing together thoughtful design, functionality, and modern aesthetics. From everyday essentials to creative collaborations, everything we do is inspired by the joy pets bring to our lives.</p>
                            <p>Our consumer-facing brands include Paw Living, featuring furniture and home solutions that blend seamlessly into modern interiors; Paw Snuggle, a collection of toys designed for comfort, enrichment, and play; Human  Pet Merch, offering stylish merchandise for pet lovers; and Pet Casting, connecting brands with talented animal models for campaigns, content creation, and commercial productions. Together, these offerings create a complete ecosystem where pets can live, play, inspire, and shine.
                            </p>
                            <p>
                                Beyond our products, Pawform Studio partners with pet brands to bring ideas to life through *Branding, Product Development, Packaging Design, and Marketing*. We help businesses create memorable identities, develop innovative pet products, design packaging that stands out on shelves and online, and build marketing strategies that connect authentically with pet parents. By combining creativity, industry insight, and a deep love for pets, we help shape the future of pet-focused brands and experiences.
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