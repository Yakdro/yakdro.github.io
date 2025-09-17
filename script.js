//script for scroll function //

const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };

  scrollTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  // fade function //
  const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -20px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = (window.scrollY > 200) ? "block" : "none";
});

// smooth scroll//
window.addEventListener('load', () => {
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, 0);
});


// open and close model for meanu //
function openModal(id) {
  document.getElementById(id).style.display = 'flex';
  document.body.classList.add('modal-open');
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
  document.body.classList.remove('modal-open');
}

// Optional: Close modal on background click
window.addEventListener('click', function(e) {
  const modals = document.querySelectorAll('.menu-modal');
  modals.forEach(modal => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
  });
});



// Track slides separately for each modal
let slideIndices = {};

// Open Modal
function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
  slideIndices[modalId] = 1;
  showSlides(slideIndices[modalId], modalId);
}

// Close Modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Next/Prev Controls
function plusSlides(n, modalId) {
  slideIndices[modalId] += n;
  showSlides(slideIndices[modalId], modalId);
}

// Thumbnail Controls
function currentSlide(n, modalId) {
  slideIndices[modalId] = n;
  showSlides(slideIndices[modalId], modalId);
}

// Show Slides
function showSlides(n, modalId) {
  let modal = document.getElementById(modalId);
  let slides = modal.getElementsByClassName("mySlides");
  let dots = modal.getElementsByClassName("dot");

  if (n > slides.length) { slideIndices[modalId] = 1; }
  if (n < 1) { slideIndices[modalId] = slides.length; }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Reset all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show active slide + dot
  slides[slideIndices[modalId] - 1].style.display = "block";
  dots[slideIndices[modalId] - 1].className += " active";
}
