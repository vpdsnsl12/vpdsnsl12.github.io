const correctPin = "2835";
let enteredPin = '';

function enterNumber(num) {
    const inputs = document.querySelectorAll('.pin-inputs input');
    if (enteredPin.length < 4) {
        enteredPin += num;
        const currentInputIndex = enteredPin.length - 1;
        inputs[currentInputIndex].value = num;
        inputs[currentInputIndex].style.background = `url('../img/lock-img-on.png') no-repeat center/contain`;
        inputs[currentInputIndex].style.border = 'none';
        inputs[currentInputIndex].style.textIndent = '-9999px';
        if (enteredPin.length === 4) {
            unlock();
        }
    }
}

function clearInput() {
    enteredPin = '';
    const inputs = document.querySelectorAll('.pin-inputs input');
    inputs.forEach(input => {
        input.value = '';
        input.style.background = '';
        input.style.border = '1px solid #ccc'; 
        input.style.textIndent = '0'; 
    });
}

function unlock() {
    if (enteredPin === correctPin) {
        document.getElementById('message').textContent = '잠금 해제되었습니다!';
        document.getElementById('message').style.color = 'green';
        window.location.href = "../main/main.html";
    } else {
        document.getElementById('message').textContent = '잘못된 PIN 코드입니다.';
        document.getElementById('message').style.color = 'red';
        clearInput();
    }
}