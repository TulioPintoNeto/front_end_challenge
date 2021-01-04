export const finalResultData = event => {
    event.preventDefault();
    event.stopPropagation();

    let finalResultData = {
        "Nome Completo": $("#fullName").val(),
        "Data de Nascimento": $("#birthDate").val(),
        "CPF": $("#cpfDocument").val(),
        "Celular": $("#phoneNumber").val(),
        "E-mail": $("#emailAddress").val(),
        "CEP": $("#cepCode").val(),
        "Logradouro": $("#streetName").val(),
        "Número": $("#addressNumber").val(),
        "Complemento": $("#addressComplement").val(),
        "Bairro": $("#district").val(),
        "Cidade": $("#city").val(),
        "UF": $("#state").val(),
        "Descrição (Bio)": $("#description").val(),
    };
    
    console.log(finalResultData);
}