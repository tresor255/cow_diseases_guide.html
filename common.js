function toggleMenu() {
    const sidePanel = document.getElementById("sidePanel");
    if (sidePanel.style.width === "250px") {
        sidePanel.style.width = "0";
    } else {
        sidePanel.style.width = "250px";
    }
}

document.addEventListener("click", (event) => {
    const sidePanel = document.getElementById("sidePanel");
    const isClickInside = sidePanel.contains(event.target) || event.target.classList.contains("hamburger-menu");
    if (!isClickInside && sidePanel.style.width === "250px") {
        sidePanel.style.width = "0";
    }
});
