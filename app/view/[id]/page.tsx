"use client";

import { FC } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useTheme } from "@/hooks/useTheme";

interface pageProps {}

const ImageView: FC<pageProps> = ({}) => {
	const { colors } = useTheme();
	const searchParams = useSearchParams();

	const imageSearch = searchParams.get("search");

	if (!imageSearch) {
		return (
			<>
				<h1>404 - This Luna Cant be found!</h1>
				<Link href="/"> Go Back Home </Link>
			</>
		);
	}

	return (
		<div className={`flex justify-center items-center h-screen ${colors.bg}`}>
			<div className="shadow-lg rounded-md overflow-hidden">
				<Link href={"/"}>
					<Image
						src={`/images/${imageSearch}.jpg`}
						width={500}
						height={500}
						alt="Luna Image"
						className="object-cover"
					/>
				</Link>
				<p className="text-sm">Click on luna to go home!</p>
			</div>
		</div>
	);
};

export default ImageView;
