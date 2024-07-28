// Initial slide index
let slideIndex = 0;

// Function to show slides based on the current slideIndex
function showSlides() {
  const slides = document.querySelector('.slides');
  slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

// Function to change slides
function changeSlide(n) {
  const slides = document.querySelector('.slides');
  const slideCount = slides.children.length;
  slideIndex = (slideIndex + n + slideCount) % slideCount;
  showSlides();
}

// Function to open modals
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'flex';
}

// Function to close modals
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}

// Attach event listeners to view more buttons and close buttons
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.view-more').forEach(button => {
    button.addEventListener('click', function() {
      openModal(this.getAttribute('data-modal'));
    });
  });

  document.querySelectorAll('.modal .close').forEach(button => {
    button.addEventListener('click', function() {
      closeModal(this.closest('.modal').id);
    });
  });

  window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
      closeModal(event.target.id);
    }
  });

  // Animate follower counts
  animateFollowerCount('followers-count-1', 0, 70, 2000);
  animateFollowerCount('followers-count-2', 0, 90, 2000);

  // Toggle overlay visibility on Instagram card click
  document.querySelectorAll('.instagram-card').forEach(card => {
    card.addEventListener('click', function() {
      const overlay = this.querySelector('.card-overlay');
      overlay.style.opacity = overlay.style.opacity === '1' ? '0' : '1';
    });
  });

  // Language card activation
  const languageCards = document.querySelectorAll('.language-card');
  languageCards.forEach(card => {
    card.addEventListener('click', function() {
      languageCards.forEach(c => c.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Skills popup functionality
  const skills = document.querySelectorAll('.skill');
  skills.forEach(skill => {
    skill.addEventListener('click', (event) => {
      event.stopPropagation();
      const popup = skill.querySelector('.popup');
      document.querySelectorAll('.popup').forEach(p => p.classList.remove('show'));
      popup.classList.toggle('show');
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.popup').forEach(p => p.classList.remove('show'));
  });

  // Close skills popups when clicking outside
  window.addEventListener('click', (event) => {
    if (event.target.classList.contains('skill-popup')) {
      event.target.style.display = 'none';
    }
  });
});

// Function to animate follower counts
function animateFollowerCount(elementId, startValue, endValue, duration) {
  const element = document.getElementById(elementId);
  const startTime = Date.now();
  
  function updateCount() {
    const elapsedTime = Date.now() - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const currentValue = Math.floor(progress * (endValue - startValue) + startValue);
    
    element.textContent = `${currentValue}k`;
    
    if (progress < 1) {
      requestAnimationFrame(updateCount);
    }
  }
  
  updateCount();
}

// Redirect function
function redirectToPage(url) {
  window.location.href = url;
}


document.addEventListener('DOMContentLoaded', () => {
  const skills = document.querySelectorAll('.skill');

  skills.forEach(skill => {
    skill.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent event bubbling
      const popup = skill.querySelector('.popup');
      const isVisible = popup.classList.contains('show');
      // Hide all popups first
      document.querySelectorAll('.popup').forEach(p => p.classList.remove('show'));
      // Toggle visibility of the clicked popup
      popup.classList.toggle('show', !isVisible);
    });
  });

  // Optional: Hide popup when clicking outside
  document.addEventListener('click', () => {
    document.querySelectorAll('.popup').forEach(p => p.classList.remove('show'));
  });
});

// JavaScript to handle the popup functionality

// Select all skill elements
const skills = document.querySelectorAll('.skill');

// Add click event listeners to each skill element
skills.forEach(skill => {
  skill.addEventListener('click', () => {
    // Get the popup ID from the data attribute of the clicked skill
    const popupId = skill.getAttribute('data-popup');
    // Select the popup element by ID
    const popup = document.getElementById(popupId);
    // Display the popup
    popup.style.display = 'flex';
  });
});

//for skills
// Select all close buttons in popups
const closeButtons = document.querySelectorAll('.skill-popup .close');

// Add click event listeners to each close button
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Hide the popup when the close button is clicked
    const popup = button.closest('.skill-popup');
    popup.style.display = 'none';
  });
});

// Add click event listener to window for closing popup when clicking outside
window.addEventListener('click', (event) => {
  // Close the popup if the user clicks outside of the popup content
  if (event.target.classList.contains('skill-popup')) {
    event.target.style.display = 'none';
  }
});

// Form Validation
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function (event) {
      event.preventDefault();
      if (validateForm()) {
          // Form is valid, proceed with form submission (e.g., via AJAX)
          alert('Form submitted successfully!');
      }
  });
});

function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
      alert('Please fill out all fields.');
      return false;
  }

  if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return false;
  }

  return true;
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Project Details Interaction
document.querySelectorAll('.view-details').forEach(button => {
  button.addEventListener('click', () => {
      const projectId = button.getAttribute('data-project');
      alert('More details about ' + projectId);
      // Additional code to load project details can go here
  });
});


