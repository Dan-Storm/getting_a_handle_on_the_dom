console.log('hey there champ');

const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');

myButton.addEventListener('click', () => {
    myHeading.style.color = myTextInput.value;
});

myButton2.addEventListener('click', () => {
    myHeading.style.color = 'black';
})