var faqItems = document.getElementsByClassName("faq-question");

for (var i = 0; i < faqItems.length; i++) {
  faqItems[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var answer = this.nextElementSibling;
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
}