// read link
let click = document.getElementById("read");

// read unseen section
click.addEventListener("click", () => {
    document.querySelectorAll(".unseen").forEach((e) => {
        e.classList.remove("unseen");
    });
    document.querySelectorAll(".dot").forEach((e) => {
        e.classList.remove("dot");
    });

    // notifcations number
    document.getElementById("num").innerText = "0";
});
