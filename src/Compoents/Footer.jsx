"use client";

import Link from "next/link";

export default function Footer({textRef}) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;600&family=Barlow+Condensed:wght@700&display=swap');

        .footer-wrapper {
          font-family: 'Barlow', sans-serif;
          background: #fff;
          border-top: 1px solid #e0e0e0;
        }

        .footer-main {
          border-bottom: 1px solid #e0e0e0;
          padding: 60px 40px;
        }

        .footer-headline {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(2.8rem, 7vw, 5.5rem);
          font-weight: 700;
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: #111;
          margin: 0 0 24px 0;
        }

        .footer-cta-link {
          font-size: 0.9rem;
          color: #111;
          text-decoration: underline;
          text-underline-offset: 4px;
          letter-spacing: 0.01em;
          transition: opacity 0.2s;
        }

        .footer-cta-link:hover {
          opacity: 0.55;
          color: #111;
        }

        .footer-nav-col h6 {
          font-size: 0.8rem;
          font-weight: 400;
          color: #aaa;
          letter-spacing: 0.03em;
          margin-bottom: 20px;
          text-transform: none;
        }

        .footer-nav-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-nav-col ul li {
          margin-bottom: 10px;
        }

        .footer-nav-col ul li a {
          font-size: 1rem;
          color: #111;
          text-decoration: none;
          font-weight: 400;
          transition: opacity 0.2s;
        }

        .footer-nav-col ul li a:hover {
          opacity: 0.45;
        }

        .footer-divider-col {
          border-left: 1px solid #e0e0e0;
          padding-left: 40px;
        }

        .footer-bottom {
          padding: 22px 40px;
          font-size: 0.85rem;
          color: #888;
          position: relative;
        }

        .footer-bottom a {
          color: #555;
          text-decoration: none;
          font-weight: 500;
        }

        .footer-bottom a:hover {
          color: #111;
        }

    

    
        @media (max-width: 767px) {
          .footer-main {
            padding: 40px 20px;
          }

          .footer-divider-col {
            border-left: none;
            padding-left: 12px;
            border-top: 1px solid #e0e0e0;
            padding-top: 32px;
            margin-top: 32px;
          }

          .footer-bottom {
            padding: 18px 20px;
          }
        }
      `}</style>

      <footer className="footer-wrapper">
        {/* Main Section */}
        <div className="footer-main">
          <div className="container-fluid px-0">
            <div className="row g-0">

              {/* Left: Headline */}
              <div className="col-12 col-md-5 d-flex flex-column justify-content-between pe-md-4 mb-4 mb-md-0">
                <h2 ref={textRef} className="footer-headline">
                  Let's start a<br />
                  great work right<br />
                  now
                </h2>
                <Link href="#" className="footer-cta-link">
                  Let's get started now
                </Link>
              </div>

              {/* Right: Nav Columns */}
              <div className="col-12 col-md-7 footer-divider-col">
                <div className="row g-4">

                  {/* Company */}
                  <div className="col-6 col-sm-4 footer-nav-col">
                    <h6>Company</h6>
                    <ul>
                      <li><Link href="#">agency</Link></li>
                      <li><Link href="#">Solutions</Link></li>
                      <li><Link href="#">Community</Link></li>
                      <li><Link href="#">Work</Link></li>
                      <li><Link href="#">Contact</Link></li>
                    </ul>
                  </div>

                  {/* Social */}
                  <div className="col-6 col-sm-4 footer-nav-col">
                    <h6>Social</h6>
                    <ul>
                      <li><Link href="#">Facebook</Link></li>
                      <li><Link href="#">Twitter</Link></li>
                      <li><Link href="#">Dribbble</Link></li>
                      <li><Link href="#">Instagram</Link></li>
                      <li><Link href="#">Awwwards</Link></li>
                      <li><Link href="#">YouTube</Link></li>
                    </ul>
                  </div>

                  {/* Office */}
                  <div className="col-6 col-sm-4 footer-nav-col">
                    <h6>Office</h6>
                    <ul>
                      <li><Link href="#">New York</Link></li>
                      <li><Link href="#">Toronto</Link></li>
                      <li><Link href="#">Berlin</Link></li>
                      <li><Link href="#">London</Link></li>
                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom d-flex align-items-center justify-content-between">
          <p className="mb-0  m-auto ">
            © 2026 <Link href="#">RavexTheme</Link>. All right reserved
          </p>
   
        </div>
      </footer>
    </>
  );
}