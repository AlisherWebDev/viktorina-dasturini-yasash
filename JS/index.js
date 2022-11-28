window.addEventListener("DOMContentLoaded", () =>{



const startBtn = document.querySelector(".start-button"),
continueBtn = startBtn.querySelector(".restart"),
quizBox = document.querySelector(".quiz__box"),
resultBox = document.querySelector(".result__box"),
optionList = document.querySelector(".option__list"),
restartQuiz = resultBox.querySelector(".restart "),
nextBtn = resultBox.querySelector(".next__btn");

startBtn.addEventListener("click", () =>{
    startBtn.classList.add("none");
    quizBox.classList.remove("none");
     
    showQuestions(0)


})
let queCount = 0;
let userScore = 0

function showQuestions (index){
 
    const quizText = document.querySelector(".quiz__text");
        quizText.innerHTML = `
        <span>${questions[index].question}</span>
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
    `

    const option = optionList.querySelectorAll(".option");
    
    for(i = 0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)")
    }
}

nextBtn.onclick = () =>{
    if(queCount < questions.length -1){
        queCount++
        showQuestions(queCount)
    } else{
        showResult(); 
    }
}

function optionSelected(answer){
    let userAns = answer.textContent;
    let correctAns = questions[queCount].answer;
    let allOptions = optionList.children.length;

     if(userAns == correctAns){
        userScore += 1;
        answer.classList.add("correct")
        console.log("correct" + userScore);
     } else{
        answer.classList.add("incorrect")
        console.log("wrong Answer" + userScore);
     }
     
     
     
     for(i = 0; i < allOption.length; i++){
         optionList.children[i].classList.add("onclick", "optionSelected(this)")
    }
         nextBtn.classList.add("show")
}


 function showResult()
{
    quizBox.classList.add("none")
    resultBox.classList.remove("none")
    const scoreText = resultBox.querySelector(".score__text")

        if(userScore > 3){
            let scoreTag = `<p>😎Vooov siz ${userScore}ta savolga javob berdingiz!</p>`
            scoreText.innerHTML = scoreTag;
        }
        else if(userScore > 3){
            let scoreTag = `😊<p>siz ${userScore}ta savolga javob berdingiz!</p>`
            scoreText.innerHTML = scoreTag;
        }
        else{
            let scoreTag = `<p>😮sizni balingiz yetarli emas!</p>`
            scoreText.innerHTML = scoreTag;
        }
}

restartQuiz.onclick = () =>{
    resultBox.classList.add("none")
    quizBox.classList.remove("none")
    queCount = 0;
    userScore = 0;
    showQuestions(queCount)
    nextBtn.classList.remove(' ')
}







})
