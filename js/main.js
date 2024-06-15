let buttons = document.querySelectorAll('button')

let equation = []

let display = ''

function operation(event){
    if (event.target.classList.contains('clear')){
        equation = []
    }else if(event.target.classList.contains('parOpen')){
        equation.push('(')
        display = equation.join('')
    }else if(event.target.classList.contains('equals')){
        let value = equation.map((el,i) => {
            if (i === 0){
                el = '(' + el
            }else if(isNaN(el)){
                el = ')' + el + '('
            }else if (!isNaN(el)){
                el = el
            }
        })
    }
    document.querySelector('.equation').innerText = display
}

buttons.forEach(button => {
    button.addEventListener('click', operation)
})

