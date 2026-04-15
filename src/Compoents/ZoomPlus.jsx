"use client";
import { useEffect } from "react";

export default function ZoomPlus({ sectionRef }) {

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef?.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowH = window.innerHeight;

      let progress = (windowH - rect.top) / windowH;
      progress = Math.max(0, Math.min(1, progress));

      let scaleValue = 1;

      if (progress > 0.6) {
        let zoomProgress = (progress - 0.6) / 0.4;
        zoomProgress = Math.max(0, Math.min(1, zoomProgress));

        scaleValue = 1 + zoomProgress * 20;
      }

      const circle = section.querySelector(".zoom-circle");

      if (circle) {
        circle.style.transform = `translate(-50%, -50%) scale(${scaleValue})`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRef]);

  return (
    <div className="zoom-wrapper">
      <div className="zoom-circle">
        <div className="plus">
          <span className="h"></span>
          <span className="v"></span>
        </div>
      </div>
    </div>
  );
}
