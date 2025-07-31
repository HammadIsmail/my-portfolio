import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export function HeroSection() {
  function downloadFile() {
    // Create a link for downloading the file
    const link = document.createElement('a');
    link.href = '/CV.pdf'; // Path to your PDF
    link.download = 'My_CV.pdf'; // Name of the file when downloaded
  
    // Trigger click event on the link
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-screen px-4 py-20 overflow-hidden bg-gradient-to-br from-purple-500/10 via-background to-blue-500/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-30" />
        
        {/* Floating colored shapes */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-3xl"
          animate={{ 
            x: [0, 30, 0], 
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl"
          animate={{ 
            x: [0, -40, 0], 
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 18,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div 
          className="absolute top-2/3 right-1/3 w-56 h-56 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-3xl"
          animate={{ 
            x: [0, 50, 0], 
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>
      
      <div className="container relative z-10 flex flex-col items-center justify-center max-w-4xl gap-8 mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-6 py-2 mb-4 text-sm font-medium rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
        >
          Full-Stack Web Developer
        </motion.div>
        
        <motion.h1 
          className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-primary to-blue-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Crafting Digital Experiences with{" "}
          <motion.span 
            className="relative inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: 1,
              type: "spring",
              stiffness: 100 
            }}
          >
            <span className="relative z-10text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-primary to-blue-600">Precision</span>
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg -z-10"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 1.3 }}
            />
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="max-w-2xl text-lg text-default-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I build modern, responsive, and user-friendly web applications using cutting-edge technologies.
          Let's turn your ideas into reality.
        </motion.p>
        
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a >
          <Button 
            onClick={downloadFile}
            size="lg" 
            className="bg-gradient-to-r cursor-pointer rounded-2xl outline-blue-500 flex from-blue-600 to-cyan-600 text-white border-0 shadow-lg shadow-blue-500/30"
            startContent={<Icon icon="lucide:file-user" className="text-white text-2xl" />}
          >
            Resume
          </Button>
          </a>
          <Button 
            as={Link} 
            href="#contact" 
            size="lg" 
            variant="bordered"
            className="bg-gradient-to-r cursor-pointer rounded-2xl outline-purple-500 flex from-purple-600 to-blue-600 text-white border-0 shadow-lg shadow-blue-500/30"

            startContent={<Icon icon="lucide:mail"  className="text-white text-2xl"/>}
          >
            Contact Me
          </Button>
        </motion.div>
        
        <motion.div 
          className="flex items-center gap-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { icon: "lucide:github", color: "hover:text-purple-500" ,    link:"https://github.com/HammadIsmail" },
            { icon: "lucide:linkedin", color: "hover:text-blue-500" ,      link:"https://www.linkedin.com/in/muhammad-hammad-uet/"},
            { icon: "lucide:instagram", color: "hover:text-cyan-500" ,  link:"https://www.instagram.com/itx_hammad_ismail/"},
           
          ].map((item, index) => (
            <motion.a 
              key={item.icon}
              href={item.link} 
              target="_blank"
              className={`text-default-500 ${item.color} transition-colors duration-300`}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
            >
              <Icon icon={item.icon} width={24} height={24} />
            </motion.a>
          ))}
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-5 left-1/2 -translate-x-1/2"
        animate={{ 
          y: [0, -10, 0],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 1.5,
          ease: "easeInOut"
        }}
      >
        <a 
          href="#about" 
          className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg shadow-purple-500/30"
        >
          <Icon icon="lucide:chevron-down" className="text-white" width={24} height={24} />
        </a>
      </motion.div>
    </section>
  );
}