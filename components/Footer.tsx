"use client";

import { useTheme } from "@/hooks/useTheme";
import { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
	const theme = useTheme();
	const currentYear = new Date().getFullYear();

	return (
		<>
			<footer
				className="max-w-7xl mx-aut text-gray-800 py-8 mt-8"
				style={{ backgroundColor: theme.colors.bg, color: theme.colors.text }}>
				<p className="text-lg text-center">
					© {currentYear} The Luna Gallery. All Rights Reserved.
				</p>
				<p className="text-lg text-center">
					Created by{" "}
					<a
						href="https://www.instagram.com/thatguy.jamal/"
						target="_blank"
						className="text-niamey-purple hover:text-niamey-pink">
						ThatGuyJamal
					</a>{" "}
					&{" "}
					<a
						href="https://www.instagram.com/kneeawmay/"
						target="_blank"
						className="text-niamey-pink hover:text-niamey-purple">
						Niamey
					</a>{" "}
				</p>
			</footer>
		</>
	);
};

export default Footer;
