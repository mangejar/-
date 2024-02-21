function countDown() {
    document.querySelector("button").classList.add("invisible");
    document.querySelector("h1").classList.add("invisible");
    var h1 = document.querySelector(".countdown");
    var i =10;
    h1.innerHTML = "Starting";
    waktu = new Audio("assets/sounds/countdown.mp3");
    waktu.play()

    var timerLoop = setInterval(function () {
        h1.style.fontSize = "30px";
        h1.style.opacity = "1";
        var size = 30;
        var opacity = 1;
        if(i==1) {
            clearInterval(timerLoop);
            lagu = new Audio("assets/sounds/lagu.mp3")
            setTimeout(appendWindah,1000);
            lagu.play()
            setTimeout(function(){
                var body = document.querySelector("body");
                var timerLoop3 = setInterval(function(){
                body.style.backgroundColor = "rgb("+x%255+","+(x+20)%255+","+(x+100)%255+")"
                x++
            })
            },1000)
        }
        h1.innerHTML = i;
        i--;
        
        var timerLoop2 = setInterval(function(){
            console.log(h1.style.opacity)
            if (size == 330) {
                clearInterval(timerLoop2)
            }
            size += 3;
            h1.style.fontSize = size + "px";
            opacity = opacity-0.01;
            h1.style.opacity = opacity.toString();
            
        },10)
    },1000)

    x = 0;
    
}


function appendWindah() {
    var img = document.createElement("img");
    img.src = "assets/images/wintot.webp"
    document.querySelector("div").appendChild(img)
}

document.querySelector("button").addEventListener("click",countDown)

