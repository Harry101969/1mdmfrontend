import { motion } from "framer-motion";

const TimelineSidebar = () => {
  const timelineItems = [
    {
      label: "Conceptualized",
      value: "2019",
    },
    {
      label: "Founder",
      value: "Balolochander",
    },
    {
      label: "Launch",
      value: "Public beta Jan 2022",
    },
  ];

  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, staggerChildren: 0.2 }}
      viewport={{ once: true }}
    >
      {timelineItems.map((item, index) => (
        <motion.div
          key={index}
          className="space-y-1"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="text-sm text-gray-600 font-medium">{item.label}</div>
          <div className="text-sm text-gray-900 font-semibold">
            {item.value}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TimelineSidebar;
