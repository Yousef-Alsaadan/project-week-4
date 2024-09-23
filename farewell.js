/*direct to login*/
window.onload = function () {
  const userData = JSON.parse(localStorage.getItem("user"));

  document.getElementById(
    "text"
  ).textContent = `شرفتنا زيارتك يا ${userData.user}`;

  setTimeout(() => {
    localStorage.removeItem("user");
  }, "10000");
};
