/*direct to login*/
window.onload = function () {
  const userData = JSON.parse(localStorage.getItem("user"));

  document.getElementById(
    "text"
  ).textContent = `شرفتنا زيارتك يا ${userData.user}`;

  if (!userData) {
    window.location.href = "./log.html";
  }
};
