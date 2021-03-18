
export const required = (value: string) => (value ? null : 'Campo obrigatório.');

export const minValue = (min: number) => (value: string) => min > value.length && `Deve ter pelo menos ${min} digitos.`

export const isEmail = (value: string) =>
  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Email inválido' : null;

export const composeValidators = (...validators: any[]) => (value: any) =>
  validators.reduce((error, validator) => error || validator(value), null);
