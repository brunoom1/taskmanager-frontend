import { FormEventHandler, useCallback, useEffect, useState } from "react";

interface InputState {
    name: string;
    error?: null | {
        message: string;
    }
}

interface HookProps {
    inputsNames: string[],
    validators: {
        [key: string]: (data: string, allData?: {[key: string]:any}[]) => [boolean, {message: string} | null]
    }
}

export const useFormHook = function ({
    inputsNames,
    validators
}: HookProps) {

    const prepareInputs: InputState[] = [];
    inputsNames.forEach(input => prepareInputs.push({
        name: input, 
        error: null
    }));

    const [inputsState, setInputsState] = useState<InputState[]>(prepareInputs)

    
    const formSubmit = useCallback<FormEventHandler>((evt) => {
        evt.preventDefault();

        const formElement = evt.currentTarget as HTMLFormElement;
        const formData = new FormData(formElement);

        const allData = inputsNames.map(inputName => {
            const s:{[key: string]: any} = {}
            s[inputName] = formData.get(inputName)
            return s;
        });

        inputsNames.forEach(inputName => {
            const inputData = formData.get(inputName)?.toString() || "";
            const hasValidator = typeof validators[inputName] === "function";

            if (hasValidator) {
                const [validator, error] = validators[inputName](inputData, allData);
                if (!validator && inputsState) {
                    setInputsState(inputsState.map( inputState => {
    
                        if (inputState.name === inputName && error) {
                            return {
                                ...inputState, 
                                error: {message: error.message}                         
                            }
                        }
                        return inputState
                    }))                
                }
            }


        })


    }, []);

    return {
        formSubmit,
        inputsState
    }
}