// debouncing

const input = document.getElementById('input');
const debouncing = document.getElementById('debounce');
const throttling = document.getElementById('debounce');

const updateDebounceText = debounce((text) => {
    debouncing.textContent = text;
})


const updatethrottlingText = throttle((text) => {
    throttling.textContent = text;
})

input.addEventListener('input', e => {
    updateDebounceText(e.target.value)
    updatethrottlingText(e.target.value)
})


function debounce (cb, delay = 1000) {
    let timeOut
    return (...args) => {
        clearInterval(timeOut)
        timeOut = setTimeout(() => {
            cb(...args)
        }, delay)
    }

}




//throttling

function throttle (cb, delay = 1000) {
    let shouldWait = false
    let waitingArgs
    let timeOut = () => {
        if (waitingArgs == null) {
            shouldWait = false
        } else {
            cb(...waitingArgs)
            waitingArgs = null
            setTimeout(timeOut, delay)
        }
    }
    return (...args) => {
        if (shouldWait) {
            waitingArgs = args
        }
        cb(...args)
        shouldWait = true
        setTimeout(timeOut, delay)
    }
}

