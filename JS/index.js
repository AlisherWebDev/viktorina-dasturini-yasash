let startBtn = document.querySelector(".start-button"),
  quizBox = document.querySelector(".quiz__box"),
  resultBox = document.querySelector(".result__box"),
  optionList = document.querySelector(".option__list"),
  restartQuiz = resultBox.querySelector(".restart "),
  nextBtn = document.querySelector(".next__btn");

startBtn.onclick = () => {
  quizBox.classList.add("activeQuiz");
  showQuestions(0);
};

let queCount = 0;
let userScore = 0;

//

nextBtn.addEventListener("click", () => {
  if (queCount < questions.length - 1) {
    queCount++;
    showQuestions(queCount);
  } else {
    console.log("Questions Completed");
    showResult();
  }
  nextBtn.style.display = "none";
});

// showQuestions function begin

function showQuestions(index) {
  const quizText = document.querySelector(".quiz__text");
  quizText.innerHTML = `
        <span>${index + 1}. ${questions[index].question}</span>
    `;

  optionList.innerHTML = `
        <div class="option">
            <span>${questions[index].options[0]}</span>
          </div>
        <div class="option">
            <span>${questions[index].options[1]}</span>
        </div>
        <div class="option">
            <span>${questions[index].options[2]}</span>
        </div>
        <div class="option">
            <span>${questions[index].options[3]}</span>
        </div>
    `;
  let quePageOf = document.querySelector(".que__pageof");

  quePageOf.innerHTML = `
    <span style="color:green; font-weight:900; font-size:20px;" >${
      index + 1
    }</span>/<span style="color:#000; font-size:20px; font-weight:900;">${
    questions.length
  }</span>
 `;
  let options = optionList.querySelectorAll(".option");

  for (i = 0; i < options.length; i++) {
    options[i].setAttribute("onclick", "optionSelected(this)");
  }
}
// optionSelected function begin

function optionSelected(ans) {
  let userAns = ans.textContent.trim();
  let correctAns = questions[queCount].answer.trim();
  let allOptions = optionList.children.length;

  let correctCheck = ' <i class="correctCheck fas fa-check"></i>';
  let wrongCheck = '<i class=" wrongCheck fa-solid fa-xmark"></i>';
  if (userAns == correctAns) {
      userScore += 1;
    console.log("tugri javob" + userScore);
    ans.classList.add("correct");
    ans.insertAdjacentHTML("beforeend", correctCheck);
  } else {
    console.log("notugri javob");
    ans.classList.add("incorrect");
    ans.insertAdjacentHTML("beforeend", wrongCheck);

    for (let i = 0; i < allOptions; i++) {
      if (optionList.children[i].textContent == correctAns) {
        optionList.children[i].setAttribute("class", " option correct");
      }
    }
  }

  for (let i = 0; i < allOptions; i++) {
    optionList.children[i].classList.add("disabled");
  }
  nextBtn.style.display = "block";
}

function showResult() {
  quizBox.classList.remove("activeQuiz");
  resultBox.classList.add("activeResult");

  let scoreTag;
  let scoreText = resultBox.querySelector(".score__text");
  let crownIcon = `<i class=" crown__icon fa-solid fa-crown"></i>`
  resultBox.insertAdjacentHTML("afterbegin", crownIcon)

  if (userScore >= 4){
    scoreTag = `<p class="result__text">😎 Qoyil siz <span style="color:green;">${userScore}</span> ta savolga javob berdingiz!</p>`;
    scoreText.innerHTML = scoreTag;
  } else if (userScore > 2) {
    scoreTag = `😊<p class="result__text">siz <span style="color:green;">${userScore}</span>ta savolga javob berdingiz!</p>`;
    scoreText.innerHTML = scoreTag;
  } else {
    scoreTag = `<p class="result__text"> 🙄 sizni balingiz yetarli emas!</p>`;
    scoreText.innerHTML = scoreTag;
  }
}

restartQuiz.onclick = () =>{
    window.location.reload();
}
