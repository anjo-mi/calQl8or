let buttons = document.querySelectorAll('button')

let equation = []

let display = ''

let pi = '\u03C0'

let root = '\u221A'

let divide = '\u00f7'

// function operation(event){
//     if (event.target.classList.contains('clear')){
//         equation = []
//         display = equation.toString()
//         document.querySelector('.answer').innerText = ''
//     }else if(event.target.classList.contains('parOpen')){
//         equation.push('(')
//         display = equation.join('')
//     }else if(event.target.classList.contains('parClose')){
//         equation.push(')')
//         display = equation.join('')
//     }else if(event.target.classList.contains('percent')){
//         equation.push('%')
//         display = equation.join('')
//     }else if(event.target.classList.contains('root')){
//         equation.push(root)
//         display = equation.join('')
//     }else if(event.target.classList.contains('one')){
//         equation.push('1')
//         display = equation.join('')
//     }else if(event.target.classList.contains('two')){
//         equation.push('2')
//         display = equation.join('')
//     }else if(event.target.classList.contains('three')){
//         equation.push('3')
//         display = equation.join('')
//     }else if(event.target.classList.contains('divide')){
//         equation.push(divide)
//         display = equation.join('')
//     }else if(event.target.classList.contains('power')){
//         equation.push('^')
//         display = equation.join('')
//     }else if(event.target.classList.contains('four')){
//         equation.push('4')
//         display = equation.join('')
//     }else if(event.target.classList.contains('five')){
//         equation.push('5')
//         display = equation.join('')
//     }else if(event.target.classList.contains('six')){
//         equation.push('6')
//         display = equation.join('')
//     }else if(event.target.classList.contains('times')){
//         equation.push('x')
//         display = equation.join('')
//     }else if(event.target.classList.contains('factorial')){
//         equation.push('!')
//         display = equation.join('')
//     }else if(event.target.classList.contains('seven')){
//         equation.push('7')
//         display = equation.join('')
//     }else if(event.target.classList.contains('eight')){
//         equation.push('8')
//         display = equation.join('')
//     }else if(event.target.classList.contains('nine')){
//         equation.push('9')
//         display = equation.join('')
//     }else if(event.target.classList.contains('minus')){
//         equation.push('-')
//         display = equation.join('')
//     }else if(event.target.classList.contains('pi')){
//         equation.push(pi)
//         display = equation.join('')
//     }else if(event.target.classList.contains('decimal')){
//         equation.push('.')
//         display = equation.join('')
//     }else if(event.target.classList.contains('zero')){
//         equation.push('0')
//         display = equation.join('')
//     }else if(event.target.classList.contains('plus')){
//         equation.push('+')
//         display = equation.join('')
//     }else if(event.target.classList.contains('backspace')){
//         equation.pop()
//         display = equation.join('')
//     }else if(event.target.classList.contains('equals')){
//         console.log(equation)
//         let mappedEquation = equation.map((el,i) => {
//             if (i === 0){
//                 return '(' + el
//             }
//             if (i === equation.length - 1){
//                 return el +')'
//             }
//             if (isNaN(el) && (el !== '(') && (el !== ')') && (el !== '.')){
//                 return ')' + el + '('
//             }
//             return el
//         })
//         console.log(mappedEquation)
//         display = equation.join('')
//         console.log(display)
//         let answer = display.replaceAll('()', '').replaceAll(pi, '(3.1415926535897932)').replaceAll(divide, '/').replaceAll('x' , '*').replaceAll(root, 'Math.sqrt()').replaceAll('^', '**')
//         console.log(answer)
//         let answerDisplay = new Function(`return ${answer} ` )
//         let final = answerDisplay()
//         document.querySelector('.answer').innerText = final
//     }
//     document.querySelector('.equation').innerText = display
// }

buttons.forEach(button => {
    button.addEventListener('click', getValue)
})

function getValue(event){
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

class Calculator {
    constructor(){
        this.prev
        this.curr
        this.equation = []
        this.display = ''
    }
    add(){
        let index = this.equation.indexOf('+')
        if(index === -1){
            return
        }else if(isNaN(this.equation[index - 1])){
            return `cannot add to ${this.equation[index-1]}`
        }else if(isNaN(this.equation[index + 1])){
            return `cannot add ${this.equation[index+1]}`
        }else{
            let x = this.equation.splice(index-1, 3)
            x = +x[0] + +x[2]
            return this.equation.splice(index-1, 0, x)
        }
    }
    subtract(){
        let index = this.equation.indexOf('-')
        if(index === -1){
            return
        }else if(isNaN(this.equation[index - 1])){
            return `cannot subtract from ${this.equation[index-1]}`
        }else if(isNaN(this.equation[index + 1])){
            return `cannot subtract ${this.equation[index+1]}`
        }else{
            let x = this.equation.splice(index-1, 3)
            x = +x[0] - +x[2]
            return this.equation.splice(index-1, 0, x)
        }
    }
    mult(){
        let index = this.equation.indexOf('x')
        if(index === -1){
            return
        }else if(isNaN(this.equation[index - 1])){
            return `cannot multiply ${this.equation[index-1]}`
        }else if(isNaN(this.equation[index + 1])){
            return `cannot multiply ${this.equation[index+1]}`
        }else{
            let x = this.equation.splice(index-1, 3)
            x = +x[0] * +x[2]
            return this.equation.splice(index-1, 0, x)
        }
    }
    divide(){
        let index = this.equation.indexOf(divide)
        if(index === -1){
            return
        }else if(isNaN(this.equation[index - 1])){
            return `cannot divide ${this.equation[index-1]}`
        }else if(isNaN(this.equation[index + 1])){
            return `cannot divide by ${this.equation[index+1]}`
        }else{
            let x = this.equation.splice(index-1, 3)
            x = +x[0] / +x[2]
            return this.equation.splice(index-1, 0, x)
        }
    }
    factorial(){
        let index = this.equation.indexOf('!')
        if(index === -1){
            return
        }else if(isNaN(this.equation[index - 1])){
            return `cannot give factorial of ${this.equation[index-1]}`
        }else{
            let x = this.equation.splice(index-1,2)
            x = +x[0]
            let num = 1
            while(x > 0){
                num *= (x)
                x--
            }
            return this.equation.splice(index-1, 0, num)
        }
    }
    percent(){
        let index = this.equation.indexOf('%')
        if(index === -1){
            return
        }else if(isNaN(this.equation[index - 1])){
            return `cannot get a percentage of ${this.equation[index-1]}`
        }else{
            let x = this.equation.splice(index-1, 2)
            x = +x[0] / 100
            return this.equation.splice(index-1, 0, x)
        }
    }
    expo(){
        let index = this.equation.indexOf('^')
        if(index === -1){
            return
        }else if(isNaN(this.equation[index - 1])){
            return `exponents cannot be applied to ${this.equation[index-1]}`
        }else{
            let x = this.equation.splice(index-1, 3)
            x = Number(x[0]) ** +x[2]
            return this.equation.splice(index-1, 0, x)
        }
    }
    root(){
        let index = this.equation.indexOf(root)
        if(index === -1){
            return
        }else if(!isNaN(this.equation[index - 1])){
            let x = this.equation.splice(index - 1, 3)
            x = +x[0] * Math.sqrt(+x[2])
            return this.equation.splice(index - 1, 0, x)
        }
    }
    parenthetical(){
        let index = this.equation.indexOf('(')
        if (index === -1){
            return
        }else{
            let closeParInd = this.equation.indexOf(')', i + 1)
            if (closeParInd === i + 1){
                return
            }else{
                let x = this.equation.splice(index - 1, closeParInd - index + 1)
                let y = x.equals()
                return this.equation.splice(index - 1, 0, y)
            }
        }
    }
    backspace(){
        this.equation.pop()
        return this.equation
    }
    equals(){

    }
    clear(){
        this.equation = []
        return this.equation
    }
}