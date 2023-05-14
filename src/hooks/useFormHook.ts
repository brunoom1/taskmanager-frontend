import { FormEventHandler, useCallback, useEffect, useState } from "react";

export interface InputState {
    name: string;
    success: boolean;
    error?: null | {
        message: string;
    }
}

export interface Validator {
    (data: string, allData?: {[key: string]:any}[]):[boolean, {message: string} | null]
}

interface HookProps {
    inputsNames: string[],
    validators: {
        [key: string]: Validator
    }
}


export const useFormHook = function ({
    inputsNames,
    validators
}: HookProps) {

    const prepareInputs: InputState[] = [];
    inputsNames.forEach(input => prepareInputs.push({
        name: input, 
        success: false,
        error: null
    }));

    const [inputsState, setInputsState] = useState<InputState[]>(prepareInputs)

    
    const formSubmit = useCallback<FormEventHandler>((evt) => {
        evt.preventDefault();

        const formElement = evt.currentTarget as HTMLFormElement;
        const formData = new FormData(formElement);

        const allData = inputsNames.map(inputName => {
            const s:{[key: string]: any} = {}
            s[inputName] = formData.get(inputName)?.toString()
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
                                success: false,
                                error: {message: error.message}                         
                            }
                        }
                        return inputState
                    }))                
                } else {
                    setInputsState(inputsState.map( inputState => {
                        if (inputState.name === inputName && error === null) {
                            return {
                                ...inputState, 
                                success: true
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