import { ThemeContextValue } from "@/components/Providers/ThemeProvider";
import { ThemeContext } from "@/context/ThemeCtx";
import { useContext } from "react";

export function useTheme(): ThemeContextValue {
	const theme = useContext(ThemeContext);
	if (!theme) throw new Error("useTheme must be used within a ThemeProvider");
	return theme;
}