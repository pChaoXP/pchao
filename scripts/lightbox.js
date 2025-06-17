document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.spot-gallery .gallery-image');
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxModal = document.getElementById('lightbox-modal');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');

    if (!lightboxOverlay || !lightboxModal || !lightboxImage || !lightboxClose) {
        console.error('Lightbox elements not found!');
        return;
    }

    galleryImages.forEach(image => {
        image.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent any default image link behavior
            const imageUrl = this.getAttribute('src');
            lightboxImage.setAttribute('src', imageUrl);
            lightboxOverlay.style.display = 'block';
            lightboxModal.style.display = 'block';
        });
    });

    function closeLightbox() {
        lightboxOverlay.style.display = 'none';
        lightboxModal.style.display = 'none';
        lightboxImage.setAttribute('src', '#'); // Clear image src
    }

    lightboxClose.addEventListener('click', closeLightbox);
    lightboxOverlay.addEventListener('click', closeLightbox); // Also close when overlay is clicked

    // Prevent clicks inside the modal from closing it (if overlay click is enabled)
    lightboxModal.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
