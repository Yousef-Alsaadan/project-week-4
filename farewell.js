/*direct to login*/
window.onload = function () {
  const userData = JSON.parse(localStorage.getItem("user"));

  if (userData) {
    document.getElementById(
      "text"
    ).textContent = `شرفتنا زيارتك يا ${userData.user}`;
  } else {
    window.location.href = "./log.html";
  }
};
