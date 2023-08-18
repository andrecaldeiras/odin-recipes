const pos = document.documentElement;
const circle = document.querySelector(".circle");

circle.classList.add("circle--on");

pos.addEventListener("mousemove", (e) => {
    pos.style.setProperty("--x", e.pageX + "px");
    pos.style.setProperty("--y", e.pageY + "px");
});