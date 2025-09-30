import { Card, CardBody, CardFooter, Button, Image, Chip, Input } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useMemo } from "react";

export function ProjectsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedWorkType, setSelectedWorkType] = useState("all");
  const [selectedTechDomain, setSelectedTechDomain] = useState("all");

  const workTypes = [
    { key: "all", label: "All Projects", icon: "solar:layers-bold-duotone", color: "from-slate-600 to-slate-800" },
    { key: "freelance", label: "Freelance", icon: "solar:case-round-bold-duotone", color: "from-blue-600 to-blue-800" },
    { key: "professional", label: "Professional", icon: "solar:buildings-3-bold-duotone", color: "from-violet-600 to-purple-800" },
    { key: "personal", label: "Personal", icon: "solar:user-bold-duotone", color: "from-emerald-600 to-green-800" },
    { key: "experimental", label: "Experimental", icon: "solar:test-tube-bold-duotone", color: "from-orange-600 to-red-700" }
  ];

  const techDomains = [
    { key: "all", label: "All Tech", icon: "solar:code-bold-duotone", color: "from-slate-600 to-slate-800" },
    { key: "web", label: "Web Dev", icon: "solar:globe-bold-duotone", color: "from-blue-600 to-cyan-700" },
    { key: "ai", label: "AI/ML", icon: "solar:cpu-bolt-bold-duotone", color: "from-purple-600 to-pink-700" },
    { key: "mobile", label: "Mobile", icon: "solar:phone-bold-duotone", color: "from-green-600 to-teal-700" },
    // { key: "game", label: "Games", icon: "solar:gameboy-bold-duotone", color: "from-red-600 to-orange-700" },
    // { key: "blockchain", label: "Web3", icon: "solar:link-circle-bold-duotone", color: "from-yellow-600 to-amber-700" },
    // { key: "cyber", label: "Security", icon: "solar:shield-check-bold-duotone", color: "from-gray-800 to-slate-900" }
  ];

  const projects = [
    {
      id: 1,
      title: "Marketing Agency Website",
      description: "Modern marketing agency website with advanced animations, interactive elements, and seamless user experience. Features real-time analytics integration and dynamic content management.",
      image: "https://res.cloudinary.com/dbbk9wg2i/image/upload/v1742640507/Marketing_site_vzhgfu.png",
      tags: ["React", "Tailwind", "Framer Motion", "Analytics", "CMS"],
      demoUrl: "https://prfsd.netlify.app/",
      codeUrl: "#",
      workType: "freelance",
      techDomain: ["web"],
      color: "from-blue-600 to-cyan-700",
      private: true,
      featured: true
    },
    // {
    //   id: 2,
    //   title: "E-commerce Dashboard",
    //   description: "Enterprise-grade admin dashboard with real-time analytics, advanced filtering, inventory management, and comprehensive reporting systems for large-scale operations.",
    //   image: "https://picsum.photos/seed/ecommerce/800/600",
    //   tags: ["Next.js", "TypeScript", "Prisma", "Chart.js"],
    //   demoUrl: "#",
    //   codeUrl: "#",
    //   workType: "professional",
    //   techDomain: ["web"],
    //   color: "from-violet-600 to-purple-800",
    //   private: false,
    //   featured: true
    // },
    // {
    //   id: 3,
    //   title: "AI Assistant Platform",
    //   description: "Intelligent conversational AI platform with natural language processing, context awareness, multi-modal interactions, and enterprise-level security.",
    //   image: "https://picsum.photos/seed/aiplatform/800/600",
    //   tags: ["Python", "OpenAI", "FastAPI", "React", "WebSocket"],
    //   demoUrl: "#",
    //   codeUrl: "#",
    //   workType: "personal",
    //   techDomain: ["ai", "web"],
    //   color: "from-purple-600 to-pink-700",
    //   private: false,
    //   featured: true
    // },
    // {
    //   id: 4,
    //   title: "Fitness Companion App",
    //   description: "Cross-platform fitness application with AI-powered workout recommendations, social features, progress tracking, and seamless wearable integration.",
    //   image: "https://picsum.photos/seed/fitnessapp/800/600",
    //   tags: ["React Native", "Expo", "Firebase", "TensorFlow"],
    //   demoUrl: "#",
    //   codeUrl: "#",
    //   workType: "personal",
    //   techDomain: ["mobile", "ai"],
    //   color: "from-emerald-600 to-green-800",
    //   private: false
    // },
    // {
    //   id: 5,
    //   title: "DeFi Analytics Suite",
    //   description: "Comprehensive DeFi analytics platform with real-time market data, portfolio tracking, yield optimization, and advanced trading algorithms.",
    //   image: "https://picsum.photos/seed/defianalytics/800/600",
    //   tags: ["Solidity", "Web3.js", "Next.js", "GraphQL"],
    //   demoUrl: "#",
    //   codeUrl: "#",
    //   workType: "freelance",
    //   techDomain: ["blockchain", "web"],
    //   color: "from-yellow-600 to-amber-700",
    //   private: true
    // },
    // {
    //   id: 6,
    //   title: "Cybersecurity Toolkit",
    //   description: "Advanced security analysis toolkit with automated vulnerability scanning, threat detection, compliance monitoring, and detailed security reporting.",
    //   image: "https://picsum.photos/seed/cybertoolkit/800/600",
    //   tags: ["Python", "Docker", "Kubernetes", "Elasticsearch"],
    //   demoUrl: "#",
    //   codeUrl: "#",
    //   workType: "professional",
    //   techDomain: ["cyber"],
    //   color: "from-gray-800 to-slate-900",
    //   private: true
    // },
    {
      id: 2,
      title: "Tech Company Website",
      description: "Sleek and modern website for InfoQuestPro, a tech solutions provider. Features interactive service showcases.",
      image: "https://res.cloudinary.com/dbbk9wg2i/image/upload/v1759206929/Capture_gmbswi.png",
      tags: ["NextJs", "Tailwind", "TypeScript", "Framer Motion"],
      demoUrl: "https://info-quest-pro.vercel.app/",
      codeUrl: "https://github.com/HammadIsmail/info-quest-pro",
      workType: "professional",
      techDomain: ["web"],
      color: "from-red-600 to-orange-700",
      private: false
    },
      {
      id: 3,
      title: "Tech StartUp Product Website",
      description: "A sleek and modern website for Snapfit, a tech solutions provider. It includes interactive service showcases, a tools listing, pricing page, dynamic inspiration page, and contact page — all designed for a seamless user experience.",
      image: "https://res.cloudinary.com/dbbk9wg2i/image/upload/v1759207689/Capture_a2ytbu.png",
      tags: ["React", "Tailwind", "TypeScript", "Framer Motion"],
      demoUrl: "https://snapfit-hc66.vercel.app/",
      codeUrl: "#",
      workType: "professional",
      techDomain: ["web"],
      color: "from-gray-700 to-lime-700",
      private: true,
      featured: true
    },
      {
      id: 4,
      title: "Social Media Platform",
      description: "Spill the Tea is a personal project — a social media platform where users can share thoughts, ideas, and experiences in a fun, engaging way. It includes real-time chat, post creation, a dynamic feed, and the ability to create communities.",
      image: "https://res.cloudinary.com/dbbk9wg2i/image/upload/v1759208100/Capture_wzsxtf.png",
      tags: ["React", "Tailwind", "TypeScript", "Framer Motion","PostgreSQL","NodeJS","Socket.io","ExpressJS","Prisma","Redis"],
      demoUrl: "https://www.spill-the-tea.online/",
codeUrl: "#",
      workType: "personal",
      techDomain: ["web"],
      color: "from-white to-orange-700",
      private: true,
      featured: true
    },
     {
      id: 5,
      title: "Ride Sharing Platform",
      description: "ShareRide is a personal project — a Ride Sharing platform where users can share rides engaging way. It includes real-time chat, post creation, a dynamic feed.",
      image: "https://res.cloudinary.com/dbbk9wg2i/image/upload/v1759216128/Capture_cyu1gp.png",
      tags: ["React", "Tailwind", "TypeScript", "Framer Motion","PostgreSQL","NodeJS","Socket.io","ExpressJS","Prisma","Redis"],
      demoUrl: "https://www.shareride.site/",
codeUrl: "#",
      workType: "personal",
      techDomain: ["web"],
      color: "from-white to-blue-700",
      private: true,
      featured: true
    },
     {
      id: 6,
      title: "Canva Like Clone",
      description: "Canva Clone is a personal project — a Canva like online editor where users can create stunning graphics, presentations, and social media posts with ease.",
      image: "https://res.cloudinary.com/dbbk9wg2i/image/upload/v1759252076/Capture_ncfxgy.png",
      tags: ["Nextjs", "Tailwind", "TypeScript", "FiberJs","Mongodb",],
      demoUrl: "https://my-canvas-editor.vercel.app/",
      codeUrl: "https://github.com/HammadIsmail/my-canvas-editor",
      workType: "personal",
      techDomain: ["web"],
      color: "from-white to-purple-700",
      private: false,
      featured: true
    },
    {
      id: 7,
      title: "Ecommerce Platform",
      description: "EasyShop is a professional project — a full-featured e-commerce platform that offers a seamless shopping experience with advanced product management, secure payment integration, and real-time order tracking.",
      image: "https://res.cloudinary.com/dbbk9wg2i/image/upload/v1759256114/Capture_htgjkq.png",
      tags: ["Nextjs", "Tailwind", "TypeScript", "Supabase",],
      demoUrl: "https://easyshop-three.vercel.app/",
      codeUrl: "#",
      workType: "professional",
      techDomain: ["web"],
      color: "from-white to-gray-700",
      private: true,
      featured: true
    }

  ];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesWorkType = selectedWorkType === "all" || project.workType === selectedWorkType;
      const matchesTechDomain = selectedTechDomain === "all" || project.techDomain.includes(selectedTechDomain);
      
      return matchesSearch && matchesWorkType && matchesTechDomain;
    });
  }, [searchTerm, selectedWorkType, selectedTechDomain]);

  const getWorkTypeConfig = (workType) => {
    return workTypes.find(type => type.key === workType) || workTypes[0];
  };

  const getTechDomainConfig = (techDomain) => {
    return techDomains.find(domain => domain.key === techDomain) || techDomains[0];
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        type: "spring",
        stiffness: 120,
        damping: 12
      }
    },
    exit: {
      opacity: 0,
      y: -40,
      scale: 0.95,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="projects" className="py-32 bg-gradient-to-br from-white via-gray-50 to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.04] dark:bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container max-w-7xl px-4 mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          ref={ref}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Icon icon="solar:magic-stick-3-bold-duotone" className="text-purple-600 text-xl" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Featured Work</span>
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-white dark:via-gray-100 dark:to-gray-300 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            My Projects
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            A curated collection of innovative solutions spanning multiple technologies and industries. 
            Each project represents a unique challenge and creative approach to problem-solving.
          </motion.p>
        </motion.div>

        {/* Modern Search & Filters */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {/* Search Bar */}
          <div className="flex justify-center mb-12">
            <div className="relative w-full max-w-2xl">
              <Input
                placeholder="Search projects, technologies, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                startContent={<Icon icon="solar:magnifer-bold-duotone" className="text-gray-400 text-xl" />}
                classNames={{
                  base: "w-full",
                  mainWrapper: "h-full",
                  input: "text-lg",
                  inputWrapper: "h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-gray-200 dark:border-gray-700 shadow-2xl shadow-gray-900/10 dark:shadow-black/20"
                }}
                size="lg"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 -z-10 blur-xl" />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="space-y-8">
            {/* Work Type */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">Project Type</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {workTypes.map((type) => (
                  <motion.button
                    key={type.key}
                    onClick={() => setSelectedWorkType(type.key)}
                    className={`group relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 overflow-hidden ${
                      selectedWorkType === type.key
                        ? 'text-white shadow-2xl shadow-blue-500/25'
                        : 'text-gray-600 dark:text-gray-300 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white/80 dark:hover:bg-gray-800/80'
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {selectedWorkType === type.key && (
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${type.color}`}
                        layoutId="workTypeBackground"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                    <span className="relative flex items-center gap-2">
                      <Icon icon={type.icon} className="text-lg" />
                      {type.label}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Technology */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center">Technology</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {techDomains.map((domain) => (
                  <motion.button
                    key={domain.key}
                    onClick={() => setSelectedTechDomain(domain.key)}
                    className={`group relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 overflow-hidden ${
                      selectedTechDomain === domain.key
                        ? 'text-white shadow-2xl shadow-purple-500/25'
                        : 'text-gray-600 dark:text-gray-300 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white/80 dark:hover:bg-gray-800/80'
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {selectedTechDomain === domain.key && (
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${domain.color}`}
                        layoutId="techDomainBackground"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                    <span className="relative flex items-center gap-2">
                      <Icon icon={domain.icon} className="text-lg" />
                      {domain.label}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border border-gray-200 dark:border-gray-700">
            <Icon icon="solar:documents-bold-duotone" className="text-blue-600 text-lg" />
            <span className="text-gray-700 dark:text-gray-300">
              <span className="font-bold text-gray-900 dark:text-white">{filteredProjects.length}</span> 
              {filteredProjects.length === 1 ? ' project' : ' projects'} found
            </span>
          </div>
        </motion.div>
        
        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            key={`${selectedWorkType}-${selectedTechDomain}-${searchTerm}`}
          >
            {filteredProjects.map((project) => {
              const workTypeConfig = getWorkTypeConfig(project.workType);
              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  layout
                >
                  <Card className="group h-full overflow-hidden bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-0 shadow-xl shadow-gray-900/10 dark:shadow-black/20 hover:shadow-2xl hover:shadow-gray-900/20 dark:hover:shadow-black/40 transition-all duration-500">
                    <div className="relative overflow-hidden">
                      {/* Image with Gradient Overlay */}
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent`} />
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />
                      </div>

                      {/* Floating Number Badge */}
                      <div className="absolute top-4 right-4 z-20">
                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-white shadow-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}>
                          <span className="font-bold text-lg">{project.id}</span>
                        </div>
                      </div>

                      {/* Status Badges */}
                      <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                        <Chip
                          size="sm"
                          className={`bg-gradient-to-r ${workTypeConfig.color} text-white shadow-lg backdrop-blur-sm font-medium px-3`}
                          startContent={<Icon icon={workTypeConfig.icon} className="text-sm" />}
                        >
                          {workTypeConfig.label}
                        </Chip>
                        {project.featured && (
                          <Chip
                            size="sm"
                            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg backdrop-blur-sm font-medium"
                            startContent={<Icon icon="solar:star-bold" className="text-sm" />}
                          >
                            Featured
                          </Chip>
                        )}
                      </div>

                      {/* Tech Domain Badges */}
                      <div className="absolute bottom-4 left-4 z-20 flex gap-2 flex-wrap">
                        {project.techDomain.slice(0, 2).map((domain) => {
                          const domainConfig = getTechDomainConfig(domain);
                          return (
                            <Chip
                              key={domain}
                              size="sm"
                              className={`bg-gradient-to-r ${domainConfig.color} text-white shadow-lg backdrop-blur-sm`}
                              startContent={<Icon icon={domainConfig.icon} className="text-xs" />}
                            >
                              <span className="text-xs font-medium">{domainConfig.label}</span>
                            </Chip>
                          );
                        })}
                        {project.techDomain.length > 2 && (
                          <Chip
                            size="sm"
                            className="bg-gray-900/80 text-white shadow-lg backdrop-blur-sm"
                          >
                            <span className="text-xs font-medium">+{project.techDomain.length - 2}</span>
                          </Chip>
                        )}
                      </div>
                    </div>

                    <CardBody className="p-6 flex-grow">
                      <h3 className={`mb-4 text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 origin-left`}>
                        {project.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map((tag) => (
                          <Chip 
                            key={tag} 
                            size="sm" 
                            variant="flat" 
                            className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium"
                          >
                            {tag}
                          </Chip>
                        ))}
                        {project.tags.length > 4 && (
                          <Chip 
                            size="sm" 
                            variant="flat" 
                            className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium"
                          >
                            +{project.tags.length - 4}
                          </Chip>
                        )}
                      </div>
                    </CardBody>

                    <CardFooter className="p-6 pt-0 flex gap-3">
                      <Button 
                        as="a" 
                        href={project.demoUrl} 
                        target="_blank"
                        className={`flex-1 bg-gradient-to-r ${project.color} text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                        endContent={<Icon icon="solar:arrow-right-up-bold" className="text-lg" />}
                      >
                        Live Demo
                      </Button>
                      {!project.private && (
                        <Button 
                          as="a" 
                          href={project.codeUrl} 
                          variant="bordered"
                          className="flex-1 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 font-semibold transition-all duration-300"
                          startContent={<Icon icon="solar:code-2-bold" className="text-lg" />}
                        >
                          Code
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* No Results State */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-3xl flex items-center justify-center">
              <Icon icon="solar:document-text-bold-duotone" className="text-5xl text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">No projects found</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-md mx-auto">
              Try adjusting your search terms or exploring different categories to discover more projects.
            </p>
            <Button
              size="lg"
              variant="bordered"
              className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
              startContent={<Icon icon="solar:refresh-bold" />}
              onClick={() => {
                setSearchTerm("");
                setSelectedWorkType("all");
                setSelectedTechDomain("all");
              }}
            >
              Reset Filters
            </Button>
          </motion.div>
        )}
        
        {/* CTA Section */}
        {filteredProjects.length > 0 && (
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold px-12 py-8 text-lg shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40"
              endContent={<Icon icon="solar:arrow-right-bold" className="text-xl" />}
              as={motion.button}
              whileHover={{ 
                scale: 1.05,
                y: -4
              }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Full Portfolio
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}