import React, { useState } from 'react';
import { MessageSquare, X, Send, Bot, Sparkles, User } from 'lucide-react';

export const LiveChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: 'bot' | 'user'; text: string }[]>([
    { sender: 'bot', text: 'Hello! 👋 Welcome to AA Animations. How can we help you with your animation or production project today?' }
  ]);
  const [inputText, setInputText] = useState('');

  const quickReplies = [
    'How much does a 3D animation cost?',
    'What is your typical turnaround time?',
    'Can I book a live consultation?'
  ];

  const handleSend = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { sender: 'user', text }]);
    setInputText('');

    // Simulated Bot AI Response
    setTimeout(() => {
      let reply = "Thank you for reaching out! A senior creative producer will review your inquiry. You can also calculate instant estimate using our Cost Estimator button in the top menu.";
      if (text.toLowerCase().includes('cost') || text.toLowerCase().includes('price')) {
        reply = "Our animation and production services are custom-tailored to your project scope. Use our Cost Estimator tool in the top bar for an instant itemized estimate!";
      } else if (text.toLowerCase().includes('turnaround') || text.toLowerCase().includes('time')) {
        reply = "Typical production turnaround ranges from 1 to 3 weeks. Expedited rush delivery is also available for tight broadcast deadlines.";
      } else if (text.toLowerCase().includes('consultation') || text.toLowerCase().includes('book')) {
        reply = "You can submit a project inquiry via our Contact page or use the WhatsApp button to chat directly with our studio team!";
      }

      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-3 sm:bottom-6 right-3 sm:right-6 z-40">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-cyan-600 to-purple-600 text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-transform relative group border-2 border-cyan-400/80 cursor-pointer"
          title="Live Support Chat"
        >
          <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="absolute -top-1 -right-1 w-3 sm:w-3.5 h-3 sm:h-3.5 bg-emerald-400 rounded-full border-2 border-slate-950 animate-ping" />
          <span className="absolute -top-1 -right-1 w-3 sm:w-3.5 h-3 sm:h-3.5 bg-emerald-400 rounded-full border-2 border-slate-950" />
        </button>
      ) : (
        <div className="w-[calc(100vw-2rem)] sm:w-96 max-w-sm bg-slate-900 border border-slate-800 text-white rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[440px] sm:h-[480px] animate-fade-in">
          {/* Chat Header */}
          <div className="px-5 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center text-white">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-white">AA Animations AI Support</h4>
                <p className="text-[10px] text-emerald-400 font-semibold">Online • Studio Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Window */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex items-start space-x-2 ${
                  m.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {m.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-cyan-600 flex items-center justify-center text-white text-[10px] flex-shrink-0 mt-1">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-2xl max-w-[80%] leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-cyan-600 text-white rounded-tr-none'
                      : 'bg-slate-800 text-slate-200 border border-slate-700 rounded-tl-none'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Reply Chips */}
          <div className="px-3 py-1.5 border-t border-slate-800/80 bg-slate-950 flex flex-wrap gap-1 text-[10px]">
            {quickReplies.map((qr, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(qr)}
                className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-cyan-900 text-slate-300 transition-colors"
              >
                {qr}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-slate-950 border-t border-slate-800 flex items-center space-x-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 bg-slate-800 text-white placeholder-slate-500 text-xs px-3 py-2 rounded-xl border border-slate-700 outline-none focus:border-cyan-500"
            />
            <button
              type="submit"
              className="p-2.5 rounded-xl bg-cyan-600 text-white hover:bg-cyan-500 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
