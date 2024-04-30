//Selecionar os elementos do carrossel
const carroselContainer = document.querySelector('.carrosel-container');
const carroselSlides = document.querySelectorAll('.carrosel-slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Definir o slide atual
let currentSlide = 0;

// Função para mostrar o slide atual
function showSlide() {
  carroselSlides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? 'block' : 'none';
  });
}

// Função para ir para o slide anterior
function prevSlide() {
  currentSlide = (currentSlide - 1 + carroselSlides.length) % carroselSlides.length;
  showSlide();
}

// Função para ir para o slide seguinte
function nextSlide() {
  currentSlide = (currentSlide + 1) % carroselSlides.length;
  showSlide();
}

// Adicionar eventos aos controles do carrossel
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Mostrar o slide inicial
showSlide();

const form = document.getElementById('contactForm');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const telephone = document.getElementById('telephone').value;
  const email = document.getElementById('email').value;

  console.log(`Name: ${name}`);
  console.log(`Telephone: ${telephone}`);
  console.log(`Email: ${email}`);

  if (!name || !email || !message) {
    alert('Por favor preencha todos os campos');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  form.submit();

  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').innerHTML = '';
});

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

