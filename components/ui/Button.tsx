"use client";

import { useTheme } from "@/hooks/useTheme";
import { FC } from "react";

interface ButtonProps {
	displayName: string;
	enabled?: boolean;
	onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ displayName, onClick, enabled }) => {
	let { isDarkMode } = useTheme();

	if (enabled === null || undefined) enabled = true;

	const buttonClasses = [
		"text-lg m-1 rounded-lg py-2 px-4 my-4 focus:outline-none focus:ring-2 focus:ring-opacity-50",
		enabled
			? "bg-niamey-black text-white hover:bg-indigo-700 focus:ring-indigo-600"
			: "bg-gray-400 text-gray-800",
		isDarkMode ? "dark:bg-gray-800 dark:text-white" : "bg-white text-black",
	].join(" ");

	return (
		<button disabled={enabled} onClick={onClick} className={buttonClasses}>
			{displayName}
		</button>
	);
};

export default Button;
