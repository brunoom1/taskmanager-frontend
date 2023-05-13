import { Button, Field, Input, Label } from "@fluentui/react-components";
import React from "react";
import { ButtonContainer } from "./style";

export const LoginForm = () => <>

    <form>
        <div>
            <Field label={"E-mail"} required>
                <Input placeholder="digite aqui" required />
            </Field>
        </div>
        <div>
            <Field label={"Senha"} required>
                <Input type="password" placeholder="digite aqui" required />
            </Field>
        </div>

        <ButtonContainer>
            <Button type={"submit"} appearance={"primary"}> Acessar conta </Button>
        </ButtonContainer>
    </form>                


</>