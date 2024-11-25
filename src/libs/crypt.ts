import CryptoJS from 'crypto-js'

export const encrypt = (value) => {
    return CryptoJS.AES.encrypt(value, process.env.NEXT_PUBLIC_CRYPTO_KEY).toString();
}

export const decrypt = (value) => {
    let bytes  = CryptoJS.AES.decrypt(value, process.env.NEXT_PUBLIC_CRYPTO_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
}