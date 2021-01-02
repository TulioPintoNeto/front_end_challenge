import { dateValidator } from "./dateValidator.js";

export const validate = ($input) => {
    const input = $input[0];
    const isValid = input.validity.valid;
    const $inputParent = $input.parent();
    const errorMsg = $inputParent.find("text-danger");
    
    const type = $input.data().type;
    
    const validators = {
        birthDate: ($input) => dateValidator($input),
    }

    if (validators[type]) {
        validators[type]($input);
    }

    /*
    if (isValid) {
        $input.removeClass("border-danger");
        $input.addClass("border-success");
    } else {
        $input.removeClass("border-success");
        $input.addClass("border-danger");
        if (errorMsg.length === 0) {
            const $newErrorMsg = $("<p>Teste</p>").addClass("text-danger").text("Campo inválido");
            $inputParent.append($newErrorMsg);
        }
    }*/
}