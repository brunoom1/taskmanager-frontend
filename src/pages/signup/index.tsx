import { Button, Card, Input, Label } from "@fluentui/react-components";
import React from "react"; 

import { TasksApp24Filled } from "@fluentui/react-icons"

import { 
    Container,
    IconContainer,
    Title
} from "./style";
import { LoginForm } from "./forms/login";
import { SignupForm } from "./forms/signup";


export const Signup = () => {
    return <Container>
        <Card>
            <div>
                <IconContainer>
                    <TasksApp24Filled />
                </IconContainer>                

                <Title>
                    Bem vindo
                    <small>
                        Faça login e começe a organizar suas tasks
                    </small>
                </Title>
            </div>

            <LoginForm />
        </Card>

        <Card appearance={"filled-alternative"}>
            <Title>
                Cadastre-se
                <small> Tenha suas tarefas organizadas de forma simples e intuitiva. </small>
            </Title>

            <SignupForm />
        </Card>
    </Container>
}