// "use client";
// import { useEffect } from "react";

// export default function ZoomPlus({ sectionRef }) {

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!sectionRef?.current) return;

//       const section = sectionRef.current;
//       const rect = section.getBoundingClientRect();
//       const windowH = window.innerHeight;

//       let progress = (windowH - rect.top) / windowH;
//       progress = Math.max(0, Math.min(1, progress));

//       let scaleValue = 1;

//       if (progress > 0.6) {
//         let zoomProgress = (progress - 0.6) / 0.4;
//         zoomProgress = Math.max(0, Math.min(1, zoomProgress));

//         scaleValue = 1 + zoomProgress * 20;
//       }

//       const circle = section.querySelector(".zoom-circle");

//       if (circle) {
//         circle.style.transform = `translate(-50%, -50%) scale(${scaleValue})`;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [sectionRef]);

//   return (
//     <div className="zoom-wrapper">
//       <div className="zoom-circle">
//         <div className="plus">
//           <span className="h"></span>
//           <span className="v"></span>
//         </div>
//       </div>
//     </div>
//   );
// }
















"use client";
import '../CompoentsStyle/ZoomPlus.css'
import { useEffect } from "react";

export default function ZoomPlus({ sectionRef }) {

  useEffect(() => {
    let locked = false; // ❗ once full screen, stop changing

    const handleScroll = () => {
      if (!sectionRef?.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;

      let progress = (windowH - rect.top) / (windowH + rect.height);
      progress = Math.max(0, Math.min(1, progress));

      const circle = section.querySelector(".zoom-circle");
      if (!circle) return;

      // ❗ once full screen → freeze
      if (locked) return;

      let scale = 1;

      if (progress > 0.65) {
        let zoomProgress = (progress - 0.65) / 0.35;
        zoomProgress = Math.max(0, Math.min(1, zoomProgress));

        // 🔥 strong easing (fast grow)
        const ease = 1 - Math.pow(1 - zoomProgress, 3);

        const circleSize = 60;
        const maxSize = Math.max(window.innerWidth, window.innerHeight);
        const fullScale = maxSize / circleSize;

        scale = 1 + ease * fullScale;

        // ❗ lock when full
        if (zoomProgress >= 0.99) {
          locked = true;
          scale = fullScale + 1;
        }
      }

    circle.style.transform = `translate(-50%, -50%) scale(${scale})`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRef]);

  return (
    <div className="zoom-wrapper">
      <div className="zoom-circle">
        <div className="plus">
              <img className="img-fluid" src="/assets/img/plus.svg" width={120}/>  
        </div>
      </div>
    </div>
  );
}