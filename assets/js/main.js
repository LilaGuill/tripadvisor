document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#Signup").addEventListener("click", () => {
    document
      .querySelector("#display-modal")
      .classList.remove("display-modal-none");
    document
      .querySelector("#display-modal")
      .classList.add("display-modal-true");
  });

  document.querySelector("#close-modal").addEventListener("click", () => {
    document
      .querySelector("#display-modal")
      .classList.remove("display-modal-true");
    document
      .querySelector("#display-modal")
      .classList.add("display-modal-none");
  });
});

// document.addEventListener("DOMContentLoaded", () => {})

// const switchModal = () => {
//   document.querySelector("#display-modal").classList.toggle("show");
// };
// const closeModal = () => {
//   document.querySelector("#close-modal").classList.toggle("hide");
// };
