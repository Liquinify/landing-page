import './styles/style.css'

const mobileCarouselButtons = document.querySelector('.carousel-buttons-mobile');
const pcCarouselButtons = document.querySelector('.carousel-buttons');
const pcCarouselCounter = document.querySelector('.carousel-counter');
const faqAnswers = document.querySelectorAll('.faq-answer');
const faqButtons = document.querySelectorAll('.faq-toggle');
const contactForm = document.querySelector('.contact-form');
const nameInput = document.querySelector('.contact-name');
const emailInput = document.querySelector('.contact-email');
const messageInput = document.querySelector('.contact-message');


document.addEventListener('DOMContentLoaded', () => {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const existingError = document.querySelector('.error-message');
      if (existingError) {
        existingError.remove();
      }

      nameInput.classList.remove('input-error');
      emailInput.classList.remove('input-error');
      messageInput.classList.remove('input-error');

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add('input-error');
        const errorP = document.createElement('p');
        errorP.className = 'error-message';
        errorP.textContent = 'Incorrect email type';
        emailInput.insertAdjacentElement('afterend', errorP);
      } 

      if(!nameInput.value.trim() || !nameInput.value.length){ 
        nameInput.classList.add('input-error');
        const errorP = document.createElement('p');
        errorP.className = 'error-message';
        errorP.textContent = 'Name cannot be empty';
        nameInput.insertAdjacentElement('afterend', errorP);
      }

      if(!messageInput.value.trim() || !messageInput.value.length){ 
        messageInput.classList.add('input-error');
        const errorP = document.createElement('p');
        errorP.className = 'error-message';
        errorP.textContent = 'Message cannot be empty';
        messageInput.insertAdjacentElement('afterend', errorP);
      }
    });
  
  faqButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const answer = faqAnswers[index];
      const currentbutton = faqButtons[index];
      const isOpen = answer.style.display === 'block';

      faqAnswers.forEach((ans) => {
        ans.style.display = 'none';
        currentbutton.innerHTML = '+';
      });
  
      if (!isOpen) {
        answer.style.display = 'block';
        currentbutton.innerHTML = 'x';
      }
    });
  });
  if (window.innerWidth < 768) {
    mobileCarouselButtons.style.display = 'flex';
    pcCarouselButtons.style.display = 'none';
    pcCarouselCounter.style.display = 'none';
  }

  if (window.innerWidth >= 768) {
    mobileCarouselButtons.style.display = 'none';
  }

  if (window.innerWidth >= 1440) {
    mobileCarouselButtons.style.display = 'none';
    pcCarouselButtons.style.display = 'flex';
    pcCarouselCounter.style.display = 'block';
  }
});


