const btn = document.querySelector('.incremental-btn')
const count = document.querySelector('.count')
const trigger = document.querySelector('.trigger')

let cnt = 0;
let trig = 0;

let timer;

function myThrottle(cb, time) {
    return function (...args) {
        if (timer) return;
        timer = setTimeout(() => {
            console.log("throttling....")
            cb(...args)
            timer = null
        }, time)
    }
}

const throttle = myThrottle(() => {
    trig++;
    trigger.innerHTML = `Trigger: ${trig}`
}, 800)

btn.addEventListener('click', () => {
    cnt++;
    count.innerHTML = `Count: ${cnt}`
    throttle();
})