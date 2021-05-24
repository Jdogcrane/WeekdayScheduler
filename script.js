// Gets day and hours of day
var date = new Date();
var hours = date.getHours();
document.getElementById("currentDay").innerHTML = date;

// Each day timeblock
var blocks = [
    block1 = document.querySelector(".block1"),
    block2 = document.querySelector(".block2"),
    block3 = document.querySelector(".block3"),
    block4 = document.querySelector(".block4"),
    block5 = document.querySelector(".block5"),
    block6 = document.querySelector(".block6"),
    block7 = document.querySelector(".block7"),
    block8 = document.querySelector(".block8")
]
// sets styling depending on past, current or future.
function whatTime(hour, block) {
    if (hours === hour) {
        block.style.backgroundColor = "green";
    } else if (hours < hour) {
        block.style.backgroundColor = "red";
    } else if (hours > hour) {
        block.style.backgroundColor = "grey";
    }
}

function saveBtn(key, saveBlock) {
    localStorage.setItem(key, saveBlock.value);
    console.log(key)
}

//for loop for each block
for (var i = 0; i < blocks.length; i++) {
    var hourToCheck = i + 9
    whatTime(hourToCheck, blocks[i])
    console.log(blocks[i].key)
}
