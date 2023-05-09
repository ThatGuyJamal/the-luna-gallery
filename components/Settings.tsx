"use client";

import { FC, useState } from "react";
import Button from "./ui/Button";
import { useTheme } from "@/hooks/useTheme";

interface SettingsProps {
	onSpeedChange: (speed: number) => void;
}

const speeds = [10000, 5000, 1000]; // Slow, Medium, Fast

const Settings: FC<SettingsProps> = ({ onSpeedChange }) => {
	const { toggleTheme, isDarkMode } = useTheme();
	const [shuffleEnabled, setShuffleEnabled] = useState<boolean>(
		typeof window !== "undefined" ? localStorage.getItem("shuffleEnabled") === "true" ?? true : true
	);

	const handleShuffleClick = () => {
		setShuffleEnabled((prevEnabled) => !prevEnabled);
		typeof window !== "undefined" ? localStorage.setItem("shuffleEnabled", (!shuffleEnabled).toString()) : null;
	};

	const handleThemeClick = () => {
		toggleTheme();
	};

	const handleSpeedClick = (interval: number) => {
		onSpeedChange(interval);
	};

	return (
		<>
			<Button
				displayName={isDarkMode ? "Light Mode" : "Dark Mode"}
				onClick={handleThemeClick}
			/>
			<Button
				displayName={shuffleEnabled ? "Disable Shuffle" : "Enable Shuffle"}
				onClick={handleShuffleClick}
			/>
			<div className="flex justify-center space-x-4">
				<Button displayName="Slow" onClick={() => handleSpeedClick(speeds[0])} />
				<Button displayName="Medium" onClick={() => handleSpeedClick(speeds[1])} />
				<Button displayName="Fast" onClick={() => handleSpeedClick(speeds[2])} />
			</div>
		</>
	);
};

export default Settings;
