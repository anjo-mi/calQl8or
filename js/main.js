let buttons = document.querySelectorAll('button')

let equation = []

let display = ''

function operation(event){
    if (event.target.classList.contains('clear')){
        equation = []
    }else if(event.target.classList.contains('parOpen')){
        equation.push('(')
        display = equation.join('')
    }
    document.querySelector('.equation').innerText = display
}

buttons.forEach(button => {
    button.addEventListener('click', operation)
})

