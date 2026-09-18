const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("toggle", () => {
    if (!faq.open) return;
    faqs.forEach((other) => {
      if (other !== faq) other.open = false;
    });
  });
});
