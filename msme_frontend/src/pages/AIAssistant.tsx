import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Sparkles } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content:
        "Hello! I'm your MSME Credit Intelligence Assistant. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("https://msme-fi46.onrender.com/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage.content,
        }),
      });

      if (!response.ok) {
        throw new Error("Chatbot API failed");
      }

      const data = await response.json();

      const botReply: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content: data.reply,
      };

      setMessages((prev) => [...prev, botReply]);
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now() + 2,
        role: "assistant",
        content:
          "Sorry, I'm currently unable to connect to the chatbot service.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <PageLayout showFooter={false}>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col">
        <div className="gradient-bg-soft py-6 text-center border-b border-border/50">
          <div className="flex items-center justify-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <h1 className="font-display font-bold text-lg text-foreground">
              AI Credit Assistant
            </h1>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-6 max-w-3xl mx-auto w-full">
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-3 mb-5 ${
                  msg.role === "user" ? "flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                    msg.role === "assistant"
                      ? "gradient-bg text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <Bot className="w-4 h-4" />
                  ) : (
                    <User className="w-4 h-4" />
                  )}
                </div>
                <div
                  className={`max-w-[80%] rounded-2xl px-5 py-3.5 text-sm leading-relaxed ${
                    msg.role === "assistant"
                      ? "bg-card soft-shadow border border-border/30 text-foreground"
                      : "gradient-bg text-primary-foreground"
                  }`}
                >
                  {msg.content}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {isTyping && (
            <div className="flex gap-3 mb-5">
              <div className="w-8 h-8 rounded-xl gradient-bg flex items-center justify-center text-primary-foreground shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-card rounded-2xl px-5 py-3.5 soft-shadow border border-border/30">
                Typing...
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        <div className="border-t border-border/50 p-4 bg-card/50 backdrop-blur-xl">
          <div className="max-w-3xl mx-auto flex gap-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask about schemes, eligibility, or application process..."
              className="flex-1 px-5 py-3 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition"
            />
            <button
              onClick={handleSend}
              className="px-4 py-3 gradient-bg text-primary-foreground rounded-xl hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AIAssistant;