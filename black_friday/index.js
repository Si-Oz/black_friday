document.body.onload = main

function main() {



    setInterval(function() {
        let startDate = new Date()

        let days = document.getElementById("days");
        let hrs = document.getElementById("hrs");
        let mins = document.getElementById("mins");
        let secs = document.getElementById("secs");

        let blackFridayDate = new Date("November 25 2021 23:59:59");
        let daysToGo = 25 + (31 - startDate.getDate());
        let hrsToGo = blackFridayDate.getHours() - startDate.getHours();
        let minsToGo = blackFridayDate.getMinutes() - startDate.getMinutes();
        let secsToGo = blackFridayDate.getSeconds() - startDate.getSeconds();

        console.log(startDate)
        console.log(blackFridayDate.getHours() + " hours")
        console.log(blackFridayDate.getMinutes() + " mins")
        console.log(blackFridayDate.getSeconds() + " sec")

        days.innerText = daysToGo
        hrs.innerText = hrsToGo
        mins.innerText = minsToGo
        secs.innerText = secsToGo

    }, 1000)

}