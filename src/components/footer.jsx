import { Link, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

export function Footer() {
  return (
    <footer className="py-12 bg-gradient-to-b from-background to-content1/30">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                H
              </div>
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                Hammad
              </h3>
            </div>
            <p className="text-default-600">
              Crafting digital experiences with precision and passion.
            </p>
            <div className="flex gap-4 mt-2">
              {[
                { icon: "lucide:github", color: "hover:text-gray-800"   , link:"https://github.com/HammadIsmail" },
                { icon: "lucide:linkedin", color: "hover:text-blue-600" ,     link:"https://www.linkedin.com/in/muhammad-hammad-uet/" },
                { icon: "lucide:instagram", color: "hover:text-cyan-500",  link:"https://www.instagram.com/itx_hammad_ismail/" },
              ].map((item) => (
                <a 
                  key={item.icon}
                  href="#" 
                  className={`text-default-500 ${item.color} transition-colors duration-300`}
                >
                  <Icon icon={item.icon} width={20} height={20} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <h4 className="mb-2 font-semibold text-default-700">Quick Links</h4>
            <Link href="#" color="foreground" underline="hover" className="text-default-600 hover:text-purple-500">Home</Link>
            <Link href="#about" color="foreground" underline="hover" className="text-default-600 hover:text-blue-500">About</Link>
            {/* <Link href="#projects" color="foreground" underline="hover" className="text-default-600 hover:text-pink-500">Projects</Link> */}
            <Link href="#contact" color="foreground" underline="hover" className="text-default-600 hover:text-cyan-500">Contact</Link>
          </div>
          
          <div className="flex flex-col gap-2">
            <h4 className="mb-2 font-semibold text-default-700">Services</h4>
            <Link href="#" color="foreground" underline="hover" className="text-default-600 hover:text-purple-500">Web Development</Link>
            <Link href="#" color="foreground" underline="hover" className="text-default-600 hover:text-pink-500">Mobile Apps</Link>
            <Link href="#" color="foreground" underline="hover" className="text-default-600 hover:text-cyan-500">AI Integration & AI Agents Development</Link>
          </div>
          
          <div className="flex flex-col gap-2">
            <h4 className="mb-2 font-semibold text-default-700">Contact</h4>
            <div className="flex items-center gap-2 text-default-600">
              <Icon icon="lucide:mail" className="text-blue-500" width={16} />
              <span>ranahammadismail@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-default-600">
              <Icon icon="lucide:phone" className="text-purple-500" width={16} />
              <span>+92 3067565014</span>
            </div>
            <div className="flex items-center gap-2 text-default-600">
              <Icon icon="lucide:map-pin" className="text-pink-500" width={16} />
              <span>Burewala,Punjab,Pakistan</span>
            </div>
          </div>
        </div>
        
        <Divider className="my-8 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-pink-500/30" />
        
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-default-500">
            © {new Date().getFullYear()} Hammad Developer. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="#" color="foreground" underline="hover" className="text-default-500 hover:text-purple-500">Privacy Policy</Link>
            <Link href="#" color="foreground" underline="hover" className="text-default-500 hover:text-pink-500">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}