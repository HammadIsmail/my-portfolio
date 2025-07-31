import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const tools = [
  { name: "Git", icon: "logos:git-icon", bg: "bg-white" },
  { name: "GitHub", icon: "mdi:github", bg: "bg-white text-gray-900" },
  { name: "Postman", icon: "logos:postman-icon", bg: "bg-orange-50 text-orange-700" },
  { name: "Docker", icon: "logos:docker-icon", bg: "bg-blue-50 text-blue-700" },
  { name: "Ollama", icon: "simple-icons:ollama", bg: "bg-purple-50 text-purple-700" },
  { name: "Prisma", icon: "logos:prisma", bg: "bg-gradient-to-br from-gray-50 to-white text-gray-800" }
];


const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 200 }
  }
};

const ToolsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="mt-8"
    >
      <motion.div
        className="relative inline-block mb-6"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold text-center relative z-10">
          Tools & Technologies
        </h3>
        <motion.div
          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full -z-10"
          initial={{ width: 0 }}
          animate={inView ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        variants={containerVariants}
      >
        {tools.map((tool) => (
          <motion.div
            key={tool.name}
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)"
            }}
          >
            <Card className={`p-4 rounded-2xl text-center border-none overflow-hidden shadow-md ${tool.bg}`}>
              <CardBody className="flex flex-col items-center gap-2 p-0">
                <div className="p-2 rounded-full bg-white/90 shadow-inner">
                  <Icon icon={tool.icon} width={32} height={32} />
                </div>
                <span className="text-sm font-medium">{tool.name}</span>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ToolsSection;
