// Create Popup With The Image
let ourGallery = document.querySelectorAll(".image");

ourGallery.forEach(image => {
    image.addEventListener('click', () => {
        let popupOverlay = document.createElement("div");
        popupOverlay.className = 'popup-overlay';
        document.body.appendChild(popupOverlay);
        let popupBox = document.createElement("div");
        popupBox.className = 'popup-box';

        if (image.alt !== null) {
            let imageHeading = document.createElement("h3");
            let imageText = document.createTextNode(image.alt);
            imageHeading.appendChild(imageText);
            popupBox.appendChild(imageHeading);
        }

        let popupImage = document.createElement("img");
        popupImage.src = image.src;
        popupBox.appendChild(popupImage);
        document.body.appendChild(popupBox);

        let closeButton = document.createElement("span");
        let closeButtonText = document.createTextNode("X");
        closeButton.appendChild(closeButtonText);
        closeButton.className = 'close-button';
        popupBox.appendChild(closeButton);

    });

});

// Close Popup
document.addEventListener("click", function(o) {
    if (o.target.className == 'close-button') {
        o.target.parentNode.remove();
        document.querySelector(".popup-overlay").remove();
    }
});


// ******************************* Toggle Menu *******************************
let togglebtn = document.querySelector(".menu-icon");
let tlinks = document.querySelector(".menu-links");

togglebtn.onclick = function(e) {
    e.stopPropagation();
    tlinks.classList.toggle("open");
};

tlinks.onclick = function(e) {
    e.stopPropagation();
    tlinks.classList.toggle("open");
};

document.addEventListener("click", (e) => {
    if (e.target !== togglebtn && e.target !== tlinks) {
        if (tlinks.classList.contains("open")) {
            tlinks.classList.toggle("open");
        }
    }
});