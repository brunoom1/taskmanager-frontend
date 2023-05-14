import type { InputState } from "./../hooks/useFormHook"

interface GetFieldPropsStateErrorReturn {
    validationState?: 'error' | 'warning' | 'success' | 'none',
    validationMessage?: string;
}

export function getFieldPropsStateError(inputsState: InputState[], name: string ): GetFieldPropsStateErrorReturn {

    const inputState = inputsState.find(input => input.name === name);
    const error = inputState?.error;
    const success = inputState?.success;

    if (error != null) {
        return {
            validationState: 'error',
            validationMessage: error.message || ""
        };
    } else if (success) {
        return {
            validationState: "success",
            validationMessage: "Certo!",
        }
    }

    return {
        
    }
}
