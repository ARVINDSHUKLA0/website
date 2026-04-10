"use client";

import { motion, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import "../CompoentsStyle/ImgesScollSlider.css";

const ImgesScollSlider = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: scrollRef });

  const [xClass1, setXClass1] = useState("start-pos-one");
  const [xClass2, setXClass2] = useState("start-pos-two");

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest < 0.5) {
        setXClass1("move-left-start");
        setXClass2("move-right-start");
      } else {
        setXClass1("move-left-end");
        setXClass2("move-right-end");
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <section ref={scrollRef} className="scroll-section position-relative pb-100">
      <div className="container-fluid">

        {/* TOP TEXT */}
        <motion.div className={`row m-0 scroll-row ${xClass1}`}>
          <div className="col-12 text-center">
            <h4 className="heading text-uppercase">recent</h4>
          </div>
        </motion.div>

        {/* BOTTOM TEXT */}
        <motion.div className={`row m-0 mt-3 scroll-row ${xClass2}`}>
          <div className="col-12 text-center">
            <h4 className="heading text-uppercase">work</h4>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImgesScollSlider;