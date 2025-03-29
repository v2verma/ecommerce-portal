import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";

// Lazy load pages
const Home = lazy(() => import("@/pages/Home"));
const Login = lazy(() => import("@/pages/Login"));
const Signup = lazy(() => import("@/pages/SignUp"));
const Cart = lazy(() => import("@/pages/Cart"));

export const routes: RouteObject[] = [
  // { path: "/", element: <Navigate to="/login" replace /> }, // Redirect root to Login
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/", element: <Home /> },
  { path: "/cart", element: <Cart /> },

  // Normal User Routes
  // {
  //   path: "/",
  //   element: <ProtectedRoute />,
  //   children: [
  //     { path: "", element: <Navigate to="/home" replace /> }, // ✅ Default to home
  //     { path: "home", element: <Home /> },
  //     { path: "movie-play/:movieName", element: <MoviePlay /> },
  //   ],
  // },

  // // Admin Routes
  // {
  //   path: "/admin",
  //   element: <AdminRoute />,
  //   children: [
  //     { path: "dashboard", element: <AdminDashboard /> },
  //     { path: "users", element: <UsersList /> },
  //   ],
  // },

  { path: "*", element: <Navigate to="/" replace /> },
];
