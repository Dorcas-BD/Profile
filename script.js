const currentDay = document.querySelector(
  "[data-testid='currentDayOfTheWeek']"
);
const currentUTCTime = document.querySelector("[data-testid='currentUTCTime']");

function getCurrentDayAndTime() {
  const currentDate = new Date();

  const daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfTheWeek = daysOfTheWeek[currentDate.getUTCDay()];

  const hours = currentDate.getUTCHours().toString().padStart(2, "0");
  const minutes = currentDate.getUTCMinutes().toString().padStart(2, "0");
  const seconds = currentDate.getUTCSeconds().toString().padStart(2, "0");

  currentDay.textContent = `${dayOfTheWeek}`;
  currentUTCTime.textContent = `${hours}:${minutes}:${seconds}`;
}

getCurrentDayAndTime();
setInterval(getCurrentDayAndTime, 1000);
