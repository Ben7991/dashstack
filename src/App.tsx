import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NotFound from "./pages/NotFound";
import AuthLayout from "./components/layouts/AuthLayout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ThemeContextProvider from "./lib/context/theme/ThemeContextProvider";

export default function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        { index: true, element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "forgot-password", element: <ForgotPassword /> }
      ],
      errorElement: <NotFound />
    }
  ]);

  return (
    <ThemeContextProvider>
      <RouterProvider router={appRouter} />
    </ThemeContextProvider>
  );
}