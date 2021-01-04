const digitCalculator = cpfWithoutDigit => {

    let cpfMultiplier = cpfWithoutDigit.length+1;
    let cpfSum = 0;
    let cpfRest = 0;
    
    for (let i=0 ; i<cpfWithoutDigit.length ; i++) {
        cpfSum += parseInt(cpfWithoutDigit[i]) * cpfMultiplier--;
    }

    cpfRest = cpfSum % 11;
    let cpfDigit = 11 - cpfRest;

    if (cpfDigit > 9) {
        cpfDigit = 0;
    }

    return cpfDigit;

}

const cpfIsValid = cpf => {
    cpf = cpf.replace(/\D/g, "");

    let numberOfDifferentDigits = 0;
    for (let i=0 ; i<=9 ; i++) {
        if (cpf.indexOf(i) != -1) {
            numberOfDifferentDigits++;
        }
    }
    if (numberOfDifferentDigits <= 1) {
        return false;
    }

    let cpfFirstVerifyingDigit = cpf[9];
    let cpfSecondVerifyingDigit = cpf[10];

    if (
        cpfFirstVerifyingDigit == digitCalculator(cpf.substring(0,9)) &&
        cpfSecondVerifyingDigit == digitCalculator(cpf.substring(0,10))
    ) {
        return true;
    }

    return false;
}

export const cpfValidator = ($input) => {
    const input = $input[0];

    const cpf = input.value;

    if (cpfIsValid(cpf)) {
        input.setCustomValidity("");
        return;
    }

    input.setCustomValidity("O CPF inserido não é válido");
    return;
}