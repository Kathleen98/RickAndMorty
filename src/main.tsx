import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MantineProvider, MantineThemeOverride } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import TaksList from "./components/taskList/index.tsx";
import SignIn from "./components/signIn/index.tsx";
import Home from "./components/home/index.tsx";
import SignUp from "./components/signUp/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "sign-up",
    element: <SignUp />
  },
  {
    path: "toDoList",
    element: <TaksList />
  },
  {
    path: "sign-in",
    element: <SignIn />
  },
  {
    path: "home",
    element: <Home />
  }
])

const theme: MantineThemeOverride = {
  colors: {
    primaryColor: [
      "#D2E0FB",
      "#CDC1FF",
      "#E5D9F2",
      "#F5EFFF",
      "#D1E9F6",
      "#EECAD5",
      "#E5D1FA",
      "#E3DFFD",
      "#ECF2FF",
      "#D0A2F7",
    ],
    secondaryColor: [
      "#A594F9",
      "#D0A2F7",
      "#BEADFA",
      "#B2A4FF",
      "#AAE3E2",
      "#E3ACF9",
      "#ADA2FF",
      "#BA94D1",
      "#BA94D1",
      "#AAC4FF",
    ],
  },
  fontFamily: "Poppins, sans-serif",
  radius: {
    sm: "8px",
    md: "12px",
    lg: "16px",
  },
  spacing: {
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px",
  },
  components: {
    Button: {
      styles: () => ({
        root: {
          background: "#b2daed",
          color: "#000",
          borderRadius: "16px",
          border: "transparent", // Definir borda padrão transparente
          transition: "background 0.9s ease, border-color 0.3s ease", // Transição suave
          "&[data-hovered]": {
            background: "#000",
          },
        },
      }),
    },
  },
};

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </MantineProvider>
  </StrictMode>
);
