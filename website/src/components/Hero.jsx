import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, BarChart3, Gift, History } from 'lucide-react'
import logoSvg from '../assets/logo.svg'

const Hero = () => {
  const scrollToInstall = () => {
    const element = document.querySelector('#install')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToScreenshots = () => {
    const element = document.querySelector('#screenshots')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openChromeStore = () => {
    window.open('https://chromewebstore.google.com/search/statsense', '_blank')
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center mb-8"
        >
          <div 
            className="relative cursor-pointer group"
            onClick={scrollToInstall}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-3xl flex items-center justify-center shadow-2xl animate-glow group-hover:scale-105 transition-transform duration-300">
              <img src={logoSvg} alt="Statsense Logo" className="w-14 h-14" />
            </div>
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-green-500 rounded-full animate-pulse shadow-lg group-hover:scale-110 transition-transform duration-300"></div>
          </div>
        </motion.div>

        {/* Brand Section with proper spacing */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-between h-80 mb-20"
        >
          <h1 className="text-7xl md:text-9xl font-black tracking-tight">
            <span className="gradient-text">Statsense</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 font-light">
            Channel point stats for Twitch
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Track predictions
            <br />
            <span className="gradient-text">like a pro</span>
          </h2>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-32"
        >
          <button 
            onClick={openChromeStore}
            className="btn-primary text-white font-semibold px-10 py-5 rounded-2xl text-xl shadow-2xl hover:shadow-primary-500/25 transition-all duration-300"
          >
            Add to Chrome
          </button>
          <button 
            onClick={scrollToScreenshots}
            className="glass text-white font-semibold px-10 py-5 rounded-2xl text-xl hover-glow border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
          >
            See It in Action
          </button>
        </motion.div>

        {/* Feature Icons - Now second (below CTA buttons) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex justify-center gap-12 mb-40"
        >
          {[
            { icon: BarChart3, text: "Live Stats" },
            { icon: Gift, text: "Auto Bonuses" },
            { icon: History, text: "Bet History" },
          ].map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-primary-400" />
              </div>
              <span className="text-gray-300 font-medium text-sm">{feature.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Minimal Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mb-32"
        >
          {[
            // { value: "10K+", label: "Users" },
            // { value: "4.9★", label: "Rating" },
            { value: "100%", label: "Local Data" },
            { value: "0", label: "Permissions" },
            { value: "0ms", label: "Latency" },
            { value: "24/7", label: "Available" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/30 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-600/25 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary-400/35 rounded-full blur-xl animate-float" style={{animationDelay: '4s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-purple-500/20 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-blue-500/25 rounded-full blur-xl animate-float" style={{animationDelay: '3s'}}></div>
      
      {/* Additional background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 via-transparent to-purple-900/10 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/5 via-transparent to-pink-900/5 pointer-events-none"></div>
    </section>
  )
}

export default Hero
