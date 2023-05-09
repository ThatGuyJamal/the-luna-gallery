"use client";

import { FC } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useTheme } from "@/hooks/useTheme";

interface pageProps {}

const ImageView: FC<pageProps> = ({}) => {
	const { colors } = useTheme();
	const searchParams = useSearchParams();
	const router = useRouter();

	const imageSearch = searchParams.get("search");

	if (!imageSearch) {
		return (
			<div className={`flex flex-col h-screen ${colors.bg}`}>
				<h1 className="text-3xl font-bold my-auto text-center">
					404 - This Luna Can't be Found!
				</h1>
			</div>
		);
	}

	return (
		<div className={`flex flex-col h-screen ${colors.bg}`}>
			<div className="my-auto mx-auto">
				<Link href={"/"}>
					<Image
						src={`/images/${imageSearch}.jpg`}
						width={500}
						height={500}
						alt="Luna Image"
						className="object-cover rounded-md shadow-lg"
					/>
				</Link>
				<p className="text-sm text-center mt-2">
					Click on the Luna to go back home!
				</p>
			</div>
		</div>
	);
};

export default ImageView;
