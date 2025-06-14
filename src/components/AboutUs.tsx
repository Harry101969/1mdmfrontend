import { motion } from "framer-motion";

const AboutUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our mission is to make life saving devices accessible & affordable
            worldwide.
          </motion.h1>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Article Card */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl overflow-hidden h-96">
              <img
                src="https://1mdm.com/about/assets/image-1.jpg"
                alt="Medical technology"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <motion.div
                className="absolute bottom-8 left-8 text-white max-w-md"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="text-sm text-blue-300 mb-2 uppercase tracking-wide">
                  TECH MAGAZINE
                </div>
                <h3 className="text-2xl font-bold mb-3 leading-tight">
                  Deep dive into the engineering & technology behind life saving
                  medical devices from 1MDM.
                </h3>
                <motion.div
                  className="text-sm text-blue-300 cursor-pointer hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Learn more →
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Products Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-12 overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-96 h-96 opacity-10">
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-full transform translate-x-32 -translate-y-32"></div>
              </div>

              <div className="relative grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="text-sm text-gray-600 uppercase tracking-wide font-medium">
                    OUR PRODUCTS
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                    Hi, how we can help you?
                  </h2>
                  <motion.p
                    className="text-red-500 font-medium text-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Tell us what you need
                  </motion.p>
                </motion.div>

                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-white rounded-3xl p-8 shadow-lg">
                    <div className="flex items-center justify-center h-64">
                      {/* Medical equipment illustration */}
                      <div className="relative">
                        <motion.div
                          className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center"
                          animate={{
                            rotate: [0, 5, -5, 0],
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                            <div className="w-8 h-8 bg-blue-500 rounded-lg"></div>
                          </div>
                        </motion.div>

                        {/* Floating elements */}
                        <motion.div
                          className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full"
                          animate={{
                            y: [0, -10, 0],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        ></motion.div>

                        <motion.div
                          className="absolute -bottom-2 -left-6 w-6 h-6 bg-yellow-400 rounded-full"
                          animate={{
                            x: [0, 10, 0],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                          }}
                        ></motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Info Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Careers Card */}
            <motion.div
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Careers at 1MDM"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  Careers at 1MDM
                </h3>
                <motion.p
                  className="text-red-500 font-medium cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  Join Us
                </motion.p>
              </div>
            </motion.div>

            {/* Sell at 1MDM Card */}
            <motion.div
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="h-40 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center relative overflow-hidden">
                <motion.div
                  className="text-white text-3xl font-bold"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  1MDM
                </motion.div>
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full"></div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  Sell at 1MDM
                </h3>
                <motion.p
                  className="text-red-500 font-medium cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  Start selling
                </motion.p>
              </div>
            </motion.div>

            {/* Our Story Card */}
            <motion.div
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="h-40 bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center relative overflow-hidden">
                {/* Road illustration */}
                <div className="relative">
                  <motion.div
                    className="w-20 h-2 bg-gray-800 rounded-full relative"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute top-0 left-0 w-full h-full bg-white/30 rounded-full"></div>
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/50 transform -translate-y-1/2"></div>
                  </motion.div>

                  {/* Location pins */}
                  <motion.div
                    className="absolute -top-4 left-2 w-3 h-3 bg-green-400 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  ></motion.div>

                  <motion.div
                    className="absolute -top-4 right-2 w-3 h-3 bg-yellow-400 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  ></motion.div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  From humble beginnings
                </h3>
                <motion.p
                  className="text-red-500 font-medium cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  Our Story
                </motion.p>
              </div>
            </motion.div>

            {/* Contact Us Card */}
            <motion.div
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7089007/pexels-photo-7089007.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Contact Us"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2 text-lg">
                  Contact Us
                </h3>
                <motion.p
                  className="text-red-500 font-medium cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  Say Hello!
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
