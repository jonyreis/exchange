import React from 'react'
import { Form, Field } from 'react-final-form'
import { composeValidators, required, minValue, isEmail } from '../../utils/validations'

const SignUp: React.FC = () => {
  const onSubmit = async (values: string) => {
    console.log(values)
  }

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, values }) => (
        <form onSubmit={handleSubmit}>
          <Field
            name="email"
            validate={composeValidators(required, isEmail)}>
            {({ input, meta }) => (
              <div>
                <label>Email</label>
                <input {...input} type="email" placeholder="Email" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field
            name="password"
            validate={composeValidators(required, minValue(6))}
          >
            {({ input, meta }) => (
              <div>
                <label>Password</label>
                <input {...input} type="password" placeholder="Password" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field
            name="confirm"
            validate={composeValidators(required, minValue(6))}
          >
            {({ input, meta }) => (
              <div>
                <label>Confirm</label>
                <input {...input} type="password" placeholder="Confirm" />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <div className="buttons">
            <button type="submit" disabled={submitting}>
              Submit
            </button>
          </div>
        </form>
      )}
    />
  )
}

export default SignUp
