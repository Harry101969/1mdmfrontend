import { useState } from "react";
import { motion } from "framer-motion";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import VideoSection from "./components/VideoSection";
import RedBanner from "./components/RedBanner";
import ToolsSection from "./components/ToolsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";
import AboutUs from "./components/AboutUs";
import OurStory from "./components/OurStory";
import Pricing from "./components/Pricing";
import RedBanner2 from "./components/RedBanner2";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  };

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return (
          <motion.div
            key="about"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <AboutUs />
          </motion.div>
        );
      case "story":
        return (
          <motion.div
            key="story"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <OurStory />
          </motion.div>
        );
      case "pricing":
        return (
          <motion.div
            key="pricing"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Pricing />
          </motion.div>
        );
      default:
        return (
          <motion.div
            key="home"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <HeroSection />
            <VideoSection />
            <RedBanner />
            <ToolsSection />
            <TestimonialsSection />
            <RedBanner2 />
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
