let settingsToggle = document.getElementById("settings-toggle");
settingsToggle.innerText = "Clear Settings";

settingsToggle.addEventListener("click", function () {
	let confirmation = confirm("Are you sure you want to clear your settings?");
	if (confirmation) {
		localStorage.clear();
		location.reload();
	}
});
