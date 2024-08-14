
for (var i = 0; i<7 ; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
    
    var buttonHTML = this.innerHTML;

    makeSound (buttonHTML);
    animation (buttonHTML);
})
}

document.addEventListener("keydown", function(event) {
    var pressed = event.key;
    makeSound(pressed);
    animation (pressed);
});


function makeSound (key) {

    switch (key) {
        case "a":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
        break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
        break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
        break;
        case "f":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
        break;
        case "j":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
        break;
        case "k":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
        break;
        case "l":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
        break;
        default: 
        break;
    }
}


function animation (keyPressed){

    var activeButton = document.querySelector("." + keyPressed);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")},200);
}