document.querySelectorAll(".btn a").forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    if (button.style.backgroundColor === "rgb(51, 80, 185)") {
      button.style.backgroundColor = "#6b6b6b";
    } else {
      button.style.backgroundColor = "#3350b9";
    }
  });
});
document.querySelectorAll(".icon1 a").forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".modal1").classList.add("on");
  });
});
document.querySelectorAll(".icon2 a").forEach(function (element) {
  element.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector(".modal2").classList.add("on");
  });
});

document.querySelector(".close1").addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector(".modal1").classList.remove("on");
});
document.querySelectorAll('.close2').forEach(function(closeButton) {
  closeButton.addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.modal2').classList.remove('on');
  });
});
const dateCircles = document.querySelectorAll(".date-circle");

dateCircles.forEach((circle) => {
  circle.addEventListener("click", () => {
    const isAttended = circle.getAttribute("data-attended") === "true";
    if (isAttended) {
      circle.classList.remove("attended");
      circle.setAttribute("data-attended", "false");
      circle.innerHTML = "패스"; // 출석 취소 시 '출석'으로 텍스트를 변경합니다.
    } else {
      circle.classList.add("attended");
      circle.setAttribute("data-attended", "true");
      circle.innerHTML = "출석체크";
      circle.style.fontSize = "15px";
      circle.style.padding = "10px";
    }
  });
});
