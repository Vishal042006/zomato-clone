function toggleAppPopup() {
    const popup = document.getElementById("appPopup");
    popup.style.display = popup.style.display === "flex" ? "none" : "flex";
}
document.addEventListener("click", function (e) {
    const popup = document.getElementById("appPopup");
    const button = document.querySelector(".get-app-btn");

    if (!popup.contains(e.target) && !button.contains(e.target)) {
        popup.style.display = "none";
    }
});
