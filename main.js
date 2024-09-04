document.addEventListener('DOMContentLoaded', function() {
    const surpriseButton = document.getElementById('surprise-button');
    const surpriseMessage = document.getElementById('surprise-message');
    const questionsSection = document.getElementById('questions-section');
    const questionContainers = document.querySelectorAll('.question-container');
    const yesButtons = document.querySelectorAll('.yes-button');
    const noButtons = document.querySelectorAll('.no-button');
    const backgroundMusic = document.getElementById('background-music');

    let currentQuestionIndex = 0;

    // Mostrar el confeti al cargar la página
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    function showNextQuestion() {
        if (currentQuestionIndex < questionContainers.length) {
            questionContainers[currentQuestionIndex].style.display = 'block';
        }
    }

    function hideCurrentQuestion() {
        if (currentQuestionIndex < questionContainers.length) {
            questionContainers[currentQuestionIndex].style.display = 'none';
        }
    }

    surpriseButton.addEventListener('click', function() {
        surpriseMessage.style.display = 'block';
        questionsSection.style.display = 'block';
        backgroundMusic.play();
        showNextQuestion();
    });

    yesButtons.forEach(yesButton => {
        yesButton.addEventListener('click', function() {
            confetti({
                particleCount: 200,
                spread: 100,
                origin: { y: 0.6 }
            });
            hideCurrentQuestion();
            currentQuestionIndex++;
            showNextQuestion();
        });
    });

    noButtons.forEach(noButton => {
        noButton.addEventListener('mouseover', function() {
            const offsetX = Math.random() * 300 - 150; // Mover el botón "No" en un rango aleatorio
            const offsetY = Math.random() * 200 - 100; // Mover el botón "No" en un rango aleatorio
            noButton.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });

        noButton.addEventListener('click', function() {
            // No hacer nada si se hace clic en el botón "No"
        });
    });
});
