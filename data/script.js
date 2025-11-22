const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        topBtn.classList.add('visible');
    } else {
        topBtn.classList.remove('visible');
    }
});

topBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const form = document.getElementById('contactForm');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const mensagem = document.getElementById('mensagem');

function showError(input, errorId) {
    input.classList.add('error');
    document.getElementById(errorId).style.display = 'block';
}

function hideError(input, errorId) {
    input.classList.remove('error');
    document.getElementById(errorId).style.display = 'none';
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

[nome, email, mensagem].forEach(input => {
    input.addEventListener('input', () => {
        const errorId = input.id + 'Error';
        if (input.checkValidity()) {
            hideError(input, errorId);
        }
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    if (nome.value.trim().length < 3) {
        showError(nome, 'nomeError');
        isValid = false;
    } else {
        hideError(nome, 'nomeError');
    }

    if (!validateEmail(email.value)) {
        showError(email, 'emailError');
        isValid = false;
    } else {
        hideError(email, 'emailError');
    }

    if (mensagem.value.trim().length < 10) {
        showError(mensagem, 'mensagemError');
        isValid = false;
    } else {
        hideError(mensagem, 'mensagemError');
    }

    if (isValid) {
        document.getElementById('successMsg').style.display = 'block';
        form.reset();
        setTimeout(() => {
            document.getElementById('successMsg').style.display = 'none';
        }, 5000);
    }
});