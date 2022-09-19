class Calculator {

    constructor() {
        this.display = document.querySelector('.display')
    }

    start() {
        this.clickButtons()
        this.pressEnter()
    }

    pressEnter() {
        this.display.addEventListener('keyup', event => {
            if (event.key === 'Enter') {
                this.equalOperation()
            }
        })
    }

    clickButtons() {
        document.addEventListener('click', event => {
            const el = event.target

            if (el.classList.contains('button-num')){
                this.addNumberDisplay(el.innerText)
            }
            if (el.classList.contains('button-clear')){
                this.clearDisplay()
            }
            if (el.classList.contains('button-del')){
                this.deleteOne()
            }
            if (el.classList.contains('button-equal')){
                this.equalOperation()
            }
        })
    }

    addNumberDisplay(valor) {
        this.display.value += valor
        this.display.focus()
    }

    clearDisplay() {
        this.display.value = ''
    }

    deleteOne() {
        this.display.value = this.display.value.slice(0, -1)
    }

    equalOperation() {
        const regExEval = /(\d*[)(./*+-])|([)(./*+-]*\d)/gi

        try {
            const value = this.display.value.match(regExEval)

            let operation = '' 
            operation += [...value]
            operation = operation.replace(/,/g, '')

            let result = ''
            
            result = eval(operation)

            if (result) {
                this.display.value = String(result)
            } else {
                alert('Operação inválida')
                return
            }
        } catch (err) {
            alert('Operação inválida')
            return
        }        
    }
}

const calculator = new Calculator()
calculator.start()