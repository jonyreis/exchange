import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form, Field } from 'react-final-form'
import { FORM_ERROR } from 'final-form'

import { composeValidators, required, minValue, isEmail } from '../../utils/validations'

import appFire from '../../firebase'
import 'firebase/auth'

import { SignUpContainer } from '../styles'

const SignUp: React.FC = () => {

  const history = useHistory();

  const onSubmit = async (values: { email: string; password: string; confirm: string }) => {
    if (values.password === values.confirm) {
      appFire
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password)
        .then(() => {
          alert('Conta criada com sucesso!!');
          history.push('/')
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/email-already-in-use":
              alert('Há uma conta cadastrada com este email!!');
              break
            case "auth/invalid-email":
              alert('Email inválido!!');
              break;
            case "auth/weak-password":
              alert('Senha fraca!!');
              break;
            default:
              alert('Erro não identificado!!');
              console.log('Erro não identificado')
              break;
          }
        })
    }
    if (values.password !== values.confirm) {
      return { [FORM_ERROR]: 'Confirmação de senha errada!' }
    }
  }

  return (
    <SignUpContainer>
      <h1>Exchange</h1>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, submitting, submitError }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="email"
              validate={composeValidators(required, isEmail)}
            >
              {({ input, meta }) => (
                <div className="field">
                  <label>Email</label>
                  <input {...input} type="email" placeholder="Digite seu email" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="password"
              validate={composeValidators(required, minValue(6))}
            >
              {({ input, meta }) => (
                <div className="field">
                  <label>Senha</label>
                  <input {...input} type="password" placeholder="Digite sua senha" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="confirm"
              validate={composeValidators(required, minValue(6))}
            >
              {({ input, meta }) => (
                <div className="field">
                  <label>Cofirmar Senha</label>
                  <input {...input} type="password" placeholder="Confirme sua senha" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            {submitError && <div className="error">{submitError}</div>}
            <div className="buttons">
              <button type="submit" disabled={submitting}>
                Cadastrar
              </button>
            </div>
            <div className="voltar">
              <p>Já possui cadastro?</p><Link to="/">Entrar</Link>
            </div>
          </form>
        )}
      />
    </SignUpContainer>
  )
}

export default SignUp
