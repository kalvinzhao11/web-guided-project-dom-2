console.log('project is up')

// 👉 TASK 1- Select the following elements from the DOM:

// BUTTONS
const launchButton = document.querySelector('#launchButton')
const confirmButton = document.querySelector('#confirmButton')
const cancelButton = document.querySelector('#cancelButton')

// MESSAGES
const successMessage = document.querySelector('h1.report.success') //h1 with class name of success
const failureMessage = document.querySelector('h1.report.failure')

// MODAL
const modal = document.querySelector('.modal')


// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//      - HTML
//      - The DOM's element.onclick
launchButton.onclick = function (event) {
    console.log('a bit better than doing it in html')
    console.log(event)
}


// 👉 TASK 3- Create a function that launches!

// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.
const launch = (event) => {
    // anything we want to the DOM -- absolute power
    modal.classList.remove('off')
    successMessage.classList.add('off')
    failureMessage.classList.add('off')
    // modal.className = 'modal' //same results
}
launchButton.addEventListener('click', launch) // on click of launchbutton, execute launch function

// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.
confirmButton.addEventListener('click', () => {
    modal.classList.add('off')
    successMessage.classList.remove('off')
})

// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.
cancelButton.addEventListener('click', () => {
    modal.classList.add('off')
    failureMessage.classList.remove('off')
})

// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        modal.classList.add('off')
    } else {
        console.log('wrong key, buddy')
    }
})

// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.
Array.from(document.all).forEach( el =>{
    el.addEventListener('click', function(event){
        console.log('The target of the event', event.target)
        console.log('The current   ', event.currentTarget)
        console.log('\n')

        event.stopPropagation()
    })
})

// 👉 TASK 8- Select a link and prevent its default behavior
document.querySelector('a').addEventListener('click', event =>{
    console.log('about to disrupt default behavior of this link')
    event.preventDefault()
})

// 👉 TASK 9- Using the mouseover event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.


// 👉 TASK 10- [STRETCH] Create helper functions
function openModal() {

}

function closeModal() {

}

function killReports() {

}

