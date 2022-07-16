const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator-keys');
const inputDisplay = calculator.querySelector('.calculator-display .input');
const prevDisplay = calculator.querySelector('.calculator-display .previous')
let operator;
keys.addEventListener('click', event => {
    const click = event.target;
    const value = click.dataset.input
    const prevKey = calculator.dataset;
    if (click.matches('button')) {
        if (!value) {
            Array.from(keys.children).forEach(key => key.classList.remove('pushed'))
            if (inputDisplay.textContent === '0' || prevKey.prevKey === 'operator' || prevKey.prevKey === 'equals') {
                inputDisplay.textContent = click.textContent;
            }
            else {
                inputDisplay.textContent += click.textContent;
            }
            prevKey.prevKey = 'number'
        }
        if (value === 'add' || value === 'subtract' || value === 'divide' || value === 'multiply') {
            click.classList.add('pushed');
            prevKey.prevKey = 'operator'
            operator = value;
            console.log(operator);
            n1 = inputDisplay.textContent;

            
        }
        if (value === 'clear') {
            n1 = '';
            n2 = '';
            operator = ''
            inputDisplay.textContent = '0';
            console.log ("Clear Button Clicked");
        }
        if (value === 'equals') {
            if (operator) {
                if (prevKey.prevKey === 'equals') {
                    n1 = inputDisplay.textContent;
                } else {
                prevKey.prevKey = 'equals';
                n2 = inputDisplay.textContent;
                }
                inputDisplay.textContent = calculate(n1, operator, n2);
                console.log("Equals Button Clicked")
           }
        }
        if (value === 'delete') {
            if (inputDisplay.textContent !== '0') {
            inputDisplay.textContent = inputDisplay.textContent.slice(0,-1);
            } 
            if (inputDisplay.textContent === '') {
                inputDisplay.textContent = '0'
            }
        }
        if (value === 'decimal') {
            if (!inputDisplay.textContent.includes('.')){
                inputDisplay.textContent += '.'
            }
            console.log("Decimal Key Clicked");
        }
    }
    calculate = (x , o , y) => {
        let n1 = parseFloat(x);
        let n2 = parseFloat(y);
        if (o === 'add')        return n1 + n2; 
        if (o === 'subtract')   return n1 - n2;
        if (o === 'divide')     return n1 / n2;
        if (o === 'multiply')   return n1 * n2;
    }
})
