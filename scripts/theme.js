console.log("Luna is the best dog in the world!");

const modeToggle = document.getElementById("mode-toggle");
const body = document.body;

modeToggle.innerText = body.classList.contains("dark-mode")
	? "Light Mode"
	: "Dark Mode";

// Check if a theme mode is already saved in local storage
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
	body.classList.add(savedTheme);
	// Update the text of the mode toggle button based on the saved theme
	modeToggle.innerText = savedTheme === "dark-mode" ? "Light Mode" : "Dark Mode";
}

modeToggle.addEventListener("click", function () {
	// Toggle the "dark-mode" class of the body element
	body.classList.toggle("dark-mode");

	// Save the current theme mode to local storage
	const currentTheme = body.classList.contains("dark-mode")
		? "dark-mode"
		: "light-mode";
	localStorage.setItem("theme", currentTheme);

	// Update the text of the mode toggle button based on the current theme
	modeToggle.innerText =
		currentTheme === "dark-mode" ? "Light Mode" : "Dark Mode";
});
