let click = document.getElementById("read");

click.addEventListener("click", () => {
    document.querySelectorAll(".unseen").forEach((e) => {
        e.classList.remove("unseen");
    });
    document.querySelectorAll(".dot").forEach((e) => {
        e.classList.remove("dot");
    });

    document.getElementById("num").innerText = "0";
});
