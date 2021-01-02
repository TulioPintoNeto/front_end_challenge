export const dateValidator = ($input) => {
    const input = $input[0];

    const birthDate = new Date(input.value);
    const todayDate = new Date();

    if (birthDate <= todayDate) {
        input.setCustomValidity("");
        return;
    }
    
    input.setCustomValidity("A data inserida não é válida");
    return;
}