document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#Signup").addEventListener("click", () => {
    document
      .querySelector("#display-modal")
      .classList.toggle("display-modal-none");
  });
});

const closeModal = () => {
  document
    .querySelector("#display-modal")
    .classList.toggle("display-modal-none");
};
