const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    if (secondsDegrees === 90) {
        secondHand.style.transition = 'all 0.001s';
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    } else {
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    }


    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    if (minutesDegrees === 90) {
        minuteHand.style.transition = 'all 0.001s';
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
    } else {
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    }

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    if (hoursDegrees === 90) {
        hourHand.style.transition = 'all 0.001s';
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`
    } else {
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    }
}

setDate();
setInterval(setDate, 1000);