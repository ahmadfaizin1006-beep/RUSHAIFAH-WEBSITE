// Lightbox image preview only; no large slideshow shown by default.

function openLightbox(index) {
  let thumbnails = document.querySelectorAll('.demo');
  if (!thumbnails[index - 1]) return;
  let src = thumbnails[index - 1].src;
  let alt = thumbnails[index - 1].alt || 'Preview image';

  let overlay = document.getElementById('lightboxOverlay');
  let lightboxImage = document.getElementById('lightboxImage');

  if (lightboxImage) {
    lightboxImage.src = src;
    lightboxImage.alt = alt;
  }

  if (overlay) {
    overlay.style.display = 'flex';
  }
}

function closeLightbox() {
  let overlay = document.getElementById('lightboxOverlay');
  if (overlay) overlay.style.display = 'none';
}

window.addEventListener('DOMContentLoaded', function () {
  const dots = document.querySelectorAll('.demo');
  dots.forEach(function (dot, idx) {
    dot.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      openLightbox(idx + 1);
    });
  });

  const mainSlides = document.querySelectorAll('.mySlides img');
  mainSlides.forEach(function (img, idx) {
    img.addEventListener('click', function () {
      openLightbox(idx + 1);
    });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  });
});

function openLightbox(index) {
  let slides = document.getElementsByClassName('mySlides');
  if (!slides[index - 1]) return;
  let img = slides[index - 1].querySelector('img');

  let overlay = document.getElementById('lightboxOverlay');
  let lightboxImage = document.getElementById('lightboxImage');

  if (lightboxImage && img) {
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt || 'Preview image';
  }

  if (overlay) {
    overlay.style.display = 'flex';
  }
}

function closeLightbox() {
  let overlay = document.getElementById('lightboxOverlay');
  if (overlay) overlay.style.display = 'none';
}

window.addEventListener('DOMContentLoaded', function () {
  const dots = document.querySelectorAll('.demo');
  dots.forEach(function (dot, idx) {
    dot.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();
      currentSlide(idx + 1);
      openLightbox(idx + 1);
    });
  });

  const mainSlides = document.querySelectorAll('.mySlides img');
  mainSlides.forEach(function (img, idx) {
    img.addEventListener('click', function () {
      openLightbox(idx + 1);
    });
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  });
});