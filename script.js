function openModal(element) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("imgFull");
    var captionText = document.getElementById("caption");
    
    if (modal && modalImg) {
        modal.style.display = "flex";
        modalImg.src = element.src;
        captionText.innerHTML = element.alt;
    }
}

function closeModal() {
    var modal = document.getElementById("imageModal");
    if (modal) {
        modal.style.display = "none";
    }
}

window.onload = function() {
    console.log("Welcome to Chavin's Portfolio");
};