import React, { useState, useEffect } from "react";
import "./Chatbot.css";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);  // Controls chatbot visibility
  const [messages, setMessages] = useState([
    { text: "👋 Hello! How can I assist you?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  useEffect(() => {
    // Automatically send a message when user moves cursor
    const handleUserActivity = () => {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "Need any help? Click me! 🤖", sender: "bot" }
        ]);
      }, 3000);
      
      window.removeEventListener("mousemove", handleUserActivity);
    };

    window.addEventListener("mousemove", handleUserActivity);
    
    return () => window.removeEventListener("mousemove", handleUserActivity);
  }, []);

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    // Add user message
    setMessages([...messages, { text: input, sender: "user" }]);

    // Simulated chatbot response (Replace with API call for AI response)
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "I'm just a bot! But I'll try to help. 😊", sender: "bot" }
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="chatbot-container">
      {/* Floating Chatbot Icon */}
      {!isOpen && (
        <div className="chatbot-icon" onClick={() => setIsOpen(true)}>
          <img src="/icons/Bhashinibot.png" alt="Chatbot" />
        </div>
      )}

      {/* Chatbox when open */}
      {isOpen && (
        <div className="chatbox">
          <div className="chatbox-header">
            <span>🧠 AI Chatbot</span>
            <button className="close-btn" onClick={() => setIsOpen(false)}>✖</button>
          </div>
          <div className="chatbox-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbox-footer">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
