function checkAnswer(){
  let correctAnswer="4";
  let userAnswer = (document.querySelector('input[name="quiz"]:checked').value);
  if (userAnswer === correctAnswer){
    return document.getElementById("feedback").innerText="Correct! Well done.";
  }else {
    return document.getElementById("feedback").innerText="That's incorrect. Try again!";
  }
}
document.getElementById("submit-answer").addEventListener("click",checkAnswer)