import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form, Field } from 'react-final-form'

import { required, isEmail } from '../../utils/validations'

import appFire from '../../firebase'
import 'firebase/auth'

import { SignUpContainer } from '../styles'
import { IUser } from '../../store/modules/userAuth/types'

const SignUp: React.FC = () => {
  const [error, setError] = React.useState('')

  const history = useHistory()

  async function onSubmit(values: IUser) {
    if (values.password === values.confirm) {
      appFire
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password)
        .then(() => {
          history.push('/')
        })
        .catch(err => {
          switch (err.code) {
            case 'auth/email-already-in-use':
              setError('Email já está cadastrado!')
              break
            case 'auth/invalid-email':
              setError('Email inválido!!')
              break
            case 'auth/weak-password':
              setError('Senha fraca!!')
              break
            default:
              setError('Erro não identificado!!')
              break
          }
        })
    }
    if (values.password !== values.confirm) {
      setError('Confirmação de senha errada!')
    }

    return false
  }

  return (
    <SignUpContainer>
      <h1>Exchange</h1>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit} className="animeTop">
            <Field name="email" validate={isEmail}>
              {({ input, meta }) => (
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input
                    {...input}
                    name="email"
                    type="email"
                    placeholder="Digite seu email"
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="password" validate={required}>
              {({ input, meta }) => (
                <div className="field">
                  <label htmlFor="senha">Senha</label>
                  <input
                    {...input}
                    name="senha"
                    type="password"
                    placeholder="Digite sua senha"
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="confirm" validate={required}>
              {({ input, meta }) => (
                <div className="field">
                  <label htmlFor="confirmar">Cofirmar Senha</label>
                  <input
                    {...input}
                    name="confirmar"
                    type="password"
                    placeholder="Confirme sua senha"
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            {error && <div className="error">{error}</div>}
            <div className="buttons">
              <button type="submit" disabled={submitting}>
                Cadastrar
              </button>
            </div>
            <div className="voltar">
              <p>Já possui cadastro?</p>
              <Link to="/">Entrar</Link>
            </div>
          </form>
        )}
      />
    </SignUpContainer>
  )
}

export default SignUp
