function onlyBin(e) {
    var warning = document.getElementById('warning');

    var charCode = e.charCode ? e.charCode : e.keyCode;

    if (charCode != 8 && charCode != 9) {
        if (charCode == 48 || charCode == 49) {
            warning.hidden = true;
            return true;
        }else{
            warning.hidden = false;
            return false;
        }
    }
}

function binToDec(){
    var bin = document.getElementById('bin').value;
    var dec = 0;

    for (let index = bin.length - 1; index >= 0; index--) {
        const element = parseInt(bin[index]);
        dec += element * Math.pow(2, bin.length - 1 - index);
    }
    if(bin == ''){
        document.getElementById('dec').value = '';
    }else{
        document.getElementById('dec').value = dec;
    }
}
