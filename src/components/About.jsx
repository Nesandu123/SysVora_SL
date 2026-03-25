import { motion } from 'framer-motion';
import { CircleCheck as CheckCircle, Users, Target, Award } from 'lucide-react';
import Container from './ui/Container';
import Section from './ui/Section';

const features = [
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Talented developers, designers, and strategists',
  },
  {
    icon: Target,
    title: 'Client-Focused',
    description: 'Your success is our top priority',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: '2+ years of delivering excellence',
  },
];

const values = [
  'Innovation-driven approach',
  'Agile development methodology',
  'Transparent communication',
  'Quality assurance at every step',
  'Continuous support and maintenance',
  'Scalable and future-proof solutions',
];

export default function About() {
  return (
    <Section id="about" background="darker">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">SysVoraSL</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              We are a global software agency specializing in building cutting-edge web and mobile applications. With over a decade of experience, we transform ideas into powerful digital solutions that drive business growth.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Our team of experts combines technical excellence with creative innovation to deliver products that exceed expectations. From startups to enterprises, we partner with clients worldwide to bring their vision to life.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-3 glow-blue">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6">Why Choose Us</h3>
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
