function checkStorage(){
    let lastselectedDate = localStorage.getItem("lastselectedDate");
    
    if(lastselectedDate == null){
        document.getElementById("defaultDate_Section").style.display = 'block';
        document.getElementById("countdown_Section").style.display = 'none';
    }else{
        document.getElementById("defaultDate_Section").style.display = 'none';
        document.getElementById("countdown_Section").style.display = 'block';

        document.getElementById("selDate").innerHTML = lastselectedDate;
        runtimer(lastselectedDate);
    }
}

function setStorage(){
    let selection = document.getElementById('dateSelected').value;
    if(selection == ""){
        return false;
    }else{
        localStorage.setItem("lastselectedDate", selection);
        checkStorage();
    }
}

function runtimer(lastselectedDate){
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const d = new Date(lastselectedDate);
    let selectedDate_Converted = monthNames[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear() + " 00:00:01";
    console.log(selectedDate_Converted);
   

    let countDownDate_local = new Date(selectedDate_Converted).getTime();
    
    let xInterval = setInterval(function() {
        let now_actual = new Date().getTime();
        
        let distance_local = countDownDate_local - now_actual;
            
        let days = Math.floor(distance_local / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance_local % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance_local % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance_local % (1000 * 60)) / 1000);
            
        document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
            
        if (distance_local < 0) {
            clearInterval(xInterval);
            document.getElementById("timer").innerHTML = "Selected Time Counter Is Up!...Please Reset.";
        }
    }, 1000);
}

function resetStorage(){
    localStorage.removeItem("lastselectedDate");
    window.location.href = window.location.href;    
}