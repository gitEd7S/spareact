import React from 'react'
import styled from "styled-components"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Button, Input, Error } from '../../../ui'
import { validateEmail } from '../../../lib/validators'

const Title = styled.span`
    display: block;
    margin-bottom: 20px;
    font-size: 18px;
    text-align: center;
`

const Group = styled.div`
    width: 100%;
    margin-bottom: 12px;
`

const ButtonStyled = styled(Button)`
    margin: 20px auto 0;
`

interface IErrors {
    email: string
    password: string
}

const validateAuth = ({ email, password }: IErrors): IErrors => {
    const errors = { } as IErrors
    if (validateEmail(email)) errors.email = 'Не правильный email'
    if (!password.length) errors.password = 'Заполните это поле'
    return errors
}

export const Auth: React.FC = () => {
    return (
        <>
            <Title>Введите свои данные</Title>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => validateAuth(values)}
                onSubmit={(values, { setSubmitting }): void => {
                    console.log(values)
                    setSubmitting(false);
                }}
            >
            {
                () => (
                    <Form>
                        <Group>
                            <Input as={Field} type="text" name="email" placeholder="Введите свой email" />
                            <Error as={ErrorMessage} name="email" component="span" />
                        </Group>
                        <Group>
                            <Input as={Field} type="password" name="password" placeholder="Введите свой пароль" />
                            <Error as={ErrorMessage} name="password" component="span" />
                        </Group>
                        <ButtonStyled type="submit" primary>Ввойти</ButtonStyled>
                    </Form>
                )
            }
            </Formik>
        </>
    )
}
