import styled from "styled-components"

export const Container =  styled.div`
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    height: 100vh;

    > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        max-width: 340px;
        padding: 30px;
        min-height: 400px;
        & + div {
            margin-left: 20px;
        }
    }

    form {
        > div {
            margin-bottom: 10px;
            display: flex;
            flex-direction: column;
        }
    }
`

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const Title = styled.h1`
    display: flex;
    flex-direction: column;
    align-items: center;

    > small {
        font-size: 14px;
        text-align: center;
        font-weight: normal;
    }
`