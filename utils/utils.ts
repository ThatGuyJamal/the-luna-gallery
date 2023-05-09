"use client"

export type ImageObject = {
	ref: string;
	src: string;
	alt: string;
};

const staticImages: ImageObject[] = [
	{ src: "/images/i1.jpg", alt: "Image 1", ref: "i1" },
	{ src: "/images/i2.jpg", alt: "Image 2", ref: "i2" },
	{ src: "/images/i3.jpg", alt: "Image 3", ref: "i3" },
	{ src: "/images/i4.jpg", alt: "Image 4", ref: "i4" },
	{ src: "/images/i5.jpg", alt: "Image 5", ref: "i5" },
	{ src: "/images/i6.jpg", alt: "Image 6", ref: "i6" },
	{ src: "/images/i7.jpg", alt: "Image 7", ref: "i7" },
	{ src: "/images/i8.jpg", alt: "Image 8", ref: "i8" },
	{ src: "/images/i9.jpg", alt: "Image 9", ref: "i9" },
	{ src: "/images/i10.jpg", alt: "Image 10", ref: "i10" },
	{ src: "/images/i11.jpg", alt: "Image 11", ref: "i11" },
	{ src: "/images/i12.jpg", alt: "Image 12", ref: "i12" },
	{ src: "/images/i13.jpg", alt: "Image 13", ref: "i13" },
	{ src: "/images/i14.jpg", alt: "Image 14", ref: "i14" },
	{ src: "/images/i15.jpg", alt: "Image 15", ref: "i15" },
	{ src: "/images/i16.jpg", alt: "Image 16", ref: "i16" },
	{ src: "/images/i17.jpg", alt: "Image 17", ref: "i17" },
	{ src: "/images/i18.jpg", alt: "Image 18", ref: "i18" },
	{ src: "/images/i19.jpg", alt: "Image 19", ref: "i19" },
	{ src: "/images/i20.jpg", alt: "Image 20", ref: "i20" },
];

// Controls loading images from the public folder
export function loadImages() {
	return handleShuffle();
}

// Controls loading images from the public folder
export function handleShuffle() {
	// Check if shuffle is enabled
	const isEnabled = typeof window !== "undefined" ? localStorage.getItem("shuffleEnabled") : null;

	// If shuffle is not enabled, return the static images
	if (isEnabled && isEnabled === "false") {
		return staticImages;
	}

	if (isEnabled && isEnabled === "true") {
		return shuffle();
	}

    // If shuffle is not set, set it to true
    typeof window !== "undefined" ? localStorage.setItem("shuffleEnabled", "true") : null;
    return shuffle()
}

const shuffle = () => {
	const shuffled = [...staticImages]; // make a copy of the images array
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // swap elements
	}
	return shuffled;
};