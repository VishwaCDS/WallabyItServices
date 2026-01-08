import React, { useEffect, useState } from "react";
import { FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";

const FloatingChat = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Inject the external Collect script safely when component mounts
    try {
      // Set the global id expected by the script
      window.CollectId = "695df8111eeb3ff3ea5aa4dc";

      const s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://collectcdn.com/launcher.js";
      document.head.appendChild(s);

      return () => {
        // Clean up the script when the component unmounts
        if (s && s.parentNode) s.parentNode.removeChild(s);
      };
    } catch (e) {
      // Fail gracefully if DOM isn't available
      // (e.g., during some SSR environments)
      // eslint-disable-next-line no-console
      console.warn("Could not inject Collect script:", e);
    }
  }, []);

  return (
    <div className="floating-chat-wrapper">
      <div className={`floating-chat ${open ? "open" : ""}`}>
        {open && (
          <div className="chat-window">
            <div className="chat-header">
              <h4>Chat with us</h4>
              <button
                className="close-btn"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
              >
                <FaTimes />
              </button>
            </div>

            <div className="chat-body">
              <p className="chat-empty">Hi! How can we help you today?</p>
            </div>

            <div className="chat-input">
              <input type="text" placeholder="Type a message..." />
              <button className="send-btn" aria-label="Send message">
                <FaPaperPlane />
              </button>
            </div>
          </div>
        )}

        <button
          className="chat-toggle-btn"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle chat"
        >
          <FaComments />
        </button>
      </div>
    </div>
  );
};

export default FloatingChat;
