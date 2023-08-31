document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", function () {
        let score = 0;

        for (let i = 1; i <= 10; i++) {
            const questionElement = document.querySelector(`[data-correct="question${i}"]`);
            const correctAnswer = questionElement.getAttribute("data-correct-answer");
            const selectedAnswer = document.querySelector(`input[name="question${i}"]:checked`);

            if (selectedAnswer && selectedAnswer.value === correctAnswer) {
                score++;
            }
        }

        alert(`Your score is ${score} out of 10!`);
    });
});



