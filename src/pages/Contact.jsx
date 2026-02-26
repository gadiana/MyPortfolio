import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import ContactCard from "../components/ContactPageComponents/ContactCard";

const Contact = ({ isDarkMode }) => {
    const contentVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.15,
        duration: 0.35,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };
  
  return (
    <>
      <Navigation isDarkMode={isDarkMode} />
      <div className="flex flex-col items-center justify-center min-h-screen p-8 pt-24">
        <motion.h1
          className="text-5xl font-bold mb-8"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Contact Me
        </motion.h1>

        <motion.div
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl w-full"
        >
          <motion.p className="text-lg text-center mb-6 opacity-90">
            For More Information you can reach me out using the following contact details.
          </motion.p>

          <div>
            <ContactCard isDarkMode={isDarkMode} />
          </div>

        </motion.div>
      </div>
    </>
  );
};

export default Contact;
