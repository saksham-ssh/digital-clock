const h = document.getElementById("hr");
const m = document.getElementById("mt");
const s = document.getElementById("sc");
const am = document.getElementById("am");

const updateTime = () =>{
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    if(hours > 12)
    {
        hours = hours - 12;
        am.innerHTML = "PM";
    }

    hours = hours < 10 ? "0"+hours: hours;
    minutes = minutes < 10 ? "0"+minutes: minutes;
    seconds = seconds < 10 ? "0"+seconds: seconds;

    h.innerHTML = hours;
    m.innerHTML = minutes;
    s.innerHTML = seconds;
    setTimeout(()=>{
        updateTime()
    },1000)
}

updateTime();