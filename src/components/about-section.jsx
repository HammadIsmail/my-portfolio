import { Card, CardBody, Avatar, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ToolsSection from "./Tool-Section";

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

const skills = [
  { name: "React", icon: "logos:react" },
  { name: "Next.js", icon: "logos:nextjs-icon" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
  { name: "MongoDB", icon: "logos:mongodb-icon" },
  { name: "PostgreSQL", icon: "logos:postgresql" },
  { name: "SQLite", icon: "devicon:sqlite" },         // devicon or simple-icons has this
  { name: "MS SQL", icon: "devicon:microsoftsqlserver" } // Or a custom icon you prefer
];


  const experiences = [
 {
  role: "Full-Stack Intern", 
  company: "Hive Technologies", 
  location: "Pakistan",
  workType: "Onsite",
  period: "2025 - 3 Months",
  description: "Contributed to live production applications serving real users, developing features using React, Next.js, and Node.js with Express. Gained hands-on experience in full-stack development within an enterprise environment, collaborating on client-facing projects and learning industry best practices."
},
   {
  role: "Junior Full Stack Developer", 
  company: "Hive Technologies", 
  location: "Pakistan",
  workType: "Hybrid",
  period: "2025 - 3 Months", 
  description: "Promoted from intern to full-time developer, taking ownership of feature development and maintenance across multiple client projects. Built scalable web applications using React, Next.js, and Node.js/Express, while collaborating with cross-functional teams to deliver high-quality solutions on schedule."
},
{
  role: "Junior Full Stack Developer", 
  company: "Infoquestpro", 
  location: "Poland",
  workType: "Remote",
  period: "2025 - Present",
  description: "Transitioned to advanced development role working with microservices architecture and distributed systems. Building and maintaining independent services using modern tech stack, implementing inter-service communication, and contributing to large-scale application ecosystems."
}
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background via-content1/50 to-content1">
      <div className="container max-w-5xl px-4 mx-auto">
        <motion.div 
          ref={ref}
          className="flex flex-col gap-16"
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={containerVariants}
        >
          <motion.div 
            className="flex flex-col items-center text-center"
            variants={itemVariants}
          >
            <motion.div
              className="relative inline-block mb-4"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold relative z-10">About Me</h2>
              <motion.div 
                className="absolute -bottom-2 left-0 h-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg -z-10"
                initial={{ width: 0 }}
                animate={inView ? { width: "100%" } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.div>
            <motion.p 
              className="max-w-2xl text-wrap text-justify text-default-600"
              variants={itemVariants}
            >
             {`

Hi, I'm Hammad, a passionate Computer Science student at UET Lahore (Batch 2023-2027), currently in my 4th semester. With hands-on experience in full-stack web development, I've worked extensively with the MERN stack (MongoDB, Express, React, Node.js). My expertise includes developing dynamic and user-friendly applications, and I'm always keen on learning and adapting new technologies.

I've also dived into peer-to-peer file-sharing using WebRTC, AI projects, and network-based applications. My projects demonstrate my versatility, from creating a Library Management System to an AI-powered audio interview simulator and social media platforms.

As a dedicated learner, I've built a strong foundation in both backend and frontend technologies, with a special focus on developing seamless user experiences and secure, scalable applications.


`}
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-6"
            >
              <Card className="overflow-hidden border-none  rounded-2xl shadow-xl">
                <CardBody className="p-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
                    <div className="flex flex-col items-center p-6 text-center relative z-10">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="relative"
                      >
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-md opacity-70" />
                        <Avatar
                          src="https://res.cloudinary.com/dbbk9wg2i/image/upload/v1753952043/pic_ehewfy.png"
                          className="w-24 h-24 mb-4 z-10 relative border-4 border-white"
                        />
                      </motion.div>
                      <motion.h3 
                        className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
                        variants={itemVariants}
                      >
                        Hammad
                      </motion.h3>
                      <motion.p 
                        className="text-default-600"
                        variants={itemVariants}
                      >
                        Full-Stack Developer
                      </motion.p>
                      
                      <Divider className="my-4" />
                      
                      <motion.div 
                        className="flex flex-col w-full gap-2"
                        variants={containerVariants}
                      >
                        {[
                          { icon: "lucide:map-pin", text: "Burewala,Punjab,Pakistan", color: "text-pink-500" },
                          { icon: "lucide:mail", text: "ranahammadismail@gmail.com", color: "text-purple-500" },
                          { icon: "lucide:briefcase", text: "Available for freelance", color: "text-blue-500" },
                        ].map((item, index) => (
                          <motion.div 
                            key={index}
                            className="flex items-center gap-2"
                            variants={itemVariants}
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Icon icon={item.icon} className={item.color} />
                            <span>{item.text}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <motion.div
                variants={itemVariants}
                className="mt-4"
              >
                <Card className="border-none shadow-xl overflow-hidden">
                  <CardBody>
                    <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 to-orange-500">Professional Experience</h3>
                    <div className="flex flex-col gap-4">
                      {experiences.map((exp, index) => (
                        <motion.div 
                          key={index}
                          className="relative pl-6 border-l-2 border-default-200 pb-4 last:pb-0"
                          variants={itemVariants}
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
                          <div className="flex flex-col">
                            <h4 className="font-medium">{exp.role}</h4>
                            <div className="flex items-center gap-2 text-sm text-default-500">
                              <span>{exp.company}</span>
                              <span>•</span>
                              <span>{exp.period}</span>
                            </div>
                            <p className="mt-1 text-sm text-justify text-default-600">{exp.description}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardBody>
                </Card>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex flex-col gap-6"
              variants={itemVariants}
            >
              <motion.div
                className="relative inline-block"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold text-center relative z-10">My Skills</h3>
                <motion.div 
                  className="absolute -bottom-2 left-0 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg -z-10"
                  initial={{ width: 0 }}
                  animate={inView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </motion.div>
              <motion.div 
                className="grid grid-cols-3 gap-4"
                variants={containerVariants}
              >
                {skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="p-4 rounded-2xl text-center border-none overflow-hidden shadow-lg">
                      <CardBody className="flex flex-col items-center gap-2 p-0">
                        <div className="p-2 rounded-full bg-white/90 shadow-inner">
                          <Icon icon={skill.icon} width={32} height={32} />
                        </div>
                        <span className="text-sm font-medium">{skill.name}</span>
                      </CardBody>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>

                <ToolsSection/>

              {/* <motion.div
                variants={itemVariants}
                className="mt-4"
              >
                <Card className="border-none shadow-xl overflow-hidden bg-gradient-to-br from-purple-500/5 to-pink-500/5">
                  <CardBody>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                        Languages
                      </h3>
                      <div className="flex flex-col gap-3 mt-2">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">English</span>
                            <span className="text-sm text-default-500">Native</span>
                          </div>
                          <div className="h-2 bg-default-200 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                              initial={{ width: 0 }}
                              animate={inView ? { width: "100%" } : { width: 0 }}
                              transition={{ duration: 1, delay: 0.5 }}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">Spanish</span>
                            <span className="text-sm text-default-500">Fluent</span>
                          </div>
                          <div className="h-2 bg-default-200 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                              initial={{ width: 0 }}
                              animate={inView ? { width: "85%" } : { width: 0 }}
                              transition={{ duration: 1, delay: 0.6 }}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm">French</span>
                            <span className="text-sm text-default-500">Intermediate</span>
                          </div>
                          <div className="h-2 bg-default-200 rounded-full overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                              initial={{ width: 0 }}
                              animate={inView ? { width: "60%" } : { width: 0 }}
                              transition={{ duration: 1, delay: 0.7 }}
                            /> 
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </motion.div>*/}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}