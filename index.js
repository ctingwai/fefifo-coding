const cond1 = (str, isEncrypt = true) => {
    if (isEncrypt) {
        return str.replace(/([a-z])([A-Z])/g, "$2$1*");
    }
    return str.replace(/([A-Z])([a-z])\*/g, "$2$1");
};

const cond2 = (str, isEncrypt = true) => {
    if (isEncrypt) {
        return str.replace(/(.*)([0-9])/g, "$2$10");
    }
    return str.replace(/([0-9])(.*)0/g, "$2$1");
};

(function() {
    const input = 'mAhi9t';
    const encrypted = cond2(cond1(input));
    console.log('encrypt', encrypted);
    const decrypted = cond1(cond2(input, false), false);
    console.log('decrypt', decrypted);
})()
