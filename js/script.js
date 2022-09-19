function createCalculator() {
    return {

        display: document.querySelector('.display'),

        inicia() {
            this.clickButtons()
            this.pressEnter()
        },

        pressEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.key === 'Enter') {
                    this.equalOperation()
                }
            })
        },

        clickButtons() {
            document.addEventListener('click', e => {
                const el = e.target

                if (el.classList.contains('button-num')){
                    this.buttonForDisplay(el.innerText)
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
        },

        clearDisplay() {
            this.display.value = ''
        },

        deleteOne() {
            this.display.value = this.display.value.slice(0, -1)
        },

        buttonForDisplay(valor) {
            this.display.value += valor
        },

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
        },
    }
}

const calculator = createCalculator()
calculator.inicia()