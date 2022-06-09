const hourE1 = documment.getElementById("hour")
const minuteE1 = document.getElementById("minutes")
const secondE1 = document.getElementById("seconds")
const ampmE1 = document.getElementsById("ampm")
function clock(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()

    let ampm = "AM"

    if(h>12){
        h = h - 12
        ampm = "PM"
    }

    hourE1.innerText = h;
    minuteE1.innerText = m;
    secondE1.innerText  = s;
}