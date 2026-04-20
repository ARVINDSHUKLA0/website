// // "use client";
// // import { useEffect } from "react";
// // import '../CompoentsStyle/ZoomPlus.css'

// // export default function ZoomPlus() {

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const section = document.querySelector(".userbox");
// //       const circle = document.querySelector(".zoom-circle");

// //       if (!section || !circle) return;

// //       const rect = section.getBoundingClientRect();

// //       const start = window.innerHeight;
// //       const end = -rect.height;

// //       let progress = (start - rect.top) / (start - end);
// //       progress = Math.max(0, Math.min(1, progress));

// //       let moveY = 100;
// //       let scale = 1;

// //       const stopPoint = 400;

// //       if (progress < 0.6) {
// //         moveY = progress * stopPoint;
// //       } else {
// //         moveY = stopPoint;

// //         let zoomProgress = (progress - 0.6) / 0.4;
// //         zoomProgress = Math.max(0, Math.min(1, zoomProgress));

// //         scale = 1 + zoomProgress * 590;
// //       }

// //       circle.style.transform =
// //         `translate(-50%, calc(-50% + ${moveY}px)) scale(${scale})`;
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, []);

// //   return (
// //     <div className="zoom-wrapper">
// //       <div className="zoom-circle">
// //         <div className="plus">
// //           <img src="/assets/img/plus.svg" width={100} />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }




















// "use client";
// import '../CompoentsStyle/ZoomPlus.css'
// import { useEffect } from "react";

// export default function ZoomPlus() {

//   // useEffect(() => {
//   //   const handleScroll = () => {
//   //     const section = document.querySelector(".userbox");
//   //     const circle = document.querySelector(".plus");

//   //     if (!section || !circle) return;

//   //     const rect = section.getBoundingClientRect();

//   //     const start = window.innerHeight;
//   //     const end = -rect.height;

//   //     let progress = (start - rect.top) / (start - end);
//   //     progress = Math.max(0, Math.min(1, progress));

//   //     let scale = 1;

//   //     if (progress > 0.6) {
//   //       let zoomProgress = (progress - 0.6) / 0.4;
//   //       zoomProgress = Math.max(0, Math.min(1, zoomProgress));

//   //       scale = 1 + zoomProgress * 200;
//   //       // scale = 1 + zoomProgress * 590;
//   //     } 

//   //      circle.style.transform = `translate(-50%, -50%) scale(${scale})`;
//   //   };

//   //   window.addEventListener("scroll", handleScroll);
//   //   return () => window.removeEventListener("scroll", handleScroll);
//   // }, []);

//   //   useEffect(() => {
//   //   const handleScroll = () => {
//   //     const section = document.querySelector(".userbox");
//   //     const circle = document.querySelector(".plus");

//   //     if (!section || !circle) return;

//   //     const rect = section.getBoundingClientRect();

//   //     const start = window.innerHeight;
//   //     const end = -rect.height;

//   //     let progress = (start - rect.top) / (start - end);
//   //     progress = Math.max(0, Math.min(1, progress));

//   //     let moveY = 1500; // 👈 start niche
//   //     let scale = 1;

//   //     // 🔥 STEP 1: niche se UPER aaye
//   //     if (progress < 0.6) {
//   //       moveY = 1500 * (1 - progress / 0.6); 
//   //       // 300 → 0 (neeche se uper)
//   //     } 

//   //     // 🔥 STEP 2: stop + zoom
//   //     else {
//   //       moveY = 0;

//   //       let zoomProgress = (progress - 0.6) / 0.4;
//   //       zoomProgress = Math.max(0, Math.min(1, zoomProgress));

//   //       scale = 1 + zoomProgress * 200;
//   //     }

//   //     circle.style.transform =
//   //       `translate(-50%, calc(-50% + ${moveY}px)) scale(${scale})`;
//   //   };

//   //   window.addEventListener("scroll", handleScroll);
//   //   return () => window.removeEventListener("scroll", handleScroll);
//   // }, []);

//   // useEffect(() => {
//   //   const handleScroll = () => {
//   //     const section = document.querySelector(".userbox");
//   //     const circle = document.querySelector(".plus");

//   //     if (!section || !circle) return;

//   //     const rect = section.getBoundingClientRect();

//   //     const start = window.innerHeight;
//   //     const end = -rect.height;

//   //     let progress = (start - rect.top) / (start - end);
//   //     progress = Math.max(0, Math.min(1, progress));

//   //     let moveY = 1500;
//   //     let scale = 1;

//   //     // ✅ STEP 1: niche → upar (correct)
//   //     if (progress < 0.6) {
//   //       let moveProgress = Math.min(progress / 0.6, 1);
//   //       moveY = 1500 - moveProgress * 1500;
//   //     } 

//   //     // ✅ STEP 2: zoom
//   //     else {
//   //       moveY = 0;

//   //       let zoomProgress = (progress - 0.6) / 0.4;
//   //       zoomProgress = Math.max(0, Math.min(1, zoomProgress));

//   //       scale = 1 + zoomProgress * 200;
//   //     }

//   //     circle.style.transform =
//   //       `translate(-50%, calc(-50% + ${moveY}px)) scale(${scale})`;
//   //   };

//   //   window.addEventListener("scroll", handleScroll);
//   //   return () => window.removeEventListener("scroll", handleScroll);
//   // }, []);

//   // useEffect(() => {
//   //   const handleScroll = () => {
//   //     const section = document.querySelector(".userbox");
//   //     const circle = document.querySelector(".plus");

//   //     if (!section || !circle) return;

//   //     const rect = section.getBoundingClientRect();
//   //     const windowH = window.innerHeight;

//   //     // 🔥 progress based on section
//   //     let progress = (windowH - rect.top) / (windowH + rect.height);
//   //     progress = Math.max(0, Math.min(1, progress));

//   //     let moveY = 300;
//   //     let scale = 1;

//   //     // ✅ STEP 1: niche se center
//   //     if (progress < 0.5) {
//   //       let moveProgress = progress / 0.5;
//   //       moveY = 300 - moveProgress * 300;
//   //     }

//   //     // ✅ STEP 2: center hold
//   //     else if (progress >= 0.5 && progress < 0.7) {
//   //       moveY = 0;
//   //     }

//   //     // ✅ STEP 3: zoom
//   //     else {
//   //       moveY = 0;

//   //       let zoomProgress = (progress - 0.7) / 0.3;
//   //       zoomProgress = Math.max(0, Math.min(1, zoomProgress));

//   //       scale = 1 + zoomProgress * 200;
//   //     }

//   //     circle.style.transform =
//   //       `translateY(${moveY}px) scale(${scale})`;
//   //   };

//   //   window.addEventListener("scroll", handleScroll);
//   //   return () => window.removeEventListener("scroll", handleScroll);
//   // }, []);

//   // useEffect(() => {
//   //   const handleScroll = () => {
//   //     const section = document.querySelector(".userbox");
//   //     const circle = document.querySelector(".plus");

//   //     if (!section || !circle) return;

//   //     const rect = section.getBoundingClientRect();
//   //     const windowH = window.innerHeight;

//   //     let progress = (windowH - rect.top) / (windowH + rect.height);
//   //     progress = Math.max(0, Math.min(1, progress));

//   //     let moveY = 0;   // 👈 start center
//   //     let scale = 1;

//   //     // 🔥 STEP 1: niche jaye (center → down)
//   //     if (progress < 0.3) {
//   //       let moveProgress = progress / 0.3;
//   //       moveY = moveProgress * 200; // 0 → 200 (down)
//   //     }

//   //     // 🔥 STEP 2: wapas center aaye
//   //     else if (progress >= 0.3 && progress < 0.6) {
//   //       let moveProgress = (progress - 0.3) / 0.3;
//   //       moveY = 200 - moveProgress * 200; // 200 → 0
//   //     }

//   //     // 🔥 STEP 3: zoom
//   //     else {
//   //       moveY = 0;

//   //       let zoomProgress = (progress - 0.6) / 0.4;
//   //       zoomProgress = Math.max(0, Math.min(1, zoomProgress));

//   //       scale = 1 + zoomProgress * 200;
//   //     }

//   //     circle.style.transform =
//   //       `translateY(${moveY}px) scale(${scale})`;
//   //   };

//   //   window.addEventListener("scroll", handleScroll);
//   //   return () => window.removeEventListener("scroll", handleScroll);
//   // }, []);
  
  
  
  
  
  
  
  
  
  
//   useEffect(() => {
//     const handleScroll = () => {
//       const section = document.querySelector(".userbox");
//       const circle = document.querySelector(".plus");

//       if (!section || !circle) return;

//       const rect = section.getBoundingClientRect();
//       const windowH = window.innerHeight;

//       let progress = (windowH - rect.top) / (windowH + rect.height);
//       progress = Math.max(0, Math.min(1, progress));



//       let moveY = 0;
//       let scale = 1;

//       // STEP 1: niche jaye
//       if (progress < 0.5) {
//         moveY = progress * 500;
//       }


//       else {
//         moveY = 400;

//         let zoomProgress = (progress - 0.7) / 0.3;
//         zoomProgress = Math.max(0, Math.min(1, zoomProgress));

//         scale = 1 + zoomProgress * 150;
//       }

//       circle.style.transform =
//         `translate(-50%, calc(-50% + ${moveY}px)) scale(${scale})`;
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);


//   }, []);




//   return (
//     <div className="zoom-wrapper">
//       <div className="zoom-circle">
//         <div className="plus">
//           <img src="/assets/img/plus.svg" width={100} />
//         </div>
//       </div>
//     </div>
//   );
// }