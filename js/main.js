let buttons = document.querySelectorAll('button')

let equation = []

let display = ''

let pi = '\u03C0'

let root = '\u221A'

let divide = '\u00f7'

function operation(event){
    if (event.target.classList.contains('clear')){
        equation = []
        display = equation.toString()
        document.querySelector('.answer').innerText = ''
    }else if(event.target.classList.contains('parOpen')){
        equation.push('(')
        display = equation.join('')
    }else if(event.target.classList.contains('parClose')){
        equation.push(')')
        display = equation.join('')
    }else if(event.target.classList.contains('percent')){
        equation.push('%')
        display = equation.join('')
    }else if(event.target.classList.contains('root')){
        equation.push(root)
        display = equation.join('')
    }else if(event.target.classList.contains('one')){
        equation.push('1')
        display = equation.join('')
    }else if(event.target.classList.contains('two')){
        equation.push('2')
        display = equation.join('')
    }else if(event.target.classList.contains('three')){
        equation.push('3')
        display = equation.join('')
    }else if(event.target.classList.contains('divide')){
        equation.push(divide)
        display = equation.join('')
    }else if(event.target.classList.contains('power')){
        equation.push('^')
        display = equation.join('')
    }else if(event.target.classList.contains('four')){
        equation.push('4')
        display = equation.join('')
    }else if(event.target.classList.contains('five')){
        equation.push('5')
        display = equation.join('')
    }else if(event.target.classList.contains('six')){
        equation.push('6')
        display = equation.join('')
    }else if(event.target.classList.contains('times')){
        equation.push('x')
        display = equation.join('')
    }else if(event.target.classList.contains('factorial')){
        equation.push('!')
        display = equation.join('')
    }else if(event.target.classList.contains('seven')){
        equation.push('7')
        display = equation.join('')
    }else if(event.target.classList.contains('eight')){
        equation.push('8')
        display = equation.join('')
    }else if(event.target.classList.contains('nine')){
        equation.push('9')
        display = equation.join('')
    }else if(event.target.classList.contains('minus')){
        equation.push('-')
        display = equation.join('')
    }else if(event.target.classList.contains('pi')){
        equation.push(pi)
        display = equation.join('')
    }else if(event.target.classList.contains('decimal')){
        equation.push('.')
        display = equation.join('')
    }else if(event.target.classList.contains('zero')){
        equation.push('0')
        display = equation.join('')
    }else if(event.target.classList.contains('plus')){
        equation.push('+')
        display = equation.join('')
    }else if(event.target.classList.contains('backspace')){
        equation.pop()
        display = equation.join('')
    }else if(event.target.classList.contains('equals')){
        console.log(equation)
        let mappedEquation = equation.map((el,i) => {
            if (i === 0){
                return '(' + el
            }
            if (i === equation.length - 1){
                return el +')'
            }
            if (isNaN(el) && (el !== '(') && (el !== ')') && (el !== '.')){
                return ')' + el + '('
            }
            return el
        })
        console.log(mappedEquation)
        display = equation.join('')
        console.log(display)
        let answer = display.replaceAll('()', '').replaceAll(pi, '(3.1415926535897932)').replaceAll(divide, '/').replaceAll('x' , '*').replaceAll(root, 'Math.sqrt()').replaceAll('^', '**')
        console.log(answer)
        let answerDisplay = new Function(`return ${answer} ` )
        let final = answerDisplay()
        document.querySelector('.answer').innerText = final
    }
    document.querySelector('.equation').innerText = display
}

buttons.forEach(button => {
    button.addEventListener('click', operation)
})

