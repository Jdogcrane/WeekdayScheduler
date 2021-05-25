// Gets day and hours of day using moment
var date = moment().format('MMMM Do YYYY, h:mm:ss a');
var hours = moment().format('H')
// var date = new Date();
// var hours = date.getHours();
document.getElementById("currentDay").textContent = date;

// Each hour block in an array
var blocks = [
    block1 = document.querySelector(".block1"),
    block2 = document.querySelector(".block2"),
    block3 = document.querySelector(".block3"),
    block4 = document.querySelector(".block4"),
    block5 = document.querySelector(".block5"),
    block6 = document.querySelector(".block6"),
    block7 = document.querySelector(".block7"),
    block8 = document.querySelector(".block8"),
    block9 = document.querySelector(".block9")
];
// Sets styling depending on past, current or future for each block depending on the values we receive from our for loop
function whatTime(hour, block) {
    if (hours == hour) {
        block.style.backgroundColor = "blueviolet";
    } else if (hours < hour) {
        block.style.backgroundColor = "red";
    } else if (hours > hour) {
        block.style.backgroundColor = "rgb(206, 206, 206)";
    }
};
// saves into local storage based off the key returned when the button is clicked
function saveBtn(key, saveBlock) {
    localStorage.setItem(key, saveBlock.value);
};

//for loop for each block based of length of the array. 
for (var i = 0; i < blocks.length; i++) {
    var hourToCheck = i + 9;
    whatTime(hourToCheck, blocks[i]);
};
// each time page is loaded gets items inside local storage and displays them inside textarea
var x1 = localStorage.getItem("input1");
blocks[0].textContent = x1;
var x2 = localStorage.getItem("input2");
blocks[1].textContent = x2;
var x3 = localStorage.getItem("input3");
blocks[2].textContent = x3;
var x4 = localStorage.getItem("input4");
blocks[3].textContent = x4;
var x5 = localStorage.getItem("input5");
blocks[4].textContent = x5;
var x6 = localStorage.getItem("input6");
blocks[5].textContent = x6;
var x7 = localStorage.getItem("input7");
blocks[6].textContent = x7;
var x8 = localStorage.getItem("input8");
blocks[7].textContent = x8;
var x9 = localStorage.getItem("input9");
blocks[8].textContent = x9;
// added sunrise and sunset for background color if its the start or end of the day
if (hours == 9 || hours == 17) {
    document.body.style.backgroundColor = "rgb(230, 90, 10)";
} else {
    document.body.style.backgroundColor = "rgb(87, 204, 219)";
}
