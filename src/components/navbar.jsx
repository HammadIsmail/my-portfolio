import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion, useScroll } from "framer-motion";

export function NavigationBar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { scrollYProgress } = useScroll();

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 right-0 z-40 h-1 bg-gradient-to-r from-purple-500 to-pink-500 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar 
        className={`fixed text-purple-700 transition-all duration-300 z-50 ${
          isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
        maxWidth="xl"
        height="4rem"
      >
        <NavbarBrand>
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
              H
            </div>
            <p className="font-bold  bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              Hammad
            </p>
          </motion.div>
        </NavbarBrand>
        
        <NavbarContent className="hidden gap-4  sm:flex" justify="center">
          {[
            { name: "Home", href: "#", color: "outline-purple-500 hover:text-purple-500" },
            { name: "About", href: "#about", color: "outline-purple-500 hover:text-blue-500" },
            // { name: "Projects", href: "#projects", color: "outline-purple-500 hover:text-pink-500" },
            { name: "Contact", href: "#contact", color: "outline-purple-500 hover:text-cyan-500" }
          ].map((item, index) => (
            <NavbarItem key={item.name}>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Link 
                  color="foreground" 
                  href={item.href} 

                  underline="hover"
                  className={item.color}
                  as={motion.a}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.name}
                </Link>
              </motion.div>
            </NavbarItem>
          ))}
        </NavbarContent>
        
        <NavbarContent justify="end">
          <NavbarItem>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button 
                as={Link} 
                href="#contact" 
                className="bg-gradient-to-r flex p-2 outline-pink-400  rounded-xl m-2 from-purple-600 to-pink-600 text-white border-0 shadow-lg shadow-purple-500/30"
                endContent={<Icon icon="lucide:send" />}
              >
                Hire Me
              </Button>
            </motion.div>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}