const pos = document.documentElement;

pos.addEventListener("mousemove", (e) => {
    pos.style.setProperty("--x", e.pageX + "px");
    pos.style.setProperty("--y", e.pageY + "px");
});