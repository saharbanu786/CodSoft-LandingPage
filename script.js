const button = document.querySelector(".btn");

if (button) {
    button.addEventListener("click", () => {
        alert("Coming Soon..!");
    });
} else {
    console.error("Button not found!");
}
