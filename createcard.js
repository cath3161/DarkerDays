console.log("create Card");

var scan_button = document.querySelector(".uploadCard");
console.log(scan_button);


scan_button.addEventListener("click",function() {
    console.log("click");
    var upload = document.querySelector("#upload");
    upload.classList.toggle("active");    
});

var close_button = document.querySelector("#closeUpload");
console.log(close_button);
close_button.addEventListener("click", function() {
    console.log("close this popup");
    upload.classList.toggle("active"); 
});