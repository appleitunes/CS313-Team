// window.onload = () => {
//     let divs = document.getElementsByClassName("display");
//     let button1 = document.getElementById("the_button");
//     button1.onclick = () => {
//         alert("Clicked!");
//     };

//     let div1 = document.getElementById("div1");
//     let button2 = document.getElementById("color_button");
//     button2.onclick = () => {
//         let color = document.getElementById("color_input").value;
//         div1.style.backgroundColor = color;
//     };
// };

$(document).ready(function() {
    $("#the_button").click(() => {
        alert("Clicked!");
    });

    $("#color_button").click(() => {
        $("#div1").css({ color: $("#color_input").val() });
    });

    $("#visibility")
});