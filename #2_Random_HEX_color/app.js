var hexBase = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
var backGround = document.querySelector('body');
var button = document.querySelector('button');
var hexDisplay = document.getElementById('hexDisplay');

button.addEventListener('click',
    function (){
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            const value = Math.floor(Math.random() * hexBase.length);
            hexColor += hexBase[value];
        }
        backGround.style.backgroundColor = hexColor;
        hexDisplay.textContent = hexColor;
    });

