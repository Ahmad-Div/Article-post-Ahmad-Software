const shareButton = document.getElementById("share-button-img");
const hiddenBar = document.querySelector(".hidden-share-bar");
shareButton.addEventListener("click", openShareBar);
let clicked = false;


function openShareBar() {

    if (!clicked) {
        shareButton.style.color = "#FFFFFF";
        shareButton.style.backgroundColor = "black";
        hiddenBar.classList.remove("hide-share-bar");
        hiddenBar.classList.add("apear-share-bar");
        clicked = true;
    } else {
        shareButton.style.color = "black";
        shareButton.style.backgroundColor = "#FFFFFF";
        hiddenBar.classList.add("hide-share-bar");
        hiddenBar.classList.remove("apear-share-bar");
        clicked = false;
    }


}