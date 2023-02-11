//your code here
  const btn = document.querySelector("#btn");
  const num = document.querySelector("#num");

  btn.addEventListener("click", function() {
    let randomNum = Math.floor(Math.random() * 41) - 20;
    num.textContent = randomNum;
  });
