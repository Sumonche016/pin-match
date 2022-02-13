// global variable
var pinShow = document.getElementById('pin-show');
var submitInput = document.getElementById('submit-input');
var buttonInput = document.getElementsByClassName('button');
var match = document.getElementById('match');
var unmatch = document.getElementById('unmatch');

// showing the random pin 
document.getElementById('generate-pin').addEventListener('click', function() {
    var pinNumber = Math.floor(1000 + Math.random() * 9000);
    pinShow.value = pinNumber;
})

// btn item value 
for (let i = 0; i < buttonInput.length; i++) {

    buttonInput[i].addEventListener('click', function() {
        var btnNumber = buttonInput[i].textContent;
        submitInput.value += btnNumber;
    })

}
// for clearing the input 
document.getElementById('clear').addEventListener('click', function() {
    submitInput.value = '';
})


// math condition
document.getElementById('submit').addEventListener('click', function() {
    if (pinShow.value == submitInput.value) {
        match.classList.remove('display')
        unmatch.classList.add('display')
    } else {
        unmatch.classList.remove('display')

    }
})