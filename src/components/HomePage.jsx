// import React, { useState } from "react";
// import { Sun, Moon } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import colors from "../color"; // Import the color tokens

// export default function SmartAssistantLanding() {
//   const [isDark, setIsDark] = useState(false);
//   const navigate = useNavigate();

//   // Get current theme colors
//   const theme = isDark ? colors.dark : colors.light;

//   return (
//     <div
//       className="min-h-screen transition-colors duration-300"
//       style={{
//         background: isDark
//           ? `linear-gradient(to bottom right, ${colors.dark.backgroundAlt}, ${colors.dark.background})`
//           : `linear-gradient(to bottom right, ${colors.light.background}, ${colors.light.backgroundAlt})`,
//       }}
//     >
//       {/* Header */}
//       <header className="flex items-center justify-between p-8">
//         {/* Theme Toggle Button */}
//         <button
//   onClick={() => setIsDark(!isDark)}
//   className="
//     fixed top-8 right-8 z-50
//     w-16 h-16 rounded-2xl
//     flex items-center justify-center
//     transition-all duration-300 ease-out
//     hover:scale-110 hover:-translate-y-1
//     active:scale-95
//   "
//   style={{
//     backgroundColor: isDark ? colors.black : colors.light.backgroundAlt,
//     boxShadow: `
//       0 10px 25px rgba(0,0,0,0.2),
//       0 20px 50px rgba(0,0,0,0)
//     `,
//   }}
//   onMouseEnter={(e) => {
//     e.currentTarget.style.boxShadow =
//       "0 15px 35px rgba(0,0,0,0), 0 25px 70px rgba(0,0,0,0)";
//   }}
//   onMouseLeave={(e) => {
//     e.currentTarget.style.boxShadow =
//       "0 10px 25px rgba(0,0,0,0.2), 0 20px 50px rgba(0,0,0,0)";
//   }}
// >
//   {isDark ? (
//     <Sun
//       className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12"
//       style={{ color: colors.light.primary }}
//     />
//   ) : (
//     <Moon
//       className="w-8 h-8 transition-transform duration-300 group-hover:-rotate-12"
//       style={{ color: colors.cream.backgroundAlt }}
//     />
//   )}
// </button>

//       </header>

//       {/* Main Content */}
//       <main className="flex items-center justify-between px-20 py-12 max-w-7xl mx-auto">
//         {/* Left Side - Text */}
//         <div className="flex-1 max-w-xl">
//           <h1
//             className="text-6xl font-black mb-6"
//             style={{ color: theme.text }}
//           >
//             Artistic AI
//             <br />
//             <span style={{ color: colors.orange }}>Assistant</span>
//           </h1>

//           <p
//             className="text-lg mb-10 leading-relaxed"
//             style={{ color: theme.textSecondary }}
//           >
//             Your vibrant workspace awaits. Secure your neural link to begin the
//             conversation.
//           </p>

//           <button
//             onClick={() => navigate("/signup")}
//             className="
//     group relative px-9 py-4 text-white rounded-full font-bold text-lg
//     transition-all duration-300 ease-out
//     flex items-center gap-3 overflow-hidden
//     hover:scale-[1.04] hover:-translate-y-1
//   "
//             style={{
//               background: `linear-gradient(to right, ${colors.orange}, ${theme.primaryHover})`,
//               boxShadow: `
//       0 12px 30px ${theme.shadow},
//       0 22px 60px ${theme.shadow}
//     `,
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.background = `linear-gradient(to right, ${theme.primaryHover}, ${theme.primaryLight})`;
//               e.currentTarget.style.boxShadow = `
//       0 20px 45px ${theme.shadow},
//       0 30px 80px ${theme.shadow}
//     `;
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.background = `linear-gradient(to right, ${colors.orange}, ${theme.primaryHover})`;
//               e.currentTarget.style.boxShadow = `
//       0 12px 30px ${theme.shadow},
//       0 22px 60px ${theme.shadow}
//     `;
//             }}
//           >
//             {/* Glow Border on Hover */}
//             <span
//               className="
//       pointer-events-none absolute inset-0 rounded-full
//       border border-white/20
//       opacity-0 group-hover:opacity-100
//       group-hover:border-white/40
//       transition-all duration-300
//     "
//             />

//             {/* Shine Sweep Effect */}
//             <span
//               className="
//       pointer-events-none absolute inset-0
//       bg-gradient-to-r from-transparent via-white/30 to-transparent
//       translate-x-[-120%] group-hover:translate-x-[120%]
//       transition-transform duration-700
//     "
//             />

//             {/* Content */}
//             <span className="relative z-10">Start Talking</span>
//             <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
//               →
//             </span>
//           </button>
//         </div>

//         {/* Right Side - Video */}
//         <div className="flex-1 flex justify-center items-center">
//           <div className="relative w-full max-w-lg">
//             <video
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="w-full rounded-full h-auto"
//               style={{
//                 boxShadow: `0 10px 15px 3px ${theme.shadow}, 0 4px 6px -2px ${theme.shadow}`,
//               }}
//             >
//               <source
//                 src="/ai-animation-Picsart-BackgroundRemover.mp4"
//                 type="video/mp4"
//               />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

import React, { useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import your colors
const colors = {
  orange: "#FF6D1F",
  white: "#FFFFFF",
  black: "#000000",
  lightCream: "#FFF8F0",
  dark: {
    background: "#0A0A0A",
    backgroundAlt: "#1A1A1A",
    text: "#FFFFFF",
    textSecondary: "#A0A0A0",
    border: "#2A2A2A",
    shadow: "rgba(0, 0, 0, 0.5)",
    primary: "#FF6D1F",
    primaryHover: "#FF8C4F",
    primaryLight: "#FFB088",
  },
  light: {
    background: "#FFFFFF",
    backgroundAlt: "#FFF8F0",
    text: "#1A1A1A",
    textSecondary: "#6B7280",
    border: "#E5E7EB",
    shadow: "rgba(255, 109, 31, 0.3)",
    primary: "#FF6D1F",
    primaryHover: "#FF8C4F",
    primaryLight: "#FFB088",
  },
  cream: {
    backgroundAlt: "#8B7355",
  },
};

export default function SmartAssistantLanding() {
  const [isDark, setIsDark] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const navigate = useNavigate();

  const theme = isDark ? colors.dark : colors.light;

  const handleNavigate = () => {
    setIsNavigating(true);
    // Wait for animation to complete before navigating
    setTimeout(() => {
      navigate("/signup", { state: { isDark } });
    }, 700);
  };

  return (
    <div
      className={`min-h-screen transition-all duration-700 ${
        isNavigating ? "blur-lg scale-95 opacity-50" : "blur-0 scale-100 opacity-100"
      }`}
      style={{
        background: isDark
          ? `linear-gradient(to bottom right, ${colors.dark.backgroundAlt}, ${colors.dark.background})`
          : `linear-gradient(to bottom right, ${colors.light.background}, ${colors.light.backgroundAlt})`,
      }}
    >
      {/* Header */}
      <header className="flex items-center justify-between p-8">
        {/* Theme Toggle Button */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="fixed top-8 right-8 z-50 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ease-out hover:scale-110 hover:-translate-y-1 active:scale-95"
          style={{
            backgroundColor: isDark ? colors.black : colors.light.backgroundAlt,
            boxShadow: `0 10px 25px rgba(0,0,0,0.2), 0 20px 50px rgba(0,0,0,0)`,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 15px 35px rgba(0,0,0,0), 0 25px 70px rgba(0,0,0,0)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow =
              "0 10px 25px rgba(0,0,0,0.2), 0 20px 50px rgba(0,0,0,0)";
          }}
        >
          {isDark ? (
            <Sun
              className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12"
              style={{ color: colors.light.primary }}
            />
          ) : (
            <Moon
              className="w-8 h-8 transition-transform duration-300 group-hover:-rotate-12"
              style={{ color: colors.cream.backgroundAlt }}
            />
          )}
        </button>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-between px-20 py-12 max-w-7xl mx-auto">
        {/* Left Side - Text */}
        <div className="flex-1 max-w-xl">
          <h1
            className="text-6xl font-black mb-6"
            style={{ color: theme.text }}
          >
            Artistic AI
            <br />
            <span style={{ color: colors.orange }}>Assistant</span>
          </h1>

          <p
            className="text-lg mb-10 leading-relaxed"
            style={{ color: theme.textSecondary }}
          >
            Your vibrant workspace awaits. Secure your neural link to begin the
            conversation.
          </p>

          <button
            onClick={handleNavigate}
            disabled={isNavigating}
            className="group relative px-9 py-4 text-white rounded-full font-bold text-lg transition-all duration-300 ease-out flex items-center gap-3 overflow-hidden hover:scale-[1.04] hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background: `linear-gradient(to right, ${colors.orange}, ${theme.primaryHover})`,
              boxShadow: `0 12px 30px ${theme.shadow}, 0 22px 60px ${theme.shadow}`,
            }}
            onMouseEnter={(e) => {
              if (!isNavigating) {
                e.currentTarget.style.background = `linear-gradient(to right, ${theme.primaryHover}, ${theme.primaryLight})`;
                e.currentTarget.style.boxShadow = `0 20px 45px ${theme.shadow}, 0 30px 80px ${theme.shadow}`;
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `linear-gradient(to right, ${colors.orange}, ${theme.primaryHover})`;
              e.currentTarget.style.boxShadow = `0 12px 30px ${theme.shadow}, 0 22px 60px ${theme.shadow}`;
            }}
          >
            <span className="pointer-events-none absolute inset-0 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 group-hover:border-white/40 transition-all duration-300" />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-700" />
            <span className="relative z-10">Start Talking</span>
            <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </button>
        </div>

        {/* Right Side - Video */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-full max-w-lg">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-full h-auto"
              style={{
                boxShadow: `0 10px 15px 3px ${theme.shadow}, 0 4px 6px -2px ${theme.shadow}`,
              }}
            >
              <source
                src="/ai-animation-Picsart-BackgroundRemover.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </main>
    </div>
  );
}