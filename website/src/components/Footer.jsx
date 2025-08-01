import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Heart, X, MessageSquare } from 'lucide-react'
import logoSvg from '../assets/logo.svg'

// Custom GitHub icon component to replace deprecated one
const GitHubIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
)

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [activeModal, setActiveModal] = useState(null)

  const socialLinks = [
    { icon: GitHubIcon, href: "https://github.com/MrV1ctor/statsense", name: "GitHub" },
    { icon: Mail, href: "mailto:mr.v2ctor+chrome-extension@gmail.com", name: "Email" },
    { icon: MessageSquare, href: "https://github.com/MrV1ctor/statsense/discussions", name: "Feedback" }
  ]

  const openModal = (type) => {
    setActiveModal(type)
  }

  const closeModal = () => {
    setActiveModal(null)
  }

  const modalContent = {
    privacy: {
      title: "Privacy Policy",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Statsense Privacy Policy</h2>
            <p className="text-gray-400 text-sm">Effective Date: August 1st, 2025</p>
          </div>
          
          <p className="text-gray-300 leading-relaxed">
            Statsense ("we," "us," or "our") is committed to respecting your privacy. This Privacy Policy describes what data we collect, how it is stored, and your control over it when using the Statsense browser extension ("the Extension").
          </p>

          <p className="text-gray-300 leading-relaxed">
            By installing or using Statsense, you acknowledge and agree to the practices described in this policy.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">1. Information We Collect</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                <span className="font-semibold text-primary-400">Statsense does not collect or transmit any personal information to us or any third parties.</span> The only data handled by the extension is stored locally on your device and is never uploaded or shared externally.
              </p>
              
              <div className="bg-dark-800/50 p-4 rounded-lg border border-gray-700/50">
                <h4 className="font-semibold text-white mb-2">Collected Data (Locally Stored Only):</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                  <li>Twitch prediction titles</li>
                  <li>Prediction outcomes</li>
                  <li>Prediction timestamps</li>
                  <li>Your historical betting activity (wagers and results)</li>
                </ul>
              </div>
              
              <p className="text-gray-300 leading-relaxed mt-3">
                This data is used solely for the purpose of displaying and analyzing your Twitch prediction activity in your browser.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">2. What We Do Not Collect</h3>
              <p className="text-gray-300 leading-relaxed mb-2">
                Statsense does not collect, access, or store any of the following:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                <li>Your Twitch username, email, or credentials</li>
                <li>Personally identifiable information (PII)</li>
                <li>Browsing history outside of Twitch.tv prediction pages</li>
                <li>Twitch account activity unrelated to predictions</li>
                <li>Cookies, IP addresses, or device fingerprints</li>
                <li>Analytics or telemetry of any kind</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-3">
                <span className="font-semibold text-primary-400">We do not use any third-party APIs, advertising trackers, or cloud storage services.</span>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">3. Data Storage and Security</h3>
              <p className="text-gray-300 leading-relaxed mb-2">
                All data is securely stored within your browser's local storage using standard Chrome extension APIs. No external servers are used. This means:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                <li><span className="font-semibold">No one else, including the developer, can access your data.</span></li>
                <li>Uninstalling the extension will automatically delete all stored data.</li>
                <li>You may also delete individual prediction entries from the extension interface at any time.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">4. Your Rights and Choices</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                <li>You may uninstall the extension at any time to remove all local data.</li>
                <li>You have full control over prediction data and can delete it at your discretion.</li>
                <li>You are not required to register or provide any information to use the extension.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">5. Children's Privacy</h3>
              <p className="text-gray-300 leading-relaxed">
                Statsense is not intended for users under the age of 13. We do not knowingly collect any information from children. If you believe a child has used the extension and inadvertently provided personal data, please contact us immediately.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">6. Changes to This Policy</h3>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy periodically. If changes are made, the updated policy will be linked on the Chrome Web Store listing or within the extension. Continued use of the extension constitutes acceptance of the new terms.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">7. Contact</h3>
              <p className="text-gray-300 leading-relaxed mb-2">
                If you have any questions, concerns, or feedback regarding this Privacy Policy, please contact us via:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                <li><span className="font-semibold">GitHub Discussions:</span> <a href="https://github.com/MrV1ctor/statsense/discussions" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors duration-200 underline">https://github.com/MrV1ctor/statsense/discussions</a></li>
                <li><span className="font-semibold">Email:</span> <a href="mailto:mr.v2ctor+chrome-extension@gmail.com" className="text-primary-400 hover:text-primary-300 transition-colors duration-200 underline">mr.v2ctor+chrome-extension@gmail.com</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">8. Jurisdiction</h3>
              <p className="text-gray-300 leading-relaxed">
                This policy is governed by the laws of the State of New Jersey, United States.
              </p>
            </div>
          </div>
        </div>
      )
    },
    terms: {
      title: "Terms of Service",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Statsense Terms of Service</h2>
            <p className="text-gray-400 text-sm">Effective Date: August 1st, 2025</p>
          </div>
          
          <p className="text-gray-300 leading-relaxed">
            Welcome to Statsense, a browser extension designed to provide statistical insights and enhancements for Twitch.tv prediction systems. By installing or using this extension, you agree to the following Terms of Service ("Terms"). If you do not agree, please do not use the extension.
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">1. Acceptance of Terms</h3>
              <p className="text-gray-300 leading-relaxed">
                By installing, accessing, or using Statsense (the "Extension"), you agree to be bound by these Terms. If you are using the Extension on behalf of an organization, you represent that you are authorized to accept these Terms on its behalf.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">2. Description of Service</h3>
              <div className="space-y-2">
                <p className="text-gray-300 leading-relaxed">
                  Statsense is a free browser extension that provides statistical tools and visual enhancements related to Twitch.tv's prediction system. It is intended solely for informational and entertainment purposes.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  <span className="font-semibold text-primary-400">Statsense is not affiliated with, endorsed by, or associated with Twitch Interactive, Inc.</span> Any references to Twitch are for compatibility and descriptive purposes only.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">3. User Responsibilities</h3>
              <p className="text-gray-300 leading-relaxed mb-2">
                You agree to use Statsense in compliance with all applicable laws and regulations. You must not:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                <li>Use the extension to gain unfair advantage in ways that violate Twitch's Terms of Service.</li>
                <li>Modify, reverse-engineer, or redistribute the extension.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-2">
                This extension does not access or collect personally identifiable information or Twitch account credentials.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">4. Disclaimer of Warranties</h3>
              <p className="text-gray-300 leading-relaxed mb-2">
                Statsense is provided <span className="font-semibold">"as is"</span> and <span className="font-semibold">"as available,"</span> without warranties of any kind, either express or implied. We do not guarantee:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                <li>Accuracy or reliability of statistical predictions.</li>
                <li>Uninterrupted or error-free operation.</li>
                <li>Compatibility with all versions of Twitch.</li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-2">
                We reserve the right to update, disable, or remove the extension at any time without notice.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">5. Limitation of Liability</h3>
              <p className="text-gray-300 leading-relaxed mb-2">
                To the maximum extent permitted by law, Statsense and its creator(s) shall not be liable for any damages, losses, or issues arising from your use of the extension, including but not limited to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
                <li>Loss of Twitch channel points or virtual currency.</li>
                <li>Missed predictions or erroneous advice.</li>
                <li>Third-party service changes or outages.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">6. Intellectual Property</h3>
              <p className="text-gray-300 leading-relaxed">
                All logos, names, and materials used in the extension are the property of their respective owners. <span className="font-semibold text-primary-400">"Statsense"</span> and its design are the intellectual property of the developer and may not be reused without permission.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">7. Changes to Terms</h3>
              <p className="text-gray-300 leading-relaxed">
                We may update these Terms from time to time. Continued use of the extension after any such updates constitutes acceptance of the new Terms. The current version of the Terms will always be linked from the extension's listing page.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">8. Termination</h3>
              <p className="text-gray-300 leading-relaxed">
                We reserve the right to suspend or terminate access to Statsense for any reason, including violations of these Terms or misuse of the extension.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">9. Contact</h3>
              <p className="text-gray-300 leading-relaxed">
                For bug reports, feedback, or inquiries, please use our official <a href="https://github.com/MrV1ctor/statsense/discussions" target="_blank" rel="noopener noreferrer" className="text-primary-400 hover:text-primary-300 transition-colors duration-200 underline">GitHub Discussions</a> or contact us via <a href="mailto:mr.v2ctor+chrome-extension@gmail.com" className="text-primary-400 hover:text-primary-300 transition-colors duration-200 underline">mr.v2ctor+chrome-extension@gmail.com</a>.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-2">10. Governing Law</h3>
              <p className="text-gray-300 leading-relaxed">
                These Terms are governed by and construed in accordance with the laws of the State of New Jersey, United States, without regard to conflict of law principles.
              </p>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <>
      <footer className="relative py-20 px-6 z-10 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center">
                  <img src={logoSvg} alt="Statsense Logo" className="w-6 h-6" />
                </div>
                <span className="text-2xl font-bold gradient-text">Statsense</span>
              </div>
              
              <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
                The ultimate Chrome extension for Twitch prediction analytics. 
                Track your performance, make smarter bets, and level up your prediction game.
              </p>
              
              {/* Social Links */}
              <div className="flex justify-center gap-4 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 glass rounded-xl flex items-center justify-center hover-glow"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5 text-gray-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800/50 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col items-center md:items-start gap-2"
              >
                <span className="text-gray-400 text-sm">© {currentYear} Statsense.</span>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <span>Made with</span>
                  <Heart className="w-4 h-4 text-red-400 fill-current" />
                  <span>for the Twitch community</span>
                </div>
              </motion.div>

              {/* Legal Links */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex gap-4 text-gray-400 text-sm"
              >
                <button 
                  onClick={() => openModal('privacy')}
                  className="px-3 py-2 rounded-lg hover:text-primary-400 hover:bg-white/5 transition-all duration-200 cursor-pointer"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => openModal('terms')}
                  className="px-3 py-2 rounded-lg hover:text-primary-400 hover:bg-white/5 transition-all duration-200 cursor-pointer"
                >
                  Terms of Service
                </button>
              </motion.div>
            </div>
          </div>

          {/* Easter Egg */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-gray-500 text-xs">
              🎮 Built by gamers, for gamers
            </p>
          </motion.div>
        </div>

        {/* Background Elements */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl"></div>
      </footer>

      {/* Modal for Privacy Policy and Terms */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="max-w-4xl max-h-[80vh] glass rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 border-b border-gray-700 flex justify-between items-center">
                <h3 className="text-white font-bold text-xl">{modalContent[activeModal].title}</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                {typeof modalContent[activeModal].content === 'string' ? (
                  <p className="text-gray-300 leading-relaxed">
                    {modalContent[activeModal].content}
                  </p>
                ) : (
                  modalContent[activeModal].content
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Footer
