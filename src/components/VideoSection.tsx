import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const videoVariants = {
    hidden: { opacity: 0, scale: 0.9, rotateY: -15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
            1mdm.com is a leading ecommerce platform that helps SMEs go global
          </h2>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Video player */}
          <motion.div className="relative" variants={videoVariants}>
            <motion.div
              className="bg-black rounded-lg overflow-hidden aspect-video relative shadow-2xl"
              whileHover={{ scale: 1.02, rotateY: 2 }}
              transition={{ duration: 0.3 }}
            >
              {!isPlaying ? (
                <>
                  {/* YouTube-style thumbnail */}
                  <img
                    src="https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="SIENA Explorer Lift Installation"
                    className="w-full h-full object-cover"
                  />

                  {/* YouTube-style overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-30">
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.button
                        onClick={handlePlayClick}
                        className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                          boxShadow: [
                            "0 0 0 0 rgba(239, 68, 68, 0.7)",
                            "0 0 0 20px rgba(239, 68, 68, 0)",
                            "0 0 0 0 rgba(239, 68, 68, 0)",
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                      >
                        <Play
                          className="text-white ml-1"
                          size={32}
                          fill="white"
                        />
                      </motion.button>
                    </div>

                    {/* YouTube-style bottom bar */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                    >
                      <div className="text-white">
                        <div className="text-lg font-semibold mb-1">
                          SIENA™ Explorer Lift Installation
                        </div>
                        <div className="text-sm opacity-90">
                          1MDM Medical Equipment
                        </div>
                      </div>
                    </motion.div>

                    {/* Duration badge */}
                    <motion.div
                      className="absolute bottom-4 right-4 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7, duration: 0.4 }}
                    >
                      4:32
                    </motion.div>
                  </div>
                </>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/TN7iJyc5Uks?autoplay=1"
                  title="SIENA Explorer Lift Installation"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div className="space-y-8" variants={contentVariants}>
            <div className="space-y-6 text-lg text-gray-700">
              <motion.p variants={textItemVariants}>
                Connect with millions of business buyers from around the world.
              </motion.p>
              <motion.p variants={textItemVariants}>
                Get the tools and know-how to build a successful ecommerce
                presence for your business.
              </motion.p>
              <motion.p variants={textItemVariants}>
                Pocket more from each sale, with take rates as low as 0% in some
                cases.
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
