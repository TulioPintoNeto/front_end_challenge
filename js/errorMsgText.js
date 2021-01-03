
export const errorMsgText = (type, validity) => {
    let errorMsgText = null;

    const errorTypes = ["valueMissing","typeMismatch","patternMismatch"];

    const errorMsgs = {
        fullName: {
            valueMissing: "Preencha este campo",
        },
        birthDate: {
            valueMissing: "Preencha este campo",
            
        },
        cpfDocument: {
            valueMissing: "Preencha este campo",
            patternMismatch: "O CPF está incompleto",
        },
        emailAddress: {
            valueMissing: "Preencha este campo",
            typeMismatch: "Este e-mail não é válido",
        },
        cepCode: {
            valueMissing: "Preencha este campo",
        },
        state: {
            patternMismatch: "O estado está incompleto",
        }
    };


    errorTypes.forEach(error => {
        if(type != undefined && validity[error]) {
            errorMsgText = errorMsgs[type][error];
        }
    });

    return errorMsgText;
}