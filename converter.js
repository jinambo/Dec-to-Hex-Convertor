let hexResult;
let firstResidue, secondResidue;

function translateNumbers(num) {
    switch (num) {
    case 10:
        return 'A';
        break;
    case 11:
        return 'B';
        break;
    case 12:
        return 'C';
        break;
    case 13:
        return 'D';
        break;
    case 14:
        return 'E';
        break;
    case 15:
        return 'F';
        break;
    default:
        return String(num);
        break;
    }
}

function convertToHex(classicalVal) {
    if (classicalVal <= 255) {
        hexResult = Math.floor(classicalVal / 16); // devide (num) by 16
        firstResidue = classicalVal % 16; // get the residue of (num) / 16     - example : 255 / 16 -> 15
        return (translateNumbers(hexResult === 0 ? '' : hexResult) + translateNumbers(firstResidue));

    } else if(classicalVal <= 4095 && classicalVal >= 256) {
        hexResult = Math.floor(classicalVal / 256);  // devide (num) by 256
        firstResidue = classicalVal % 256; // get the residue of (num) / 256    - example : 300 / 256 -> 44
        let hexResult2 = Math.floor(firstResidue / 16); // devide (residue of num) by 16
        let secondResidue = firstResidue % 16; // get residue of (residue of num)    - exapmple 44 / 16 -> 12
        return (translateNumbers(hexResult === 0 ? '' : hexResult) + translateNumbers(hexResult2) + translateNumbers(secondResidue));
    }

}

let inputVal = document.querySelector('.convert-val')

inputVal.addEventListener('change', function(e) {
    let inputResult = e.target.value;
    document.querySelector('.output').innerHTML = convertToHex(inputResult);
})



