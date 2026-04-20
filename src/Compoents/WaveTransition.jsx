"use client";

import { useEffect, useRef } from "react";
import '../CompoentsStyle/WaveTransition.css'
import gsap from "gsap";

export default function WaveTransition() {
  const loaderRef = useRef(null);
  const textRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    const start = "M 0 100 V 60 Q 50 20 100 60 V 100 z";
    const end = "M 0 100 V 0 Q 50 0 100 0 V 100 z";

    // 🔥 STEP 1: TEXT SHOW
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );

    // 🔥 STEP 2: TEXT FADE
    tl.to(textRef.current, { opacity: 0, duration: 0.5 });

    // 🔥 STEP 3: WAVE ANIMATION
    tl.to(pathRef.current, {
      attr: { d: start },
      duration: 0.7,
      ease: "power2.in",
    }).to(pathRef.current, {
      attr: { d: end },
      duration: 0.7,
      ease: "power2.out",
    });

    // 🔥 STEP 4: REMOVE LOADER + SHOW PAGE
    tl.to(loaderRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        loaderRef.current.style.display = "none";

        // page show
        const page = document.getElementById("page-content");
        if (page) {
          page.style.opacity = "1";
        }
      },
    });
  }, []);

  return (
    <div ref={loaderRef} className="loader">
      {/* TEXT */}
      <div ref={textRef} className="loader-text">
        <img src="/assets/img/logoWhite.png" width={260}  alt="" />
      </div>

      {/* WAVE */}
      <svg className="loader-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="grad">
            <stop offset="0%" stopColor="#ff8709" />
            <stop offset="100%" stopColor="#f7bdf8" />
          </linearGradient>
        </defs>

        <path
          ref={pathRef}
          fill="url(#grad)"
          d="M 0 100 V 100 Q 50 100 100 100 V 100 z"
        />
      </svg>
    </div>
  );
}