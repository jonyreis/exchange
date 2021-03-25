import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Form, Field } from 'react-final-form'
import { composeValidators, required, minValue } from '../../utils/validations'

import appFire from '../../firebase'
import 'firebase/auth'

import { SignUpContainer } from '../styles'

const SignIn: React.FC = () => {
  const dispatch = useDispatch()

  const onSubmit = async (values: { email: string, password: string }) => {
    const response = await appFire
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(res => {
        dispatch({
          type: 'ADD_USER_AUTH',
          payload: {
            email: res.user?.email
          }
        })
        return res.user?.refreshToken
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/invalid-email':
            alert('Email inválido!!')
            break
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            alert('Usuário não encontrado!!')
            break
          case 'auth/wrong-password':
            alert('Senha errada!!')
            break
          default:
            alert('Erro não identificado!!')
            console.log('Erro não identificado')
            break
        }
      })
    localStorage.setItem('exchange_token', String(response))
  }

  return (
    <SignUpContainer>
      <h1>Exchange</h1>
      <Form
        onSubmit={onSubmit}
        render={({ submitError, handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <Field name="email" validate={required}>
              {({ input, meta }) => (
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    {...input}
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Digite seu email"
                  />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <span>{meta.error || meta.submitError}</span>
                  )}
                </div>
              )}
            </Field>
            <Field
              name="password"
              validate={composeValidators(required, minValue(6))}
            >
              {({ input, meta }) => (
                <div className="field">
                  <label htmlFor="senha">Senha</label>
                  <input
                    {...input}
                    id="senha"
                    name="senha"
                    type="password"
                    placeholder="Digite sua senha"
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            {submitError && <div className="error">{submitError}</div>}
            <div className="buttons">
              <button type="submit" disabled={submitting}>
                Entrar
              </button>
            </div>
            <div className="voltar">
              <p>Ainda não tem conta?</p>
              <Link to="/signup">Cadastre-se</Link>
            </div>
          </form>
        )}
      />
    </SignUpContainer>
  )
}

export default SignIn
