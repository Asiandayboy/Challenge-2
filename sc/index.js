const rateButtons = document.querySelectorAll("li");
const submitButton = document.querySelector(".submit_button");
const thankyou_subtext = document.querySelector(".thank-you_subtext");

let last_rating;

rateButtons.forEach((button) => {
    button.addEventListener("click", function(){
        if (!(button.classList.contains("selected"))) {
            button.classList.add("selected");
            if (!last_rating) {
                last_rating = button;
            } else
                last_rating.classList.remove("selected");
                last_rating = button;
        } else {
            button.classList.remove("selected");
            last_rating.classList.remove("selected");
            last_rating = null;
        }   
        console.log(last_rating.innerText); 
    })
});

console.log(last_rating);

