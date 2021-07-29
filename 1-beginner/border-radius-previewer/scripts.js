const fBorderRadius = {
    "border-top-left": function(value) {
        document.getElementById('object').style.borderTopLeftRadius = value
    },
    "border-top-right": function(value) {
        document.getElementById('object').style.borderTopRightRadius = value
    },
    "border-bottom-left": function(value) {
        document.getElementById('object').style.borderBottomLeftRadius = value
    },
    "border-bottom-right": function(value) {
        document.getElementById('object').style.borderBottomRightRadius = value
    }
}

const fAlterInput = {
    "border-top-left": function(value) {
        document.getElementById('border-top-right').value = value
        document.getElementById('border-bottom-left').value = value
        document.getElementById('border-bottom-right').value = value
    },
    "border-top-right": function(value) {
        document.getElementById('border-top-left').value = value
        document.getElementById('border-bottom-left').value = value
        document.getElementById('border-bottom-right').value = value
    },
    "border-bottom-left": function(value) {
        document.getElementById('border-top-right').value = value
        document.getElementById('border-top-left').value = value
        document.getElementById('border-bottom-right').value = value
    },
    "border-bottom-right": function(value) {
        document.getElementById('border-top-right').value = value
        document.getElementById('border-bottom-left').value = value
        document.getElementById('border-top-left').value = value
    }
}



function borderRadius(id, value){
    var object = document.getElementById('object')

    if(document.getElementById('link-borders').checked){
        object.style.borderRadius = value + 'px'
        fAlterInput[id](value)
    }else{
        fBorderRadius[id](value + 'px')
    }
    document.getElementById('infoCSS').value = object.style.cssText
}

function copySetting(){
    var copy = document.getElementById('infoCSS')
    copy.select()
    copy.setSelectionRange(0, 500)
    document.execCommand("copy")
}