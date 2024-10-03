// let buttons = document.querySelectorAll('button')

// let equation = []

// let display = ''

// let pi = '\u03C0'

// let root = '\u221A'

// let divide = '\u00f7'

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

// buttons.forEach(button => {
//     button.addEventListener('click', getValue)
// })

// function getValue(event){
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


// let buttons = document.querySelectorAll('button')

// let equation = []

// let display = ''

let pi = '\u03C0'

let root = '\u221A'

let divide = '\u00f7'


class Calculator {
    constructor(equation){
        this.equation = equation || []
        this.prev
        this.curr
        this.answer = document.querySelector('.answer')
        this.display = document.querySelector('.equation')
    }

    disp(){
        this.display.textContent = this.equation.join('')
    }

    insertVal(value){
        this.equation.push(value)
        this.disp()
    }
    pi(){
        let index = this.equation.indexOf(pi)
        if (index === -1){
            return
        }
        this.parenthetical()
        if(index === this.equation.length - 1){
            this.equation.splice(index, 1, 'x', Math.PI)
            console.log(this.equation)
            this.disp()
        }else if (isNaN(index - 1) && isNaN(index + 1)){
            this.equation.splice(index, 1, Math.PI)
            this.disp()
        }
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
            this.equation.splice(index-1, 0, x)
            // return this.equation
            this.disp()
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
            this.equation.splice(index-1, 0, x)
            // return this.equation
            this.disp()
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
            this.equation.splice(index-1, 0, x)
            // return this.equation
            this.disp()
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
            this.equation.splice(index-1, 0, x)
            // return this.equation
            this.disp()
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
            this.equation.splice(index-1, 0, num)
            // return this.equation
            this.disp()
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
            this.equation.splice(index-1, 0, x)
            // return this.equation
            this.disp()
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
            this.equation.splice(index-1, 0, x)
            // return this.equation
            this.disp()
        }
    }
    root(){
        let index = this.equation.indexOf(root)
        if(index === -1){
            return
        }else if(!isNaN(this.equation[index - 1])){
            let x = this.equation.splice(index - 1, 3)
            x = +x[0] * Math.sqrt(+x[2])
            this.equation.splice(index - 1, 0, x)
            // return this.equation
            this.disp()
        }
    }
    parenthetical(){
        let index = this.equation.indexOf('(')
        if (index === -1){
            return
        }else{
            let closeParInd = this.equation.indexOf(')', index)
            if (closeParInd === index + 1){
                this.equation.splice(index, 2)
            }else{
                let x = this.equation.splice(index, (closeParInd - index) + 2)
                console.log(x, 'contents of equation spliced')
                x = x.slice(1, x.length - 1)
                console.log(x, 'without parentheses')
                
                
                let y = new Calculator(x)
                console.log(y, 'new calc obj')

                y.equals()
                console.log(y.equation)


                if (y.equation.includes('(') && y.equation.includes(')')){
                    let z = y.equation.equals()
                    console.log(z, 'inner contents equated')
                }

                this.disp()

            }
        }

        let open = this.equation.lastIndexOf('(')
        let close = this.equation.indexOf(')', open)

        // function removeParentheses(s){
        //     let outer = ''
        //     let depth = 0
            
        //     for (let char of s){
        //       if (char === '('){
        //         depth++
        //       }else if (char === ')'){
        //         depth--
        //       }else if (depth === 0){
        //         outer += char
        //       }
        //     }
        //     return outer
        //   }


    }
    backspace(){
        this.equation.pop()
        // return this.equation
        this.disp()
    }
    equals(parenthetical = true){
        while (this.equation.includes(pi)){
            this.pi()
        }
        if (parenthetical){
            while (this.equation.includes('(') && this.equation.includes(')')){
                this.parenthetical()
            }
        }
        while (this.equation.includes('%')){
            this.percent()
        }
        while (this.equation.includes('!')){
            this.factorial()
        }
        while (this.equation.includes(root)){
            this.root()
        }
        while (this.equation.includes('^')){
            this.expo()
        }
        while (this.equation.includes(divide)){
            this.divide()
        }
        while (this.equation.includes('x')){
            this.mult()
        }
        while (this.equation.includes('-')){
            this.subtract()
        }
        while (this.equation.includes('+')){
            this.add()
        }
        let str = ''
        let arr = []
        for ( let i = 0 ; i < this.equation.length ; i++ ){
            if (!isNaN(this.equation[i])){
                str += this.equation[i]
            }else{
                arr.push(str)
                arr.push(this.equation[i])
                str = ''
            }
            if ( i === this.equation.length -1 ){
                arr.push(str)
                str = ''
            }
        }
        this.equation = arr
        arr = []
        
        // return this.equation
        this.answer.textContent = this.equation.toString()
        return this.equation
        
    }
    clear(){
        this.equation = []
        // return this.equation
        this.disp()
    }
}

const calc = new Calculator()
// calc.equals()
// let parenth = ['(', '2', 'x', '3', ')']

let digits = document.querySelectorAll('.digit')

digits.forEach(button => {
    button.addEventListener('click', () => {
        calc.insertVal(button.textContent)
        //console.log(calc.equation)
    })
})

document.querySelector('.equals').addEventListener('click', () => calc.equals())
document.querySelector('.clear').addEventListener('click', () => calc.clear())



// const calculator = new Calculator();
// ***********************************************************
// very important dont lose************very important dont lose

// document.querySelectorAll('.digit, .operator').forEach(button =>{
//     button.addEventListener('click', () => calculator.appendToEquation(button.textContent));
// });


// document.getElementById('equals').addEventListener('click', () => calculator.calculate());
// document.getElementById('clear').addEventListener('click', () => calculator.clear());
