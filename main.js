/*main map*/
let make_map_green = document.getElementsByClassName("city")[0];
let make_map_green1 = document.getElementsByClassName("city")[1];
let make_map_green2 = document.getElementsByClassName("city")[2];
let make_map_green3 = document.getElementsByClassName("city")[3];
let make_map_green4 = document.getElementsByClassName("city")[4];

let make_text_block = document.getElementsByClassName("city_text")[0];
let make_text_block1 = document.getElementsByClassName("city_text")[1];
let make_text_block2 = document.getElementsByClassName("city_text")[2];
let make_text_block3 = document.getElementsByClassName("city_text")[3];
let make_text_block4 = document.getElementsByClassName("city_text")[4];

let hero_text = document.getElementsByClassName("hero_text")[0];

make_map_green.addEventListener("click", function () {
  if (make_map_green.classList.contains("city_clicked")) {
    make_map_green.classList.remove("city_clicked");
    make_map_green.classList.add("city");
    hero_text.style.position = "absolute";
    hero_text.style.zIndex = "-99999";
    make_text_block.classList.remove("city_clicked_text");
    make_text_block.classList.add("city_text");
  } else {
    make_map_green.classList.remove("city");
    make_map_green.classList.add("city_clicked");
    hero_text.style.position = "absolute";
    hero_text.style.zIndex = "-99999";
    make_text_block.classList.remove("city_text");
    make_text_block.classList.add("city_clicked_text");
  }
});

make_map_green1.addEventListener("click", function () {
  if (make_map_green1.classList.contains("city_clicked")) {
    make_map_green1.classList.remove("city_clicked");
    make_map_green1.classList.add("city");
    hero_text.style.position = "absolute";
    hero_text.style.zIndex = "-99999";
    make_text_block1.classList.remove("city_clicked_text");
    make_text_block1.classList.add("city_text");
  } else {
    make_map_green1.classList.remove("city");
    make_map_green1.classList.add("city_clicked");
    hero_text.style.position = "absolute";
    hero_text.style.zIndex = "-99999";
    make_text_block1.classList.remove("city_text");
    make_text_block1.classList.add("city_clicked_text");
  }
});

make_map_green2.addEventListener("click", function () {
  if (make_map_green2.classList.contains("city_clicked")) {
    make_map_green2.classList.remove("city_clicked");
    make_map_green2.classList.add("city");
    hero_text.style.position = "absolute";
    hero_text.style.zIndex = "-99999";
    make_text_block2.classList.remove("city_clicked_text");
    make_text_block2.classList.add("city_text");
  } else {
    make_map_green2.classList.remove("city");
    make_map_green2.classList.add("city_clicked");
    hero_text.style.position = "absolute";
    hero_text.style.zIndex = "-99999";
    make_text_block2.classList.remove("city_text");
    make_text_block2.classList.add("city_clicked_text");
  }
});

make_map_green3.addEventListener("click", function () {
  if (make_map_green3.classList.contains("city_clicked")) {
    make_map_green3.classList.remove("city_clicked");
    make_map_green3.classList.add("city");
    hero_text.style.position = "absolute";
    hero_text.style.zIndex = "-99999";
    make_text_block3.classList.remove("city_clicked_text");
    make_text_block3.classList.add("city_text");
  } else {
    make_map_green3.classList.remove("city");
    make_map_green3.classList.add("city_clicked");
    hero_text.style.position = "absolute";
    hero_text.style.zIndex = "-99999";
    make_text_block3.classList.remove("city_text");
    make_text_block3.classList.add("city_clicked_text");
  }
});

make_map_green4.addEventListener("click", function () {
  if (make_map_green4.classList.contains("city_clicked")) {
    make_map_green4.classList.remove("city_clicked");
    make_map_green4.classList.add("city");
    hero_text.style.position = "absolute";
    hero_text.style.zIndex = "-99999";
    make_text_block4.classList.remove("city_clicked_text");
    make_text_block4.classList.add("city_text");
  } else {
    make_map_green4.classList.remove("city");
    make_map_green4.classList.add("city_clicked");
    hero_text.style.position = "absolute";
    hero_text.style.zIndex = "-99999";
    make_text_block4.classList.remove("city_text");
    make_text_block4.classList.add("city_clicked_text");
  }
});

/*الخيل*/
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
