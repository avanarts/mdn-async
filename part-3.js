const output = document.getElementById('output')
const button = document.getElementById('set-alarm')
const person = document.getElementById('name')
const delay = document.getElementById('delay')

/*function setAlarm() {
    setTimeout(() => {
        output.textContent = 'Time is Up!' 
    }, 2000)
}

button.addEventListener('click', setAlarm) */

function alarm(person, delay) { //returns promise that is fulfilled when the timer expires
    return new Promise((resolve, reject) => {
        if (delay < 0) {
            throw new Error("Milliseconds must not be negative.")
        }
        setTimeout(() => {
            resolve(`Time is up, ${person}!`) 
        }, delay)
    })
}

/*button.addEventListener('click', () => {
    alarm(person.value, delay.value)
    .then((message) => (output.textContent = message)) //passes a message into the then() handler
    .catch((err) => (output.textContent) = `Couldn't set alarm: ${err}`)
})
*/

//a simpler version

button.addEventListener('click', async () => {
    try {
        const message = await alarm(person.value, delay.value)
        output.textContent = message;
    } catch (error) {
        output.textContent = `Couldn't set alarm: ${err}`
    }
})