const btn = document.querySelector('.incremental-btn')
const count = document.querySelector('.count')
const trigger = document.querySelector('.trigger')

let cnt = 0;
let trig = 0

let timer;
function myDebounce(cb, time) {
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            cb(...args)
        }, time)
    }
}

const debounceCount = myDebounce(() => {
    trig++;
    trigger.innerHTML = `Trigger: ${trig}`
}, 800)

btn.addEventListener('click', () => {
    cnt++;
    count.innerHTML = `Click: ${cnt}`

    debounceCount()
})
