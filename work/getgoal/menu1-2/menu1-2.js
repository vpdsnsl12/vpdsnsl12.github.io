
document.querySelectorAll(".add-icon a").forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".add-modal").classList.add("on");
  });
});

document.querySelector(".add-modal-close").addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector(".add-modal").classList.remove("on");
});
