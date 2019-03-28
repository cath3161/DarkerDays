console.log("Create");

var scan_button = document.querySelector(".Studie");
console.log(scan_button);


scan_button.addEventListener("click",function() {
    console.log("click");
    var mainScreen = document.querySelector("#mainScreen");
    mainScreen.classList.toggle("active");    
});

var close_button = document.querySelector("#closeMainScreen");
console.log(close_button);
close_button.addEventListener("click", function() {
    console.log("close this popup");
    mainScreen.classList.toggle("active"); 
});