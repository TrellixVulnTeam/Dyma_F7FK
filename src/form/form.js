import "../assets/styles/styles.scss";
import "./form.scss";

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);

  const entries = formData.entries();

  const obj = Array.from(entries).reduce((acc, value) => {
    acc[value[0]] = value[1];
    return acc;
  }, {});
  console.log(obj);
});
