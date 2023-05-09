"use client";

import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Settings from "@/components/Settings";
import { useTheme } from "@/hooks/useTheme";
import { handleShuffle, loadImages } from "@/utils/utils";
import { useEffect, useState } from "react";

export default function Home() {
	const theme = useTheme();
	const [shuffleSpeed, setShuffleSpeed] = useState(
		typeof window !== "undefined"
			? parseInt(localStorage.getItem("shuffleInterval") ?? "5000")
			: 5000
	);
	let [images, setImages] = useState(loadImages());

	useEffect(() => {
		let intervalId: NodeJS.Timeout;
		let timeoutId: NodeJS.Timeout;

		const startShuffle = () => {
			intervalId = setInterval(() => {
				setImages(handleShuffle());
			}, shuffleSpeed);
		};

		const pauseShuffle = () => {
			clearInterval(intervalId);
			clearTimeout(timeoutId);
			timeoutId = setTimeout(startShuffle, 1000);
		};

		startShuffle();

		window.addEventListener("scroll", pauseShuffle);

		return () => {
			clearInterval(intervalId);
			clearTimeout(timeoutId);
			window.removeEventListener("scroll", pauseShuffle);
		};
	}, [images, shuffleSpeed]); // Only re-run effect if images state changes

	const handleSpeedChange = (speed: number) => {
		setShuffleSpeed(speed);
		localStorage.setItem("shuffleInterval", speed.toString());
	};

	return (
		<>
			<main style={{ backgroundColor: theme.colors.bg, color: theme.colors.text }}>
				<div className="max-w-7xl mx-auto px-6 py-8 text-center font-sans">
					<h1 className="text-6xl text-niamey-pink font-bruno">Luna The Dog</h1>
					<p className="mt-10">
						Luna is an amazing dog she very cute and smart so we made a website to
						display her awesome to the world!
					</p>
					<Settings onSpeedChange={handleSpeedChange} />
					<Gallery images={images} />
					<Footer />
				</div>
			</main>
		</>
	);
}
