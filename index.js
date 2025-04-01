
let count1 = 1
let count2 = 2
let count3 = 3
let count = 0

let homeCount = document.getElementById("count-home")
let guestCount = document.getElementById("count-guest")


function btnInrease1() {
    count += count1
    homeCount.textContent = count
}

function btnInrease2() {
    count += count2
    homeCount.textContent = count
}

function btnInrease3() {
    count += count3
    homeCount.textContent = count
}

function btnInreaseGuest1() {
     count += count1
    guestCount.textContent = count
}

function btnInreaseGuest2() {
     count += count2
    guestCount.textContent = count
}

function btnInreaseGuest3() {
     count += count3
    guestCount.textContent = count
}