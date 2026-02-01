import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMessageCircle, FiX } from 'react-icons/fi'

const Bot = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! I'm your space guide. Click on any planet to explore!", sender: 'bot' }
    ])

    const quickResponses = [
        "Tell me about your skills",
        "Show me your projects",
        "What's your experience?",
        "How can I contact you?"
    ]

    const handleQuickResponse = (response) => {
        const newMessage = { id: Date.now(), text: response, sender: 'user' }
        setMessages([...messages, newMessage])

        setTimeout(() => {
            const botResponse = {
                id: Date.now() + 1,
                text: "Navigate to the corresponding planet to explore that section! Each planet represents a different aspect of my portfolio.",
                sender: 'bot'
            }
            setMessages(prev => [...prev, botResponse])
        }, 1000)
    }

    return (
        <>
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-br from-secondary to-secondary-light rounded-full shadow-2xl flex items-center justify-center text-accent hover:shadow-accent/50 transition-shadow duration-300"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FiX size={24} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FiMessageCircle size={24} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="fixed bottom-28 right-8 z-50 w-80 md:w-96 bg-primary-light/95 backdrop-blur-md rounded-2xl shadow-2xl border border-secondary overflow-hidden"
                    >
                        <div className="bg-gradient-to-r from-secondary to-secondary-light p-4">
                            <h3 className="text-lg font-heading font-bold text-accent flex items-center gap-2">
                                <span className="inline-block w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                                Space Guide Bot
                            </h3>
                            <p className="text-accent/80 text-xs mt-1">Here to help you navigate</p>
                        </div>

                        <div className="p-4 max-h-80 overflow-y-auto space-y-3">
                            {messages.map((message) => (
                                <motion.div
                                    key={message.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-lg ${message.sender === 'user'
                                            ? 'bg-secondary text-accent'
                                            : 'bg-primary text-accent border border-secondary'
                                            }`}
                                    >
                                        <p className="text-sm">{message.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="p-4 border-t border-secondary bg-primary/50">
                            <p className="text-secondary-light text-xs mb-3">Quick actions:</p>
                            <div className="grid grid-cols-2 gap-2">
                                {quickResponses.map((response, index) => (
                                    <motion.button
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => handleQuickResponse(response)}
                                        className="text-xs bg-secondary/50 hover:bg-secondary text-accent px-3 py-2 rounded-lg transition-colors duration-300 border border-secondary-light"
                                    >
                                        {response}
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Bot