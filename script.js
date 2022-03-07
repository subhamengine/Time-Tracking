function change(duration){
    // alert("hello");
    var option = document.querySelector(`.${duration}`);
    option.style.color = "#FFFFFF";
    removeChange(option);
}
var links = document.querySelectorAll('.first-bottom span');
console.log(links);