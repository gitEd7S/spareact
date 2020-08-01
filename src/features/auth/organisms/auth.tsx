import React from 'react'
import styled from "styled-components"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Button, Modal } from '../../../ui'
import { validateEmail } from '../../../lib/validators'

const Title = styled.span`
    display: block;
    margin-bottom: 15px;
    font-size: 20px;
    text-align: center;
`

const Group = styled.div`
    width: 100%;
    margin-bottom: 10px;
`

const ButtonStyled = styled(Button)`
    margin: 0 auto;
`

interface Errors {
    email: string
    password: string
}

const messagesErrors = {
    email: 'Не правильный email',
    password: 'Заполните это поле',
} as Errors

const validateAuth = (values: Errors): Object => {
    const errors = { } as Errors
    if(validateEmail(values.email)) errors.email = messagesErrors.email
    if(!values.password.length) errors.password = messagesErrors.password
    return errors
}

export const Auth = () => {
    return (
        <Modal small>
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
                ({ isSubmitting }) => (
                    <Form>
                        <Group>
                            <Field
                                type="text"
                                name="email"
                                placeholder="Введите свой email"
                                className='form-input input'
                            />
                            <ErrorMessage name="email" component="span" className="error" />
                        </Group>
                        <Group>
                            <Field
                                type="password"
                                name="password"
                                placeholder="Введите свой пароль"
                                className='form-input input'
                            />
                            <ErrorMessage name="password" component="span" className="error" />
                        </Group>
                        <ButtonStyled primary type="submit" disabled={isSubmitting}>
                            Ввойти
                        </ButtonStyled>
                    </Form>
                )
            }
            </Formik>
        </Modal>
    )
}
