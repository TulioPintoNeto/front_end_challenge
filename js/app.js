import { validate } from "./validate.js";
import { finalResultData } from "./finalResultData.js"

$(document).ready(function() {

    // Validation 
    const $inputs = $("input");

    $inputs.blur(function() {
        const $input = $(this);
        validate($input);
    });

    // Result
    $("form").submit(function(event) {
        finalResultData(event);
    });

    // Masks
    $(".cpf").mask("000.000.000-00");
    var maskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    options = {onKeyPress: function(val, e, field, options) {
            field.mask(maskBehavior.apply({}, arguments), options);
        }
    };
    $('.tel').mask(maskBehavior, options);
    $('.cep').mask("00000-000")
});