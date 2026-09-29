/* ==========================================================================
   EDITABLE [SURVEY LINKS]
   Paste each survey URL below once the survey artifact is published.
   While a value is empty, its button stays disabled and shows a "coming soon"
   message instead of navigating.

   To point all three audiences at one survey, use the same URL for each.
   ========================================================================== */
const SURVEY_LINKS = {
  players: "",
  parents: "",
  coaches: "",
};

/* Message shown when a survey link hasn't been added yet. */
const PENDING_MESSAGE = "The survey isn't open yet — please check back soon.";

const status = document.getElementById("survey-status");
const buttons = document.querySelectorAll("[data-survey]");

buttons.forEach((button) => {
  const url = SURVEY_LINKS[button.dataset.survey];

  if (!url) {
    button.setAttribute("aria-disabled", "true");
    button.addEventListener("click", () => {
      status.textContent = PENDING_MESSAGE;
    });
    return;
  }

  button.addEventListener("click", () => {
    window.open(url, "_blank", "noopener");
  });
});
