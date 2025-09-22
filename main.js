const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
  question.addEventListener("click", () => {
    const currentlyActiveQuestion = document.querySelector(".faq-question.active");
    if (currentlyActiveQuestion && currentlyActiveQuestion!==question){
      currentlyActiveQuestion.classList.toggle("active");
      currentlyActiveQuestion.nextElementSibling.style.maxHeight = 0;

    }

    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if (question.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";  // expand smoothly
    } else {
      answer.style.maxHeight = 0;  // collapse
    }
  });
});

