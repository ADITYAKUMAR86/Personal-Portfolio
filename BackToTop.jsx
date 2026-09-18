// // import React from 'react'
// // import { FiArrowLeft } from 'react-icons/fi'

// // const BackToTop = () => {
// //   return (
// //     <>
// //         <div className="topButton">
// //                 <FiArrowLeft id='arrow' />
// //                 <button id='back' onClick={() => document.getElementById("header").scrollIntoView({behavior : "smooth"})}>Back to Top</button>
// //         </div>
// //     </>
// //   )
// // }

// // export default BackToTop

// import { useEffect, useState } from "react";

// const BackToTop = () => {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShow(window.scrollY > 300);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//    show && (
//         <div className="topButton">
//             <button id="back" onClick={() =>
//         document.getElementById("home").scrollIntoView({ behavior: "smooth" })
//       }>
//         ↑ Top
//       </button>
//         </div>
//     )
//   );
// };

// export default BackToTop;