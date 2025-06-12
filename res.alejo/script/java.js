// script.js
document.addEventListener('DOMContentLoaded', () => {
  // Botón WhatsApp
  const whatsappBtn = document.getElementById('whatsappBtn');
  if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
      window.open('https://wa.me/573123456789', '_blank');
    });
  }

  // Botón llamada
  const callBtn = document.getElementById('callBtn');
  if (callBtn) {
    callBtn.addEventListener('click', () => {
      window.location.href = 'tel:+5712345678';
    });
  }

  // Formulario de contacto
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Mensaje enviado correctamente. Pronto nos pondremos en contacto.');
      contactForm.reset();
    });
  }
});
