import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Chrome, Star, Users, Shield, Zap, Clock, Heart, Lock } from 'lucide-react'

const Installation = () => {
  const [isHovered, setIsHovered] = useState(false)

  const openChromeStore = () => {
    window.open('https://chromewebstore.google.com/detail/pghjimnfhmmldnpecchfanonakppkjcc?utm_source=item-share-cb', '_blank')
  }

  const steps = [
    {
      number: "01",
      title: "Visit Chrome Web Store",
      description: "Click the button in the top right to go to our Chrome Web Store page",
      icon: Chrome
    },
    {
      number: "02",
      title: "Add to Chrome",
      description: "Click 'Add to Chrome' and confirm the installation",
      icon: Download
    },
    {
      number: "03",
      title: "Start Using",
      description: "Navigate to any Twitch stream with predictions and enjoy!",
      icon: Zap
    }
  ]

  const stats = [
    // { icon: Users, value: "10,000+", label: "Active Users" },
    // { icon: Star, value: "4.9/5", label: "Rating" },
    { icon: Shield, value: "100%", label: "Safe & Secure" },
    { icon: Zap, value: "< 1MB", label: "Lightweight" },
    { icon: Chrome, value: "Chrome", label: "Extension" }
  ]

  return (
    <section id="install" className="relative py-20 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get <span className="gradient-text">Started</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Installation takes less than a minute and requires zero configuration
          </p>
        </motion.div>

        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 md:p-12 mb-16 text-center"
        >
          <div className="mb-8">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 animate-glow">
              <Chrome className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to level up your predictions?
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Be among the first to experience next-generation Twitch prediction tracking with StatSense
            </p>
          </div>

          {/* Main CTA Button */}
          <motion.button
            onClick={openChromeStore}
            className="btn-primary text-white font-bold px-12 py-6 rounded-2xl text-xl inline-flex items-center gap-4 mb-8 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <Chrome className="w-6 h-6" />
            Add to Chrome - It's Free
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: '-100%' }}
              animate={{ x: isHovered ? '100%' : '-100%' }}
              transition={{ duration: 0.6 }}
            />
          </motion.button>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-300">
                <stat.icon className="w-5 h-5 text-primary-400" />
                <span className="font-semibold text-white">{stat.value}</span>
                <span className="text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Installation Steps */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
            How to Install
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glass rounded-2xl p-6 text-center hover-glow">
                  {/* Step Number */}
                  <div className="text-6xl font-black text-primary-400/20 mb-4">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h4 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {step.description}
                  </p>
                </div>
                
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-400 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Instant Setup",
              description: "No registration or configuration required. Works immediately after installation.",
              icon: Zap
            },
            {
              title: "Always Free",
              description: "StatSense is completely free with no hidden costs or premium features.",
              icon: Heart
            },
            {
              title: "Privacy First",
              description: "Your data stays local. We don't track, store, or sell your information.",
              icon: Lock
            }
          ].map((info, index) => (
            <div key={index} className="glass rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{info.title}</h4>
              <p className="text-gray-300 text-sm">{info.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Installation
