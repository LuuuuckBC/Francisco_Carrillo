document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los elementos con la clase 'question'
    const questions = document.querySelectorAll('.question');

    questions.forEach(question => {
        question.addEventListener('click', () => { 
            let infoId = question.id.replace('Pregunta', 'info');
            if (question.id === 'Pregunta1') {
                infoId = 'info';
            }
            const info = document.getElementById(infoId);
            if (info.classList.contains('open')) {
                info.classList.remove('open');
            } else {
                info.classList.add('open');
            }
        });
    });
});




document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.responsive-table a');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Desplazarse 
                targetElement.scrollIntoView({ behavior: 'smooth' });
                targetElement.classList.add('highlighted');

                setTimeout(() => {
                    targetElement.classList.remove('highlighted');
                }, 2000);
            }
        });
    });
});

