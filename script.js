let otp = "";
function generateOTP() {
    otp = "";
    for (let i = 0; i < 6; i++) {
        otp += Math.floor(Math.random() * 10);
    }
    document.getElementById("otp-display").innerHTML = otp;
    document.getElementById("checking").style.display = "block";

    function countdown() {
        var counter= 15;
        var time = document.getElementById("time");
        var timer = document.getElementById("timer");
        var interval = setInterval(function () {
            counter--;
            if (counter <= 0) {
                clearInterval(interval);
                timer.innerHTML = "sry please refresh generator button";
                timer.style.color = "#2caf50";
                return;
            }
            else {
                time.innerText = counter;
            }

        }, 1000)
    }
    countdown();
    
}
function checking() {

    const result = document.getElementById("otp-checking-result");
    const input = document.getElementById("otp-checking").value;

    if(input == otp) {
        result.innerHTML = "otp is correct";
        result.style.color = "green";
        setTimeout(() => {
            window.location.href = "https://www.google.com";
        }, 1000);
        return true;
        
    }
    else {
        result.innerHTML = "otp is incorrect";
        result.style.color = "red";  
        
    }
}


setTimeout(function()
{
    window.location.reload();
},17000);
