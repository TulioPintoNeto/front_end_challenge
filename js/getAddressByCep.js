import { validate } from "./validate.js";

export const getAddressByCep = ($input) => {
    const input = $input[0];
    const cepCode = $input.val().replace(/\D/g,"");

    if (cepCode.length != 8) {
        input.setCustomValidity("O CEP está incompleto");
        return;
    }

    let $loadingAnimation = $("#loading-animation");
    $loadingAnimation.fadeIn();

    const url = `https://viacep.com.br/ws/${cepCode}/json/`;
    const options = {
        method: "GET",
        mode: "cors",
        headers: {
            "content-type": "application/json;charset=utf-8",
        },
    };

    fetch(url,options)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                input.setCustomValidity("Este CEP não é válido");
                $loadingAnimation.fadeOut();
                return;
            }

            let $street = $("#streetName");
            let $district = $("#district");
            let $city = $("#city");
            let $state = $("#state"); 

            $street.val(data.logradouro);
            $district.val(data.bairro);
            $city.val(data.localidade);
            $state.val(data.uf);

            validate($street);
            validate($district);
            validate($city);
            validate($state);

            if (
                $street[0].validity.valid &&
                $district[0].validity.valid &&
                $city[0].validity.valid &&
                $state[0].validity.valid
                ) {
                $("#addressNumber").focus();
            }

            input.setCustomValidity("");
            $loadingAnimation.fadeOut();
            return;
        });
}