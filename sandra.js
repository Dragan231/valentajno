document.addEventListener("DOMContentLoaded", () => {

    console.log("JS is working 😎");

    const yesButton = document.getElementById("DaDugme");
    const noButton = document.getElementById("neDugme");
    const yesSection = document.getElementById("YesSection");

    // YES button shows the photo
    yesButton.addEventListener("click", () => {
        yesSection.style.display = "block";
    });

    // NO button runs away
    noButton.addEventListener("mouseover", () => {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 100);

        noButton.style.position = "absolute";
        noButton.style.left = x + "px";
        noButton.style.top = y + "px";
    });

});