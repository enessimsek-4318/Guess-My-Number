let randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);
let score = 10;
let topScore=localStorage.getItem("topScore") || 0;
document.querySelector(".top-score").textContent=topScore;

document.querySelector(".check-btn").addEventListener("click", () => {
    const guessInput = Number(document.querySelector(".guess-input").value);
    const message = document.querySelector(".msg");
    const body = document.querySelector("body");
    if (!guessInput) {
        message.innerText = "Please enter a number";
    } else if (randomNumber === guessInput) {
        message.innerHTML = `Congrats You Win <i class="fa-solid fa-face-grin-hearts fa-2x"></i>`;
        body.className = "bg-success"
        if (score >= topScore) {
            localStorage.setItem("topScore",score);
            document.querySelector(".top-score").textContent = score;
            document.querySelector(".secret-number").textContent = randomNumber;
            document.querySelector(".check-btn").disabled = true;
        }
    } else {
        score--;
        if (score > 0) {
            guessInput > randomNumber ?
                message.innerHTML = `<i class="fa-solid fa-arrow-trend-down"></i> Decrease` :
                message.innerHTML = `<i class="fa-solid fa-arrow-trend-up"></i> Increase`
        } else {
            message.innerHTML = `You Lost !!! <i class="fa-regular fa-face-sad-tear fa-2x"></i> `;
            body.className = "bg-danger";
            document.querySelector(".secret-number").textContent = randomNumber;
            document.querySelector(".check-btn").disabled = true;
        }


        document.querySelector(".score").textContent = score;
    }
})

document.querySelector(".again-btn").addEventListener("click", () => {
    score = 10;
    document.querySelector(".score").textContent = score;
    randomNumber = Math.round(Math.random() * 100);
    document.querySelector(".secret-number").textContent = "?";
    console.log(randomNumber);
    document.querySelector(".check-btn").disabled = false;
    document.querySelector("body").classList.remove("bg-success", "bg-danger");
    document.querySelector(".guess-input").value = "";
    const message = document.querySelector(".msg");
    message.textContent="Starting..";
})



// //! LOCALSTORAGE - SESSIONSTOREAGE
// myObj={a:1,b:2,c:3};
// localStorage.setItem("OBJ",JSON.stringify(myObj));
// const readObj=JSON.parse(localStorage.getItem("OBJ"));
