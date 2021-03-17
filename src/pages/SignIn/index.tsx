import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Field } from 'react-final-form'
import { FORM_ERROR } from 'final-form'

import { composeValidators, required, minValue } from '../../utils/validations'

const SignIn: React.FC = () => {
  const onSubmit = async (values: { username: string; password: string }) => {
    console.log("onsubmit")

    if (values.username !== 'erikras') {
      return { username: 'Unknown username' }
    }
    if (values.password !== 'finalformrocks') {
      return { [FORM_ERROR]: 'Login Failed' }
    }
    window.alert('LOGIN SUCCESS!')
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({
        submitError,
        handleSubmit,
        submitting
      }) => (
        <form onSubmit={handleSubmit}>
          <Field name="username" validate={required}>
            {({ input, meta }) => (
              <div>
                <label>Username</label>
                <input {...input} type="text" placeholder="Username" />
                {(meta.error || meta.submitError) && meta.touched && (
                  <span>{meta.error || meta.submitError}</span>
                )}
              </div>
            )}
          </Field>
          <Field name="password" validate={composeValidators(required, minValue(6))}>
            {({ input, meta }) => (
              <div>
                <label>Password</label>
                <input {...input} type="password" placeholder="Password" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          {submitError && <div className="error">{submitError}</div>}
          <div className="buttons">
            <button type="submit" disabled={submitting}>
              Log In
            </button>
          </div>
          <span>Ainda não tem conta?</span><Link to="/signup">Cadastre-se</Link>
        </form>
      )}
    />
  )
}

export default SignIn
