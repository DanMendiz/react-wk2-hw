import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const initialValues = {
  username: 'username',
  email: 'email',
  age: 'age',
};

// A schema is a description of the shape of your data
// yup. methods() - string, email etc
const schema = yup
  .object({
    username: yup.string().required(),
    email: yup.string().email().required(),
    age: yup.number().required().positive().integer(),
  })
  .required();

function HookForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isDirty, isValid, isSubmitting },
    formState,
  } = useForm({
    mode: 'onChange',
    defaultValues: initialValues,
    resolver: yupResolver(schema), // schema passed to yup resolver, react hook form can take  it in as property and use it
  });

  // console.logs run inside use Effect Hook - uns when page re-renders
  useEffect(() => {
    console.log('formState', formState);
    console.log('errors', errors);
  });

  // submit handler receives values & after they're logged reset() is called
  const submitHandler = (values) => {
    console.log(values);
    reset();
  };

  return (
    // register returns a bunch of props, so we use spread operator ...register
    // validation -- { required: true }
    // button is disabled if not valid or dirty - submit allowed only once fields are 'dirty'
    <form onSubmit={handleSubmit(submitHandler)}>
      {/* <p>{JSON.stringify(errors)}</p> */}
      <input
        type="text"
        {...register('username', { required: true, maxLength: 20 })}
      />
      {errors.username && <span>{errors.username.message}</span>}
      <input
        type="text"
        {...register('email', {
          required: true,
          maxLength: 50,
        })}
      />
      {errors.email && <span>{errors.email.message}</span>}
      <input
        type="number"
        {...register('age', { required: true, min: 1, max: 100 })}
      />
      {errors.age && <span>{errors.age.message}</span>}

      <button type="reset" onClick={reset}>
        Reset
      </button>
      <button type="submit" disabled={isSubmitting || !isValid || !isDirty}>
        Submit
      </button>
    </form>
    // on submit handleSubmit (destructured variable) is passed submitHandler fn which logs the values
  );
}

export default HookForm;
