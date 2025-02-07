import HowAdoptionWorks from "./HowAdoptionWorks";
import HowLostInquiry from "./HowLostInquiry";
import { motion } from "framer-motion";

const HowItWorks = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 100 }}
      transition={{ duration: 1 }}
      className="mt-40   mx-auto"
    >
      <h1 className="text-4xl font-bold mb-14 text-center">How It Works</h1>
      <div className="grid grid-cols-1 gap-20 ">
        <HowAdoptionWorks></HowAdoptionWorks>
        <HowLostInquiry></HowLostInquiry>
      </div>
    </motion.div>
  );
};

export default HowItWorks;
