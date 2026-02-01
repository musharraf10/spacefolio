import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

const StarsBackground = ({ scrollY }) => {
    const stars = useMemo(() => {
        return Array.from({ length: 200 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 0.5,
            opacity: Math.random() * 0.7 + 0.3,
            duration: Math.random() * 3 + 2
        }))
    }, [])

    const nebulaClouds = useMemo(() => {
        return Array.from({ length: 5 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 300 + 200,
            opacity: Math.random() * 0.15 + 0.05
        }))
    }, [])

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-space-dark via-space-blue to-black" />

            <motion.div
                style={{ y: scrollY * 0.5 }}
                className="absolute inset-0"
            >
                {nebulaClouds.map((cloud) => (
                    <motion.div
                        key={cloud.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: cloud.opacity }}
                        transition={{ duration: 2, delay: cloud.id * 0.3 }}
                        className="absolute rounded-full blur-3xl"
                        style={{
                            left: `${cloud.x}%`,
                            top: `${cloud.y}%`,
                            width: `${cloud.size}px`,
                            height: `${cloud.size}px`,
                            background: `radial-gradient(circle, rgba(65, 90, 119, ${cloud.opacity}) 0%, transparent 70%)`
                        }}
                    />
                ))}
            </motion.div>

            <motion.div
                style={{ y: scrollY * 0.3 }}
                className="absolute inset-0"
            >
                {stars.map((star) => (
                    <motion.div
                        key={star.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [star.opacity, star.opacity * 0.3, star.opacity] }}
                        transition={{
                            duration: star.duration,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute bg-white rounded-full"
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, ${star.opacity})`
                        }}
                    />
                ))}
            </motion.div>

            <motion.div
                style={{ y: scrollY * 0.2 }}
                className="absolute inset-0"
            >
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl" />
                <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-indigo-900/10 rounded-full blur-3xl" />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-t from-space-dark/50 via-transparent to-transparent" />
        </div>
    )
}

export default StarsBackground