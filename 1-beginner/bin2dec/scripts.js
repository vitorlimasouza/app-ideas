function onlyBin(e) {
    var charCode = e.charCode ? e.charCode : e.keyCode;
    if (charCode != 8 && charCode != 9) {
        if (charCode == 48 || charCode == 49) {
            return true;
        }else{
            return false;
        }
    }
}

function onlyDec(e){
    var charCode = e.charCode ? e.charCode : e.keyCode;

    if (charCode != 8 && charCode != 9) {
        if (charCode < 48 || charCode > 57) {
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
    document.getElementById('dec').value = dec
}

function decToBin(){
    var dec = document.getElementById('dec').value
    dec = parseInt(dec)
    let bin = []
    while (dec > 0) {
        bin.push(dec%2)
        dec = Math.floor(dec/2)
    }
    bin = bin.reverse().join("")
    document.getElementById('bin').value = bin
}
