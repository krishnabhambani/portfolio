import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Download, ChevronDown, Code, Database, Terminal, Globe, Server, Layout } from 'lucide-react';
import { Link } from 'react-scroll';

function App() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const skillCards = [
    { icon: <Code size={40} />, title: "Frontend", skills: ["React.js", "HTML5", "CSS3", "JavaScript"] },
    { icon: <Server size={40} />, title: "Backend", skills: ["Java", "Python", "C++", "MongoDB"] },
    { icon: <Database size={40} />, title: "Database", skills: ["MySQL", "MongoDB", "SQL"] },
    { icon: <Terminal size={40} />, title: "Tools", skills: ["Git", "AWS", "GitHub"] },
    { icon: <Globe size={40} />, title: "Web", skills: ["REST API", "Responsive Design"] },
    { icon: <Layout size={40} />, title: "UI/UX", skills: ["Tailwind CSS", "Framer Motion"] }
  ];

  return (
    <div className="bg-[#0a192f] text-white">
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-blue-500/10 rounded-full"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 0.6, 0.3],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col justify-center items-center h-screen px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-blue-500 relative"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="kb.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <motion.div
                className="absolute inset-0 bg-blue-500/20"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
            
            <motion.h1
              className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Krishna Bhambani
            </motion.h1>
            
            <motion.p
              className="text-2xl text-gray-300 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Computer Science Engineering Student
            </motion.p>
            
            <motion.div
              className="flex justify-center gap-6 mb-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {[
                { href: "https://github.com/krishnabhambani", icon: <Github size={28} /> },
                { href: "https://www.linkedin.com/in/krishnabhambani", icon: <Linkedin size={28} /> },
                { href: "mailto:krishnabhambani1@gmail.com", icon: <Mail size={28} /> },
                { href: "tel:+917905226134", icon: <Phone size={28} /> }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors p-2 hover:bg-white/10 rounded-full"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            <motion.a
              href="https://drive.google.com/file/d/1tlnFKiYgdaHzp3p0tI2VhItinkXZf9R3/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full inline-flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-blue-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            className="absolute bottom-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ChevronDown size={40} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-[#112240]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center"
            {...fadeInUp}
          >
            About Me
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            {...fadeInUp}
          >
            <div className="space-y-6 text-gray-300">
              <p>
                I'm a Computer Science Engineering student at Vellore Institute of Technology,
                passionate about creating innovative solutions through technology.
              </p>
              <p>
                With a strong foundation in various programming languages and frameworks,
                I enjoy tackling complex problems and building user-friendly applications.
              </p>
            </div>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800"
                alt="Coding"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-blue-500/20 rounded-lg" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center"
            {...fadeInUp}
          >
            Skills & Expertise
          </motion.h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {skillCards.map((card, index) => (
              <motion.div
                key={index}
                className="bg-[#112240] p-6 rounded-xl hover:shadow-xl transition-all"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -10 }}
              >
                <div className="text-blue-400 mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
                <ul className="space-y-2 text-gray-300">
                  {card.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-[#112240]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center"
            {...fadeInUp}
          >
            Featured Projects
          </motion.h2>
          <div className="grid gap-12">
            {[
              {
                title: "Dead Stock Marketplace",
                description: "A platform for purchasing dead-stock items no longer in production",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
                tech: ["HTML", "CSS", "JavaScript", "MongoDB"]
              },
              {
                title: "News Dashboard",
                description: "Real-time news aggregation platform with categorized sections",
                image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800",
                tech: ["HTML", "JavaScript", "News API"]
              },
              {
                title: "Personal Portfolio",
                description: "Responsive landing page showcasing photographer's work",
                image: "src/pp.png",
                tech: ["ReactJS", "TailwindCSS", "JavaScript","Framers"]
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                className="grid md:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="relative rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-500/20" />
                </motion.div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center"
            {...fadeInUp}
          >
            Education
          </motion.h2>
          <div className="space-y-12">
            {[
              {
                school: "Vellore Institute of Technology",
                degree: "Bachelor of Technology in Computer Science and Engineering",
                year: "2022 - Present",
                score: "CGPA: 8.88",
                image: "src/vit.jpg"
              },
              {
                school: "Bethel Academy",
                degree: "Senior Secondary | CBSE Board",
                year: "2022",
                score: "Percentage: 84%",
                image: "src/Bethel.jpg"
              },
              {
                school: "Khelgaon Public School",
                degree: "High School | CBSE Board",
                year: "2020",
                score: "Percentage: 85%",
                image: "src/kps.jpg"
              }
            ].map((edu, index) => (
              <motion.div
                key={index}
                className="grid md:grid-cols-2 gap-8 items-center"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="relative rounded-xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={edu.image}
                    alt={edu.school}
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-500/20" />
                </motion.div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">{edu.school}</h3>
                  <p className="text-gray-300">{edu.degree}</p>
                  <p className="text-blue-400">{edu.year}</p>
                  <p className="text-blue-400 font-semibold">{edu.score}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a192f] py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            className="flex justify-center gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {[
              { href: "https://github.com/krishnabhambani", icon: <Github size={24} /> },
              { href: "https://www.linkedin.com/in/krishnabhambani", icon: <Linkedin size={24} /> },
              { href: "mailto:krishnabhambani1@gmail.com", icon: <Mail size={24} /> },
              { href: "tel:+917905226134", icon: <Phone size={24} /> }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
          <motion.p
            className="text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © 2024 Krishna Bhambani. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}

export default App;