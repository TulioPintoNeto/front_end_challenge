import { dateValidator } from "./dateValidator.js";

const errorMsgText = (type, validity) => {
    let errorMsgText = "";

    const errorTypes = ["valueMissing","typeMismatch"];

    const errorMsgs = {
        fullName: {
            valueMissing: "O nome é necessário",
        },
        birthDate: {
            valueMissing: "A data de nascimento é necessária"
        },
        cpfDocument: {
            valueMissing: "O CPF é necessário",
            customError: "Este CPF não é válido"
        },
        emailAddress: {
            valueMissing: "O e-mail é necessário",
            typeMismatch: "Este e-mail não é válido",
        },
    };

    errorTypes.forEach(error => {
        if(validity[error]) {
            errorMsgText = errorMsgs[type][error];
        }
    });

    return errorMsgText;
}

export const validate = ($input) => {
    const input = $input[0];
    const $inputParent = $input.parent();
    const errorMsg = $inputParent.find(".text-danger");
    
    const type = $input.data().type;
    
    const validators = {
        birthDate: ($input) => dateValidator($input),
    }

    if (validators[type]) {
        validators[type]($input);
    }

    const isValid = input.validity.valid;
    console.log(input.validity);

    if (isValid) {

        $input.removeClass("border-danger");
        $input.addClass("border-success");
        $inputParent.find(".text-danger").remove();

    } else {
        
        $input.removeClass("border-success");
        $input.addClass("border-danger");

        if (errorMsg.length === 0) {
            const $newErrorMsg = $("<p></p>")
                .addClass("text-danger")
                .text(errorMsgText(type,input.validity));

            $inputParent.append($newErrorMsg);
        }

    }
}