function countdown(num) {
    let countdownStart = '';
    if (num <= 0){
        return countdownStart + 'Liftoff!';
    } else {
        countdownStart += `${num}, `;
    }
    return countdownStart += countdown(num - 1);
}

module.exports = countdown