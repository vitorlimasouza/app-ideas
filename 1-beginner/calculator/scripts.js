var number, number2, operator
number = number2 = operator = ''

function digit(value) {
    var valueDisplay = document.getElementById('display').value 
    if(valueDisplay != '' &&  number == ''){
        document.getElementById('display').value = ''
    }

    if(number.length <= 8){
        number += value
        document.getElementById('display').value = number
    }
    uptadePainelText()
}

function getOperator(value){
    document.getElementById('display').value = ''

    if(number2 == ''){
        number2 = number
        number = ''
    }else{
        showResult()
    }
    operator = value
    uptadePainelText()
}

function showResult(){
    if(number != '' && number2 != ''){
        var result = operation[operator]()


        console.log()

        if(String(result).length > 9){
            document.getElementById('display').value = "ERR"
        }else{
            document.getElementById('display').value = result
            number2 = result
            number = ''
        }
    }
}

function uptadePainelText(){
    document.getElementById('painelText').textContent = number2 + operator + number
}

const operation = {
    '+': function (){
        return parseFloat(number2) + parseFloat(number)
    },
    '-': function (){
        return parseFloat(number2) - parseFloat(number)
    },
    '/': function (){
        return parseFloat(number2) / parseFloat(number)
    },
    '*': function (){
        return parseFloat(number2) * parseFloat(number)
    }
}

const commands = {
    'C': function (){
        number = ''
        document.getElementById('display').value = ''
        uptadePainelText()
    },
    'AC': function(){
        number = ''
        operator = ''
        number2 = ''
        document.getElementById('display').value = ''
        uptadePainelText()
    }
}