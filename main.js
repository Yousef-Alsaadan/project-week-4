/*main map*/


let questionsAndAnswers = [
  { question: "متى يُحتفل باليوم الوطني السعودي؟", answer: " 23 سبتمبر" },
  {
    question: "في أي عام هجري تم توحيد المملكة العربية السعودية؟",
    answer: "1351",
  },
  {
    question: "من هو الملك الذي وحد المملكة العربية السعودية؟",
    answer: " الملك عبد العزيز بن عبد الرحمن آل سعود",
  },
  {
    question: "ما هو العلم الرسمي للمملكة العربية السعودية؟",
    answer: "علم أخضر ",
  },
  { question: "ما هي عاصمة المملكة العربية السعودية؟", answer: "الرياض" },
  { question: "كم عدد مناطق المملكة العربية السعودية؟", answer: "13" },
  {
    question: "ما هو رمز المملكة العربية السعودية الوطني؟",
    answer: " السيفين والنخلة",
  },
  { question: "ما هي العملة الرسمية في السعودية؟", answer: "الريال السعودي" },
  { question: "ما هو اسم أطول برج في المملكة؟", answer: "برج المملكه" },
  { question: "همة السعوديين مثل جبل؟", answer: "طويق" },
];

let currentQuestionIndex;

document.getElementById("character").addEventListener("click", function () {
  document.getElementById("chatbox").style.display = "block";
  popupContainer.classList.add("active");
  document.getElementById("character").style.visibility = "hidden";

  currentQuestionIndex = Math.floor(Math.random() * questionsAndAnswers.length);
  document.getElementById("questionDisplay").innerText =
    questionsAndAnswers[currentQuestionIndex].question;
  document.getElementById("result").innerText = "";
  document.getElementById("answerInput").value = "";
});

function checkAnswer() {
  let userAnswer = document.getElementById("answerInput").value;
  let correctAnswer = questionsAndAnswers[currentQuestionIndex].answer;

  if (userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
    document.getElementById("result").innerText = "إجابة صحيحة!";
    document.getElementById("result").style.color = "green";
  } else {
    document.getElementById("result").innerText = " أخطأت، راجع وطنيتك!";
    document.getElementById("result").style.color = "red";
  }
}
function showBox(boxId) {
  const allBoxes = document.querySelectorAll(".activity-box");
  allBoxes.forEach((box) => {
    box.style.display = "none";
  });

  document.getElementById(boxId).style.display = "block";
}

function closeBox(boxId) {
  document.getElementById(boxId).style.display = "none";
}

const showPopup = document.querySelector(".show-popup");
const popupContainer = document.querySelector(".popup-container");
const closeBtn = document.querySelector(".close-btn");
closeBtn.onclick = () => {
  popupContainer.classList.remove("active");
  // document.getElementById("character").style.visibility = "visible";
};

/*weather*/
const apiKey = "7e8e80afe2284b3903c2f5abebd4bb51";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city, Temp, icon) {
  const response = await fetch(apiUrl + city + `&APPID=${apiKey}`);
  var data = await response.json();

  Temp.innerHTML = Math.round(data.main.temp) + "°C";

  if (data.weather[0].main == "Clouds") {
    icon.src = "./clouds.png";
  } else if (data.weather[0].main == "Clear") {
    icon.src = "./clear.png";
  } else if (data.weather[0].main == "Rain") {
    icon.src = "./rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    icon.src = "./drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    icon.src = "./mist.png";
  } else if (data.weather[0].main == "Snow") {
    icon.src = "./snow.png";
  }
}

/*direct to login*/
window.onload = function () {
  const userData = JSON.parse(localStorage.getItem("user"));
  const userBar = document.getElementsByClassName("user_bar")[0];

  if (userData) {
    let div = document.createElement("div");
    let name = document.createElement("p");
    let logOut = document.createElement("button");

    div.setAttribute("class", "flex");
    name.textContent = `${userData.user}`;
    logOut.textContent = "Log Out";
    div.setAttribute("onclick", "logOut()");

    div.appendChild(name);
    div.appendChild(logOut);
    userBar.appendChild(div);
  } else {
    window.location.href = "./log.html";
  }
  // else {
  //   let hidden = document.getElementsByClassName("hidden")[0];
  //   hidden.style.display = "block";
  // }
};

function logOut() {
  localStorage.removeItem("user");
  window.location.href = "./log.html";
}
