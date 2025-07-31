import React,{useRef} from "react";
import { Card, CardBody,  Button, toast } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from '@emailjs/browser';
export function ContactSection() {
  const form = useRef(null);
    const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    if (!form.current) return;

    // Replace with your EmailJS credentials
const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
const userId = process.env.NEXT_PUBLIC_USER_ID;

    console.log(serviceId, templateId, userId);

    emailjs
      .sendForm(serviceId, templateId, form.current, userId)
      .then(
        (result) => {
          console.log('Email sent successfully!', result.text);
          alert('Email sent successfully!');
          if (form.current) form.current.reset(); // Clear the form
        },
        (error) => {
          console.error('Failed to send email:', error.text);
          
          alert('Failed to send email. Please try again.');
        }
      );



    console.log("Form submitted");
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-background via-content1/50 to-content1"
    >
      <div className="container max-w-5xl px-4 mx-auto">
        <motion.div
          className="flex flex-col items-center mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <motion.div
            className="relative inline-block mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold relative z-10">Get In Touch</h2>
            <motion.div
              className="absolute -bottom-2 left-0 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg -z-10"
              initial={{ width: 0 }}
              animate={inView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
          <motion.p
            className="max-w-2xl text-default-600"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Have a project in mind or want to discuss potential opportunities?
            I'm always open to new ideas and collaborations.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1  gap-20 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="border-none rounded-2xl shadow-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
              <CardBody className="p-6">
                <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4 ">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    <div className="max-w-md mx-auto ">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="from_name"
                          name="from_name"
                          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          placeholder="John"
                          required
                        />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <div className="max-w-md mx-auto ">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.4, delay: 0.6 }}
                  >
                     <div className="max-w-md mx-auto ">
  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Subject</label>
  <div className="mt-1">
    <input
      type="Subject"
      id="subject"
      name="subject"
      className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      placeholder="Enter Subject"
      required
    />
  </div>
</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.4, delay: 0.7 }}
                  >
                <div className="max-w-md mx-auto ">
  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Your Message</label>
  <div className="mt-1">
    <textarea
      id="message"
      name="message"
      rows={4}
      className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
      placeholder="Type your message here..."
      required
    ></textarea>
  </div>
</div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.4, delay: 0.8 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button
                      type="submit"
                      className="mt-2 w-full bg-gradient-to-r flex  rounded-2xl p-2 cursor-pointer hover:bg-blue-300  from-blue-600 to-cyan-600 text-white border-0 shadow-lg shadow-blue-500/30"
                      endContent={<Icon icon="lucide:send" />}
                    >
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </CardBody>
            </Card>
          </motion.div>




          <motion.div
            className="flex flex-col justify-center gap-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex flex-col gap-6">
              <motion.h3
                className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Contact Information
              </motion.h3>

              <motion.div
                className="flex flex-col gap-4"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "show" : "hidden"}
              >
                {[
                  {
                    icon: "lucide:mail",
                    label: "Email",
                    value: "ranahammadismail@gmail.com",
                    color: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: "lucide:phone",
                    label: "Phone",
                    value: "+92 3067565014",
                    color: "from-purple-500 to-pink-500",
                  },
                  {
                    icon: "lucide:map-pin",
                    label: "Location",
                    value: "Burewala,Punjab,Pakistan",
                    color: "from-amber-500 to-orange-500",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div
                      className={`flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${
                        item.color
                      } shadow-lg shadow-${item.color.split(" ")[1]}/30`}
                    >
                      <Icon
                        icon={item.icon}
                        className="text-white"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div>
                      <p className="text-sm text-default-500">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="flex gap-4 mt-4"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                {[
                  {
                    icon: "lucide:github",
                    color: "bg-gradient-to-r from-gray-700 to-gray-900",
                    link:"https://github.com/HammadIsmail"
                  },
                  {
                    icon: "lucide:linkedin",
                    color: "bg-gradient-to-r from-blue-600 to-blue-800",
                    link:"https://www.linkedin.com/in/muhammad-hammad-uet/"
                  },
                  {
                    icon: "lucide:instagram",
                    color: "bg-gradient-to-r from-blue-400 to-cyan-400",
                    link:"https://www.instagram.com/itx_hammad_ismail/"
                  },
                 
                ].map((item, index) => (
                  <motion.a
                    key={item.icon}
                    href={item.link}
                    target="_blank"
                    className={`${item.color} p-3 rounded-full text-white shadow-lg`}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  >
                    <Icon icon={item.icon} width={20} height={20} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
   

        </div>
        
      </div>
    </section>
  );
}
