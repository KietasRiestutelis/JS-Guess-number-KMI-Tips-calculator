// praktika 1 , guess the number

// messages content
var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");
// take number from input
let button = document.querySelector("#btn");
let textField = document.querySelector("#textField")
button.addEventListener("click", onSubmit);
// restart window
let restart = document.querySelector("#restart");
restart.addEventListener("click", function(){
    window.location.reload();
    
});
// generate random number
var answer = Math.floor(Math.random()*101);
console.log(answer);

// count numbers and put in massive 
let times_of_guesses = 0;
let guessed_nums = []


function onSubmit(e) {
    e.preventDefault();
    let user_guess = textField.value;
    
    if (user_guess < 1 || user_guess > 100){
                alert("Please enter number between 1 and 100");
            } else {
                guessed_nums.push(user_guess);
                times_of_guesses += 1;
        
                if(user_guess < answer){
                    msg1.textContent = "Your number is to low"
                    msg2.textContent = "Number of guesses: " + times_of_guesses;
                    msg3.textContent = "Guessed numbers: " + guessed_nums
                } else if (user_guess > answer) {
                    msg1.textContent = "Your number is to big"
                    msg2.textContent = "Number of guesses: " + times_of_guesses;
                    msg3.textContent = "Guessed numbers: " + guessed_nums
                } else if (user_guess == answer){
                    msg1.textContent = "Congrats, You are right"
                    msg2.textContent = "Number was: " + answer
                    msg3.textContent = "Number of guesses: " + times_of_guesses;
                    restart.classList.remove("d-none")
                
                }
            }

}
    
// praktika 3

let button1 = document.querySelector("#btn1");
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let kmi = document.getElementById("kmi");
let dnone = document.querySelector("#hide");
let table = document.querySelector("#table")

button1.addEventListener("click", onSubmit1);

// function onSubmit(e) {
//     e.preventDefault();
//     let height1 = height.value;
//     let weight1 = weight.value;
//     let x = (+height1) / 100;
//     let answer = (+weight1) / Math.pow(x,2);
//     console.log(answer);
//     kmi.textContent = answer.toFixed(2);
//     dnone.classList.remove("d-none");
//     table.classList.remove("d-none");

//     if(answer > 18.5 && answer < 25){
//         kmi.style.color = "green"
//     } else{ 
//         kmi.style.color = "red"
//     }
// }
function alermas() {
    alert("Incorrect numbers");
}

function onSubmit1(e) {
    e.preventDefault();
    let height1 = height.value;
    let weight1 = weight.value;
    let x = (+height1) / 100;
    let answer;

    if(height1 > 99 && height1 < 300 && weight1 > 4 && weight1 < 200){
        
        answer = (+weight1) / Math.pow(x,2);
        console.log(answer);
        kmi.textContent = answer.toFixed(2);
        dnone.classList.remove("d-none");
        table.classList.remove("d-none");
    
        if(answer > 18.5 && answer < 25){
            kmi.style.color = "green"
        } else{ 
            kmi.style.color = "red"
        }
        
    }else if (height1 < 100 || height1 > 300 || weight1 < 5 || weight1 > 200){
        alermas();
    }
        
}

// 8 praktika

let button2 = document.querySelector("#btn2");
let suma = document.querySelector("#sum");
let number = document.querySelector("#numberOfPeople");
let finalSum = document.getElementById("summary");
let hide = document.querySelector(".hide");


// get values from option section
function onOption(){
    let selected = document.getElementById("list").value;
    console.log(selected)
    return selected;
}



button2.addEventListener("click", function(e){
    e.preventDefault();
    let sum = suma.value;
    let numb = number.value;
    let sum1;

    if(sum < 0 || sum == 0 || numb < 1){
    alert("Please check the numbers");
    } else { if(onOption()== "1"){
            sum1 = (sum * 0.3) / numb
            finalSum.textContent = sum1.toFixed(2) 
            hide.classList.remove("d-none")
            

        } else if(onOption()== "2"){
            sum1 = (sum * 0.2) / numb
            finalSum.textContent = sum1.toFixed(2) 
            hide.classList.remove("d-none")
            

        } else if(onOption()== "3"){
            sum1 = (sum * 0.1) / numb
            finalSum.textContent = sum1.toFixed(2) 
            hide.classList.remove("d-none")
            

        } else if(onOption()== "4"){
            sum1 = (sum * 0.05) / numb
            finalSum.textContent = sum1.toFixed(2) 
            hide.classList.remove("d-none")
            

        } else if(onOption()== "5"){
            sum1 = (sum * 0.01) / numb
            finalSum.textContent = sum1.toFixed(2) 
            hide.classList.remove("d-none")
            
        }
    }   
});
