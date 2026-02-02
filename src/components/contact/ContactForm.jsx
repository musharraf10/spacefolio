import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus("");

        const payload = {
            ...formData,
            time: new Date().toLocaleString(),
        };

        emailjs
            .send(
                "service_sil0da9",
                "template_n39hhzb",
                payload,
                "gSsKD6hSXE00-lic4"
            )
            .then(() => {
                setStatus("Message sent successfully.");
                setFormData({ name: "", email: "", message: "" });
            })
            .catch(() => {
                setStatus("Failed to send message. Please try again.");
            })
            .finally(() => setIsSending(false));
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            className="w-full max-w-lg mx-auto space-y-5 bg-card/80 backdrop-blur-md border border-border rounded-xl p-5 sm:p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            {/* Name */}
            <div>
                <label className="block text-sm text-muted-foreground mb-1">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-lg px-3 py-2 bg-background border border-border focus:ring-2 focus:ring-primary outline-none"
                />
            </div>

            {/* Email */}
            <div>
                <label className="block text-sm text-muted-foreground mb-1">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-lg px-3 py-2 bg-background border border-border focus:ring-2 focus:ring-primary outline-none"
                />
            </div>

            {/* Message */}
            <div>
                <label className="block text-sm text-muted-foreground mb-1">
                    Message
                </label>
                <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here…"
                    className="w-full rounded-lg px-3 py-2 bg-background border border-border focus:ring-2 focus:ring-primary outline-none resize-none"
                />
            </div>

            {/* Submit */}
            <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                disabled={isSending}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium disabled:opacity-60"
            >
                <Send className="w-4 h-4" />
                {isSending ? "Sending..." : "Send Message"}
            </motion.button>

            {/* Status */}
            {status && (
                <p className="text-xs text-center text-muted-foreground">
                    {status}
                </p>
            )}
        </motion.form>
    );
};

export default ContactForm;
