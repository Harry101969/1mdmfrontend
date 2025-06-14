// import AnimatedCounter from "./AnimatedCounter";

// const HeroSection = () => {
//   return (
//     <section className="bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24 relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute top-20 left-0 w-32 h-32 bg-red-200 rounded-full opacity-20 blur-3xl"></div>
//       <div className="absolute bottom-20 right-0 w-40 h-40 bg-red-300 rounded-full opacity-20 blur-3xl"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left content */}
//           <div className="space-y-8">
//             <div>
//               <p className="text-red-500 font-medium mb-4">Sell on 1mdm.com</p>
//               <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//                 Reach millions of B2B buyers globally
//               </h1>
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4">
//               <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
//                 Start selling
//               </button>
//               <button className="border-2 border-red-500 text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
//                 Chat with consultant
//               </button>
//             </div>
//           </div>

//           {/* Right content with animated orbital graphic and stats */}
//           <div className="relative flex justify-center">
//             {/* Animated orbital system - centered */}
//             <div className="relative w-96 h-96 flex items-center justify-center">
//               {/* Orbital rings */}
//               <div className="absolute w-80 h-80 border-2 border-red-200 rounded-full opacity-60 animate-spin-slow"></div>
//               <div className="absolute w-64 h-64 border-2 border-red-300 rounded-full opacity-40 animate-spin-reverse"></div>
//               <div className="absolute w-48 h-48 border-2 border-red-400 rounded-full opacity-60 animate-spin-slow"></div>

//               {/* Dotted orbital paths */}
//               <div className="absolute w-96 h-96 border-2 border-dotted border-red-200 rounded-full opacity-40 animate-spin-very-slow"></div>

//               {/* Center element */}
//               <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center z-1">
//                 <div className="w-8 h-8 bg-white rounded-full"></div>
//               </div>

//               {/* Animated orbital planets */}
//               <div className="absolute w-80 h-80 animate-spin-reverse">
//                 <div className="absolute w-4 h-4 bg-red-500 rounded-full -top-2 left-1/2 transform -translate-x-1/2"></div>
//               </div>
//               <div className="absolute w-64 h-64 animate-spin-reverse">
//                 <div className="absolute w-3 h-3 bg-red-400 rounded-full -bottom-1.5 right-8"></div>
//               </div>
//               <div className="absolute w-48 h-48 animate-spin-slow">
//                 <div className="absolute w-3 h-3 bg-red-600 rounded-full top-2 -right-1.5"></div>
//               </div>
//             </div>

//             {/* Statistics - positioned around the orbital system */}
//             <div className="absolute -right-8 top-4 space-y-6">
//               <div className="bg-white p-6 rounded-lg border border-gray-100">
//                 <div className="text-3xl font-bold text-gray-900">
//                   <AnimatedCounter end={26000000} suffix="" />
//                 </div>
//                 <div className="text-gray-600 text-sm">
//                   active buyers globally
//                 </div>
//               </div>

//               <div className="bg-white p-6 rounded-lg border border-gray-100">
//                 <div className="text-3xl font-bold text-gray-900">
//                   <AnimatedCounter end={400000} suffix="" />
//                 </div>
//                 <div className="text-gray-600 text-sm">
//                   product inquiries daily
//                 </div>
//               </div>

//               <div className="bg-white p-6 rounded-lg border border-gray-100">
//                 <div className="text-3xl font-bold text-gray-900">
//                   <AnimatedCounter end={200} suffix="" />
//                 </div>
//                 <div className="text-gray-600 text-sm">
//                   countries and regions represented
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
// import { motion } from "framer-motion";
// import AnimatedCounter from "./AnimatedCounter";

// const HeroSection = () => {
//   return (
//     <section className="bg-gradient-to-br from-red-50 via-white to-red-50 py-16 lg:py-24 relative overflow-hidden min-h-screen flex items-center">
//       {/* Background decorative blobs */}
//       <motion.div
//         className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-200 to-red-300 rounded-full opacity-30 blur-3xl"
//         animate={{
//           scale: [1, 1.2, 1],
//           opacity: [0.3, 0.5, 0.3],
//         }}
//         transition={{
//           duration: 8,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
//         <div className="grid lg:grid-cols-3 gap-8 items-center">
//           {/* Left content */}
//           <motion.div
//             className="space-y-8 lg:pr-8"
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
//             <p className="text-red-500 font-medium mb-4">Sell on 1mdm.com</p>
//             <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
//               Reach millions of B2B buyers globally
//             </h1>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
//                 Start selling
//               </button>
//               <button className="border-2 border-red-500 text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
//                 Chat with consultant
//               </button>
//             </div>
//           </motion.div>

//           {/* Center - Globe with orbital animation */}
//           <div className="flex justify-center items-center relative">
//             <motion.div
//               className="relative w-80 h-80 lg:w-96 lg:h-96"
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.8, duration: 1 }}
//             >
//               {/* Main globe */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-full shadow-2xl"
//                 transition={{
//                   duration: 20,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//               >
//                 {/* Globe pattern overlay */}
//                 <div className="absolute inset-0 rounded-full opacity-30">
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent rounded-full transform rotate-45"></div>
//                   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent rounded-full transform -rotate-45"></div>
//                 </div>

//                 {/* Continents */}
//                 <div className="absolute top-1/4 left-1/3 w-16 h-12 bg-gray-500 rounded-full opacity-40 transform rotate-12"></div>
//                 <div className="absolute top-1/2 right-1/4 w-12 h-8 bg-gray-500 rounded-full opacity-40 transform -rotate-12"></div>
//                 <div className="absolute bottom-1/3 left-1/4 w-10 h-6 bg-gray-500 rounded-full opacity-40"></div>
//               </motion.div>

//               {/* Orbital rings */}
//               <motion.div
//                 className="absolute inset-0 border-2 border-red-300 rounded-full opacity-60"
//                 animate={{ rotate: 360 }}
//                 transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//                 style={{
//                   width: "120%",
//                   height: "120%",
//                   top: "-10%",
//                   left: "-10%",
//                 }}
//               />
//               <motion.div
//                 className="absolute inset-0 border-2 border-dotted border-red-400 rounded-full opacity-40"
//                 animate={{ rotate: -360 }}
//                 transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//                 style={{
//                   width: "140%",
//                   height: "140%",
//                   top: "-20%",
//                   left: "-20%",
//                 }}
//               />

//               {/* Orbital dots */}
//               <motion.div
//                 className="absolute w-3 h-3 bg-red-500 rounded-full"
//                 animate={{
//                   rotate: 360,
//                 }}
//                 transition={{
//                   duration: 15,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 style={{
//                   top: "-10%",
//                   left: "50%",
//                   transformOrigin: "0 250px",
//                 }}
//               />
//               <motion.div
//                 className="absolute w-2 h-2 bg-red-400 rounded-full"
//                 animate={{
//                   rotate: -360,
//                 }}
//                 transition={{
//                   duration: 25,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 style={{
//                   top: "-20%",
//                   left: "50%",
//                   transformOrigin: "0 300px",
//                 }}
//               />
//             </motion.div>
//           </div>

//           {/* Right side - Statistics */}
//           <motion.div
//             className="space-y-6 lg:pl-8"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 1, duration: 0.8 }}
//           >
//             {[
//               { end: 26000000, label: "active buyers globally", delay: 1.2 },
//               { end: 400000, label: "product inquiries daily", delay: 1.4 },
//               {
//                 end: 200,
//                 label: "countries and regions represented",
//                 delay: 1.6,
//               },
//             ].map((stat, i) => (
//               <motion.div
//                 key={i}
//                 className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
//                 whileHover={{ scale: 1.05, y: -5 }}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: stat.delay, duration: 0.6 }}
//               >
//                 <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
//                   <AnimatedCounter end={stat.end} suffix="" />
//                 </div>
//                 <div className="text-gray-600 text-sm lg:text-base">
//                   {stat.label}
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
import AnimatedCounter from "./AnimatedCounter";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 lg:py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-0 w-32 h-32 bg-red-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-40 h-40 bg-red-300 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div>
              <p className="text-red-500 font-medium mb-4">Sell on 1mdm.com</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Reach millions of B2B buyers globally
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors">
                Start selling
              </button>
              <button className="border-2 border-red-500 text-red-500 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors">
                Chat with consultant
              </button>
            </div>
          </div>

          {/* Right content with globe and stats */}
          <div className="relative flex justify-center items-center z-10">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 z-10">
              {/* Globe */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-full shadow-2xl overflow-hidden z-10">
                {/* Globe lines */}
                <div className="absolute inset-0 rounded-full opacity-30 rotate-45 z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent rounded-full -rotate-90"></div>
                </div>

                {/* Fake continents */}
                <div className="absolute top-1/4 left-1/3 w-16 h-12 bg-gray-500 rounded-full opacity-40 rotate-12 z-10"></div>
                <div className="absolute top-1/2 right-1/4 w-12 h-8 bg-gray-500 rounded-full opacity-40 -rotate-12 z-10"></div>
                <div className="absolute bottom-1/3 left-1/4 w-10 h-6 bg-gray-500 rounded-full opacity-40 z-10"></div>
              </div>

              {/* Orbital Rings */}
              <div
                className="absolute rounded-full border-2 border-red-300 opacity-60 orbit-slow z-10"
                style={{
                  width: "120%",
                  height: "120%",
                  top: "-10%",
                  left: "-10%",
                }}
              />
              <div
                className="absolute rounded-full border-2 border-dotted border-red-400 opacity-40 orbit-reverse z-10"
                style={{
                  width: "140%",
                  height: "140%",
                  top: "-20%",
                  left: "-20%",
                }}
              />

              {/* Orbiting Dots */}
              <div className="absolute w-full h-full animate-spin-slow z-10">
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
              </div>
              <div className="absolute w-full h-full animate-spin-reverse z-10">
                <div className="absolute -bottom-8 left-1/3 transform -translate-x-1/2 w-3 h-3 bg-red-400 rounded-full"></div>
              </div>
              <div className="absolute w-full h-full animate-spin-slower z-10">
                <div className="absolute top-1 right-0 transform -translate-y-1/2 w-3 h-3 bg-red-600 rounded-full"></div>
              </div>
            </div>

            {/* Statistics - positioned near the globe */}
            <div className="absolute -right-8 top-4 space-y-6 z-20">
              <div className=" rounded-lg p-5">
                <div className="text-3xl font-bold text-gray-900">
                  <AnimatedCounter end={26000000} suffix="" />
                </div>
                <div className="text-gray-600 text-sm">
                  active buyers globally
                </div>
              </div>

              <div className=" p-6 rounded-lg ">
                <div className="text-3xl font-bold text-gray-900">
                  <AnimatedCounter end={400000} suffix="" />
                </div>
                <div className="text-gray-600 text-sm">
                  product inquiries daily
                </div>
              </div>

              <div className="  rounded-lg ">
                <div className="text-3xl font-bold text-gray-900">
                  <AnimatedCounter end={200} suffix="" />
                </div>
                <div className="text-gray-600 text-sm">
                  countries and regions represented
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
