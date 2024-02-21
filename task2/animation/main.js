const animationBtn = document.querySelector('.on-btn');
const stopAnimationBtn = document.querySelector('.off-btn');
const speed1 = document.querySelector('.speed1')
const speed2 = document.querySelector('.speed2')
const speed3 = document.querySelector('.speed3')

const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');

let animationRunning = false;

animationBtn.addEventListener('click', () => {
    if (!animationRunning) {
        line1.classList.add('animate');
        line2.classList.add('animate');
        animationRunning = !animationRunning;
    }
});

stopAnimationBtn.addEventListener('click', () => {
    if (animationRunning) {
        line1.classList.remove('animate');
        line2.classList.remove('animate');
        animationRunning = !animationRunning;
    }
});

speed1.addEventListener('click', () => {
    if (animationRunning) {
        line1.style.animationDuration = '3s';
        line2.style.animationDuration = '3s';
    }
})

speed2.addEventListener('click', () => {
    if (animationRunning) {
        line1.style.animationDuration = '2s';
        line2.style.animationDuration = '2s';
    }
})

speed3.addEventListener('click', () => {
    if (animationRunning) {
        line1.style.animationDuration = '.1s';
        line2.style.animationDuration = '.1s'
    }
})