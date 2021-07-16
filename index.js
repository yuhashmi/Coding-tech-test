// Menu Icon on NavBar
function menuIcon(x) {
    x.classList.toggle("change");
}

// Show more feature
function showMore(event) {
    var card = event.target.closest(".card");
    var dots = card.querySelector("#dots");
    var moreText = card.querySelector("#more");
    var btnText = card.querySelector("#show-more");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Show More";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Show Less";
        moreText.style.display = "inline";
    }
}