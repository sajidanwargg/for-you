// ======================================
// 1. OPEN AND CLOSE THE LOVE LETTER
// ======================================

const letterButton = document.getElementById("letterButton");
const letter = document.getElementById("letter");

letterButton.addEventListener("click", function () {
    letter.classList.toggle("hidden");

    if (letter.classList.contains("hidden")) {
        letterButton.textContent = "Open Your Little Letter 💌";
    } else {
        letterButton.textContent = "Close Your Little Letter 💗";
    }
});


// ======================================
// 2. INDEPENDENT PHOTO GALLERY
// ======================================

// Each card has its own collection of photos.
// Make sure every filename matches your Images folder.

const photoCollections = [
    // CARD 1
    [
        "images/image (16).jpeg",
        "images/image (17).jpeg",
        "images/image (18).jpeg"
       
    ],

    // CARD 2
    [
        "images/image (10).jpeg",
        "images/image (22).jpeg",
        "images/image (21).jpeg"
    ],

    // CARD 3
    [
        "images/image (23).jpeg",
        "images/image (24).jpeg",
        "images/image (25).jpeg"
    ]
];

// Find all gallery photos.
const galleryPhotos = document.querySelectorAll(".memory-photo");

// Give each photo its own click event and index.
galleryPhotos.forEach(function (photo, cardIndex) {

    // Each card remembers its own current picture.
    let currentIndex = 0;

    photo.style.cursor = "pointer";

    photo.addEventListener("click", function () {

        // Get this card's collection only.
        const collection = photoCollections[cardIndex];

        // Check whether a collection exists.
        if (!collection || collection.length === 0) {
            console.log("No collection found for card:", cardIndex + 1);
            return;
        }

        // Move to the next picture.
        currentIndex = (currentIndex + 1) % collection.length;

        // Change ONLY the clicked picture.
        photo.src = collection[currentIndex];

        console.log(
            "Card " + (cardIndex + 1) +
            " is now showing " + collection[currentIndex]
        );
    });
});


// ======================================
// 3. SHOW THE SURPRISE MESSAGE
// ======================================

const surpriseButton = document.getElementById("surpriseButton");
const surpriseMessage = document.getElementById("surpriseMessage");

surpriseButton.addEventListener("click", function () {

    surpriseMessage.classList.toggle("hidden");

    if (surpriseMessage.classList.contains("hidden")) {
        surpriseButton.textContent = "Click for a Surprise ✨";
    } else {
        surpriseButton.textContent = "One More Time? 💗";
    }
});


// ======================================
// 4. FLOATING HEARTS ANIMATION
// ======================================

const heartsContainer = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("span");

    heart.classList.add("heart");
    heart.textContent = Math.random() > 0.5 ? "💗" : "💕";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

    heartsContainer.appendChild(heart);

    // Remove the heart after its animation.
    setTimeout(function () {
        heart.remove();
    }, 5000);
}

// Create a heart every 700 milliseconds.
setInterval(createHeart, 700);