import { validate } from "./validate.js";

$(document).ready(function() {

    const $inputs = $("input");
    const $form = $('.needs-validation');

    $form.submit(function(){
        if ($form[0].checkValidity()) {
            
        }
    });

    $inputs.blur(function() {
        const $input = $(this);
        validate($input);
    });
});