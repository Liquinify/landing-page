import './styles/style.css'

const mobileCarouselButtons = document.querySelector('.carousel-buttons-mobile');
const pcCarouselButtons = document.querySelector('.carousel-buttons');
const pcCarouselCounter = document.querySelector('.carousel-counter');
const faqAnswers = document.querySelectorAll('.faq-answer');
const faqButtons = document.querySelectorAll('.faq-toggle');

document.addEventListener('DOMContentLoaded', () => {
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


