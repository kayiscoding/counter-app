let Counting = document.getElementById("count-el")
let count = 0
function increment(){
    count += 1
    Counting.textContent = count
    console.log(count)
}
let saveEl = document.getElementById("save-el")
function save(){
    let saved = count + " - "
    saveEl.textContent += saved
    console.log(saved)
}

function remove(){
    count -= 1
    Counting.innerHTML = count
    console.log(count)
}

function reset(){
    count = 0
    Counting.innerText = count
    saveEl.innerText = "Previous entries:"
    console.log(count)
    
}

let name = "Kay"
let greeting = "Hi, my name is "
let myGreeting = greeting + name

console.log(myGreeting)

let WelcomeEl = document.getElementById("welcome-el")

let greeting2 = "Welcome to the page, "
let naming  = "Kay"

WelcomeEl.innerText = greeting2 + naming

