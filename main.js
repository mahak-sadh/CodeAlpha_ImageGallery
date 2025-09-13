// Select all images
const galleryItems = document.querySelectorAll(".gallery-item img");
const imgBox = document.querySelector(".imgBox");
const overlay = document.querySelector(".galleryOverly");
const closeBtn = document.querySelector(".imgBox span");

// Create an image element for preview
const previewImage = document.createElement("img");
imgBox.appendChild(previewImage);

// Create navigation arrows
const prevBtn = document.createElement("button");
const nextBtn = document.createElement("button");
prevBtn.innerHTML = "&#10094;";
nextBtn.innerHTML = "&#10095;";
prevBtn.classList.add("nav-btn", "prev");
nextBtn.classList.add("nav-btn", "next");
imgBox.appendChild(prevBtn);
imgBox.appendChild(nextBtn);

let currentIndex = 0;

// Show image in lightbox
function showImage(index) {
  previewImage.src = galleryItems[index].src;
  overlay.style.display = "block";
  imgBox.style.display = "block";
  currentIndex = index;
}

// Image click
galleryItems.forEach((img, index) => {
  img.addEventListener("click", () => showImage(index));
});

// Next / Prev navigation
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  showImage(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  showImage(currentIndex);
});

// Close
overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  imgBox.style.display = "none";
});
closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
  imgBox.style.display = "none";
});

// Filter functionality
const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;

    document.querySelectorAll(".gallery-item").forEach((item) => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
