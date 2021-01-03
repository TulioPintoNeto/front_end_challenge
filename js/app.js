import { validate } from "./validate.js";

$(document).ready(function() {

    // Validation 
    const $inputs = $("input");

    $inputs.blur(function() {
        const $input = $(this);
        validate($input);
    });

    // Masks
    $(".cpf").mask("000.000.000-00")
});