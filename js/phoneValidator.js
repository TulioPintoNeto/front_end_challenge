export const phoneValidator = ($input) => {
    const input = $input[0];

    if ($input.val().length >= 14 || $input.val() == "") {
        input.setCustomValidity("");
        return;
    }
    
    input.setCustomValidity("O telefone inserido não está completo");
    return;
}