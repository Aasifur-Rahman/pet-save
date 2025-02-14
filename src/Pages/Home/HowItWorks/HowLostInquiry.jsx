import { motion } from "framer-motion";
import lostinquiryImg from "../../../assets/Images/Lost inquiry.png";
const HowLostInquiry = () => {
  return (
    <div className="bg-base-200">
      <div className="max-w-screen-lg mx-auto lg:flex md:flex justify-center items-center gap-10 mt-6 mb-6">
        <div className="w-full">
          <h5 className="text-2xl font-semibold text-center mb-10  xs:mt-10">
            Search lost pet
          </h5>
          <ul className="timeline timeline-vertical">
            <li>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="timeline-start timeline-box "
              >
                Create account
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, scale: 1 }}
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
              <hr />
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, scale: 1 }}
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
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 2 }}
                className="timeline-end timeline-box"
              >
                Login
              </motion.div>
              <hr />
            </li>
            <li>
              <hr className="py-4" />
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 2 }}
                className="timeline-start timeline-box "
              >
                Lost Pet Inquiry
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
              <hr />
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
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 2 }}
                className="timeline-end timeline-box"
              >
                Add Information of The Pet
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
                className="timeline-start timeline-box "
              >
                Await for Approval
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
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 2 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full flex justify-center"
        >
          <img className="w-3/4  " src={lostinquiryImg} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default HowLostInquiry;
