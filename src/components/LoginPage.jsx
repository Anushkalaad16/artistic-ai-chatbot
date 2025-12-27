
import React, { useState, useEffect } from "react";
import { Sun, Moon, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import colors from "../color";
import api from "../api/axios";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [isDark, setIsDark] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [isNavigating, setIsNavigating] = useState(false);
  const [isEntering, setIsEntering] = useState(true);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setIsEntering(false), 50);
    setTimeout(() => setIsPageLoaded(true), 300);
  }, []);

  const handleBack = () => {
    setIsNavigating(true);
    setTimeout(() => {
      navigate("/");
    }, 700);
  };

  const validateFields = () => {
    let isValid = true;
    const newErrors = { username: "", password: "" };

    if (!username.trim()) {
      newErrors.username = "Username is required";
      isValid = false;
    }

    if (!password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    } else if (!/^(?=.*[a-zA-Z])(?=.*\d).+$/.test(password)) {
      newErrors.password = "Password must be alphanumeric";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleLogin = async () => {
    if (!validateFields()) return;

    try {
      const response = await api.post("/login", {
        username,
        password,
      });

      localStorage.setItem("token", response.data.access_token);
      toast.success("Login Successful!");
      navigate("/chatbot");
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.detail || "Invalid credentials");
    }
  };

  const cardBg = isDark ? colors.dark.card : colors.light.background;
  const textColor = isDark ? colors.dark.text : colors.light.text;
  const textSecondary = isDark ? colors.dark.textSecondary : colors.light.textSecondary;
  const borderColor = isDark ? colors.dark.border : colors.light.border;

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-6 transition-all duration-700 ${
        isEntering ? "opacity-0 scale-90" : isNavigating ? "opacity-0 scale-90" : "opacity-100 scale-100"
      }`}
      style={{ backgroundColor: isDark ? colors.dark.background : colors.white }}
    >
      {/* Theme Toggle */}
      <button
        onClick={() => setIsDark(!isDark)}
        className={`fixed top-8 right-8 z-50 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95 backdrop-blur-sm border-2 ${
          !isPageLoaded ? "blur-sm" : "blur-0"
        }`}
        style={{
          backgroundColor: colors.light.background,
          borderColor: colors.light.border,
          boxShadow: `0 8px 32px ${colors.light.shadow}, 0 0 0 1px rgba(255, 109, 31, 0.2)`,
          transition: "filter 0.5s ease-in-out, transform 0.3s ease",
        }}
      >
        <div className="relative">
          {isDark ? (
            <Sun className="w-7 h-7 transition-all duration-500 animate-pulse" style={{ color: colors.orange }} />
          ) : (
            <Moon className="w-7 h-7 transition-all duration-500" style={{ color: colors.orange }} />
          )}
        </div>
      </button>

      {/* Main Container */}
      <div className={`w-full max-w-4xl relative transition-all duration-700 ${!isPageLoaded ? "blur-md" : "blur-0"}`}>
        {/* Left Section */}
        <div className="relative z-20 w-1/2">
          <div
            className="h-full p-12 rounded-3xl transition-all duration-700"
            style={{
              backgroundColor: cardBg,
              borderRight: `1px solid ${borderColor}`,
              boxShadow: `20px 0 40px rgba(0, 0, 0, 0.05)`,
            }}
          >
            {/* Back Button */}
            <button
              onClick={handleBack}
              disabled={isNavigating}
              className="group flex items-center gap-2 mb-8 transition-all duration-300 hover:-translate-x-2 relative overflow-hidden disabled:opacity-50"
              style={{ color: textSecondary }}
            >
              <span className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300" style={{ backgroundColor: colors.orange }} />
              <ArrowLeft size={22} className="transition-all duration-300 group-hover:scale-110 group-hover:-translate-x-1" style={{ color: colors.orange }} />
              <span className="text-sm font-bold uppercase tracking-widest group-hover:tracking-[0.25em] transition-all duration-300">Back</span>
            </button>

            {/* Welcome Text */}
            <div className="flex items-center gap-3 mb-10">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ backgroundColor: isDark ? colors.darkGray.background : colors.white }}
              >
                <img src="/chaticon.png" alt="Artistic AI Logo" className="w-10 h-10 object-contain transition-all duration-300" />
              </div>
              <div>
                <h1 className="text-4xl font-black" style={{ color: textColor }}>
                  Welcome Back
                </h1>
              </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              {/* Username */}
              <div>
                <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: textSecondary }}>
                  Username <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter username"
                  className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-200"
                  style={{ backgroundColor: "#FFFFFF", color: textColor, border: `1px solid ${borderColor}` }}
                />
                {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs uppercase tracking-wider mb-2" style={{ color: textSecondary }}>
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 rounded-lg outline-none transition-all duration-200"
                  style={{ backgroundColor: "#FFFFFF", color: textColor, border: `1px solid ${borderColor}` }}
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>

              <button
                onClick={handleLogin}
                className="w-full py-4 rounded-full font-bold text-white text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                style={{ backgroundColor: colors.orange, boxShadow: `0 10px 30px ${colors.light.shadow}` }}
              >
                <span className="relative z-10">Login</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
              </button>
            </div>

            <p className="text-center mt-6" style={{ color: textSecondary }}>
              Don't have a link?{" "}
              <button onClick={() => navigate("/signup")} className="font-semibold hover:underline" style={{ color: colors.orange }}>
                Create one
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="absolute right-0 top-0 w-1/2 h-full z-10">
        <div className="h-full flex items-center justify-center p-12 rounded-r-3xl transition-all duration-700" style={{ backgroundColor: isDark ? colors.dark.background : colors.white }}>
          <div className="relative w-full max-w-md">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-full h-auto blur-sm transition-all duration-100"
              style={{ boxShadow: `0 20px 40px rgba(0, 0, 0, 0.1)`, border: `2px solid ${colors.light.border}`, animation: "pulseBlur 3s infinite ease-in-out" }}
            >
              <source src="/ai-animation-Picsart-BackgroundRemover.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulseBlur {
          0%, 100% {
            filter: blur(4px);
          }
          50% {
            filter: blur(6px);
          }
        }
      `}</style>
    </div>
  );
}
