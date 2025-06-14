import { motion } from "framer-motion";
import TimelineSidebar from "./TimelineSidebar";

const OurStory = () => {
  const storyParagraphs = [
    "1MDM began as a concept idea in 2019 as a platform for access to medical devices & machines, the idea was to make access to information easy & all in one singular place.",
    "The initial plan began as purely a platform for listing various medical machines across the world, starting with India as the base of this information. However something unexpected struck in 2020 with a global pandemic and the project had been shelved as the focus shifted to building & focusing on existing projects.",
    "The global pandemic had taken a serious toll & had pushed the supply chain to its maximum capacity, this phase was followed by sharp hike in prices of oxygen concentrators and people hoarding or price hiking certain critical and life saving devices during the phase. The project was an obvious solution at the time to help people who were in need of such supplies.",
    "After seeing the heavy shortage and strain on the supply chain, 1MDM was launched again but focused only on oxygen concentrators providing reliable information to those in need of such suppliers. We had made sure to provide only manufacturers that weren't taking advantage of the price hike to unfairly push such products in the market. We had began to slowly expand the product information to include other critical & life saving devices across the sector and began offering the information from our platform as a singular source of the information.",
    "1mdm.com began expanding it's product catalogue to showcase over 100,000 products over the course of the year and became a place for the global market for medical devices. Our vision is to become the singular marketplace across the world to access and find reliable information on life saving devices.",
    "The relentless search for better access to medical devices continues to be at the core of everything we do. Today, 1MDM connects hundreds of products used by the medical professionals across the globe. Our passion for building technology for medical devices market drives all core decisions.",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img
            src="https://img.mlo-online.com/files/base/ebm/mlo/image/2023/03/dreamstime_xxl_105848572.641ca43587700.png?auto=format,compress&fit=fill&fill=blur&w=1200&h=630"
            alt="Medical laboratory"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-8">
            {/* Timeline Sidebar */}
            <div className="col-span-12 lg:col-span-2">
              <TimelineSidebar />
            </div>

            {/* Main Content */}
            <div className="col-span-12 lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                  Building access to crucial life saving devices
                </h1>
              </motion.div>

              <div className="space-y-6">
                {storyParagraphs.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    className="text-gray-700 leading-relaxed text-base lg:text-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
