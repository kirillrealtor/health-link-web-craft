
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your dental assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickQuestions = [
    "What services do you offer?",
    "How can I book an appointment?",
    "What are your office hours?"
  ];

  const handleQuickQuestion = (question: string) => {
    const userMessage = {
      id: messages.length + 1,
      text: question,
      isBot: false,
      timestamp: new Date()
    };

    const botResponse = getBotResponse(question);
    const botMessage = {
      id: messages.length + 2,
      text: botResponse,
      isBot: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    const botResponse = getBotResponse(inputValue);
    const botMessage = {
      id: messages.length + 2,
      text: botResponse,
      isBot: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botMessage]);
    setInputValue('');
  };

  const getBotResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('service') || lowerQuestion.includes('treatment')) {
      return "We offer comprehensive dental services including general dentistry, cosmetic procedures, dental implants, orthodontics, oral surgery, and emergency care. Each treatment is tailored to your specific needs with the latest technology.";
    }
    
    if (lowerQuestion.includes('appointment') || lowerQuestion.includes('book') || lowerQuestion.includes('schedule')) {
      return "You can easily book an appointment by calling us at (555) 123-4567 or clicking the 'Book Appointment' button on our website. We offer flexible scheduling to accommodate your busy lifestyle.";
    }
    
    if (lowerQuestion.includes('hours') || lowerQuestion.includes('time') || lowerQuestion.includes('open')) {
      return "Our office hours are Monday-Friday 8:00 AM - 6:00 PM, and Saturday 9:00 AM - 3:00 PM. We're closed on Sundays. For emergencies, we provide 24/7 emergency care.";
    }
    
    if (lowerQuestion.includes('emergency') || lowerQuestion.includes('urgent')) {
      return "We provide 24/7 emergency dental care for urgent situations like severe pain, broken teeth, or dental trauma. Please call our emergency line immediately for immediate assistance.";
    }
    
    if (lowerQuestion.includes('insurance') || lowerQuestion.includes('payment')) {
      return "We accept most major insurance plans and offer flexible payment options including payment plans. Our staff will help verify your insurance coverage and maximize your benefits.";
    }
    
    if (lowerQuestion.includes('location') || lowerQuestion.includes('address')) {
      return "We're conveniently located at 5501 Seminary Rd #2112S, Falls Church, VA 22041. You can find detailed directions on our contact page, or call us for assistance reaching our modern dental facility.";
    }
    
    return "Thank you for your question! For specific inquiries about treatments, appointments, or any dental concerns, please don't hesitate to call us at (555) 123-4567 or schedule a consultation. Our experienced team is here to help you achieve optimal oral health.";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating 3D Tooth Chatbot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div 
          className={`relative transition-all duration-300 ${isOpen ? 'scale-95' : 'scale-100 hover:scale-105'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* 3D Tooth with Orbital Waves */}
          <div className="relative w-20 h-20 cursor-pointer">
            {/* Orbital Ring 1 */}
            <div className="absolute inset-0 w-20 h-20 border-2 border-teal-400/70 rounded-full opacity-80 animate-spin-slow" 
                 style={{ animation: 'orbit1 8s linear infinite' }}>
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-teal-500 rounded-full shadow-lg"></div>
            </div>
            
            {/* Orbital Ring 2 */}
            <div className="absolute inset-1 w-18 h-18 border-2 border-cyan-400/60 rounded-full opacity-70 animate-spin-slow" 
                 style={{ animation: 'orbit2 6s linear infinite reverse' }}>
              <div className="absolute -top-0.5 right-0 w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-lg"></div>
            </div>
            
            {/* Orbital Ring 3 */}
            <div className="absolute inset-2 w-16 h-16 border border-mint-300/50 rounded-full opacity-60 animate-spin-slow" 
                 style={{ animation: 'orbit3 10s linear infinite' }}>
              <div className="absolute bottom-0 left-1/4 w-1 h-1 bg-mint-400 rounded-full shadow-lg"></div>
            </div>
            
            {/* 3D Tooth Center */}
            <div className="absolute inset-3 w-14 h-14 flex items-center justify-center">
              <div className="relative w-12 h-14 bg-gradient-to-b from-gray-100 via-white to-gray-200 rounded-t-3xl shadow-2xl transform-gpu border border-gray-300">
                {/* Tooth Crown - Main visible part */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-b from-white to-gray-100 rounded-t-3xl border-2 border-gray-400 shadow-inner"></div>
                
                {/* Tooth Roots */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1">
                  <div className="w-3 h-4 bg-gradient-to-b from-gray-200 to-gray-400 rounded-b-full mr-1 inline-block border border-gray-500"></div>
                  <div className="w-3 h-4 bg-gradient-to-b from-gray-200 to-gray-400 rounded-b-full inline-block border border-gray-500"></div>
                </div>
                
                {/* Tooth Shine Effect */}
                <div className="absolute top-1 left-3 w-3 h-4 bg-gradient-to-br from-white via-gray-50 to-transparent rounded-full opacity-90"></div>
                <div className="absolute top-2 right-3 w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-lg"></div>
                
                {/* Enhanced 3D Shadow */}
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-10 h-3 bg-gray-600 opacity-40 rounded-full blur-sm"></div>
              </div>
            </div>
            
            {/* Floating Particles */}
            <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-teal-400 rounded-full animate-ping shadow-lg" style={{ animationDelay: '0s' }}></div>
            <div className="absolute bottom-3 left-3 w-1 h-1 bg-cyan-400 rounded-full animate-ping shadow-lg" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1 w-0.5 h-0.5 bg-mint-400 rounded-full animate-ping shadow-lg" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden animate-scale-in">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-teal-600 to-cyan-500 p-4 text-white flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">Dental Assistant</h3>
              <p className="text-teal-100 text-sm">Ask me anything about our services!</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-teal-200 transition-colors p-1"
            >
              <X size={20} />
            </button>
          </div>

          {/* Quick Questions */}
          <div className="p-3 bg-gray-50 border-b">
            <p className="text-xs text-gray-600 mb-2">Quick questions:</p>
            <div className="flex flex-wrap gap-1">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full hover:bg-teal-200 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-2xl ${
                    message.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-gradient-to-r from-teal-600 to-cyan-500 text-white'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t bg-gray-50">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your question..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
              />
              <Button
                onClick={handleSendMessage}
                size="sm"
                className="rounded-full w-8 h-8 p-0 bg-gradient-to-r from-teal-600 to-cyan-500 hover:from-teal-700 hover:to-cyan-600"
              >
                <Send size={14} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
