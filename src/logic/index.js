const form = document.querySelector("#form");
// const floatingCard = document.getElementById("floating-card");
// const floatingMessage = document.getElementById("floating-card-message");

const submitForm = (event) => {
  event.preventDefault();
  console.log("AAAAAAAAAAAAAAA");
};
// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   // Recoger los datos del formulario
//   const formData = new FormData(form);
//   const userData = {};
//   formData.forEach((value, key) => {
//     userData[key] = value;
//   });
//   console.log(formData);

//   // Mostrar el mensaje con los datos
//   floatingMessage.textContent = `Thank you, ${
//     userData.full_name || "User"
//   }! Your subscription is being processed.`;
//   showFloatingCard();

//   // Vaciar el formulario después de enviarlo
//   form.reset();
// });

// function showFloatingCard() {
//   floatingCard.classList.remove("hidden");
//   floatingCard.classList.add("visible");

//   // Ocultar la tarjeta después de 5 segundos
//   setTimeout(() => {
//     floatingCard.classList.remove("visible");
//     floatingCard.classList.add("hidden");
//   }, 5000);
// }
