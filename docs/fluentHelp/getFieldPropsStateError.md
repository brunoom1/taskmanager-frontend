
# getFieldPropsStateError

monta as propriedades de renderização de erro dependendo dos valores encontrados no state do input.

Exemplo de uso: 

```typescript

<Field {...getFieldPropsStateError(inputsState, 'name')}>
...
</Field>
```

a variável inputState, provém do hook que auxilia no formulário e 'name' é o nome do field que precisamos encontrar dentro de inputsState que tem o seguite formato: 

```json
[
    {
        "name": "name",
        "success": false,
        "error": null
    },
    {
        "name": "email",
        "success": false,
        "error": null
    },
    {
        "name": "password",
        "success": false,
        "error": null
    },
    {
        "name": "repassword",
        "success": false,
        "error": null
    }
]
```

Se quiser pode conferir mais sobre a documentação de uso do hook [aqui](./../hooks/useFormHook.md)
