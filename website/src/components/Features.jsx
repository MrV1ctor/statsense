import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Eye, Zap, Shield, TrendingUp, Target, Users, Clock, Maximize2 } from 'lucide-react'
import Screenshot1 from '../assets/Screenshot1.png'

const Features = ({ onImageClick }) => {
  const features = [
    {
      icon: BarChart3,
      title: "Real-time Statistics",
      description: "Track your prediction performance with live updates and historical data visualization.",
      highlight: "Live Data",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Track your prediction success rate and profit/loss trends with detailed analytics.",
      highlight: "Tracking",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Target,
      title: "Win/Loss Analytics",
      description: "Detailed breakdown of your prediction history with win rates and profit tracking.",
      highlight: "Performance",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Eye,
      title: "Non-intrusive Design",
      description: "Clean overlays that enhance Twitch without disrupting your viewing experience.",
      highlight: "Seamless",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Lightweight extension that doesn't slow down your browser or Twitch performance.",
      highlight: "Optimized",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Privacy Focused",
      description: "No login required, no data tracking. Your privacy is our priority.",
      highlight: "Secure",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Users,
      title: "Auto Bonus Claims",
      description: "Never miss out on channel point bonuses with automatic bonus detection and claiming.",
      highlight: "Automation",
      color: "from-teal-500 to-blue-500"
    },
    {
      icon: Clock,
      title: "Historical Data",
      description: "Access comprehensive data about past predictions and streamer performance.",
      highlight: "Analytics",
      color: "from-rose-500 to-pink-500"
    }
  ]

  return (
    <section id="features" className="relative py-20 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to become a prediction master on Twitch
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-6 h-full hover-glow transition-all duration-300 group-hover:scale-105">
                {/* Icon */}
                <div className="mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-3`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    {feature.highlight}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:gradient-text transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-primary-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  See the <span className="gradient-text">difference</span>
                </h3>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  StatSense transforms your Twitch prediction experience with comprehensive 
                  statistics and beautiful visualizations that help you track your performance.
                </p>
                <div className="space-y-4">
                  {[
                    "Comprehensive statistics tracking",
                    "Beautiful performance charts",
                    "Detailed prediction history",
                    "Zero setup required"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                {/* Caption above image - completely separate */}
                <div className="text-center mb-4">
                  <p className="text-gray-400 text-xs">
                    Screenshot featuring <a href="https://twitch.tv/jynxzi" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors duration-200 underline">jynxzi</a>
                  </p>
                </div>
                
                {/* Feature showcase image */}
                <div className="relative group cursor-pointer" onClick={() => onImageClick(Screenshot1, 'StatSense Dashboard - jynxzi')}>
                  <div className="aspect-video bg-gradient-to-br from-dark-800 to-dark-900 rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl">
                    <img 
                      src={Screenshot1} 
                      alt="StatSense Dashboard"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
                    <Maximize2 className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
