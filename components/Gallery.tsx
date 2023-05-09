"use client";

import Image from "next/image";
import { ImageObject } from "@/utils/utils";
import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface GalleryProps {
	images: ImageObject[];
}

const Gallery: FC<GalleryProps> = ({ images }) => {
	const router = useRouter();

	function handleClick(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
		event.preventDefault();
		router.push(`/view/${id}?search=${id}`);
	}


	return (
		<div className="grid grid-cols-2 gap-4 mt-8">
			{images.map((image) => (
				<Link
					href={`/view/${image.ref}`}
					key={image.src}
					onClick={(e) => handleClick(e, image.ref)}
					className="rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-500">
					<Image
						src={image.src}
						alt={image.alt}
						width={500}
						height={500}
						className="w-full h-full object-cover"
					/>
				</Link>
			))}
		</div>
	);
};

export default Gallery;
