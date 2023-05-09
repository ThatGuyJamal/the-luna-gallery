import { ThemeContextValue } from "@/components/Providers/ThemeProvider";
import { createContext } from "react";

export const ThemeContext = createContext<ThemeContextValue | null>(null);
