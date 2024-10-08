export const validateCardNumber = (cardNumber: string) => {
    if (cardNumber.length !== 16) {
        return false;
    }

    if (/[^0-9\s]+/.test(cardNumber)) return false;

    let nCheck = 0, bEven = false;

    for (var n = cardNumber.length - 1; n >= 0; n--) {
        var cDigit = cardNumber.charAt(n),
            nDigit = parseInt(cDigit, 10);

        if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

        nCheck += nDigit;
        bEven = !bEven;
    }

    return (nCheck % 10) == 0;
};