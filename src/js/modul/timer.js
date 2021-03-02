let timer = () => {
    var endDate = new Date("Mar 14, 2021 16:18:00").getTime();
    var timerr = setInterval(function() {
        let now = new Date().getTime();
        let t = endDate - now;
        if (t >= 0) {
            let days = Math.floor(t / (1000 * 60 * 60 * 24));
            let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
            let secs = Math.floor((t % (1000 * 60)) / 1000);
        
            document.querySelector(".footer__days").innerHTML = days +
            "<span class='label'></span>";
        
            document.querySelector(".footer__hours").innerHTML = ("0"+hours).slice(-2) +
            "<span class='label'></span>";
        
            document.querySelector(".footer__min").innerHTML = ("0"+mins).slice(-2) +
            "<span class='label'></span>";
        
            document.querySelector(".footer__sec").innerHTML = ("0"+secs).slice(-2) +
            "<span class='label'></span>";
        
        } else {
            alert("Акция закончилась!!!");
        
        }
        
    }, 1000);
}
export default timer;
