const birthdate = document.querySelector("#birthdate");
const calculateBtn = document.querySelector("#calculate-btn");
const result = document.querySelector("#result");

calculateBtn.addEventListener("click", () => {
  const birthdateValue = new Date(birthdate.value).getFullYear();
  const todayValue = new Date().getFullYear();
  const ageValue = todayValue - birthdateValue;
  if (ageValue > 0) {
    result.textContent = `You are ${ageValue} years old`;
  } else {
    result.textContent = "Please enter valid value";
  }
});
