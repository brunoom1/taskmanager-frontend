import type { Validator } from "./../hooks/useFormHook";

export const NameValidator: Validator = (data, allData) => {
 
    if (data.length <= 2) {
        return [false, {message: "Nome deve conter mais de duas letras"}]
    }

    return [
        true, null
    ]
}