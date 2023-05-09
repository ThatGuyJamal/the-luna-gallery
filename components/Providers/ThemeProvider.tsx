"use client";

import { ThemeContext } from "@/context/ThemeCtx";
import { FC, useEffect, useState } from "react";

interface ThemeProviderProps {
	children: React.ReactNode;
}

export interface ThemeContextValue {
	colors: {
		bg: string;
		text: string;
		niamey: string;
	};
	toggleTheme: () => void;
	isDarkMode: boolean;
}

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(
		typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
			? true
			: false ?? false
	);

	useEffect(() => {
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [isDarkMode]);

	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
	};

	const theme = {
		colors: {
			bg: isDarkMode ? "var(--dark-bg)" : "var(--light-bg)",
			text: isDarkMode ? "var(--dark-text)" : "var(--light-text)",
			niamey: "var(--niamey-color)",
		},
		toggleTheme,
		isDarkMode,
	};

	return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
