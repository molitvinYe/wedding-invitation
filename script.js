const weddingDate = new Date("2026-10-17T14:30:00+03:00");

const elements = {
  days: document.querySelector("#days"),
  hours: document.querySelector("#hours"),
  minutes: document.querySelector("#minutes"),
  seconds: document.querySelector("#seconds"),
};

function updateCountdown() {
  const difference = Math.max(0, weddingDate.getTime() - Date.now());
  const totalSeconds = Math.floor(difference / 1000);

  elements.days.textContent = String(Math.floor(totalSeconds / 86400));
  elements.hours.textContent = String(Math.floor((totalSeconds % 86400) / 3600)).padStart(2, "0");
  elements.minutes.textContent = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  elements.seconds.textContent = String(totalSeconds % 60).padStart(2, "0");
}

updateCountdown();
window.setInterval(updateCountdown, 1000);
