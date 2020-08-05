export const validateEmail = (email: string): boolean => {

    const reg: RegExp = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/

    if (!reg.test(email)) { return true }

    return false
}
