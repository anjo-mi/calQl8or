const PI = '\u03C0'

const ROOT = '\u221A'

const DIVIDE = '\u00f7'


class Calculator {
    constructor(equation){
        this.equation = equation || ''
        this.answer = document.querySelector('.answer')
        this.display = document.querySelector('.equation')
        this.ops = [ROOT, DIVIDE, 'x', '+', '-', '^', '!', '%']
        this.operations = {
            '+' : (a,b) => a + b,
            '-' : (a,b) => a - b,
            [DIVIDE] : (a,b) => a / b,
            'x' : (a,b) => a * b,
            '^' : (a,b) => a ** b,
            [ROOT] : (a) => Math.sqrt(a),
            '!' : (a) => {
                if (a < 0) throw new Error('cannot calculate imaginary numbers; negative factorial');
                const integers = [];
                for (let i = 1 ; i <=a ; i++){
                    integers.push(i);
                }
                return integers.reduce((a,el) => a * el, 1);
            },
            '%' : (a) => a /100
        }
    }

    disp(){
        this.display.textContent = this.equation;
        this.resizeInputs();
    }

    insertVal(value){
        this.equation += value;
        this.disp();
    }

    resizeInputs(){

        const resizeElement = (element) => {
            let fontSize = 4;
            element.style.fontSize = `${fontSize}rem`;
            while (element.scrollWidth > element.clientWidth && fontSize > .5){
                fontSize -= 0.5;
                element.style.fontSize = `${fontSize}rem`;
            }
        };
        resizeElement(this.display);
        resizeElement(this.answer);

    }

    pi(){
        return this.insertVal((Math.PI).toString());
    }

    calculateResult(str = this.equation){
        let result = str;

        result = this.handleParentheses(result);
        result = this.handleRootsAndFactorials(result);
        result = this.handleExponents(result);
        result = this.handleMultAndDiv(result);
        result = this.handleAddAndSub(result);

        return result;
    }

    handleParentheses(str){
        if (!str.includes('(')) return str;
        const closing = str.indexOf(')');
        if (closing <= 0) throw new Error('improper closing parenthetical');
        let opening = closing;
        while (opening >= 0){
            if (str[opening] === '(') break;
            opening--;
        }

        const innermost = str.substring(opening + 1, closing);
        const innerEval = this.calculateResult(innermost);
        const newStr = str.substring(0, opening) + innerEval + str.substring(closing + 1);
        return this.handleParentheses(newStr);
    }

    handleRootsAndFactorials(str){
        if (str.includes(ROOT)){
            const rootIndex = str.indexOf(ROOT);
            let endIndex = rootIndex + 1;
            while (endIndex < str.length && ( !isNaN(parseInt(str[endIndex])) || str[endIndex] === '.')){
                endIndex++;
            }
            const num = str.substring(rootIndex + 1 , endIndex);
            const result = this.operations[ROOT](Number(num));
            const newStr = str.substring(0,rootIndex) + result + str.substring(endIndex);

            return this.handleRootsAndFactorials(newStr)
        }

        if (str.includes('!')){
            const factorialIndex = str.indexOf('!');
            let startIndex = factorialIndex - 1;
            while (startIndex >= 0 && ( !isNaN(parseInt(str[startIndex])) || str[startIndex] === '.') ){
                startIndex--;
            }
            const num = str.substring(startIndex + 1, factorialIndex);
            const result = this.operations['!'](Number(num));
            const newStr = str.substring(0, startIndex+1) + result + str.subString(factorialIndex + 1);

            return this.handleRootsAndFactorials(newStr);
        }

        if (str.includes('%')){
            const percentIndex = str.indexOf('%');
            let startIndex = percentIndex - 1;
            while (startIndex >= 0 && 
                (!isNaN(parseInt(str[startIndex])) || str[startIndex] === '.')
            ){
                startIndex--;
            }
            const num = str.substring(startIndex + 1, percentIndex);
            const result = this.operations['%'](Number(num));
            const newStr = str.substring(0, startIndex+1) + result + str.substring(percentIndex + 1);

            return this.handleRootsAndFactorials(newStr);
        }

        return str;
    }

    handleExponents(str){
        if (str.includes('^')){
            const expIndex = str.indexOf('^');
            let startIndex = expIndex - 1;
            let endIndex = expIndex + 1;
            while (startIndex >= 0 && (!isNaN(parseInt(str[startIndex])) || str[startIndex] === '.' )){
                startIndex--;
            }
            while (endIndex < str.length && (!isNaN(parseInt(str[endIndex])) || str[endIndex] === '.' )){
                endIndex++;
            }
            const first = str.substring(startIndex + 1, expIndex);
            const second = str.substring(expIndex + 1, endIndex);

            const result = this.operations['^'](Number(first),Number(second));

            const newStr = str.substring(0,startIndex + 1) + result + str.substring(endIndex);

            return this.handleExponents(newStr)
        }
        return str;
    }

    handleMultAndDiv(str){
        if (str.includes('x')){
            const multIndex = str.indexOf('x');
            let startIndex = multIndex - 1;
            let endIndex = multIndex + 1;
            while (startIndex >= 0 && (!isNaN(parseInt(str[startIndex])) || str[startIndex] === '.' )){
                startIndex--;
            }
            while (endIndex < str.length && (!isNaN(parseInt(str[endIndex])) || str[endIndex] === '.' )){
                endIndex++;
            }
            const first = str.substring(startIndex + 1, multIndex);
            const second = str.substring(multIndex + 1, endIndex);

            const result = this.operations['x'](Number(first),Number(second));

            const newStr = str.substring(0,startIndex + 1) + result + str.substring(endIndex);

            return this.handleMultAndDiv(newStr);
        }
        if (str.includes(DIVIDE)){
            const divIndex = str.indexOf(DIVIDE);
            let startIndex = divIndex - 1;
            let endIndex = divIndex + 1;
            while (startIndex >= 0 && (!isNaN(parseInt(str[startIndex])) || str[startIndex] === '.' )){
                startIndex--;
            }
            while (endIndex < str.length && (!isNaN(parseInt(str[endIndex])) || str[endIndex] === '.' )){
                endIndex++;
            }
            const first = str.substring(startIndex + 1, divIndex);
            const second = str.substring(divIndex + 1, endIndex);

            const result = this.operations[DIVIDE](Number(first),Number(second));

            const newStr = str.substring(0, startIndex + 1) + result + str.substring(endIndex);

            return this.handleMultAndDiv(newStr);
        }

        return str;
    }

    handleAddAndSub(str){
        if (str.includes('+')){
            const plusIndex = str.indexOf('+');
            let startIndex = plusIndex - 1;
            let endIndex = plusIndex + 1;
            while (startIndex >= 0 && 
                  (!isNaN(parseInt(str[startIndex])) || str[startIndex] === '.')
            ){
                startIndex--;
            }
            while (endIndex < str.length && 
                  (!isNaN(parseInt(str[endIndex])) || str[endIndex] === '.')
            ){
                endIndex++;
            }
            const first = str.substring(startIndex + 1, plusIndex);
            const second = str.substring(plusIndex + 1, endIndex);

            const result = this.operations['+'](Number(first), Number(second));

            const newStr = str.substring(0, startIndex + 1) + result + str.substring(endIndex);

            return this.handleAddAndSub(newStr);
        }
        if (str.includes('-')){
            const minusIndex = str.indexOf('-');
            let startIndex = minusIndex - 1;
            let endIndex = minusIndex + 1;
            while (startIndex >= 0 && 
                  (!isNaN(parseInt(str[startIndex])) || str[startIndex] === '.')
            ){
                startIndex--;
            }
            while (endIndex < str.length && 
                  (!isNaN(parseInt(str[endIndex])) || str[endIndex] === '.')
            ){
                endIndex++;
            }
            const first = str.substring(startIndex + 1, minusIndex);
            const second = str.substring(minusIndex + 1, endIndex);

            const result = this.operations['-'](Number(first), Number(second));

            const newStr = str.substring(0, startIndex + 1) + result + str.substring(endIndex);

            return this.handleAddAndSub(newStr);
        }
        return str;
    }

    evaluatePart(string){
        if (!this.ops.some(el => string.includes(el))) return string;
        const op = string.split('').find(el => this.ops.includes(el));
        const [first,second] = string.split(op);
        return second 
                ? this.operations[op](Number(first),Number(second))
                : this.operations[op](Number(first));
    }

    backspace(){
        this.equation = this.equation.slice(0,this.equation.length - 1);
        this.disp();
    }

    clear(){
        this.equation = '';
        this.answer.textContent = '';
        this.disp();
    }

    equals(){
        this.answer.innerText = this.calculateResult();
        this.resizeInputs();
    }
    
}
const calc = new Calculator()


let digits = document.querySelectorAll('.digit')

digits.forEach(button => {
    button.addEventListener('click', () => {
        calc.insertVal(button.textContent);
    })
})

document.querySelector('.equals').addEventListener('click', () => {
    calc.equals();
})

document.querySelector('.pi').addEventListener('click', () => {
    calc.pi();
})

document.querySelector('.backspace').addEventListener('click', () => {
    calc.backspace();
})

document.querySelector('.clear').addEventListener('click', () => {
    calc.clear();
})