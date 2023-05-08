// Get images from the images folder
let imageNames = [
	"i1.jpg",
	"i2.jpg",
	"i3.jpg",
	"i4.jpg",
	"i5.jpg",
	"i6.jpg",
	"i7.jpg",
	"i8.jpg",
	"i9.jpg",
	"i10.jpg",
	"i11.jpg",
	"i12.jpg",
	"i13.jpg",
	"i14.jpg",
	"i15.jpg",
	"i16.jpg",
	"i17.jpg",
	"i18.jpg",
	"i19.jpg",
	"i20.jpg",
];

// Create an array of image objects
let images = [];

for (let i = 0; i < imageNames.length; i++) {
	let img = new Image();
	img.src = "images/" + imageNames[i];
	images.push(img);
}

const imageContainer = document.getElementById("image-container");

// Add the images to the DOM
for (let i = 0; i < images.length; i++) {
	imageContainer.appendChild(images[i]);
}

let shuffleEnabled = true;
let duration = 5000;

let interval = setInterval(() => {
	if (shuffleEnabled) {
		// Shuffle the array
		imageNames.sort(() => Math.random() - 0.5);

		// Change the src of each image
		for (let i = 0; i < images.length; i++) {
			images[i].src = "images/" + imageNames[i];
		}
	}
}, duration);

// Shuffle the images every 5 seconds
let shuffleInterval = interval;

let toggleShuffleButton = document.getElementById("toggle-shuffle-button");
// Set the text of the button based on the value of shuffleEnabled
toggleShuffleButton.innerText = shuffleEnabled
	? "Disable Shuffle"
	: "Enable Shuffle";

// Check localStorage for shuffleEnabled
const storedShuffleEnabled = localStorage.getItem("shuffleEnabled");

// If the local data is not null, then we can parse it.
if (storedShuffleEnabled !== null) {
	shuffleEnabled = JSON.parse(storedShuffleEnabled);
}

// Toggle the shuffle
toggleShuffleButton.addEventListener("click", () => {
	// Toggle the shuffle
	shuffleEnabled = !shuffleEnabled;
	if (shuffleEnabled) {
		shuffleInterval = interval;
	} else {
		clearInterval(shuffleInterval);
		shuffleInterval = null;
	}
	toggleShuffleButton.innerText = shuffleEnabled
		? "Disable Shuffle"
		: "Enable Shuffle";
	localStorage.setItem("shuffleEnabled", shuffleEnabled);
});
