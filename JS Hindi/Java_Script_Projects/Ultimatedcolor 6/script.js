// Generate a random color

const randomColor = function() {
    let hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++)
    {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

// console.log(randomColor());

let intervalId;
const startChangingColor = function() {
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000);
    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }

};
const stopChangeingColor = function() {
    clearInterval(intervalId);
    intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangeingColor);

