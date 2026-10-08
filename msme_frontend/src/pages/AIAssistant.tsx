import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Sparkles } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

const API_URL = "https://msme-sepia.vercel.app/api/chat";

const formatAssistantMessage = (content: string) => {
  const lines = content.split("\n");

  return (
    <div className="space-y-4">
      {lines.map((line, index) => {
        const trimmed = line.trim();

        // Empty line
        if (!trimmed) {
          return <div key={index} className="h-1" />;
        }

        // Section headings
        const sectionHeadings = [
          "Scheme Name",
          "What it is",
          "Key Benefits",
          "Eligibility",
          "How to Apply",
          "Important Note",
          "Key Information",
          "Application Process",
          "Documents Required",
          "Features",
          "Benefits",
          "Requirements",
        ];

        if (sectionHeadings.includes(trimmed)) {
          return (
            <div
              key={index}
              className="pt-1 text-sm font-bold text-primary"
            >
              {trimmed}
            </div>
          );
        }

        // Bullet points
        if (trimmed.startsWith("-")) {
          return (
            <div
              key={index}
              className="flex gap-3 text-sm leading-6 text-foreground/90"
            >
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              <span>{trimmed.substring(1).trim()}</span>
            </div>
          );
        }

        // Numbered steps
        const numberedMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);

        if (numberedMatch) {
          return (
            <div
              key={index}
              className="flex gap-3 text-sm leading-6 text-foreground/90"
            >
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold shrink-0">
                {numberedMatch[1]}
              </span>

              <span className="pt-0.5">
                {numberedMatch[2]}
              </span>
            </div>
          );
        }

        // Detect scheme name / standalone first line
        if (
          index === 0 ||
          (index === 2 && trimmed.length < 100)
        ) {
          return (
            <div
              key={index}
              className="text-base font-semibold text-foreground"
            >
              {trimmed}
            </div>
          );
        }

        // Normal paragraph
        return (
          <p
            key={index}
            className="text-sm leading-6 text-foreground/90"
          >
            {trimmed}
          </p>
        );
      })}
    </div>
  );
};

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
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const handleSend = async () => {
    const trimmedInput = input.trim();

    if (!trimmedInput || isTyping) return;

    const userMessage: Message = {
      id: Date.now(),
      role: "user",
      content: trimmedInput,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: trimmedInput,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();

        console.error(
          "Chatbot API Error:",
          response.status,
          errorText
        );

        throw new Error("Chatbot API failed");
      }

      const data = await response.json();

      const botReply: Message = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          data.reply ||
          "I couldn't generate a response at the moment.",
      };

      setMessages((prev) => [...prev, botReply]);
    } catch (error) {
      console.error("AI Assistant Error:", error);

      const errorMessage: Message = {
        id: Date.now() + 2,
        role: "assistant",
        content:
          "Sorry, I'm currently unable to connect to the AI service. Please try again in a moment.",
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <PageLayout showFooter={false}>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col bg-background">

        {/* Header */}
        <div className="gradient-bg-soft py-5 text-center border-b border-border/50">
          <div className="flex items-center justify-center gap-2">
            <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center shadow-sm">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>

            <div className="text-left">
              <h1 className="font-display font-bold text-lg text-foreground">
                AI Credit Assistant
              </h1>

              <p className="text-xs text-muted-foreground">
                MSME Schemes, Subsidies & Credit Guidance
              </p>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="max-w-3xl mx-auto w-full">

            <AnimatePresence initial={false}>
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className={`flex gap-3 mb-6 ${
                    msg.role === "user"
                      ? "flex-row-reverse"
                      : ""
                  }`}
                >

                  {/* Avatar */}
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

                  {/* Message */}
                  <div
                    className={`max-w-[85%] rounded-2xl px-5 py-4 ${
                      msg.role === "assistant"
                        ? "bg-card border border-border/40 text-foreground shadow-sm"
                        : "gradient-bg text-primary-foreground shadow-sm"
                    }`}
                  >
                    {msg.role === "assistant" ? (
                      formatAssistantMessage(msg.content)
                    ) : (
                      <p className="text-sm leading-6 whitespace-pre-wrap">
                        {msg.content}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing Indicator */}
            {isTyping && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className="flex gap-3 mb-6"
              >
                <div className="w-8 h-8 rounded-xl gradient-bg flex items-center justify-center text-primary-foreground shrink-0">
                  <Bot className="w-4 h-4" />
                </div>

                <div className="bg-card rounded-2xl px-5 py-4 shadow-sm border border-border/40">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce" />
                    <span
                      className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="w-2 h-2 rounded-full bg-muted-foreground animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={bottomRef} />
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-border/50 p-4 bg-card/80 backdrop-blur-xl">
          <div className="max-w-3xl mx-auto">

            <div className="flex gap-3 items-center">

              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                disabled={isTyping}
                placeholder="Ask about schemes, eligibility, subsidies..."
                className="flex-1 px-5 py-3.5 bg-background border border-border rounded-xl text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/50 transition disabled:opacity-60"
              />

              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="w-12 h-12 flex items-center justify-center gradient-bg text-primary-foreground rounded-xl hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>

            </div>

            <p className="text-center text-[11px] text-muted-foreground mt-2">
              CreditIntel AI provides informational guidance. Verify
              scheme details with official government sources.
            </p>

          </div>
        </div>

      </div>
    </PageLayout>
  );
};

export default AIAssistant;
