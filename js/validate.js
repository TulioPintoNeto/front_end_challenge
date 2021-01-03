import { dateValidator } from "./dateValidator.js";
import { cpfValidator } from "./cpfValidator.js";
import { phoneValidator } from "./phoneValidator.js";
import { getAddressByCep } from "./getAddressByCep.js";
import { errorMsgText } from "./errorMsgText.js"

export const validate = ($input) => {
    const input = $input[0];    
    const $inputParent = $input.parent();
    const $errorMsg = $inputParent.find(".text-danger");
    
    const type = $input.data().type;
    
    const validatorsAndMethods = {
        birthDate: ($input) => dateValidator($input),
        cpfDocument: ($input) => cpfValidator($input),
        phoneNumber: ($input) => phoneValidator($input),
        cepCode: ($input) => getAddressByCep($input),
    }

    if (validatorsAndMethods[type]) {
        validatorsAndMethods[type]($input);
    }

    const isValid = input.validity.valid;

    if (isValid) {

        $input.removeClass("border-danger");
        $input.addClass("border-success");
        $inputParent.find(".text-danger").remove();

    } else {
        
        $input.removeClass("border-success");
        $input.addClass("border-danger");

        if ($errorMsg.length === 0) {
            const $newErrorMsg = $("<p></p>")
                .addClass("text-danger")
                .text(
                    errorMsgText(type,input.validity) ??
                    input.validationMessage
                );

            $inputParent.append($newErrorMsg);
        } else {
            $errorMsg.text(
                errorMsgText(type,input.validity) ??
                input.validationMessage
            )
        }

    }
}