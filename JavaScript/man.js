const movementInput = document.querySelector("#movement-field");
const dateInput = document.querySelector("#date-field");
const timeInput = document.querySelector("#time-field");

const validateform = () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.classList.remove('error-prompt')
    })

    if (
       movementInput.value === '' ||
       dateInput.value === '' ||
       timeInput.value === ''
    )  {
        inputs.forEach(input => {
            input.classList.add('error-prompt')
        })
        return false;
    }
    return true;
};

const getMovementfields = () => {
    const movement = movementInput.value;
    const date = dateInput.value;
    const time = timeInput.value;
    return {
        movement, time, date, taskStatus: 'Unverified'
    }
}

const reset = () => {
    movementInput.value = '';
    dateInput.value = '';
    timeInput.value = '';
}


export { validateform, getMovementfields, reset };