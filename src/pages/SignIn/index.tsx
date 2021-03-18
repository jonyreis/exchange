import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Form, Field } from 'react-final-form'

import { composeValidators, required, minValue } from '../../utils/validations'

import appFire from '../../firebase'
import 'firebase/auth'

import { SignUpContainer } from '../styles'

const SignIn: React.FC = () => {

  const history = useHistory();

  const onSubmit = async (values: { email: string; password: string }) => {
    appFire
      .auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => history.push('/home'))
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email":
            alert('Email inválido!!');
            break;
          case "auth/user-disabled":
          case "auth/user-not-found":
            alert('Usuário não encontrado!!');
            break;
          case "auth/wrong-password":
            alert('Senha errada!!');
            break;
          default:
            alert('Erro não identificado!!');
            console.log('Erro não identificado')
            break;
        }
      })
  }

  return (
    <SignUpContainer>
      <h1>Exchange</h1>
      <Form
        onSubmit={onSubmit}
        render={({
          submitError,
          handleSubmit,
          submitting
        }) => (
          <form onSubmit={handleSubmit}>
            <Field name="email" validate={required}>
              {({ input, meta }) => (
                <div className="field">
                  <label>Email</label>
                  <input {...input} type="email" placeholder="Digite seu email" />
                  {(meta.error || meta.submitError) && meta.touched && (
                    <span>{meta.error || meta.submitError}</span>
                  )}
                </div>
              )}
            </Field>
            <Field name="password" validate={composeValidators(required, minValue(6))}>
              {({ input, meta }) => (
                <div className="field">
                  <label>Senha</label>
                  <input {...input} type="password" placeholder="Digite sua senha" />
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
              <p>Ainda não tem conta?</p><Link to="/signup">Cadastre-se</Link>
            </div>
          </form>
        )}
      />
    </SignUpContainer>
  )
}

export default SignIn
