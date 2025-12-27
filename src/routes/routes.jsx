
import { Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import HomePage from "../components/HomePage.jsx";
import LoginPage from "../components/LoginPage.jsx";
import SignupPage from "../components/SignupPage.jsx";
import ArtisticChatbot from "../components/ArtisticChatbot.jsx";
import ProtectedRoute from "../routes/ProtectedRoutes.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace />,
  },
  {
    path: "/home",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "/signup",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <SignupPage />
      </Suspense>
    ),
  },
  {
    path: "/chatbot",
    element: (
      <ProtectedRoute>
        <Suspense fallback={<div>Loading...</div>}>
          <ArtisticChatbot />
        </Suspense>
      </ProtectedRoute>
    ),
  },
]);
