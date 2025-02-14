import { motion } from "framer-motion";

import petAdoptionImg from "../../../assets/Images/pet_adoption4S.png";
const HowAdoptionWorks = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="lg:flex md:flex justify-center items-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 2 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-1/2"
        >
          <img
            className="w-full  hover:scale-105 transition-all ease-in-out rounded-xl hover:rounded-xl"
            src={petAdoptionImg}
            alt=""
          />
        </motion.div>
        <div className="lg:w-1/2 md:1/2  ">
          <motion.h5
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-2xl font-semibold mt-10 mb-5 text-center  "
          >
            Adoption
          </motion.h5>
          <ul className="timeline timeline-vertical">
            <li>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 2 }}
                viewport={{ once: true }}
                className="timeline-start timeline-box"
              >
                Find Your Pet
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="timeline-middle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>
              <hr />
            </li>

            <li>
              <hr className="py-10" />
              <motion.div
                initial={{ x: 200, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 2 }}
                viewport={{ once: true }}
                className="timeline-end timeline-box "
              >
                Know Your Pet
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="timeline-middle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10
                     18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>
              <hr />
            </li>

            <li>
              <hr />
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 2 }}
                className="timeline-start timeline-box"
              >
                Take Your Pet Home
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="timeline-middle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </motion.div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowAdoptionWorks;
