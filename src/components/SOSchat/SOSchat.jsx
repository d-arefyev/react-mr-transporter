import React, { useEffect, useState } from "react";

import ChatIcon from "/icons/chat.svg";
import CloseIcon from "/icons/chat-close.svg";
import SendIcon from "/icons/chat-send.svg";
import AttachIcon from "/icons/chat-attach.svg";
import OperatorIcon from "/icons/chat-operator.svg";

import Input from "../../components/Input/Input";

import styles from "./SOSchat.module.scss";

const SOSButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOperatorMessageSent, setIsOperatorMessageSent] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  useEffect(() => {
    if (isChatOpen && !isOperatorMessageSent) {
      setMessages([{ sender: "operator", text: "Hallo! Wie kann ich Ihnen helfen?" }]);
      setIsOperatorMessageSent(true);
    }
  }, [isChatOpen, isOperatorMessageSent]);

  const handleSend = () => {
    if (input.trim() === "") return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
  };

  return (
    <div>
      {/* Chat Toggle Button */}
      <button onClick={toggleChat} className={styles.button}>
        {isChatOpen ? (
          <img src={CloseIcon} width={25} height={30} alt="Close chat" />
        ) : (
          <img src={ChatIcon} width={50} height={35} alt="Open chat" />
        )}
      </button>

      {/* Chat Box */}
      <div className={`${styles.chatBox} ${isChatOpen ? styles.open : ""}`}>
        <div className={styles.chatContent}>
          {/* Chat Header */}
          <div className={styles.chatHeader}>
            <div className={styles.chatHeaderContent}>
              <img src="/logo-white.svg" alt="Icon" width={207} height={13} />
              <span>Online-Hilfe</span>
            </div>
            {/* Close Button in Header */}
            <button
              onClick={toggleChat}
              className={styles.closeHeaderButton}
              aria-label="Close chat"
            >
              <img src={CloseIcon} alt="Close" />
            </button>
          </div>

          {/* Chat Body */}
          <div className={styles.chatBody}>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`${styles.messageWrapper} ${message.sender === "user" ? styles.userMessage : styles.operatorMessage
                  }`}
              >
                {message.sender !== "user" && (
                  <img src={OperatorIcon} className={styles.operatorIcon} alt="Operator" />
                )}
                <div
                  className={`${styles.message} ${message.sender === "user" ? styles.userMessageText : styles.operatorMessageText
                    }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input Field */}
          <div className={styles.inputFieldWrapper}>
            <Input
              type="text"
              placeholder="Ihre Nachricht ..."
              className={styles.inputField}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button onClick={handleSend} className={styles.sendButton}>
              <img src={SendIcon} alt="Send message"/>
            </button>
            <button className={styles.attachButton}>
              <img src={AttachIcon} alt="Attach file" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SOSButton;
