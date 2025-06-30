
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
      return "We're conveniently located in Wellness City. You can find our exact address and directions on our contact page, or call us for detailed directions to our modern dental facility.";
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
      {/* Floating Chatbot Button with 3D Tooth and Waves */}
      <div className="fixed bottom-6 right-6 z-50">
        <div 
          className={`relative transition-all duration-300 ${isOpen ? 'scale-95' : 'scale-100 hover:scale-110'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Animated Waves */}
          <div className="absolute inset-0 animate-ping">
            <div className="w-16 h-16 rounded-full bg-teal-400 opacity-20"></div>
          </div>
          <div className="absolute inset-0 animate-pulse" style={{ animationDelay: '0.5s' }}>
            <div className="w-16 h-16 rounded-full bg-teal-300 opacity-30"></div>
          </div>
          <div className="absolute inset-0 animate-ping" style={{ animationDelay: '1s' }}>
            <div className="w-16 h-16 rounded-full bg-mint-400 opacity-25"></div>
          </div>
          
          {/* 3D Tooth Button */}
          <button className="relative w-16 h-16 bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-full shadow-2xl border-2 border-teal-200 hover:border-teal-300 transition-all duration-300 hover:shadow-xl group">
            {/* Tooth Shape */}
            <div className="absolute inset-2 bg-gradient-to-b from-white to-gray-50 rounded-full border border-gray-200 shadow-inner group-hover:shadow-lg transition-all duration-300">
              {/* Tooth Details */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-8 bg-gradient-to-b from-white via-gray-50 to-gray-100 rounded-t-full relative shadow-sm">
                  {/* Tooth Crown */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-5 bg-white rounded-t-full border border-gray-200"></div>
                  {/* Tooth Root */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-gradient-to-b from-gray-50 to-gray-100 rounded-b-full"></div>
                </div>
              </div>
            </div>
            
            {/* Sparkle Effect */}
            <div className="absolute top-2 right-2 w-1 h-1 bg-teal-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-3 left-3 w-0.5 h-0.5 bg-mint-400 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
          </button>
        </div>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden animate-scale-in">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-teal-600 to-mint-500 p-4 text-white flex justify-between items-center">
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
                      : 'bg-gradient-to-r from-teal-600 to-mint-500 text-white'
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
                className="rounded-full w-8 h-8 p-0 bg-gradient-to-r from-teal-600 to-mint-500 hover:from-teal-700 hover:to-mint-600"
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
