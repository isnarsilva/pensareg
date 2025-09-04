// Navegação suave ao clicar nos links do menu e botões
document.querySelectorAll('nav a, .hero .btn, .btn[href="#contact"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Remover classe active de todos os links
            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
            });

            // Adicionar classe active ao link clicado (apenas se for um link do menu)
            if (this.tagName === 'A' && this.closest('nav')) {
                this.classList.add('active');
            }

            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Formulário de contato
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Simulação de envio do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Formulário enviado:');
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Mensagem:', message);

    alert('Obrigado pela sua mensagem! Entraremos em contato em breve.');
    this.reset();
});

// Animação de revelação ao rolar a página
function revealOnScroll() {
    const elements = document.querySelectorAll('.product, .contact-info, .contact-form, .diferencial');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add('animate');
        }
    });
}

// Verificar elementos ao carregar e ao rolar
window.addEventListener('load', revealOnScroll);
window.addEventListener('scroll', revealOnScroll);
