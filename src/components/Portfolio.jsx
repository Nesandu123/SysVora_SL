import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Container from './ui/Container';
import Section from './ui/Section';
import Card from './ui/Card';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce solution with real-time inventory and payment processing',
    category: 'Web Application',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '#',
  },
  {
    title: 'Healthcare Mobile App',
    description: 'Patient management system with telemedicine capabilities',
    category: 'Mobile App',
    image: 'https://images.pexels.com/photos/48604/pexels-photo-48604.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '#',
  },
  {
    title: 'FinTech Dashboard',
    description: 'Financial analytics platform with real-time data visualization',
    category: 'Web Application',
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '#',
  },
  {
    title: 'Social Media Platform',
    description: 'Community-driven platform with messaging and content sharing',
    category: 'Full Stack',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '#',
  },
  {
    title: 'AI-Powered Analytics',
    description: 'Machine learning platform for business intelligence and predictions',
    category: 'AI/ML',
    image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '#',
  },
  {
    title: 'Logistics Management',
    description: 'Supply chain optimization with real-time tracking and routing',
    category: 'Enterprise',
    image: 'https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=800',
    link: '#',
  },
];

export default function Portfolio() {
  return (
    <Section id="portfolio" background="gradient">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Showcasing our best work and successful client partnerships
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative glass rounded-2xl overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="inline-block px-3 py-1 rounded-full glass text-xs font-semibold mb-3">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 glow-blue">
                <ExternalLink className="w-6 h-6 text-white" />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
