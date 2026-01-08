// import React, { useState, useRef, useEffect } from 'react';
// import { Sun, Moon, Trash2, Send } from 'lucide-react';
// import colors from '../color';
// import api from '../api/axios';
// import { useNavigate } from 'react-router-dom';

// export default function ArtisticChatbot() {
//   const navigate = useNavigate();
//   const [isDark, setIsDark] = useState(false);
//   const [inputValue, setInputValue] = useState('');
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       text: "Hello! I'm your Smart Assistant. How can I brighten your day today?",
//       isBot: true,
//       time: '12:16 PM'
//     }
//   ]);

//   const messagesEndRef = useRef(null);
//   const theme = isDark ? colors.dark : colors.light;

//   // Auto-scroll to bottom when messages change
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   const handleSend = () => {
//     if (inputValue.trim()) {
//       setMessages([...messages, {
//         id: messages.length + 1,
//         text: inputValue,
//         isBot: false,
//         time: new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
//       }]);
//       setInputValue('');
//     }
//   };
//   const iconButtonStyle = {
//   backgroundColor: isDark
//     ? 'rgba(255, 255, 255, 0.15)'
//     : 'rgba(255, 251, 240, 0.9)',
//   border: `1px solid ${
//     isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 109, 31, 0.2)'
//   }`
// };
// const handleLogout = async () => {
//   try {
//     await api.post("/auth/logout"); // optional
//   } catch (err) {
//     console.log("Server logout skipped"+err);
//   }

//   localStorage.removeItem("token");
//   localStorage.removeItem("user");

//   navigate("/login");
// };
//   return (
//     <div
//       className="h-screen flex flex-col transition-colors duration-300 overflow-hidden"
//       style={{ backgroundColor: theme.background }}
//     >
//       {/* Header - Sticky with light background */}
//       <header
//         className="flex items-center justify-between px-8 py-6 border-b flex-shrink-0 backdrop-blur-sm"
//         style={{
//           borderColor: theme.border,
//           backgroundColor: isDark
//             ? 'rgba(30, 30, 35, 0.85)'  // Semi-transparent dark with blur
//             : 'rgba(253, 250, 245, 0.92)'  // Semi-transparent light with blur
//         }}
//       >
//         {/* Logo */}
//         <div className="flex items-center gap-3">
//           <img
//             src="../../public/chaticon.png"
//             alt="Artistic AI Logo"
//             className="w-14 h-14 object-contain transition-all duration-300"
//           />
//           <div>
//             <h1
//               className="text-3xl font-black"
//               style={{ color: theme.text }}
//             >
//               Artistic AI
//             </h1>
//           </div>
//         </div>

//         {/* Right Controls */}
//         <div className="flex items-center gap-4">
//           {/* Clear Chat Button */}
//           <button
//             onClick={() => setMessages([messages[0]])}
//             className="w-15 h-10 p-4 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
//             style={iconButtonStyle}
//           >
//            <span style={{ color: colors.orange }}> Clear Chat </span>
//           </button>

//            <button
//             onClick={() => handleLogout()}
//             className="w-15 h-10 p-5 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
//             style={iconButtonStyle}
//           >
//             <span style={{ color: colors.orange }}> Logout </span>
//           </button>

//           {/* Theme Toggle */}
//           <button
//             onClick={() => setIsDark(!isDark)}
//             className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 hover:scale-110 border-none  backdrop-blur-sm"
//             style={{
//               backgroundColor: isDark
//                 ? 'rgba(255, 255, 255, 0.15)'
//                 : 'rgba(255, 251, 240, 0.9)',
//               border: `1px solid ${isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 109, 31, 0.2)'}`
//             }}
//           >
//             {isDark ? (
//               <Sun className="w-6 h-6" style={{ color: colors.orange }} />
//             ) : (
//               <Moon className="w-6 h-6" style={{ color: colors.orange }} />
//             )}
//           </button>
//         </div>
//       </header>

//       {/* Chat Messages - Scrollable */}
//       <div className="flex-1 overflow-y-auto transparent-scrollbar px-8 py-6 flex flex-col items-center" style={{
//           scrollbarWidth: 'thin',
//           scrollbarColor: 'transparent transparent'
//         }}>
//         <div className="w-full max-w-4xl space-y-6">
//           {messages.map((message) => (
//             <div
//               key={message.id}
//               className={`flex items-start gap-4 ${message.isBot ? '' : 'flex-row-reverse'}`}
//             >
//               {/* Avatar - Bot or User */}
//               {message.isBot ? (
//                 <img
//                   src="../../public/chaticon.png"
//                   alt="Artistic AI Logo"
//                   className="w-14 h-19 object-contain transition-all duration-300"
//                 />
//               ) : (
//                 <div
//                   className="w-12  h-12 rounded-full flex items-center justify-center font-bold text-white text-lg flex-shrink-0"
//                   style={{ backgroundColor: colors.orange }}
//                 >
//                   Y
//                 </div>
//               )}

//               {/* Message Bubble */}
//               <div className={`flex flex-col ${message.isBot ? 'items-start' : 'items-end'} flex-1`}>
//                 <div
//                   className="px-8 py-3 rounded-[2rem] border-2 transition-all duration-300 hover:shadow-2xl max-w-2xl"
//                   style={{
//                     backgroundColor: message.isBot
//                       ? (isDark ? colors.dark.backgroundAlt : colors.white)
//                       : (isDark ? colors.darkGray : colors.darkGray),
//                     borderColor: message.isBot
//                       ? (isDark ? 'transparent' : 'rgba(255, 109, 31, 0.1)')
//                       : 'transparent',
//                     color: message.isBot ? theme.text : colors.white,
//                     boxShadow: message.isBot
//                       ? '0 10px 40px rgba(0, 0, 0, 0.08)'
//                       : '0 10px 40px rgba(0, 0, 0, 0.2)'
//                   }}
//                 >
//                   <p className="text-base leading-relaxed">{message.text}</p>
//                 </div>

//               </div>
//             </div>
//           ))}
//           {/* Invisible div for auto-scroll target */}
//           <div ref={messagesEndRef} />
//         </div>
//       </div>

//       {/* Input Area - Sticky */}
//       <div className="px-7 py-4 flex-shrink-0 " style={{ borderColor: theme.border }}>
//         <div
//           className="max-w-4xl mx-auto rounded-full shadow-2xl flex items-center  gap-4 px-8 py-2 border-2 transition-all duration-300 hover:shadow-[0_15px_60px_rgba(255,109,31,0.25)]"
//           style={{
//             backgroundColor: isDark ? colors.dark.backgroundAlt : colors.white,
//             borderColor: colors.orange,
//             boxShadow: '0 10px 50px rgba(255, 109, 31, 0.15)'
//           }}
//         >
//           <input
//             type="text"
//             value={inputValue}
//             onChange={(e) => setInputValue(e.target.value)}
//             onKeyPress={(e) => e.key === 'Enter' && handleSend()}
//             placeholder="Type your command..."
//             className="flex-1 bg-transparent outline-none text-base placeholder:text-opacity-50"
//             style={{ color: theme.text }}
//           />
//           <button
//             onClick={handleSend}
//             disabled={!inputValue.trim()}
//             className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 active:scale-95 disabled:hover:scale-100 disabled:hover:rotate-0"
//             style={{
//               backgroundColor: inputValue.trim() ? colors.orange : (isDark ? colors.dark.border : colors.light.border),
//               cursor: inputValue.trim() ? 'pointer' : 'not-allowed',
//               opacity: inputValue.trim() ? 1 : 0.5
//             }}
//           >
//             <Send
//               size={20}
//               style={{
//                 color: inputValue.trim() ? colors.white : theme.textSecondary
//               }}
//             />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import { Sun, Moon, Send } from "lucide-react";
import colors from "../color";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import ReactMarkdown from "react-markdown";

export default function ArtisticChatbot() {
  const navigate = useNavigate();
  const [isDark, setIsDark] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your Smart Assistant. What Can I do for you?",
      isBot: true,
      time: "12:16 PM",
    },
  ]);
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);
  const theme = isDark ? colors.dark : colors.light;
 const user = JSON.parse(localStorage.getItem("user") ?? "{}");
  // console.log(user)
  
  // const username = user?.username || "User";
  const username =
  user?.username ||
  user?.name ||
  user?.email?.split("@")[0] ||
  "User";
  // console.log(username);
  const userInitial = username.charAt(0).toUpperCase();

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    const query = inputValue.trim();
    if (!query) return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: query,
      isBot: false,
      time: new Date().toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setLoading(true);

    try {
      // Call /api/chat endpoint
      const response = await api.post("/api/chat", {
        query: `
        Answer in clean Markdown format.
        Rules:
        - Use headings
        - Use bullet points
        - Use line breaks
        - Do NOT write a single paragraph

        Question:
        ${query}
        `,
        top_k: 5,
        threshold: 0.2,
      });

      const botMessage = {
        id: messages.length + 2,
        text: response.data.answer,
        isBot: true,
        time: new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      toast.error("Failed to get response from server.");
    } finally {
      setLoading(false);
    }
  };

  const iconButtonStyle = {
    backgroundColor: isDark
      ? "rgba(255, 255, 255, 0.15)"
      : "rgba(255, 251, 240, 0.9)",
    border: `1px solid ${
      isDark ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 109, 31, 0.2)"
    }`,
  };

  const handleLogout = async () => {
    try {
      await api.post("/auth/logout"); // optional
    } catch (err) {
      console.log("Server logout skipped" + err);
    }
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div
      className="h-screen flex flex-col transition-colors duration-300 overflow-hidden"
      style={{ backgroundColor: theme.background }}
    >
      {/* Header */}
      <header
        className="flex items-center justify-between px-8 py-6 border-b flex-shrink-0 backdrop-blur-sm"
        style={{
          borderColor: theme.border,
          backgroundColor: isDark
            ? "rgba(30, 30, 35, 0.85)"
            : "rgba(253, 250, 245, 0.92)",
        }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/chaticon.png"
            alt="Artistic AI Logo"
            className="w-14 h-14 object-contain transition-all duration-300"
            onClick={()=>{navigate("/home")}}
          />
          <h1 className="text-3xl font-black" style={{ color: theme.text }}>
            Artistic AI
          </h1>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMessages([messages[0]])}
            className="w-15 h-10 p-4 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            style={iconButtonStyle}
          >
            <span style={{ color: colors.orange }}>Clear Chat</span>
          </button>

          <button
            onClick={handleLogout}
            className="w-15 h-10 p-5 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            style={iconButtonStyle}
          >
            <span style={{ color: colors.orange }}>Logout</span>
          </button>

          <button
            onClick={() => setIsDark(!isDark)}
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-500 hover:scale-110 border-none backdrop-blur-sm"
            style={iconButtonStyle}
          >
            {isDark ? (
              <Sun className="w-6 h-6" style={{ color: colors.orange }} />
            ) : (
              <Moon className="w-6 h-6" style={{ color: colors.orange }} />
            )}
          </button>
        </div>
      </header>

      {/* Chat Messages */}
      <div
        className="flex-1 overflow-y-auto transparent-scrollbar px-8 py-6 flex flex-col items-center"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "transparent transparent",
        }}
      >
        <div className="w-full max-w-4xl space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-4 ${
                message.isBot ? "" : "flex-row-reverse"
              }`}
            >
              {message.isBot ? (
                <img
                  src="/chaticon.png"
                  alt="Artistic AI Logo"
                  className="w-14 h-19 object-contain transition-all duration-300"
                />
              ) : (
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg flex-shrink-0 uppercase"
                  style={{ backgroundColor: colors.orange }}
                >
                  {userInitial}
                </div>
              )}

              <div
                className={`flex flex-col ${
                  message.isBot ? "items-start" : "items-end"
                } flex-1`}
              >
                <div
                  className="px-8 py-3 rounded-[2rem] border-2 transition-all duration-300 hover:shadow-2xl max-w-2xl"
                  style={{
                    backgroundColor: message.isBot
                      ? isDark
                        ? colors.dark.backgroundAlt
                        : colors.white
                      : colors.darkGray,
                    borderColor: message.isBot
                      ? isDark
                        ? "transparent"
                        : "rgba(255, 109, 31, 0.1)"
                      : "transparent",
                    color: message.isBot ? theme.text : colors.white,
                    boxShadow: message.isBot
                      ? "0 10px 40px rgba(0, 0, 0, 0.08)"
                      : "0 10px 40px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <ReactMarkdown
                    components={{
                      p: ({ children }) => (
                        <p className="text-base leading-relaxed mb-2">
                          {children}
                        </p>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc pl-6 space-y-1">{children}</ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal pl-6 space-y-1">
                          {children}
                        </ol>
                      ),
                      li: ({ children }) => <li>{children}</li>,
                      strong: ({ children }) => (
                        <strong className="font-semibold">{children}</strong>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-lg font-bold mb-2">{children}</h3>
                      ),
                    }}
                  >
                    {message.text}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div
        className="px-7 py-4 flex-shrink-0"
        style={{ borderColor: theme.border }}
      >
        <div
          className="max-w-4xl mx-auto rounded-full shadow-2xl flex items-center gap-4 px-8 py-2 border-2 transition-all duration-300 hover:shadow-[0_15px_60px_rgba(255,109,31,0.25)]"
          style={{
            backgroundColor: isDark ? colors.dark.backgroundAlt : colors.white,
            borderColor: colors.orange,
            boxShadow: "0 10px 50px rgba(255, 109, 31, 0.15)",
          }}
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder={loading ? "Processing..." : "Type your command..."}
            className="flex-1 bg-transparent outline-none text-base placeholder:text-opacity-50"
            style={{ color: theme.text }}
            disabled={loading}
          />
          <button
            onClick={handleSend}
            disabled={!inputValue.trim() || loading}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:rotate-12 active:scale-95 disabled:hover:scale-100 disabled:hover:rotate-0"
            style={{
              backgroundColor:
                inputValue.trim() && !loading
                  ? colors.orange
                  : isDark
                  ? colors.dark.border
                  : colors.light.border,
              cursor: inputValue.trim() && !loading ? "pointer" : "not-allowed",
              opacity: inputValue.trim() && !loading ? 1 : 0.5,
            }}
          >
            <Send
              size={20}
              style={{
                color:
                  inputValue.trim() && !loading
                    ? colors.white
                    : theme.textSecondary,
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
