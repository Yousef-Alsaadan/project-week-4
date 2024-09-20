// burger bar function
function burger() {
  let mobile_link = document.getElementById("mobile_link");
  let mobile_btn = document.getElementsByClassName("mobile_btn")[0];
  if (mobile_link.style.display === "block") {
    mobile_link.style.display = "none";
    mobile_btn.style.display = "none";
  } else {
    mobile_link.style.display = "block";
    mobile_btn.style.display = "block";
  }
}
