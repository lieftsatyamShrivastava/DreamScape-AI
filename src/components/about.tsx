"use client"

import { motion } from "framer-motion"
import { CheckCircle, XCircle } from "lucide-react"

const features = [
  {
    name: "High-Resolution Output",
    dreamscape: true,
    google: true,
    chatgpt: false,
  },
  {
    name: "Custom Style Transfer",
    dreamscape: true,
    google: false,
    chatgpt: false,
  },
  {
    name: "Real-time Collaboration",
    dreamscape: true,
    google: false,
    chatgpt: false,
  },
  {
    name: "Advanced Prompt Engineering",
    dreamscape: true,
    google: true,
    chatgpt: true,
  },
  {
    name: "Unlimited Generations",
    dreamscape: true,
    google: false,
    chatgpt: false,
  },
  {
    name: "Commercial Usage Rights",
    dreamscape: true,
    google: false,
    chatgpt: false,
  },
  {
    name: "API Access",
    dreamscape: true,
    google: true,
    chatgpt: true,
  },
  {
    name: "Fine-tuning on Custom Datasets",
    dreamscape: true,
    google: false,
    chatgpt: false,
  },
]

export default function Comparison() {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.h2
        className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Why DreamScape AI Outperforms the Competition
      </motion.h2>
      <motion.p
        className="text-xl text-center mb-12 text-gray-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
  &quot;See how DreamScape AI stacks up against Google AI and ChatGPT&apos;s image AI&quot;
  </motion.p>
      <motion.div
        className="overflow-x-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <table className="w-full border-collapse">
          <caption className="sr-only">Comparison of AI Image Generation Capabilities</caption>
          <thead>
            <tr className="bg-white/10 backdrop-blur-sm">
              <th className="p-4 text-left font-semibold text-gray-200">Feature</th>
              <th className="p-4 text-center font-semibold text-gray-200">DreamScape AI</th>
              <th className="p-4 text-center font-semibold text-gray-200">Google AI</th>
              <th className="p-4 text-center font-semibold text-gray-200">ChatGPT Image AI</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={feature.name} className={index % 2 === 0 ? "bg-white/5" : "bg-transparent"}>
                <td className="p-4 font-medium text-gray-300">{feature.name}</td>
                <td className="p-4 text-center">
                  {feature.dreamscape ? (
                    <CheckCircle className="inline-block text-green-500" />
                  ) : (
                    <XCircle className="inline-block text-red-500" />
                  )}
                </td>
                <td className="p-4 text-center">
                  {feature.google ? (
                    <CheckCircle className="inline-block text-green-500" />
                  ) : (
                    <XCircle className="inline-block text-red-500" />
                  )}
                </td>
                <td className="p-4 text-center">
                  {feature.chatgpt ? (
                    <CheckCircle className="inline-block text-green-500" />
                  ) : (
                    <XCircle className="inline-block text-red-500" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
      <motion.div
        className="mt-12 bg-white/10 backdrop-blur-lg rounded-lg p-8 shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-4">Why DreamScape AI Stands Out</h3>
        <ul className="space-y-4 text-gray-300">
          <li>
            <strong>Unparalleled Customization:</strong> Our advanced style transfer and fine-tuning capabilities allow for truly unique and personalized image generation.
          </li>
          <li>
            <strong>Collaborative Creation:</strong> Real-time collaboration features enable teams to work together seamlessly on image generation projects.
          </li>
          <li>
            <strong>Unlimited Potential:</strong> With unlimited generations and commercial usage rights, your creativity knows no bounds.
          </li>
          <li>
            <strong>Cutting-edge Technology:</strong> Our AI models are constantly updated with the latest advancements in machine learning and computer vision.
          </li>
          <li>
            <strong>Dedicated Support:</strong> Our team of AI experts is always available to help you get the most out of DreamScape AI.
          </li>
        </ul>
      </motion.div>
    </div>
  )
}