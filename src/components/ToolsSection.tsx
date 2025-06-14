import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ToolsSection = () => {
  const [activeToolIndex, setActiveToolIndex] = useState(0);

  const tools = [
    {
      name: "Custom storefront",
      title: "Set up a store that showcases your brand",
      description:
        "Differentiate yourself from the competition with a full store dedicated to your products- no coding or design skills necessary!",
      mockup: {
        url: "1mdm.com/store/yourstore",
        content: (
          <div className="p-6">
            <div className="text-red-500 font-bold text-sm mb-4">1MDM</div>
            <div className="space-y-4">
              <motion.div
                className="bg-gradient-to-r from-red-100 to-red-50 h-32 w-full rounded flex items-center justify-center"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-red-600 font-semibold">
                  Your Brand Store
                </span>
              </motion.div>
              <div className="grid grid-cols-4 gap-3">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="bg-gray-200 h-20 rounded flex items-center justify-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                  >
                    <div
                      className={`w-8 h-8 rounded ${
                        i === 0
                          ? "bg-red-300"
                          : i === 1
                          ? "bg-blue-300"
                          : i === 2
                          ? "bg-green-300"
                          : "bg-purple-300"
                      }`}
                    ></div>
                  </motion.div>
                ))}
              </div>
              <div className="space-y-2">
                <motion.div
                  className="bg-gray-200 h-3 w-3/4 rounded"
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                ></motion.div>
                <motion.div
                  className="bg-gray-200 h-3 w-1/2 rounded"
                  initial={{ width: 0 }}
                  animate={{ width: "50%" }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                ></motion.div>
              </div>
            </div>
          </div>
        ),
      },
    },
    {
      name: "Advertising tools",
      title:
        "Increase exposure by up to 120% with a suite of smart advertising tools.",
      description:
        "Get your products placed in the right spots to be noticed by the exact audience you are targeting.",
      mockup: {
        url: "1mdm.com/advertising/dashboard",
        content: (
          <div className="p-2 bg-gray-50">
            <div className="text-red-500 font-bold text-sm mb-4">1MDM</div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-5 gap-3 mb-4">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="bg-gray-100 rounded p-3 text-center"
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                  >
                    <div className="text-xs text-gray-500 mb-1">Ad</div>
                    <div className="w-full h-12 bg-gray-200 rounded mb-2"></div>
                    <div className="bg-gray-300 h-2 w-full rounded"></div>
                  </motion.div>
                ))}
              </div>
              <div className="grid grid-cols-5 gap-3">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="bg-gray-100 rounded p-3 text-center"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: (i + 10) * 0.05, duration: 0.3 }}
                  >
                    <div className="text-xs text-gray-500 mb-1">Ad</div>
                    <div className="w-full h-12 bg-gray-200 rounded mb-2"></div>
                    <div className="bg-gray-300 h-2 w-full rounded"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ),
      },
    },
    {
      name: "Data and analytics",
      title:
        "Optimize your every move with in-depth data and customer insights",
      description:
        "Improve performance with dashboards detailing product exposure, click volume, spend, average cost, store visits, and more!",
      mockup: {
        url: "1mdm.com/analytics/overview",
        content: (
          <div className="p-6 bg-gray-50">
            <div className="text-red-500 font-bold text-sm mb-4">1MDM</div>
            <div className="space-y-4">
              {/* Top section with 200+ card and chart */}
              <div className="flex gap-4">
                <motion.div
                  className="bg-red-500 text-white rounded-lg p-4 flex-shrink-0"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="text-2xl font-bold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                  >
                    200+
                  </motion.div>
                  <div className="text-sm opacity-90">Analytical Data</div>
                </motion.div>
                <motion.div
                  className="bg-white rounded-lg p-4 flex-1"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="flex items-end justify-end h-16">
                    <svg className="w-full h-full" viewBox="0 0 100 40">
                      <motion.polyline
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="2"
                        points="0,35 20,30 40,20 60,15 80,10 100,5"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          delay: 0.5,
                          duration: 1.5,
                          ease: "easeInOut",
                        }}
                      />
                    </svg>
                  </div>
                </motion.div>
              </div>

              {/* Bottom section with charts */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  className="bg-white rounded-lg p-4"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="flex items-end space-x-1 h-16">
                    {[8, 12, 16, 10, 14, 12].map((height, i) => (
                      <motion.div
                        key={i}
                        className={`bg-blue-${
                          400 + (i % 3) * 100
                        } w-4 rounded-sm`}
                        style={{ height: `${height * 4}px` }}
                        initial={{ height: 0 }}
                        animate={{ height: `${height * 4}px` }}
                        transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                      />
                    ))}
                  </div>
                </motion.div>
                <motion.div
                  className="bg-white rounded-lg p-4"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <div className="flex items-end justify-end h-16">
                    <svg className="w-full h-full" viewBox="0 0 100 40">
                      <motion.polyline
                        fill="none"
                        stroke="#EF4444"
                        strokeWidth="2"
                        points="0,25 20,20 40,30 60,15 80,25 100,10"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          delay: 1,
                          duration: 1.5,
                          ease: "easeInOut",
                        }}
                      />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ),
      },
    },
    {
      name: "Customer support",
      title: "Know you're supported throughout your journey",
      description:
        "From onboarding help to online chats to local support during business hours and account optimization tips -- we're here for you",
      mockup: {
        url: "1mdm.com/support/center",
        content: (
          <div className="p-6 bg-gray-50">
            <div className="text-red-500 font-bold text-sm mb-4">1MDM</div>
            <div className="bg-white rounded-lg p-6 relative overflow-hidden">
              {/* Background elements */}
              <motion.div
                className="absolute top-4 right-4 w-16 h-16 bg-blue-100 rounded-full opacity-50"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute top-8 right-8 w-8 h-8 bg-blue-200 rounded-full opacity-30"
                animate={{
                  scale: [1, 1.2, 1],
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
              <motion.div
                className="absolute bottom-4 left-4 w-12 h-12 bg-cyan-100 rounded-full opacity-40"
                animate={{
                  scale: [1, 1.15, 1],
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />

              {/* Support representative illustration */}
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  {/* Person illustration */}
                  <motion.div
                    className="w-24 h-24 bg-red-500 rounded-full flex items-center justify-center relative"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                  >
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                    </div>
                    {/* Shirt/collar */}
                    <div className="absolute bottom-0 w-20 h-8 bg-blue-500 rounded-t-full"></div>
                  </motion.div>

                  {/* Chat bubbles */}
                  <motion.div
                    className="absolute -top-2 -left-8 bg-blue-100 rounded-lg p-2 text-xs"
                    initial={{ scale: 0, x: -20 }}
                    animate={{ scale: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                  >
                    <div className="w-4 h-1 bg-blue-300 rounded mb-1"></div>
                    <div className="w-6 h-1 bg-blue-300 rounded"></div>
                  </motion.div>
                  <motion.div
                    className="absolute -top-2 -right-8 bg-cyan-100 rounded-lg p-2 text-xs"
                    initial={{ scale: 0, x: 20 }}
                    animate={{ scale: 1, x: 0 }}
                    transition={{ delay: 1, duration: 0.4 }}
                  >
                    <div className="w-4 h-1 bg-cyan-300 rounded mb-1"></div>
                    <div className="w-6 h-1 bg-cyan-300 rounded"></div>
                  </motion.div>
                </div>
              </div>

              {/* Coffee cup */}
              <motion.div
                className="absolute bottom-6 left-6 w-8 h-10 bg-blue-600 rounded-b-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <div className="w-6 h-6 bg-blue-500 rounded-full mx-auto mt-1"></div>
                <div className="absolute -right-1 top-2 w-2 h-4 border-2 border-blue-600 rounded-r-lg"></div>
              </motion.div>

              {/* Decorative lines */}
              <div className="absolute top-6 right-16 space-y-1">
                {[8, 6, 10].map((width, i) => (
                  <motion.div
                    key={i}
                    className={`w-${width} h-1 bg-gray-200 rounded`}
                    initial={{ width: 0 }}
                    animate={{ width: `${width * 4}px` }}
                    transition={{ delay: 1.4 + i * 0.1, duration: 0.4 }}
                  />
                ))}
              </div>
            </div>
          </div>
        ),
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Grow your business with a suite of tools built for you
          </h2>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left sidebar with tools */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="space-y-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  onClick={() => setActiveToolIndex(index)}
                  className={`flex items-center space-x-4 p-4 rounded-lg transition-all duration-300 cursor-pointer ${
                    activeToolIndex === index
                      ? "bg-white shadow-lg border-l-4 border-red-500 translate-x-2"
                      : "hover:bg-white hover:shadow-md hover:translate-x-1"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`w-1 h-8 rounded transition-all duration-300 ${
                      activeToolIndex === index
                        ? "bg-red-500"
                        : "bg-transparent"
                    }`}
                    animate={{
                      scaleY: activeToolIndex === index ? 1 : 0,
                      opacity: activeToolIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <div
                    className={`font-semibold transition-colors duration-300 ${
                      activeToolIndex === index
                        ? "text-gray-900"
                        : "text-gray-600"
                    }`}
                  >
                    {tool.name}
                  </div>
                </motion.div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeToolIndex}
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-bold text-gray-900">
                  {tools[activeToolIndex].title}
                </h3>
                <p className="text-gray-700 text-lg">
                  {tools[activeToolIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right side with mockup */}
          <motion.div className="relative" variants={itemVariants}>
            <motion.div
              className="bg-gray-800 rounded-lg p-6 shadow-xl"
              whileHover={{
                scale: 1.02,
                rotateY: 2,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Browser mockup */}
              <div className="bg-white rounded-lg overflow-hidden">
                {/* Browser header */}
                <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <motion.div
                      className="w-3 h-3 bg-red-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div
                      className="w-3 h-3 bg-yellow-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                    />
                    <motion.div
                      className="w-3 h-3 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                    />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded px-3 py-1 text-sm text-gray-600 border">
                      {tools[activeToolIndex].mockup.url}
                    </div>
                  </div>
                </div>

                {/* Store content mockup */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeToolIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  >
                    {tools[activeToolIndex].mockup.content}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Floating indicator */}
            <motion.div
              className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;
