// Create variables for each time calculation
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

// Hard code the target date (New Year 2025)
const currentYear = new Date().getFullYear();

const newYear25 = new Date (`January 1 ${currentYear + 1} 00:00:00`);

//Add function to update the coundown elements 

function updateCountdown(){
    const currentTime = new Date();
    const timeDifference = newYear25 - currentTime;


    const d = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const h = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((timeDifference % (1000 * 60)) / 1000);

console.log(d);
console.log(h);
console.log(m);
console.log(s);

days.innerHTML = d;
hours.innerHTML = h;
minutes.innerHTML = m;
seconds.innerHTML = s;
}
setInterval(updateCountdown, 1000)

updateCountdown();
console.log("Hello world");
