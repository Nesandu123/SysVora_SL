import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Container from './ui/Container';
import Section from './ui/Section';
import Button from './ui/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const newErrors = validateForm();

  if (Object.keys(newErrors).length === 0) {
    const phoneNumber = "94781803792"; // your WhatsApp number (no +)

    const message = `Hello SysVoraSL,

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}
Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  } else {
    setErrors(newErrors);
  }
};
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sysvorasl@gmail.com',
      link: 'mailto:hello@sysvorasl.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+94 781803792',
      link: 'tel:+94781803792',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Colombo, Sri Lanka',
      link: null,
    },
  ];

  return (
    <Section id="contact" background="gradient">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass rounded-xl p-6 flex items-center gap-4 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 glow-blue">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{info.label}</div>
                      <div className="text-lg font-semibold">{info.value}</div>
                    </div>
                  </motion.div>
                );

                return info.link ? (
                  <a key={info.label} href={info.link}>
                    {content}
                  </a>
                ) : (
                  <div key={info.label}>{content}</div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-500/10 border border-green-500/50 rounded-lg p-4 text-green-400"
                >
                  Thank you! We'll get back to you soon.
                </motion.div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${
                    errors.name ? 'border-red-500' : 'border-white/10'
                  } rounded-lg focus:outline-none focus:border-blue-500 transition-colors`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/5 border ${
                    errors.email ? 'border-red-500' : 'border-white/10'
                  } rounded-lg focus:outline-none focus:border-blue-500 transition-colors`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-white/5 border ${
                    errors.message ? 'border-red-500' : 'border-white/10'
                  } rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none`}
                  placeholder="Tell us about your project..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Message
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
