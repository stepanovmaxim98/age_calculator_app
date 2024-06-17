const inputData = document.querySelectorAll(".calculator-inputs__input");
const result = document.querySelector(".decoration__button");
const dayErorr = document.querySelector(".day-error");
const monthErorr = document.querySelector(".month-error");
const yearErorr = document.querySelector(".year-error");
const outputYear = document.querySelector("#year");
const outputMonth = document.querySelector("#month");
const outputDay = document.querySelector("#day");

result.onclick = function () {
  const dayOfBirthday = inputData[0].value;
  const monthOfBirthday = inputData[1].value;
  const yearOfBirthday = inputData[2].value;
  // console.log([dayOfBirthday, monthOfBirthday, yearOfBirthday]);
  if (dayOfBirthday === "") {
    dayErorr.innerHTML = `<p class="error-text">Day is required</p>`;
  } else if (Number(dayOfBirthday) >= 1 && Number(dayOfBirthday) <= 31) {
    dayErorr.innerHTML = "";
  } else {
    dayErorr.innerHTML = `<p class="error-text">Enter a number from 1 to 31</p>`;
  }
  if (monthOfBirthday === "") {
    monthErorr.innerHTML = `<p class="error-text">Month is required</p>`;
  } else if (Number(monthOfBirthday) >= 1 && Number(monthOfBirthday) <= 12) {
    monthErorr.innerHTML = "";
  } else {
    monthErorr.innerHTML = `<p class="error-text">Enter a number from 1 to 12</p>`;
  }
  if (yearOfBirthday === "") {
    yearErorr.innerHTML = `<p class="error-text">Year is required</p>`;
  } else if (Number(yearOfBirthday) >= 1940 && Number(yearOfBirthday) <= 2100) {
    yearErorr.innerHTML = "";
  } else {
    yearErorr.innerHTML = `<p class="error-text">Enter correct year</p>`;
  }

  const today = new Date();
  const birthDate = new Date(yearOfBirthday, monthOfBirthday, dayOfBirthday);

  const millisecondsDiff = today.getTime() - birthDate.getTime();
  const secondsDiff = millisecondsDiff / 1000;
  const minutesDiff = secondsDiff / 60;
  const hoursDiff = minutesDiff / 60;
  const daysDiff = Math.floor(hoursDiff / 24);
  const monthsDiff = Math.floor(daysDiff / 30.437);
  const yearsDiff = Math.floor(monthsDiff / 12);

  outputYear.innerText = `${yearsDiff}`;
  outputMonth.innerText = `${monthsDiff % 12}`;
  outputDay.innerText = `${daysDiff % 30}`;
};
