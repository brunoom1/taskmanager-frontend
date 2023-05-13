import { Button, Field, Input, Label } from "@fluentui/react-components";
import React, { FormEventHandler, useCallback, useEffect, useState } from "react";
import { ButtonContainer } from "./style";
import { useFormHook } from "./../../../hooks/useFormHook";


export const SignupForm = () => {

    const { 
        formSubmit,
        inputsState
    } = useFormHook({
        inputsNames: [
            "name", "email", "password", "repassword"
        ],
        validators: {
            name: (name, allValues) => {
                console.log(name, allValues);

                return [false, {message: "Nome não pode ser vasio"}] 
            }
        }
    });

    useEffect(() => {

    }, [inputsState])


return <>
    <form onSubmit={ formSubmit }>
        <div>
            <Field label={"Nome"} required>
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