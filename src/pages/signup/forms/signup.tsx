import { Button, Field, Input} from "@fluentui/react-components";
import React, { useEffect } from "react";
import { ButtonContainer } from "./style";
import { useFormHook } from "./../../../hooks/useFormHook";
import { NameValidator } from "../../../validators/name";
import { getFieldPropsStateError } from "../../../fluentHelp/getFieldPropsStateError";

export const SignupForm = () => {

    const { 
        formSubmit,
        inputsState
    } = useFormHook({
        inputsNames: [
            "name", "email", "password", "repassword"
        ],
        validators: {
            name: NameValidator
        }
    });

    useEffect(() => {

        console.log(inputsState)

    }, [inputsState])


return <>
    <form onSubmit={ formSubmit }>
        <div>
            <Field label={"Nome"} required {...getFieldPropsStateError(inputsState, 'name')}>
                <Input placeholder="digite aqui" required name="name" />
            </Field>
        </div>

        <div>
            <Field label={"E-mail"} required>
                <Input placeholder="digite aqui" required name="email" />
            </Field>
        </div>

        <div>
            <Field label={"Senha"} required>
                <Input type="password" placeholder="digite aqui" required name="password"/>
            </Field>
        </div>

        <div>
            <Field label={"Repetir Senha"} required>
                <Input placeholder="digite aqui" type="password" required name="repassword"/>
            </Field>
        </div>

        <ButtonContainer>
            <Button type="submit" appearance={"primary"}> Criar conta</Button>
        </ButtonContainer>
    </form>
</>}