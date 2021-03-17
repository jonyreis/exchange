
export const required = (value: string) => (value ? null : 'Required.');

export const minValue = (min: number) => (value: string) => min > value.length && `Should be  at least ${min} digits.`

export const isEmail = (value: string) =>
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : null;

export const composeValidators = (...validators: any[]) => (value: any) =>
  validators.reduce((error, validator) => error || validator(value), null);
