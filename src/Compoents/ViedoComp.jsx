
// import {petvideo} from 'video/petviedo.mp4'
import React from 'react';

const ViedoComp = () => {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      
      <section 
        className="position-relative text-white d-flex align-items-center overflow-hidden"
        style={{
          minHeight: '600px'
        }}
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            objectFit: 'cover',
            zIndex: 0
          }}
        >
          <source src="assets/viedo/petviedo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 1
          }}
        ></div>

        {/* Content */}
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row">
            <div className="col-lg-8 col-xl-7">
              {/* Play Button with Text */}
              <div className="d-flex align-items-center gap-3 mb-4">
                <button
                  className="btn rounded-circle p-0 d-flex align-items-center justify-content-center"
                  style={{
                    width: '70px',
                    height: '70px',
                    background: 'white',
                    border: '3px solid black)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.boxShadow = '0 10px 30px black';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <i className="fa-solid fa-play" style={{ 
                    fontSize: '24px', 
                    color: 'black',
                    marginLeft: '4px'
                  }}></i>
                </button>
                
                <div>
                  <p className="mb-0 text-white-50" style={{ fontSize: '14px', letterSpacing: '0.5px' }}>
                    See How We
                  </p>
                  <p className="mb-0 fw-semibold" style={{ fontSize: '16px' }}>
                    Help Brands Grow
                  </p>
                </div>
              </div>

              {/* Main Heading */}
              <h2 
                className="display-3 fw-bold mb-4"
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4rem)',
                  lineHeight: '1.2',
                  letterSpacing: '-1px'
                }}
              >
             Transform Your Business with <span style={{ color: 'white' }}>  Right Digital Platforms</span>
              </h2>
              {/* Description */}
              <p 
                className="lead mb-0"
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                  lineHeight: '1.8',
                  color: '#d1d5db',
                  maxWidth: '650px'
                }}
              >
         Whether you’re launching a new venture or upgrading an existing system, we help you create websites and web applications that support growth, engagement, and long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section {
            min-height: 500px !important;
            padding: 60px 20px !important;
          }
        }

        @media (max-width: 576px) {
          section {
            min-height: 450px !important;
            padding: 40px 15px !important;
          }
        }
      `}</style>
    </>
  );
};

export default ViedoComp;