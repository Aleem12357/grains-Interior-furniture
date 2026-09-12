"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Sparkles,
  Send,
  Compass,
  Box,
  Calendar,
  ChevronRight,
  Bot,
  User,
  Palette,
  Layers,
  HelpCircle
} from "lucide-react";

type Option = {
  label: string;
  value: string;
  icon?: React.ReactNode;
  href?: string;
};

type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
  options?: Option[];
  timestamp: string;
};

const initialMessages: Message[] = [
  {
    id: "1",
    sender: "bot",
    text: "Welcome to GRAINS Interior & Furniture! I'm your AI Design Assistant. How can I help elevate your living sanctuary today?",
    options: [
      {
        label: "Browse 3D Furniture Catalog",
        value: "catalog",
        icon: <Box className="w-3.5 h-3.5 text-[#9A7B56]" />,
        href: "/products",
      },
      {
        label: "Take Design Style Quiz",
        value: "quiz",
        icon: <Compass className="w-3.5 h-3.5 text-[#9A7B56]" />,
      },
      {
        label: "Ask Timber & Material Advice",
        value: "materials",
        icon: <Palette className="w-3.5 h-3.5 text-[#9A7B56]" />,
      },
      {
        label: "Schedule Consultation",
        value: "consultation",
        icon: <Calendar className="w-3.5 h-3.5 text-[#9A7B56]" />,
        href: "/contact",
      },
    ],
    timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
  },
];

export default function IntroBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleOptionClick = (option: Option) => {
    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: option.label,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      let botResponse: Message;

      if (option.value === "catalog") {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "Explore our curated 3D furniture collections with interactive rotation and custom material specifications.",
          options: [
            { label: "Go to Collections Page", value: "go_catalog", href: "/products" },
            { label: "Ask Another Question", value: "restart" },
          ],
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
      } else if (option.value === "quiz") {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "What best describes your ideal living sanctuary atmosphere?",
          options: [
            { label: "Warm Japandi / Organic Modern", value: "quiz_japandi" },
            { label: "Sleek Architectural Minimalism", value: "quiz_minimalist" },
            { label: "Luxury Mid-Century Craft", value: "quiz_midcentury" },
          ],
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
      } else if (option.value.startsWith("quiz_")) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "Excellent choice! Our designers specialize in creating harmonious spaces with solid white oak, charcoal wool accents, and ambient lighting tailored to that exact aesthetic.",
          options: [
            { label: "Book Consultation for this Style", value: "consultation", href: "/contact" },
            { label: "Browse Catalog", value: "catalog", href: "/products" },
          ],
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
      } else if (option.value === "materials") {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "GRAINS uses 100% sustainably harvested European White Oak, Italian Walnut, and honed Travertine Marble. All finishes are treated with natural non-toxic organic oils.",
          options: [
            { label: "View Our Philosophy", value: "about", href: "/about" },
            { label: "Explore Collections", value: "catalog", href: "/products" },
          ],
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
      } else if (option.value === "consultation") {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "We offer private 1-on-1 consultations with our senior interior architects. Click below to reserve your appointment.",
          options: [
            { label: "Book Free Studio Consultation", value: "go_contact", href: "/contact" },
          ],
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
      } else {
        botResponse = {
          id: (Date.now() + 1).toString(),
          sender: "bot",
          text: "How else can I assist your architectural design journey?",
          options: initialMessages[0].options,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        };
      }

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 700);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue;
    setInputValue("");

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: `Thank you for asking about "${userText}". Our design team can customize dimensions, materials, and lighting for your specific layout.`,
        options: [
          { label: "Explore Collections", value: "catalog", href: "/products" },
          { label: "Schedule Consultation", value: "consultation", href: "/contact" },
        ],
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group p-4 rounded-full bg-[#1C1917] text-[#F5F2EB] shadow-2xl border border-[#9A7B56]/60 flex items-center justify-center hover:bg-[#9A7B56] transition-colors duration-300"
          aria-label="Toggle AI Intro Bot"
        >
          <span className="absolute -inset-1 rounded-full bg-[#9A7B56]/30 animate-ping opacity-75 pointer-events-none" />

          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <div className="flex items-center gap-2">
              <Bot className="w-6 h-6 text-[#9A7B56] group-hover:text-white transition-colors" />
              <span className="hidden sm:inline text-xs uppercase tracking-wider font-semibold pr-1">
                Design Bot
              </span>
            </div>
          )}

          {!isOpen && (
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#656D4A] border-2 border-[#1C1917] rounded-full" />
          )}
        </motion.button>
      </div>

      {/* Chat Drawer Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 max-h-[550px] h-[520px] bg-[#F5F2EB] rounded-3xl shadow-2xl border border-[#1C1917]/15 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#1C1917] px-5 py-4 text-[#F5F2EB] flex items-center justify-between border-b border-[#9A7B56]/30">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#9A7B56]/20 border border-[#9A7B56] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#9A7B56]" />
                </div>
                <div>
                  <h3 className="font-serif-grains text-sm font-bold tracking-wide text-white">
                    GRAINS Assistant
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#656D4A]" />
                    <span className="text-[10px] text-[#F5F2EB]/70 uppercase tracking-widest font-mono">
                      Active Online
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-[#F5F2EB]/60 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F5F2EB]">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`flex items-start gap-2 max-w-[85%] ${
                      msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shrink-0 ${
                        msg.sender === "user"
                          ? "bg-[#9A7B56] text-white"
                          : "bg-[#1C1917] text-[#9A7B56]"
                      }`}
                    >
                      {msg.sender === "user" ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                    </div>

                    <div
                      className={`px-4 py-3 rounded-2xl text-xs leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-[#1C1917] text-[#F5F2EB] rounded-tr-none shadow-sm"
                          : "bg-white border border-[#1C1917]/10 text-[#1C1917] rounded-tl-none shadow-sm"
                      }`}
                    >
                      <p>{msg.text}</p>
                      <span className="block text-[9px] text-[#1C1917]/40 mt-1 text-right">
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>

                  {/* Option Buttons */}
                  {msg.options && (
                    <div className="mt-2 pl-9 space-y-1.5 w-full">
                      {msg.options.map((opt, i) =>
                        opt.href ? (
                          <Link
                            key={i}
                            href={opt.href}
                            onClick={() => setIsOpen(false)}
                            className="w-full text-left px-3.5 py-2 bg-[#EFECE4] hover:bg-[#9A7B56] hover:text-white text-[#1C1917] rounded-xl text-xs font-medium border border-[#1C1917]/10 transition-colors flex items-center justify-between group"
                          >
                            <span className="flex items-center gap-2">
                              {opt.icon}
                              {opt.label}
                            </span>
                            <ChevronRight className="w-3.5 h-3.5 text-[#9A7B56] group-hover:text-white" />
                          </Link>
                        ) : (
                          <button
                            key={i}
                            onClick={() => handleOptionClick(opt)}
                            className="w-full text-left px-3.5 py-2 bg-[#EFECE4] hover:bg-[#9A7B56] hover:text-white text-[#1C1917] rounded-xl text-xs font-medium border border-[#1C1917]/10 transition-colors flex items-center justify-between group"
                          >
                            <span className="flex items-center gap-2">
                              {opt.icon}
                              {opt.label}
                            </span>
                            <ChevronRight className="w-3.5 h-3.5 text-[#9A7B56] group-hover:text-white" />
                          </button>
                        )
                      )}
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-xs text-[#1C1917]/50 pl-2">
                  <div className="w-6 h-6 rounded-full bg-[#1C1917] flex items-center justify-center text-[#9A7B56]">
                    <Bot className="w-3 h-3" />
                  </div>
                  <div className="flex gap-1 bg-white px-3 py-2 rounded-full border border-[#1C1917]/10">
                    <span className="w-1.5 h-1.5 bg-[#9A7B56] rounded-full animate-bounce" />
                    <span className="w-1.5 h-1.5 bg-[#9A7B56] rounded-full animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 bg-[#9A7B56] rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Form Input */}
            <form
              onSubmit={handleSendMessage}
              className="p-3 bg-white border-t border-[#1C1917]/10 flex items-center gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about design, 3D models, pricing..."
                className="flex-1 bg-[#F5F2EB] px-3.5 py-2 rounded-xl text-xs text-[#1C1917] placeholder-[#1C1917]/40 focus:outline-none focus:ring-1 focus:ring-[#9A7B56]"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="p-2 bg-[#1C1917] hover:bg-[#9A7B56] disabled:opacity-40 text-white rounded-xl transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
