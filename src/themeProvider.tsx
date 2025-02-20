// app/StyledRoot.tsx
"use client";
import { ThemeProvider } from "@mui/material";
import theme from "./app/styles/theme";

export const ThemeContainer = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
