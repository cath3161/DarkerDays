console.log("create Card");

var scan_button = document.querySelector(".uploadCard");
console.log(scan_button);


scan_button.addEventListener("click",function() {
    console.log("click");
    var mainScreen = document.querySelector("#upload");
    mainScreen.classList.toggle("active");    
});

var close_button = document.querySelector("#closeUpload");
console.log(close_button);
close_button.addEventListener("click", function() {
    console.log("close this popup");
    mainScreen.classList.toggle("active"); 
});