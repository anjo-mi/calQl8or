const PI = '\u03C0'

const ROOT = '\u221A'

const DIVIDE = '\u00f7'


class Calculator {
    constructor(equation){
        this.equation = equation || ''
        this.prev
        this.curr
        this.answer = document.querySelector('.answer')
        this.display = document.querySelector('.equation')
        this.ops = [ROOT, DIVIDE, 'x', '+', '-', '^', '!']
        this.operations = {
            '+' : (a,b) => a + b,
            '-' : (a,b) => a - b,
            DIVIDE : (a,b) => a / b,
            'x' : (a,b) => a * b,
            '^' : (a,b) => a ** b,
            ROOT : (a) => Math.sqrt(a),
            '!' : (a) => {
                if (a < 0) throw new Error('cannot calculate imaginary numbers; negative factorial');
                const integers = [];
                for (let i = 1 ; i <=a ; i++){
                    integers.push(i);
                }
                return integers.reduce((a,el) => a * el, 1);
            }
        }
    }

    disp(){
        this.display.textContent = this.equation;
    }

    insertVal(value){
        this.equation += value;
        this.disp();
    }

    pi(){
        return Math.PI;
    }

    calculateResult(){
        let result = this.equation;

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
        while (str.includes(ROOT)){
            const rootIndex = str.indexOf(ROOT);
            let endIndex = rootIndex + 1;
            while (endIndex < str.length && ( !isNaN(parseInt(str[endIndex])) || str[endIndex] === '.')){
                endIndex++;
            }
            const num = str.substring(rootIndex + 1 , endIndex);
            const expression = ROOT + num;
            const result = this.evaluatePart(expression);
            str = str.replace(expression, result)
        }

        while (str.includes('!')){
            const factorialIndex = str.indexOf('!');
            let startIndex = factorialIndex;
            while (startIndex >= 0 && ( !isNaN(parseInt(str[startIndex])) || str[startIndex] === '.') ){
                startIndex--;
            }
            const num = str.substring(startIndex + 1, factorialIndex);
            const expression = num + '!';
            const result = this.evaluatePart(expression);
            str = str.replace(expression, result)
        }

        return str;
    }

    handleExponents(str){
        while (str.includes('^')){
            const expIndex = str.indexOf('^');
            let startIndex = expIndex;
            let endIndex = expIndex + 1;
            while (startIndex >= 0 && (!isNaN(parseInt(str[startIndex])) || str[startIndex] === '.' )){
                startIndex--;
            }
            while (endIndex <= str.length && (!isNaN(parseInt(str[endIndex])) || str[endIndex] === '.' )){
                endIndex++;
            }
            const expression = str.substring(startIndex+1, endIndex);
            const result = this.evaluatePart(expression);
            str = str.replace(expression, result);
        }
        return str;
    }

    evaluatePart(string){
        if (!this.ops.some(el => string.includes(el))) return string;
        const op = string.split('').find(el = this.ops.includes(el));
        const [first,second] = string.split(op);
        return second 
                ? this.operations[op](Number(first),Number(second))
                : this.operations[op](Number(first));
    }
    
}
const calc = new Calculator()


let digits = document.querySelectorAll('.digit')

digits.forEach(button => {
    button.addEventListener('click', () => {
        calc.insertVal(button.textContent)
    })
})

