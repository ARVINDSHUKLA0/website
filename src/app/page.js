import Navbar from "@/Compoents/Navbar";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.page}>
      <div className={`${styles.MainBannerWarper} position-relative`}>

        <video autoPlay muted loop playsInline>
          <source src="/assets/viedo/puppy.mp4" type="video/mp4" />
        </video>

        <Navbar />

        <div className="container-fluid custom-container">
          <div className={styles.customPostion}>
            <div className="row d-flex justify-content-center align-items-end" style={{width : "1600px"}}>
              <div className="col-lg-6 col-12">
                <h1 className={`text-white ${styles.heroheading}`}>
                  Designing the Future of Pet Brands
                </h1>
              </div>
              <div className="col-lg-4 offset-lg-2 offset-xl-2  col-xl-4 col-12 mt-50">
                <h2 className="text-white fs-20">
                  We are a creative studio dedicated to the pet industry — building brands, products, and experiences that connect deeply with pet parents.
                </h2>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}