/*log styly*/
const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
  document.getElementById("change_caracter_log").src = "./teach-me.png";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
  document.getElementById("change_caracter_log").src = "./welcome.png";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};


/*log validate*/
let url = "https://66f02a49f2a8bce81be52e94.mockapi.io/users";

let signUpBtn = document.getElementById("signUpBtn");
let userName = document.getElementById("userName");
let emailAddress = document.getElementById("emailAddress");
let pass = document.getElementById("pass");

let logInBtn = document.getElementById("logInBtn");
let userValidate = document.getElementById("userValidate");
let passValidate = document.getElementById("passValidate");

let alertDisplayed = false;
let wrapper = document.createElement("div");
let mess = document.createElement("p");

async function signUp() {
  event.preventDefault();
  if (userName.value != "" || pass.value != "" || emailAddress.value != "") {
    if (userName.value.length >= 5) {
      if (pass.value.length >= 8) {
        let validateEmail = (emailAddress) => {
          return emailAddress.value.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
        };
        if (validateEmail(emailAddress)) {
          let textUser = await areUserTaken(userName.value, emailAddress.value);
          if (!textUser) {
            fetch(url, {
              method: "POST",
              body: JSON.stringify({
                user: userName.value,
                email: emailAddress.value,
                pass: pass.value,
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            })
              .then((response) => response.json())
              .then((json) => {
                localStorage.setItem(
                  "user",
                  JSON.stringify({
                    user: userName.value,
                    email: emailAddress.value,
                  })
                );
                window.location.href = "./index.html";
              });
          } else {
            errorSign("الاسم او الايميل مأخوذ!!");
          }
        } else {
          errorSign("الايميل غلط!!");
        }
      } else {
        errorSign("الرمز لازم أكثر من 8 خانات!!");
      }
    } else {
      errorSign("اسم المستخدم لازم أكثر 5 حروف!!");
    }
  } else {
    errorSign("الرجاء تعبأة الحقول!!");
  }
}

function logIn() {
  event.preventDefault();
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      let userFound = false;
      if (userValidate.value === "" || passValidate.value === "") {
        errorLog("الرجاء تعبأة الحقول!!");
        return;
      }

      json.map((data) => {
        if (userValidate.value === data.user) {
          if (passValidate.value === data.pass) {
            localStorage.setItem(
              "user",
              JSON.stringify({ user: data.user, email: data.email })
            );
            window.location.href = "./index.html";
            userFound = true;
          } else {
            errorLog("الرمز خاطئ!");
          }
        }
      });
      if (!userFound) {
        errorLog("المستخدم غير متوفر!");
      }
    });
}

function errorSign(message) {
  let alertPlaceholder = document.getElementsByClassName(
    "liveAlertPlaceholder"
  )[1];

  if (!alertDisplayed) {
    let appendAlert = (message) => {
      mess.textContent = message;
      mess.style.color = "red";
      mess.setAttribute("dir", "rtl");
      wrapper.appendChild(mess);

      alertPlaceholder.append(wrapper);
      alertDisplayed = true;

      setTimeout(() => {
        wrapper.remove();
      }, 5000);
    };
    let alertTrigger = document.getElementsByClassName("liveAlertBtn")[1];
    if (alertTrigger) {
      alertTrigger.addEventListener("click", () => {
        appendAlert(message);
      });
    }
  }
}

function errorLog(message) {
  let alertPlaceholder = document.getElementsByClassName(
    "liveAlertPlaceholder"
  )[0];

  if (!alertDisplayed) {
    let appendAlert = (message) => {
      mess.textContent = message;
      mess.style.color = "red";
      mess.setAttribute("dir", "rtl");
      wrapper.appendChild(mess);

      alertPlaceholder.append(wrapper);
      alertDisplayed = true;

      setTimeout(() => {
        wrapper.remove();
      }, 5000);
    };
    let alertTrigger = document.getElementsByClassName("liveAlertBtn")[0];
    if (alertTrigger) {
      alertTrigger.addEventListener("click", () => {
        appendAlert(message);
      });
    }
  }
}

function areUserTaken(userName, emailAddress) {
  return fetch(url)
    .then((response) => response.json())
    .then((json) => {
      return json.some(
        (data) => data.user === userName || data.email === emailAddress
      );
    });
}
